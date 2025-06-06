"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useCheckoutStore } from "@/store/checkout-store"
import { paymentMethods } from "@/lib/shipping-data"

interface PaymentFormData {
  cardNumber: string
  expiryDate: string
  cvv: string
  cardholderName: string
}

export default function PaymentForm() {
  const { selectedPayment, setSelectedPayment, setStep } = useCheckoutStore()
  const [paymentData, setPaymentData] = useState<PaymentFormData>({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
  })
  const [errors, setErrors] = useState<Partial<PaymentFormData>>({})

  const validateCardForm = () => {
    const newErrors: Partial<PaymentFormData> = {}

    if (!paymentData.cardNumber.trim()) newErrors.cardNumber = "Card number is required"
    if (!paymentData.expiryDate.trim()) newErrors.expiryDate = "Expiry date is required"
    if (!paymentData.cvv.trim()) newErrors.cvv = "CVV is required"
    if (!paymentData.cardholderName.trim()) newErrors.cardholderName = "Cardholder name is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (selectedPayment === "card" && !validateCardForm()) {
      return
    }

    if (selectedPayment) {
      setStep("review")
    }
  }

  const handleInputChange = (field: keyof PaymentFormData, value: string) => {
    setPaymentData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ""
    const parts = []

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }

    if (parts.length) {
      return parts.join(" ")
    } else {
      return v
    }
  }

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    if (v.length >= 2) {
      return v.substring(0, 2) + "/" + v.substring(2, 4)
    }
    return v
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Payment Method</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={selectedPayment} onValueChange={setSelectedPayment}>
            {paymentMethods.map((method) => (
              <div key={method.id} className="flex items-center space-x-2 p-4 border rounded-lg">
                <RadioGroupItem value={method.id} id={method.id} />
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{method.icon}</span>
                  <Label htmlFor={method.id} className="font-medium">
                    {method.name}
                  </Label>
                </div>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>

      {selectedPayment === "card" && (
        <Card>
          <CardHeader>
            <CardTitle>Card Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="cardholderName">Cardholder Name *</Label>
              <Input
                id="cardholderName"
                value={paymentData.cardholderName}
                onChange={(e) => handleInputChange("cardholderName", e.target.value)}
                className={errors.cardholderName ? "border-red-500" : ""}
                placeholder="John Doe"
              />
              {errors.cardholderName && <p className="text-red-500 text-sm mt-1">{errors.cardholderName}</p>}
            </div>

            <div>
              <Label htmlFor="cardNumber">Card Number *</Label>
              <Input
                id="cardNumber"
                value={paymentData.cardNumber}
                onChange={(e) => handleInputChange("cardNumber", formatCardNumber(e.target.value))}
                className={errors.cardNumber ? "border-red-500" : ""}
                placeholder="1234 5678 9012 3456"
                maxLength={19}
              />
              {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expiryDate">Expiry Date *</Label>
                <Input
                  id="expiryDate"
                  value={paymentData.expiryDate}
                  onChange={(e) => handleInputChange("expiryDate", formatExpiryDate(e.target.value))}
                  className={errors.expiryDate ? "border-red-500" : ""}
                  placeholder="MM/YY"
                  maxLength={5}
                />
                {errors.expiryDate && <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>}
              </div>
              <div>
                <Label htmlFor="cvv">CVV *</Label>
                <Input
                  id="cvv"
                  value={paymentData.cvv}
                  onChange={(e) => handleInputChange("cvv", e.target.value.replace(/\D/g, ""))}
                  className={errors.cvv ? "border-red-500" : ""}
                  placeholder="123"
                  maxLength={4}
                />
                {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {selectedPayment && selectedPayment !== "card" && (
        <Card>
          <CardContent className="p-6">
            <p className="text-center text-gray-600">
              You will be redirected to {paymentMethods.find((m) => m.id === selectedPayment)?.name} to complete your
              payment.
            </p>
          </CardContent>
        </Card>
      )}

      <div className="flex space-x-4">
        <Button type="button" variant="outline" onClick={() => setStep("shipping")} className="flex-1">
          Back to Shipping
        </Button>
        <Button type="submit" className="flex-1" disabled={!selectedPayment}>
          Review Order
        </Button>
      </div>
    </form>
  )
}
