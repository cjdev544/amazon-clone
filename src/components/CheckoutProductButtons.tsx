'use client'

import { useCartStore } from '@/store/cartStore'
import { type CheckoutProduct } from '@/types.d'

interface Props {
  product: CheckoutProduct
}

export default function CheckoutProductButtons({ product }: Props) {
  const { addProductToCart, removeProductFromCart } = useCartStore()

  return (
    <div className='flex flex-col space-y-2 my-auto justify-self-end'>
      <button className='button' onClick={() => addProductToCart(product)}>
        Agregar al carrito
      </button>
      <button
        className='button'
        onClick={() => removeProductFromCart(product.checkProductId)}
      >
        Eliminar del carrito
      </button>
    </div>
  )
}
