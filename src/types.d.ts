// Generated by https://quicktype.io

export interface ProductResponse {
  id: number
  title: string
  price: number
  description: string
  category: Category
  image: string
  rating: Rating
}

export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: Category
  image: string
  rating: number
  isPrime: boolean
}

export interface CheckoutProduct extends Product {
  checkProductId: string
}

export enum Category {
  Electronics = 'electronics',
  Jewelery = 'jewelery',
  MenSClothing = "men's clothing",
  WomenSClothing = "women's clothing",
}

export interface Rating {
  rate: number
  count: number
}

export interface User {
  uid: string
  name: string
}
