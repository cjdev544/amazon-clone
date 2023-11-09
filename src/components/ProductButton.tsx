'use client'

import { useProducts } from '@/hooks/useProducts'
import { type Product } from '@/types.d'

interface Props {
  product: Product
}

export function ProductButton({ product }: Props) {
  const { addProductToCart } = useProducts()

  return (
    <button
      className='mt-auto button'
      onClick={() => addProductToCart(product)}
    >
      Agregar a la cesta
    </button>
  )
}
