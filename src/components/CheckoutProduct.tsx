/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/24/solid'

import CheckoutProductButtons from './CheckoutProductButtons'
import { type CheckoutProduct } from '@/types.d'

interface Props {
  product: CheckoutProduct
}

export function CheckoutProduct({ product }: Props) {
  return (
    <article className='grid grid-cols-5 align-middle'>
      <Image
        src={product.image}
        alt={`Imagen del producto ${product.title}`}
        width={200}
        height={200}
        style={{ objectFit: 'contain', width: 'auto', height: 200 }}
      />
      <div className='col-span-3 mx-5'>
        <p>{product.title}</p>
        <div className='flex'>
          {Array(product.rating)
            .fill(1)
            .map((_, idx) => (
              <StarIcon key={idx} className='h-5 text-yellow-500' />
            ))}
        </div>
        <p className='text-xs my-2 line-clamp-3'>{product.description}</p>
        <div className='mb-5'>{`$ ${product.price}`}</div>
        {product.isPrime && (
          <div className='flex items-center space-x-2'>
            <img
              loading='lazy'
              className='w-12'
              src='/prime.png'
              alt='logo de prime'
            />
            <p className='text-xs text-gray-500'>envío GRATIS</p>
          </div>
        )}
      </div>
      <CheckoutProductButtons product={product} />
    </article>
  )
}
