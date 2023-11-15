/* eslint-disable import/no-anonymous-default-export */
import { buffer } from 'micro'
import * as admin from 'firebase-admin'
import { IncomingMessage } from 'http'
import { Response } from 'express'

const servicesAccount = {
  type: process.env.TYPE,
  project_id: process.env.PROJECT_ID,
  private_key_id: process.env.PRIVATE_KEY_ID,
  private_key: process.env.PRIVATE_KEY,
  client_email: process.env.CLIENT_EMAIL,
  client_id: process.env.CLIENT_ID,
  auth_uri: process.env.AUTH_URI,
  token_uri: process.env.TOKEN_URI,
  auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.CLIENT_X509_CERT_URL,
  universe_domain: process.env.UNIVERSE_DOMAIN,
}

const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(
        servicesAccount as admin.ServiceAccount
      ),
    })
  : admin.app()

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const endpointSecret = process.env.STRIPE_SIGNING_SECRET

const fulfillOrder = async (session: any) => {
  const sessionImg = session.metadata.images
  const images = sessionImg
    .slice(1, sessionImg.length - 1)
    .replaceAll('"', '')
    .split(',')

  return app
    .firestore()
    .collection('users')
    .doc(session.metadata.email)
    .collection('orders')
    .doc(session.id)
    .set({
      amount: session.amount_total / 100,
      amount_shipping: session.total_details.amount_shipping / 100,
      images,
      timestamp: Date.now(),
    })
    .then(() => {
      console.log(`SUCCESS: Order ${session.id} has been added to the DataBase`)
    })
}

export default async (req: IncomingMessage, res: Response) => {
  if (req.method === 'POST') {
    const requestBuffer = await buffer(req)
    const payload = requestBuffer.toString()
    const sig = req.headers['stripe-signature']

    let event

    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret)
    } catch (err: any) {
      console.error('ERROR', err.message)
      return res.status(400).send(`Webhook error: ${err.message}`)
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object

      return fulfillOrder(session)
        .then(() => res.status(200))
        .catch((err) => res.status(400).send(`Webhook Error: ${err.message}`))
    }
  }
}

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
}
