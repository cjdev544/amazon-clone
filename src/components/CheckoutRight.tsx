'use client'

import { round } from 'mathjs'
import { useAuth } from '@/hooks/useAuth'
import { useCartStore } from '@/store/cartStore'

import CheckoutPayment from './CheckoutPayment'

export function CheckoutRight() {
  const { productsInCart, totalProducts } = useCartStore()
  const { user, login } = useAuth()

  if (!user)
    return (
      <div className='flex flex-col bg-white p-10 shadow-md'>
        <h2>
          {`Subtotal 
        (${productsInCart.length} items):
        `}
          <span className='font-bold'>{`${round(totalProducts(), 2)}$`}</span>
        </h2>
        <button
          className='button mt-2 from-gray-300 to-gray-500 border-gray-200 text-gray-300'
          onClick={() => login()}
        >
          Inicia para pagar
        </button>
      </div>
    )

  if (user)
    return (
      <div className='flex flex-col bg-white p-10 shadow-md'>
        <h2>
          {`Subtotal 
        (${productsInCart.length} items):
        `}
          <span className='font-bold'>{`${round(totalProducts(), 2)}$`}</span>
        </h2>
        <CheckoutPayment products={productsInCart} />
      </div>
    )
}
