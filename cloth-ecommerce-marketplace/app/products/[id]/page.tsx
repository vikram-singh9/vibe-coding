"use client"

import { useState } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Heart, ShoppingCart, Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { products } from "@/lib/data"
import { useCartStore } from "@/store/cart-store"
import { useWishlistStore } from "@/store/wishlist-store"
import ProductReviews from "@/components/product-reviews"
import { useNotificationStore } from "@/store/notification-store"

interface ProductDetailPageProps {
  params: {
    id: string
  }
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = products.find((p) => p.id === params.id)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState("")
  const [selectedSize, setSelectedSize] = useState("")
  const [quantity, setQuantity] = useState(1)

  const addToCart = useCartStore((state) => state.addItem)
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlistStore()
  const { addNotification } = useNotificationStore()

  if (!product) {
    notFound()
  }

  const inWishlist = isInWishlist(product.id)

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor, selectedSize)
    addNotification({
      type: "success",
      title: "Added to Cart!",
      message: `${product.name} has been added to your cart.`,
    })
  }

  const handleWishlistToggle = () => {
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg">
            <Image
              src={product.images[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden rounded-lg border-2 ${
                    selectedImage === index ? "border-blue-500" : "border-gray-200"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                )}
              </div>
              {product.originalPrice && (
                <Badge variant="destructive">Save ${(product.originalPrice - product.price).toFixed(2)}</Badge>
              )}
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <Badge variant={product.inStock ? "default" : "secondary"}>
                {product.inStock ? "In Stock" : "Out of Stock"}
              </Badge>
              <Badge variant="outline">{product.material}</Badge>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          {/* Color Selection */}
          {product.colors.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Color</h3>
              <Select value={selectedColor} onValueChange={setSelectedColor}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a color" />
                </SelectTrigger>
                <SelectContent>
                  {product.colors.map((color) => (
                    <SelectItem key={color} value={color}>
                      {color}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Size Selection */}
          {product.sizes.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Size</h3>
              <Select value={selectedSize} onValueChange={setSelectedSize}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a size" />
                </SelectTrigger>
                <SelectContent>
                  {product.sizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Quantity Selection */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quantity</h3>
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="text-lg font-semibold w-12 text-center">{quantity}</span>
              <Button variant="outline" size="sm" onClick={() => setQuantity(quantity + 1)}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <Button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="w-full flex items-center justify-center space-x-2"
              size="lg"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Add to Cart</span>
            </Button>
            <Button
              variant="outline"
              onClick={handleWishlistToggle}
              className="w-full flex items-center justify-center space-x-2"
              size="lg"
            >
              <Heart className={`h-5 w-5 ${inWishlist ? "fill-current text-red-500" : ""}`} />
              <span>{inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}</span>
            </Button>
          </div>

          {/* Product Details Card */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Product Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Material:</span>
                  <span className="font-medium">{product.material}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Category:</span>
                  <span className="font-medium capitalize">{product.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Available Colors:</span>
                  <span className="font-medium">{product.colors.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Available Sizes:</span>
                  <span className="font-medium">{product.sizes.length}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <ProductReviews productId={product.id} />
    </div>
  )
}
