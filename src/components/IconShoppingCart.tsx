'use client'

import Link from 'next/link'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useCartStore } from '@/store/cartStore'

export function IconShoppingCart() {
  const { productsInCart } = useCartStore()

  return (
    <Link href='/checkout'>
      <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-500 text-center rounded-full font-bold text-black'>
        {productsInCart.length}
      </span>
      <ShoppingCartIcon className='h-10' />
      <p className='hidden md:inline font-extrabold md:text-sm mt-2'>Cesta</p>
    </Link>
  )
}
