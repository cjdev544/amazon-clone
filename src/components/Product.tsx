/* eslint-disable @next/next/no-img-element */
import { type Product } from '@/types.d'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/24/solid'

interface Props {
  product: Product
}

export function Product({ product }: Props) {
  return (
    <div className='relative flex flex-col m-5 bg-white p-10 z-30'>
      <p className='absolute top-2 right-2 text-gray-400 text-xs italic'>
        {product.category}
      </p>
      <Image
        src={product.image}
        alt={`imagen del producto ${product.title}`}
        width={200}
        height={200}
        style={{
          objectFit: 'contain',
          width: 200,
          height: 200,
          alignSelf: 'center',
        }}
      />
      <h4 className='my-3'>{product.title}</h4>
      <div className='flex'>
        {Array(product.rating)
          .fill(1)
          .map((_, idx) => (
            <StarIcon key={idx} className='h-5 text-yellow-500' />
          ))}
      </div>
      <p className='text-xs my-2 line-clamp-2'>{product.description}</p>
      <div className='mb-5'>{`$ ${product.price}`}</div>
      {product.isPrime && (
        <div className='flex items-center space-x-2 -mt-5'>
          <img className='w-12' src='/prime.png' alt='logo de prime' />
          <p className='text-xs text-gray-500'>envío GRATIS</p>
        </div>
      )}
      <button className='mt-auto button'>Agregar a la cesta</button>
    </div>
  )
}