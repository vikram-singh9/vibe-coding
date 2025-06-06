"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingCart, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useWishlistStore } from "@/store/wishlist-store"
import { useCartStore } from "@/store/cart-store"

export default function WishlistPage() {
  const { items, removeItem, clearWishlist } = useWishlistStore()
  const addToCart = useCartStore((state) => state.addItem)

  const handleMoveToCart = (productId: string) => {
    const item = items.find((item) => item.product.id === productId)
    if (item) {
      addToCart(item.product)
      removeItem(productId)
    }
  }

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Wishlist</h1>
          <p className="text-gray-600 mb-8">Your wishlist is empty</p>
          <Link href="/products">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Your Wishlist</h1>
        <Button variant="ghost" onClick={clearWishlist} className="text-red-500 hover:text-red-700">
          Clear All
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((item) => (
          <Card key={item.product.id} className="group">
            <div className="relative overflow-hidden rounded-t-lg">
              <Link href={`/products/${item.product.id}`}>
                <Image
                  src={item.product.images[0] || "/placeholder.svg"}
                  alt={item.product.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                onClick={() => removeItem(item.product.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>

            <CardContent className="p-4">
              <Link href={`/products/${item.product.id}`}>
                <h3 className="font-semibold text-lg mb-2 hover:text-blue-600 transition-colors">
                  {item.product.name}
                </h3>
              </Link>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.product.description}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="font-bold text-lg">${item.product.price}</span>
                {item.product.originalPrice && (
                  <span className="text-gray-500 line-through text-sm">${item.product.originalPrice}</span>
                )}
              </div>
              <div className="flex space-x-2">
                <Button
                  size="sm"
                  onClick={() => handleMoveToCart(item.product.id)}
                  disabled={!item.product.inStock}
                  className="flex-1 flex items-center justify-center space-x-1"
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span>Add to Cart</span>
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
  Added {new Date(item.addedAt).toLocaleDateString()}
</p>

            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
