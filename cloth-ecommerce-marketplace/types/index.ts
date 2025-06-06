export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  category: string
  images: string[]
  inStock: boolean
  material: string
  colors: string[]
  sizes: string[]
  featured?: boolean
}

export interface CartItem {
  product: Product
  quantity: number
  selectedColor?: string
  selectedSize?: string
}

export interface WishlistItem {
  product: Product
  addedAt: Date
}

export interface FilterState {
  category: string
  priceRange: [number, number]
  material: string
  inStock: boolean
}

export interface Review {
  id: string
  productId: string
  userId: string
  userName: string
  userAvatar?: string
  rating: number
  title: string
  comment: string
  createdAt: Date
  verified: boolean
  helpful: number
  images?: string[]
}

export interface ReviewStats {
  averageRating: number
  totalReviews: number
  ratingDistribution: {
    5: number
    4: number
    3: number
    2: number
    1: number
  }
}

export interface ReviewFilters {
  rating: number | null
  verified: boolean
  sortBy: "newest" | "oldest" | "highest" | "lowest" | "helpful"
}

export interface ShippingAddress {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zipCode: string
  country: string
}

export interface ShippingOption {
  id: string
  name: string
  description: string
  price: number
  estimatedDays: string
}

export interface PaymentMethod {
  id: string
  type: "card" | "paypal" | "apple_pay" | "google_pay"
  name: string
  icon: string
}

export interface Order {
  id: string
  items: CartItem[]
  shippingAddress: ShippingAddress
  shippingOption: ShippingOption
  paymentMethod: PaymentMethod
  subtotal: number
  shipping: number
  tax: number
  total: number
  status: "pending" | "processing" | "shipped" | "delivered"
  createdAt: Date
}

export interface CheckoutState {
  step: "shipping" | "payment" | "review"
  shippingAddress: Partial<ShippingAddress>
  selectedShipping: string
  selectedPayment: string
  isProcessing: boolean
}
