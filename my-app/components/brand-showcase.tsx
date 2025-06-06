import { Card, CardContent } from "@/components/ui/card"

const brands = [
  {
    name: "iPhone",
    discount: "UP to 80% OFF",
    color: "bg-gradient-to-r from-gray-800 to-gray-900",
    textColor: "text-white",
  },
  {
    name: "realme",
    discount: "UP to 80% OFF",
    color: "bg-gradient-to-r from-yellow-400 to-orange-400",
    textColor: "text-black",
  },
  {
    name: "Xiaomi",
    discount: "UP to 80% OFF",
    color: "bg-gradient-to-r from-orange-500 to-red-500",
    textColor: "text-white",
  },
]

export default function BrandShowcase() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">
          Top <span className="text-blue-600">Electronics Brands</span>
        </h2>
        <span className="text-blue-600 cursor-pointer">View All →</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {brands.map((brand, index) => (
          <Card key={brand.name} className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className={`p-8 ${brand.color} ${brand.textColor} relative`}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{brand.name}</h3>
                  <p className="text-sm opacity-90">{brand.discount}</p>
                </div>
                <div className="w-20 h-20 bg-white/10 rounded-lg flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/20 rounded"></div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-white/5 rounded-full"></div>
              <div className="absolute -left-2 -top-2 w-8 h-8 bg-white/5 rounded-full"></div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-8 gap-2">
        {[...Array(4)].map((_, i) => (
          <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? "bg-blue-600" : "bg-gray-300"}`} />
        ))}
      </div>
    </section>
  )
}
