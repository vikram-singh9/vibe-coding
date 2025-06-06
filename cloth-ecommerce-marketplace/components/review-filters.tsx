"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import StarRating from "./star-rating"
import type { ReviewFilters } from "@/types"

interface ReviewFiltersProps {
  filters: ReviewFilters
  onFiltersChange: (filters: ReviewFilters) => void
  totalReviews: number
}

export default function ReviewFiltersComponent({ filters, onFiltersChange, totalReviews }: ReviewFiltersProps) {
  const handleRatingFilter = (rating: number | null) => {
    onFiltersChange({ ...filters, rating })
  }

  const handleVerifiedFilter = (verified: boolean) => {
    onFiltersChange({ ...filters, verified })
  }

  const handleSortChange = (sortBy: ReviewFilters["sortBy"]) => {
    onFiltersChange({ ...filters, sortBy })
  }

  const clearFilters = () => {
    onFiltersChange({
      rating: null,
      verified: false,
      sortBy: "newest",
    })
  }

  return (
    <div className="bg-white border rounded-lg p-4 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Rating Filter */}
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Filter by rating:</span>
            <div className="flex space-x-1">
              <Button
                variant={filters.rating === null ? "default" : "outline"}
                size="sm"
                onClick={() => handleRatingFilter(null)}
              >
                All
              </Button>
              {[5, 4, 3, 2, 1].map((rating) => (
                <Button
                  key={rating}
                  variant={filters.rating === rating ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleRatingFilter(rating)}
                  className="flex items-center space-x-1"
                >
                  <span>{rating}</span>
                  <StarRating rating={1} maxRating={1} size="sm" />
                </Button>
              ))}
            </div>
          </div>

          {/* Verified Filter */}
          <div className="flex items-center space-x-2">
            <Checkbox id="verified" checked={filters.verified} onCheckedChange={handleVerifiedFilter} />
            <Label htmlFor="verified" className="text-sm">
              Verified purchases only
            </Label>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Sort By */}
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Sort by:</span>
            <Select value={filters.sortBy} onValueChange={handleSortChange}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
                <SelectItem value="highest">Highest rated</SelectItem>
                <SelectItem value="lowest">Lowest rated</SelectItem>
                <SelectItem value="helpful">Most helpful</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button variant="ghost" size="sm" onClick={clearFilters}>
            Clear filters
          </Button>
        </div>
      </div>
    </div>
  )
}
