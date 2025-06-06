'use client'
import HeroSection from "@/components/hero-section"
import FeaturedProducts from "@/components/featured-products"
import CategoriesSection from "@/components/categories-section"

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <CategoriesSection />
    </div>
  )
}
