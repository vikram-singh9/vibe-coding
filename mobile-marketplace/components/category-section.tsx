import { Smartphone, Palette, Zap, Sofa, Watch, Home, Gift } from "lucide-react"

const categories = [
  { name: "Mobile", icon: Smartphone, color: "bg-blue-100 text-blue-600" },
  { name: "Cosmetics", icon: Palette, color: "bg-pink-100 text-pink-600" },
  { name: "Electronics", icon: Zap, color: "bg-yellow-100 text-yellow-600" },
  { name: "Furniture", icon: Sofa, color: "bg-green-100 text-green-600" },
  { name: "Watches", icon: Watch, color: "bg-purple-100 text-purple-600" },
  { name: "Decor", icon: Home, color: "bg-orange-100 text-orange-600" },
  { name: "Accessories", icon: Gift, color: "bg-red-100 text-red-600" },
]

export default function CategorySection() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">
          Shop From <span className="text-blue-600">Top Categories</span>
        </h2>
        <span className="text-blue-600 cursor-pointer">View All →</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
        {categories.map((category) => (
          <div
            key={category.name}
            className="flex flex-col items-center p-4 rounded-lg hover:shadow-md transition-shadow cursor-pointer group"
          >
            <div
              className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
            >
              <category.icon className="w-8 h-8" />
            </div>
            <span className="text-sm font-medium text-center">{category.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
