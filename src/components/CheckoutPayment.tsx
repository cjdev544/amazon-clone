'use client'

import { getStripe } from '@/utils/get-stripe'
import { useAuth } from '@/hooks/useAuth'
import { type CheckoutProduct } from '@/types.d'

interface Props {
  products: CheckoutProduct[]
}

export default function CheckoutPayment({ products }: Props) {
  const { user } = useAuth()

  const handlePayment = async () => {
    try {
      if (!products.length || !user) {
        throw new Error('Something went wrong')
      }

      const response = await fetch('api/checkout', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user, products }),
      })
      const json = await response.json()

      if (!json.ok) {
        throw new Error('Error en la petición')
      }
      const stripe = await getStripe()
      if (!stripe) {
        throw new Error('Error en el procesador de pagos')
      }
      await stripe.redirectToCheckout({ sessionId: json.result.id })
    } catch (error) {
      alert('Failed to start transaction, Please try again.')
      console.error('Something went wrong catch')
    }
  }

  return (
    <button className='button' onClick={handlePayment}>
      Pagar
    </button>
  )
}
