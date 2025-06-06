"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import type { FilterState } from "@/types"
import { categories } from "@/lib/data"

interface ProductFiltersProps {
  filters: FilterState
  onFiltersChange: (filters: FilterState) => void
}

export default function ProductFilters({ filters, onFiltersChange }: ProductFiltersProps) {
  const [priceRange, setPriceRange] = useState<[number, number]>(filters.priceRange)

  const handleCategoryChange = (categoryId: string) => {
    onFiltersChange({
      ...filters,
      category: filters.category === categoryId ? "" : categoryId,
    })
  }

  const handlePriceRangeChange = (value: number[]) => {
    const newRange: [number, number] = [value[0], value[1]]
    setPriceRange(newRange)
    onFiltersChange({
      ...filters,
      priceRange: newRange,
    })
  }

  const handleInStockChange = (checked: boolean) => {
    onFiltersChange({
      ...filters,
      inStock: checked,
    })
  }

  const clearFilters = () => {
    const defaultFilters: FilterState = {
      category: "",
      priceRange: [0, 100],
      material: "",
      inStock: false,
    }
    setPriceRange(defaultFilters.priceRange)
    onFiltersChange(defaultFilters)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Filters</CardTitle>
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            Clear All
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Categories */}
        <div>
          <h3 className="font-semibold mb-3">Categories</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center space-x-2">
                <Checkbox
                  id={category.id}
                  checked={filters.category === category.id}
                  onCheckedChange={() => handleCategoryChange(category.id)}
                />
                <Label htmlFor={category.id} className="text-sm">
                  {category.name}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h3 className="font-semibold mb-3">Price Range</h3>
          <div className="px-2">
            <Slider
              value={priceRange}
              onValueChange={handlePriceRangeChange}
              max={100}
              min={0}
              step={5}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </div>

        {/* In Stock */}
        <div>
          <div className="flex items-center space-x-2">
            <Checkbox id="inStock" checked={filters.inStock} onCheckedChange={handleInStockChange} />
            <Label htmlFor="inStock" className="text-sm">
              In Stock Only
            </Label>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
