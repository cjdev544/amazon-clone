'use client'

import { useCartStore } from '@/store/cartStore'
import { CheckoutProduct } from './CheckoutProduct'

export function CheckoutProductsList() {
  const { productsInCart } = useCartStore()

  return (
    <div className='flex flex-col p-5 space-y-10 bg-white'>
      <h1 className='text-3xl border-b pb-4'>
        {productsInCart.length
          ? 'Tu Carrito de Compras'
          : 'El carrito esta vacío'}
      </h1>
      {productsInCart.map((product) => (
        <CheckoutProduct key={product.checkProductId} product={product} />
      ))}
    </div>
  )
}
