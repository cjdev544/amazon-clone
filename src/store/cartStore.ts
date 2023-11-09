import { type Product } from '@/types.d'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface State {
  productsInCart: Product[]
  addProductToCart: (product: Product) => void
  removeProductFromCart: (productId: number) => void
}

export const useCartStore = create<State>()(
  devtools(
    persist(
      (set, get) => ({
        productsInCart: [],

        addProductToCart: (product: Product) => {
          console.log({ product })
          set(
            ({ productsInCart }) => ({
              productsInCart: [...productsInCart, product],
            }),
            false,
            'ADD_TO_CART'
          )
        },

        removeProductFromCart: (productId: number) => {
          const productsInCart = get().productsInCart.filter(
            (product) => product.id !== productId
          )
          set({ productsInCart }, false, 'REMOVE_FROM_CART')
        },
      }),
      { name: 'productsCart' }
    )
  )
)
