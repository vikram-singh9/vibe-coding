import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { Product, WishlistItem } from "@/types"

interface WishlistStore {
  items: WishlistItem[]
  addItem: (product: Product) => void
  removeItem: (productId: string) => void
  isInWishlist: (productId: string) => boolean
  clearWishlist: () => void
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product) => {
        set((state) => {
          const exists = state.items.some((item) => item.product.id === product.id)
          if (exists) return state

          return {
            items: [...state.items, { product, addedAt: new Date() }],
          }
        })
      },

      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter((item) => item.product.id !== productId),
        }))
      },

      isInWishlist: (productId) => {
        return get().items.some((item) => item.product.id === productId)
      },

      clearWishlist: () => set({ items: [] }),
    }),
    {
      name: "wishlist-storage",
    },
  ),
)
