import Image from 'next/image'
import Link from 'next/link'
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

import { AuthButton } from './AuthButton'
import { IconShoppingCart } from './IconShoppingCart'

export function Header() {
  return (
    <header>
      {/* Top nav */}
      <div className='flex justify-center p-1 py-2 bg-amazon_blue flex-grow'>
        <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
          <Link href='/'>
            <Image
              src='/logo.png'
              alt='logo de Amazon'
              width={150}
              height={40}
              className='cursor-pointer mr-6'
              style={{ objectFit: 'contain', width: 150, height: 40 }}
            />
          </Link>
        </div>
        {/* Search */}
        <div className='hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-500 hover:bg-yellow-600'>
          <input
            className='p-2 h-full flex-grow flex-shrink rounded-l-md focus:outline-none px-4'
            type='text'
            placeholder='Buscar Amazon.com'
          />
          <MagnifyingGlassIcon className='h-12 p-4' />
        </div>
        {/* Right */}
        <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
          <AuthButton />
          <div className='link'>
            <Link href='/orders'>
              <p>devoluciones</p>
              <p className='font-extrabold md:text-sm'>y Pedidos</p>
            </Link>
          </div>
          <div className='relative link flex items-end'>
            <IconShoppingCart />
          </div>
        </div>
      </div>
      {/* Bottom nav */}
      <div className='flex items-center space-x-6 bg-amazon_blue-light text-white p-1 text-xs sm:text-sm'>
        <p className='link flex items-center font-bold'>
          <Bars3Icon className='h-6 mr-1' />
          Todo
        </p>
        <p className='py-2 link'>Amazon Basics</p>
        <p className='py-2 link'>Música</p>
        <p className='py-2 link'>Prime</p>
        <p className='py-2 link'>Ofertas</p>
        <p className='py-2 link hidden lg:inline-flex'>Últimas Novedades</p>
        <p className='py-2 link hidden lg:inline-flex'>Informática</p>
        <p className='py-2 link hidden lg:inline-flex'>Audible</p>
      </div>
    </header>
  )
}
