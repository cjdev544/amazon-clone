import { Product } from './Product'
import { type Product as ProductType } from '@/types.d'

interface Props {
  products: ProductType[]
  start: number
  end: number
}

export function ProductSlice({ products, start, end }: Props) {
  return (
    <>
      {products.slice(start, end).map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  )
}
