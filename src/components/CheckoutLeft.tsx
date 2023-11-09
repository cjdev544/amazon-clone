import Image from 'next/image'

export function CheckoutLeft() {
  return (
    <div className='flex-grow m-5 shadow-sm'>
      <Image
        src='/checkout-banner.jpeg'
        alt='banner de la pagina del carrito de compras'
        width={1020}
        height={250}
        style={{ objectFit: 'contain', width: 1020, height: 250 }}
      />
      <div className='flex flex-col p-5 space-y-10 bg-white'>
        <h1 className='text-3xl border-b pb-4'>Tu Carrito de Compras</h1>
      </div>
    </div>
  )
}
