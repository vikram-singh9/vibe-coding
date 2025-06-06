import type { ShippingOption, PaymentMethod } from "@/types"

export const shippingOptions: ShippingOption[] = [
  {
    id: "standard",
    name: "Standard Shipping",
    description: "5-7 business days",
    price: 0,
    estimatedDays: "5-7 business days",
  },
  {
    id: "express",
    name: "Express Shipping",
    description: "2-3 business days",
    price: 9.99,
    estimatedDays: "2-3 business days",
  },
  {
    id: "overnight",
    name: "Overnight Shipping",
    description: "Next business day",
    price: 24.99,
    estimatedDays: "Next business day",
  },
]

export const paymentMethods: PaymentMethod[] = [
  {
    id: "card",
    type: "card",
    name: "Credit/Debit Card",
    icon: "💳",
  },
  {
    id: "paypal",
    type: "paypal",
    name: "PayPal",
    icon: "🅿️",
  },
  {
    id: "apple_pay",
    type: "apple_pay",
    name: "Apple Pay",
    icon: "🍎",
  },
  {
    id: "google_pay",
    type: "google_pay",
    name: "Google Pay",
    icon: "🔵",
  },
]
