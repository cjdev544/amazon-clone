'use client'

import { round } from 'mathjs'
import { useAuth } from '@/hooks/useAuth'
import { useCartStore } from '@/store/cartStore'

export function CheckoutRight() {
  const { productsInCart, totalProducts } = useCartStore()
  const { user, login } = useAuth()

  const handleClick = () => {
    if (!user) {
      login()
    }
  }

  return (
    <div className='flex flex-col bg-white p-10 shadow-md'>
      <h2>
        {`Subtotal 
        (${productsInCart.length} items):
        `}
        <span className='font-bold blocl'>{`${round(
          totalProducts(),
          2
        )}$`}</span>
      </h2>
      <button
        className={`button mt-2 ${
          !user && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300'
        }`}
        onClick={handleClick}
      >
        {user ? 'Pagar' : 'Inicia para pagar'}
      </button>
    </div>
  )
}
