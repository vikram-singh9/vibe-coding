"use client"

import { useState, useMemo } from "react"
import ReviewCard from "./review-card"
import ReviewSummary from "./review-summary"
import ReviewFiltersComponent from "./review-filters"
import WriteReviewForm from "./write-review-form"
import { Button } from "@/components/ui/button"
import { getProductReviews, getReviewStats } from "@/lib/reviews-data"
import type { ReviewFilters } from "@/types"

interface ProductReviewsProps {
  productId: string
}

export default function ProductReviews({ productId }: ProductReviewsProps) {
  const [filters, setFilters] = useState<ReviewFilters>({
    rating: null,
    verified: false,
    sortBy: "newest",
  })
  const [showAll, setShowAll] = useState(false)

  const allReviews = getProductReviews(productId)
  const stats = getReviewStats(productId)

  const filteredAndSortedReviews = useMemo(() => {
    let filtered = allReviews

    // Apply rating filter
    if (filters.rating !== null) {
      filtered = filtered.filter((review) => review.rating === filters.rating)
    }

    // Apply verified filter
    if (filters.verified) {
      filtered = filtered.filter((review) => review.verified)
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case "newest":
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        case "oldest":
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        case "highest":
          return b.rating - a.rating
        case "lowest":
          return a.rating - b.rating
        case "helpful":
          return b.helpful - a.helpful
        default:
          return 0
      }
    })

    return filtered
  }, [allReviews, filters])

  const displayedReviews = showAll ? filteredAndSortedReviews : filteredAndSortedReviews.slice(0, 3)

  const handleNewReview = (reviewData: { rating: number; title: string; comment: string }) => {
    // In a real app, this would make an API call to save the review
    console.log("New review submitted:", reviewData)
    // You could show a success message here
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h2>

      <ReviewSummary stats={stats} />

      <WriteReviewForm productId={productId} onSubmit={handleNewReview} />

      {stats.totalReviews > 0 && (
        <>
          <ReviewFiltersComponent
            filters={filters}
            onFiltersChange={setFilters}
            totalReviews={filteredAndSortedReviews.length}
          />

          <div className="space-y-4">
            {displayedReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          {filteredAndSortedReviews.length > 3 && !showAll && (
            <div className="text-center mt-6">
              <Button variant="outline" onClick={() => setShowAll(true)}>
                Show All {filteredAndSortedReviews.length} Reviews
              </Button>
            </div>
          )}

          {showAll && filteredAndSortedReviews.length > 3 && (
            <div className="text-center mt-6">
              <Button variant="outline" onClick={() => setShowAll(false)}>
                Show Less
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
