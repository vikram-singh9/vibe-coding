"use client"

import { Star } from "lucide-react"

interface StarRatingProps {
  rating: number
  maxRating?: number
  size?: "sm" | "md" | "lg"
  showRating?: boolean
  interactive?: boolean
  onRatingChange?: (rating: number) => void
}

export default function StarRating({
  rating,
  maxRating = 5,
  size = "md",
  showRating = false,
  interactive = false,
  onRatingChange,
}: StarRatingProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  }

  const handleStarClick = (starRating: number) => {
    if (interactive && onRatingChange) {
      onRatingChange(starRating)
    }
  }

  return (
    <div className="flex items-center space-x-1">
      <div className="flex">
        {[...Array(maxRating)].map((_, index) => {
          const starRating = index + 1
          const isFilled = starRating <= rating
          const isHalfFilled = starRating - 0.5 <= rating && starRating > rating

          return (
            <button
              key={index}
              type="button"
              className={`${interactive ? "cursor-pointer hover:scale-110" : "cursor-default"} transition-transform`}
              onClick={() => handleStarClick(starRating)}
              disabled={!interactive}
            >
              <Star
                className={`${sizeClasses[size]} ${
                  isFilled
                    ? "text-yellow-400 fill-yellow-400"
                    : isHalfFilled
                      ? "text-yellow-400 fill-yellow-200"
                      : "text-gray-300"
                }`}
              />
            </button>
          )
        })}
      </div>
      {showRating && <span className="text-sm text-gray-600 ml-2">{rating.toFixed(1)}</span>}
    </div>
  )
}
