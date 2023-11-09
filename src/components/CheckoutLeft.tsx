import Image from 'next/image'
import { CheckoutProductsList } from './CheckoutProductsList'

export function CheckoutLeft() {
  return (
    <div className='flex-grow m-5 shadow-sm'>
      <Image
        src='/checkout-banner.jpeg'
        alt='banner de la pagina del carrito de compras'
        width={1020}
        height={250}
        style={{ objectFit: 'contain', width: 1020, height: 'auto' }}
      />
      <CheckoutProductsList />
    </div>
  )
}
