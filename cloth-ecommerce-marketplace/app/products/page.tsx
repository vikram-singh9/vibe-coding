"use client"

import { useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import ProductCard from "@/components/product-card"
import ProductFilters from "@/components/product-filters"
import { products } from "@/lib/data"
import type { FilterState } from "@/types"

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category") || ""

  const [filters, setFilters] = useState<FilterState>({
    category: categoryParam,
    priceRange: [0, 100],
    material: "",
    inStock: false,
  })

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category filter
      if (filters.category && product.category !== filters.category) {
        return false
      }

      // Price range filter
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false
      }

      // In stock filter
      if (filters.inStock && !product.inStock) {
        return false
      }

      return true
    })
  }, [filters])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Products</h1>
        <p className="text-gray-600">Discover our complete collection of premium textiles</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <ProductFilters filters={filters} onFiltersChange={setFilters} />
        </div>

        {/* Products Grid */}
        <div className="lg:col-span-3">
          <div className="mb-4 flex justify-between items-center">
            <p className="text-gray-600">
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found matching your filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
