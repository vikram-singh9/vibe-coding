import type { Review } from "@/types"

export const reviews: Review[] = [
  {
    id: "1",
    productId: "1",
    userId: "user1",
    userName: "Sarah Johnson",
    userAvatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    title: "Excellent quality cotton!",
    comment:
      "This cotton fabric is absolutely wonderful. The texture is soft and the quality is outstanding. Perfect for my quilting projects. Highly recommend!",
    createdAt: new Date("2024-01-15"),
    verified: true,
    helpful: 12,
    images: ["/placeholder.svg?height=200&width=200"],
  },
  {
    id: "2",
    productId: "1",
    userId: "user2",
    userName: "Michael Chen",
    rating: 4,
    title: "Good value for money",
    comment: "Nice fabric, good quality for the price. Shipping was fast and packaging was secure.",
    createdAt: new Date("2024-01-10"),
    verified: true,
    helpful: 8,
  },
  {
    id: "3",
    productId: "1",
    userId: "user3",
    userName: "Emma Wilson",
    rating: 5,
    title: "Perfect for clothing",
    comment: "Used this for making summer dresses. The fabric drapes beautifully and is very comfortable to wear.",
    createdAt: new Date("2024-01-05"),
    verified: false,
    helpful: 15,
  },
  {
    id: "4",
    productId: "2",
    userId: "user4",
    userName: "David Rodriguez",
    rating: 5,
    title: "Luxurious silk fabric",
    comment: "The quality of this silk is exceptional. Perfect for formal wear projects. Worth every penny!",
    createdAt: new Date("2024-01-20"),
    verified: true,
    helpful: 20,
  },
  {
    id: "5",
    productId: "2",
    userId: "user5",
    userName: "Lisa Thompson",
    rating: 4,
    title: "Beautiful but pricey",
    comment: "Gorgeous silk with amazing luster. A bit expensive but the quality justifies the price.",
    createdAt: new Date("2024-01-12"),
    verified: true,
    helpful: 6,
  },
  {
    id: "6",
    productId: "3",
    userId: "user6",
    userName: "James Miller",
    rating: 4,
    title: "Great linen for summer",
    comment: "Perfect weight for summer clothing. Breathable and comfortable. Color is exactly as shown.",
    createdAt: new Date("2024-01-18"),
    verified: true,
    helpful: 9,
  },
  {
    id: "7",
    productId: "3",
    userId: "user7",
    userName: "Anna Davis",
    rating: 3,
    title: "Decent quality",
    comment: "The fabric is okay, but I expected it to be a bit softer. Still usable for my project.",
    createdAt: new Date("2024-01-08"),
    verified: false,
    helpful: 3,
  },
]

export function getProductReviews(productId: string): Review[] {
  return reviews.filter((review) => review.productId === productId)
}

export function getReviewStats(productId: string) {
  const productReviews = getProductReviews(productId)

  if (productReviews.length === 0) {
    return {
      averageRating: 0,
      totalReviews: 0,
      ratingDistribution: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 },
    }
  }

  const totalRating = productReviews.reduce((sum, review) => sum + review.rating, 0)
  const averageRating = totalRating / productReviews.length

  const ratingDistribution = productReviews.reduce(
    (dist, review) => {
      dist[review.rating as keyof typeof dist]++
      return dist
    },
    { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 },
  )

  return {
    averageRating: Math.round(averageRating * 10) / 10,
    totalReviews: productReviews.length,
    ratingDistribution,
  }
}
