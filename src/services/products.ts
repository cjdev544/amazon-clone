import { type Product, type ProductResponse } from '@/types.d'

export const getProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products')
  const data = (await res.json()) as ProductResponse[]

  const dataParce: Product[] = data.map((product) => ({
    id: product.id,
    title: product.title,
    price: product.price,
    description: product.description,
    category: product.category,
    image: product.image,
    rating: Math.floor(product.rating.rate),
    isPrime: Math.random() > 0.5,
  }))

  return dataParce
}
