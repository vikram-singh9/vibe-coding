import { Search, ShoppingCart, User, Menu, MapPin, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-gray-100 text-xs py-1">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span>Welcome to our MegaMart Marketplace</span>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              Deliver to 400001
            </span>
            <span className="flex items-center gap-1">
              <Truck className="w-3 h-3" />
              Track your order
            </span>
            <span>All Offers</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-blue-600">MegaMart</div>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search essentials, groceries and more..."
                className="w-full pl-4 pr-12 py-2 border-2 border-gray-200 rounded-lg"
              />
              <Button size="sm" className="absolute right-1 top-1 bg-blue-600 hover:bg-blue-700">
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Sign Up/Sign In
            </Button>
            <Button variant="ghost" className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Cart
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-8 py-3">
            <Button variant="ghost" className="flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-700">
              <Menu className="w-4 h-4" />
              All Categories
            </Button>
            <div className="flex items-center gap-6 text-sm">
              <span className="cursor-pointer hover:text-blue-600">Premium Fruits</span>
              <span className="cursor-pointer hover:text-blue-600">Home & Kitchen</span>
              <span className="cursor-pointer hover:text-blue-600">Fashion</span>
              <span className="cursor-pointer hover:text-blue-600">Electronics</span>
              <span className="cursor-pointer hover:text-blue-600">Beauty</span>
              <span className="cursor-pointer hover:text-blue-600">Home Improvement</span>
              <span className="cursor-pointer hover:text-blue-600">Sports, Toys & Luggage</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
