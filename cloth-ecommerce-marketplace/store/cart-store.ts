import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { CartItem, Product } from "@/types"

interface CartStore {
  items: CartItem[]
  addItem: (product: Product, quantity?: number, selectedColor?: string, selectedSize?: string) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product, quantity = 1, selectedColor, selectedSize) => {
        set((state) => {
          const existingItem = state.items.find(
            (item) =>
              item.product.id === product.id &&
              item.selectedColor === selectedColor &&
              item.selectedSize === selectedSize,
          )

          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.product.id === product.id &&
                item.selectedColor === selectedColor &&
                item.selectedSize === selectedSize
                  ? { ...item, quantity: item.quantity + quantity }
                  : item,
              ),
            }
          }

          return {
            items: [...state.items, { product, quantity, selectedColor, selectedSize }],
          }
        })
      },

      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter((item) => item.product.id !== productId),
        }))
      },

      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId)
          return
        }

        set((state) => ({
          items: state.items.map((item) => (item.product.id === productId ? { ...item, quantity } : item)),
        }))
      },

      clearCart: () => set({ items: [] }),

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0)
      },

      getTotalPrice: () => {
        return get().items.reduce((total, item) => total + item.product.price * item.quantity, 0)
      },
    }),
    {
      name: "cart-storage",
    },
  ),
)
