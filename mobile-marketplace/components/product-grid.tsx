import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Galaxy S23 Ultra",
    price: "₹23999",
    originalPrice: "₹45000",
    discount: "47%",
    rating: 4.5,
    image: "/placeholder.svg?height=200&width=150",
    badge: "Sale",
  },
  {
    id: 2,
    name: "Galaxy M14 5G(6GB | 64 GB)",
    price: "₹14500",
    originalPrice: "₹18000",
    discount: "19%",
    rating: 4.2,
    image: "/placeholder.svg?height=200&width=150",
    badge: "Sale",
  },
  {
    id: 3,
    name: "Galaxy M30 5G(6GB | 64 GB)",
    price: "₹16999",
    originalPrice: "₹20000",
    discount: "15%",
    rating: 4.3,
    image: "/placeholder.svg?height=200&width=150",
    badge: "Sale",
  },
  {
    id: 4,
    name: "Galaxy Note10(6GB | 64 GB)",
    price: "₹31999",
    originalPrice: "₹40000",
    discount: "20%",
    rating: 4.6,
    image: "/placeholder.svg?height=200&width=150",
    badge: "Sale",
  },
  {
    id: 5,
    name: "Galaxy S22 Ultra",
    price: "₹42999",
    originalPrice: "₹55000",
    discount: "22%",
    rating: 4.7,
    image: "/placeholder.svg?height=200&width=150",
    badge: "Sale",
  },
]

export default function ProductGrid() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">
          Grab the best deal on <span className="text-blue-600">Smartphones</span>
        </h2>
        <Button variant="outline">View All →</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="group hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-4">
              <div className="relative mb-4">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  {product.badge}
                </span>
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  {product.discount} OFF
                </span>
              </div>

              <h3 className="font-medium text-sm mb-2 line-clamp-2">{product.name}</h3>

              <div className="flex items-center gap-1 mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${
                        i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-500">({product.rating})</span>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-green-600">{product.price}</span>
                  <span className="text-xs text-gray-500 line-through">{product.originalPrice}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
