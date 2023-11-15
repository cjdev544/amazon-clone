import Stripe from 'stripe'
import { type Product, type User } from '@/types.d'
import { NextResponse } from 'next/server'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: any) {
  try {
    const body = await req.json()
    const user: User = body.user
    const products: Product[] = body.products

    if (!user || !products) throw new Error('No se encontraron productos')

    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] =
      products.map((product) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            description: product.description,
            name: product.title,
            images: [product.image],
          },
          unit_amount: product.price * 100,
        },
        quantity: 1,
      }))

    const checkoutSession: Stripe.Checkout.Session =
      await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/checkout`,
        metadata: {
          email: user.email,
          name: user.name,
          images: JSON.stringify(products.map((product) => product.image)),
        },
        line_items,
      })

    return NextResponse.json({ result: checkoutSession, ok: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({
      ok: false,
      error,
    })
  }
}
