/* eslint-disable @next/next/no-img-element */
import { getProducts } from '@/services/products'
import { ProductSlice } from './ProductsSlice'

export async function ProductFeed() {
  const products = await getProducts()

  return (
    <section className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto'>
      <ProductSlice products={products} start={0} end={4} />
      <img
        className='md:col-span-full'
        style={{ height: 200, width: '100vw' }}
        src='/h-banner.jpg'
        alt='imagen banner horizontal'
      />
      <div className='md:col-span-2'>
        <ProductSlice products={products} start={4} end={5} />
      </div>
      <ProductSlice products={products} start={5} end={products.length} />
    </section>
  )
}
// git remote add origin https://github.com/cjdev544/amazon-clone.git
