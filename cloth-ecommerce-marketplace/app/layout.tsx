import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import NotificationProvider from "@/components/notification-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TextileCraft - Premium Quality Textiles",
  description:
    "Discover our extensive collection of high-quality fabrics. From luxurious silk to comfortable cotton, find the perfect textile for your next project.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <NotificationProvider />
      </body>
    </html>
  )
}
