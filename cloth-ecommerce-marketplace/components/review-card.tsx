import Image from "next/image"
import { ThumbsUp, Verified } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import StarRating from "./star-rating"
import type { Review } from "@/types"

interface ReviewCardProps {
  review: Review
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <Card className="mb-4">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          {/* User Avatar */}
          <div className="flex-shrink-0">
            <Image
              src={review.userAvatar || "/placeholder.svg?height=40&width=40"}
              alt={review.userName}
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>

          {/* Review Content */}
          <div className="flex-grow">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <h4 className="font-semibold text-gray-900">{review.userName}</h4>
                {review.verified && (
                  <Badge variant="secondary" className="flex items-center space-x-1">
                    <Verified className="h-3 w-3" />
                    <span className="text-xs">Verified Purchase</span>
                  </Badge>
                )}
              </div>
              <span className="text-sm text-gray-500">{formatDate(review.createdAt)}</span>
            </div>

            {/* Rating and Title */}
            <div className="mb-2">
              <StarRating rating={review.rating} size="sm" />
              <h5 className="font-medium text-gray-900 mt-1">{review.title}</h5>
            </div>

            {/* Review Comment */}
            <p className="text-gray-700 mb-3 leading-relaxed">{review.comment}</p>

            {/* Review Images */}
            {review.images && review.images.length > 0 && (
              <div className="flex space-x-2 mb-3">
                {review.images.map((image, index) => (
                  <Image
                    key={index}
                    src={image || "/placeholder.svg"}
                    alt={`Review image ${index + 1}`}
                    width={80}
                    height={80}
                    className="rounded-lg object-cover border"
                  />
                ))}
              </div>
            )}

            {/* Helpful Button */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                <ThumbsUp className="h-4 w-4 mr-1" />
                Helpful ({review.helpful})
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
