import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <div className="relative bg-gray-900 text-white">
      <div className="absolute inset-0">
        <Image
          src="/placeholder.svg?height=600&width=1200"
          alt="Textile fabrics"
          fill
          className="object-cover opacity-50"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Premium Quality Textiles</h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our extensive collection of high-quality fabrics. From luxurious silk to comfortable cotton, find
            the perfect textile for your next project.
          </p>
          <div className="mt-10 flex justify-center space-x-4">
            <Link href="/products">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Shop Now
              </Button>
            </Link>
            <Link href="/categories">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-gray-900"
              >
                Browse Categories
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
