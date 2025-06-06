import Header from "@/components/header"
import HeroBanner from "@/components/hero-banner"
import ProductGrid from "@/components/product-grid"
import CategorySection from "@/components/category-section"
import BrandShowcase from "@/components/brand-showcase"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroBanner />
        <ProductGrid />
        <CategorySection />
        <BrandShowcase />
      </main>
    </div>
  )
}
