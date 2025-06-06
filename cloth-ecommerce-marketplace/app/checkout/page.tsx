"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { CheckCircle, CreditCard, Truck } from "lucide-react"
import { useCartStore } from "@/store/cart-store"
import { useCheckoutStore } from "@/store/checkout-store"
import ShippingForm from "@/components/shipping-form"
import PaymentForm from "@/components/payment-form"
import OrderReview from "@/components/order-review"

export default function CheckoutPage() {
  const router = useRouter()
  const { items } = useCartStore()
  const { step } = useCheckoutStore()

  useEffect(() => {
    if (items.length === 0) {
      router.push("/cart")
    }
  }, [items, router])

  if (items.length === 0) {
    return null
  }

  const steps = [
    { id: "shipping", name: "Shipping", icon: Truck },
    { id: "payment", name: "Payment", icon: CreditCard },
    { id: "review", name: "Review", icon: CheckCircle },
  ]

  const currentStepIndex = steps.findIndex((s) => s.id === step)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((stepItem, index) => {
            const Icon = stepItem.icon
            const isActive = index === currentStepIndex
            const isCompleted = index < currentStepIndex

            return (
              <div key={stepItem.id} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                    isActive
                      ? "border-blue-600 bg-blue-600 text-white"
                      : isCompleted
                        ? "border-green-600 bg-green-600 text-white"
                        : "border-gray-300 bg-white text-gray-400"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <span
                  className={`ml-2 text-sm font-medium ${
                    isActive ? "text-blue-600" : isCompleted ? "text-green-600" : "text-gray-500"
                  }`}
                >
                  {stepItem.name}
                </span>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${isCompleted ? "bg-green-600" : "bg-gray-300"}`} />
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Step Content */}
      <div>
        {step === "shipping" && <ShippingForm />}
        {step === "payment" && <PaymentForm />}
        {step === "review" && <OrderReview />}
      </div>
    </div>
  )
}
