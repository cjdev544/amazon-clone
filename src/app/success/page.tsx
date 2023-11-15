'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { useProducts } from '@/hooks/useProducts'

export default function Success() {
  const { cleanCart } = useProducts()

  useEffect(() => {
    cleanCart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='max-w-screen-lg mx-auto'>
      <div className='flex flex-col p-10 bg-white'>
        <div className='flex items-center space-x-2 mb-5'>
          <CheckCircleIcon className='text-green-500 h-10' />
          <h1 className='text-3xl'>Gracias, Su orden ha sido confirmada!</h1>
        </div>
        <p>
          Gracias por comprar con nosotros. Será enviada la confirmación con la
          información de la compra, si quiere ver el estado de la(s) ordenes(s)
          por favor pulse el siguiente botón.
        </p>
        <Link href='/orders' className='button mt-8'>
          Ir a pedidos
        </Link>
      </div>
    </div>
  )
}
