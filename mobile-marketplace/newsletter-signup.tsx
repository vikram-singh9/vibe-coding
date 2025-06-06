import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Mail, Github, Twitter, Facebook } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg border-0 bg-white/95 backdrop-blur-sm">
        <CardHeader className="text-center space-y-4 pb-6">
          {/* Logo/Brand Mark */}
          <div className="flex justify-center">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <Mail className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Headlines */}
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-gray-900">Subscribe to Pulse</h1>
            <p className="text-gray-600 text-sm leading-relaxed">
              Get the latest insights, tips, and exclusive content delivered straight to your inbox every week.
            </p>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Social Sign-up Options */}
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-3">
              <Button variant="outline" size="sm" className="h-10">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="h-10">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="h-10">
                <Facebook className="w-4 h-4" />
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Or continue with email</span>
              </div>
            </div>
          </div>

          {/* Email Form */}
          <form className="space-y-4">
            <div className="space-y-2">
              <Input type="email" placeholder="Enter your email address" className="h-11" required />
            </div>

            <Button
              type="submit"
              className="w-full h-11 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
            >
              Subscribe Now
            </Button>
          </form>

          {/* Additional Links */}
          <div className="flex justify-center space-x-4 text-xs text-gray-500">
            <a href="#" className="hover:text-purple-600 transition-colors">
              Terms
            </a>
            <span>•</span>
            <a href="#" className="hover:text-purple-600 transition-colors">
              Privacy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-purple-600 transition-colors">
              Help
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="text-center">
            <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
              <Mail className="w-3 h-3" />
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
