import { type CheckoutProduct, type Product } from '@/types.d'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface State {
  productsInCart: CheckoutProduct[]
  totalProducts: () => number
  addProductToCart: (product: Product) => void
  removeProductFromCart: (checkProductId: string) => void
}

export const useCartStore = create<State>()(
  devtools(
    persist(
      (set, get) => ({
        productsInCart: [],

        totalProducts: () => {
          let total = 0
          get().productsInCart.forEach((product) => {
            total += product.price
          })
          return total
        },

        addProductToCart: (product: Product) => {
          const checkProductId = crypto.randomUUID()
          const parceProduct = { ...product, checkProductId }
          set(
            ({ productsInCart }) => ({
              productsInCart: [parceProduct, ...productsInCart],
            }),
            false,
            'ADD_TO_CART'
          )
        },

        removeProductFromCart: (checkProductId: string) => {
          const productsInCart = get().productsInCart.filter(
            (product) => product.checkProductId !== checkProductId
          )
          set({ productsInCart }, false, 'REMOVE_FROM_CART')
        },
      }),
      { name: 'productsCart' }
    )
  )
)
