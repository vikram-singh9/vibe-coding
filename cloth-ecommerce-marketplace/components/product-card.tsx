"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/types"
import { useCartStore } from "@/store/cart-store"
import { useWishlistStore } from "@/store/wishlist-store"
import StarRating from "./star-rating"
import { getReviewStats } from "@/lib/reviews-data"
import { useNotificationStore } from "@/store/notification-store"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const addToCart = useCartStore((state) => state.addItem)
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlistStore()
  const inWishlist = isInWishlist(product.id)
  const { addNotification } = useNotificationStore()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addToCart(product)
    addNotification({
      type: "success",
      title: "Added to Cart!",
      message: `${product.name} has been added to your cart.`,
    })
  }

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    if (inWishlist) {
      removeFromWishlist(product.id)
      addNotification({
        type: "info",
        title: "Removed from Wishlist",
        message: `${product.name} has been removed from your wishlist.`,
      })
    } else {
      addToWishlist(product)
      addNotification({
        type: "success",
        title: "Added to Wishlist!",
        message: `${product.name} has been added to your wishlist.`,
      })
    }
  }

  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300">
      <Link href={`/products/${product.id}`}>
        <div className="relative overflow-hidden rounded-t-lg">
          <Image
            src={product.images[0] || "/placeholder.svg"}
            alt={product.name}
            width={300}
            height={300}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {!product.inStock && (
            <Badge variant="secondary" className="absolute top-2 left-2">
              Out of Stock
            </Badge>
          )}
          {product.originalPrice && (
            <Badge variant="destructive" className="absolute top-2 right-2">
              Sale
            </Badge>
          )}
          <Button
            variant="ghost"
            size="sm"
            className={`absolute top-2 right-2 ${product.originalPrice ? "top-12" : ""} opacity-0 group-hover:opacity-100 transition-opacity ${
              inWishlist ? "text-red-500" : "text-gray-600"
            }`}
            onClick={handleWishlistToggle}
          >
            <Heart className={`h-4 w-4 ${inWishlist ? "fill-current" : ""}`} />
          </Button>
        </div>
      </Link>

      <CardContent className="p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-lg mb-2 hover:text-blue-600 transition-colors">{product.name}</h3>
        </Link>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-lg">${product.price}</span>
            {product.originalPrice && (
              <span className="text-gray-500 line-through text-sm">${product.originalPrice}</span>
            )}
          </div>
          <Button
            size="sm"
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="flex items-center space-x-1"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Add</span>
          </Button>
        </div>
        {(() => {
          const stats = getReviewStats(product.id)
          return stats.totalReviews > 0 ? (
            <div className="flex items-center space-x-2 mt-2">
              <StarRating rating={stats.averageRating} size="sm" />
              <span className="text-sm text-gray-600">
                ({stats.totalReviews} review{stats.totalReviews !== 1 ? "s" : ""})
              </span>
            </div>
          ) : (
            <div className="text-sm text-gray-500 mt-2">No reviews yet</div>
          )
        })()}
        <div className="mt-2 flex flex-wrap gap-1">
          {product.colors.slice(0, 3).map((color) => (
            <Badge key={color} variant="outline" className="text-xs">
              {color}
            </Badge>
          ))}
          {product.colors.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{product.colors.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
