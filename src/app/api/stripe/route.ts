import { NextResponse } from 'next/server'
import { getOrdersUser } from '@/services/userOrders'

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export async function POST(req: any) {
  const body = await req.json()
  const email = body.email

  if (!email) NextResponse.json({ ok: true, orders: [] })

  const stripeOrders = await getOrdersUser(email)

  const orders = await Promise.all(
    stripeOrders.map(async (order) => {
      const items = (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data

      return {
        id: order.id,
        amount: order.amount,
        amountShipping: order.amountShipping,
        images: order.images,
        timestamp: order.timestamp,
        items,
      }
    })
  )

  return NextResponse.json({
    ok: true,
    orders,
  })
}
