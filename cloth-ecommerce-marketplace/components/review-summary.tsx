import { Progress } from "@/components/ui/progress"
import StarRating from "./star-rating"
import type { ReviewStats } from "@/types"

interface ReviewSummaryProps {
  stats: ReviewStats
}

export default function ReviewSummary({ stats }: ReviewSummaryProps) {
  if (stats.totalReviews === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No reviews yet</p>
        <p className="text-sm text-gray-400">Be the first to review this product!</p>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 rounded-lg p-6 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Overall Rating */}
        <div className="text-center">
          <div className="text-4xl font-bold text-gray-900 mb-2">{stats.averageRating.toFixed(1)}</div>
          <StarRating rating={stats.averageRating} size="lg" />
          <p className="text-gray-600 mt-2">
            Based on {stats.totalReviews} review{stats.totalReviews !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Rating Distribution */}
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => {
            const count = stats.ratingDistribution[rating as keyof typeof stats.ratingDistribution]
            const percentage = stats.totalReviews > 0 ? (count / stats.totalReviews) * 100 : 0

            return (
              <div key={rating} className="flex items-center space-x-3">
                <div className="flex items-center space-x-1 w-12">
                  <span className="text-sm">{rating}</span>
                  <StarRating rating={1} maxRating={1} size="sm" />
                </div>
                <div className="flex-grow">
                  <Progress value={percentage} className="h-2" />
                </div>
                <span className="text-sm text-gray-600 w-8">{count}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
