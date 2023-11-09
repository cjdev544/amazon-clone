import { useCartStore } from '../store/cartStore'

export function useProducts() {
  const productsInCart = useCartStore((state) => state.productsInCart)
  const addProductToCart = useCartStore((state) => state.addProductToCart)
  const removeProductFromCart = useCartStore(
    (state) => state.removeProductFromCart
  )

  return {
    productsInCart,
    addProductToCart,
    removeProductFromCart,
  }
}
