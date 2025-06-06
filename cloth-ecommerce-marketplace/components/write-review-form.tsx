"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import StarRating from "./star-rating"

interface WriteReviewFormProps {
  productId: string
  onSubmit: (review: {
    rating: number
    title: string
    comment: string
  }) => void
}

export default function WriteReviewForm({ productId, onSubmit }: WriteReviewFormProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [rating, setRating] = useState(0)
  const [title, setTitle] = useState("")
  const [comment, setComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (rating === 0 || !title.trim() || !comment.trim()) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    onSubmit({ rating, title, comment })

    // Reset form
    setRating(0)
    setTitle("")
    setComment("")
    setIsOpen(false)
    setIsSubmitting(false)
  }

  if (!isOpen) {
    return (
      <div className="mb-6">
        <Button onClick={() => setIsOpen(true)} className="w-full sm:w-auto">
          Write a Review
        </Button>
      </div>
    )
  }

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Write a Review</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Rating */}
          <div>
            <Label className="text-sm font-medium mb-2 block">Rating *</Label>
            <StarRating rating={rating} interactive onRatingChange={setRating} size="lg" />
          </div>

          {/* Title */}
          <div>
            <Label htmlFor="title" className="text-sm font-medium mb-2 block">
              Review Title *
            </Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Summarize your experience"
              required
            />
          </div>

          {/* Comment */}
          <div>
            <Label htmlFor="comment" className="text-sm font-medium mb-2 block">
              Your Review *
            </Label>
            <Textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Tell others about your experience with this product"
              rows={4}
              required
            />
          </div>

          {/* Actions */}
          <div className="flex space-x-2">
            <Button type="submit" disabled={rating === 0 || !title.trim() || !comment.trim() || isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Review"}
            </Button>
            <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
