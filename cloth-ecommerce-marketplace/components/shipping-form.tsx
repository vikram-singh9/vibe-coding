"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useCheckoutStore } from "@/store/checkout-store"
import { shippingOptions } from "@/lib/shipping-data"
import type { ShippingAddress } from "@/types"

export default function ShippingForm() {
  const { shippingAddress, selectedShipping, updateShippingAddress, setSelectedShipping, setStep } = useCheckoutStore()

  const [errors, setErrors] = useState<Partial<ShippingAddress>>({})

  const validateForm = () => {
    const newErrors: Partial<ShippingAddress> = {}

    if (!shippingAddress.firstName?.trim()) newErrors.firstName = "First name is required"
    if (!shippingAddress.lastName?.trim()) newErrors.lastName = "Last name is required"
    if (!shippingAddress.email?.trim()) newErrors.email = "Email is required"
    if (!shippingAddress.phone?.trim()) newErrors.phone = "Phone is required"
    if (!shippingAddress.address?.trim()) newErrors.address = "Address is required"
    if (!shippingAddress.city?.trim()) newErrors.city = "City is required"
    if (!shippingAddress.state?.trim()) newErrors.state = "State is required"
    if (!shippingAddress.zipCode?.trim()) newErrors.zipCode = "ZIP code is required"
    if (!shippingAddress.country?.trim()) newErrors.country = "Country is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm() && selectedShipping) {
      setStep("payment")
    }
  }

  const handleInputChange = (field: keyof ShippingAddress, value: string) => {
    updateShippingAddress({ [field]: value })
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Shipping Address */}
      <Card>
        <CardHeader>
          <CardTitle>Shipping Address</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                value={shippingAddress.firstName || ""}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className={errors.firstName ? "border-red-500" : ""}
              />
              {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
            </div>
            <div>
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                value={shippingAddress.lastName || ""}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className={errors.lastName ? "border-red-500" : ""}
              />
              {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={shippingAddress.email || ""}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <Label htmlFor="phone">Phone *</Label>
            <Input
              id="phone"
              value={shippingAddress.phone || ""}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className={errors.phone ? "border-red-500" : ""}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          <div>
            <Label htmlFor="address">Address *</Label>
            <Input
              id="address"
              value={shippingAddress.address || ""}
              onChange={(e) => handleInputChange("address", e.target.value)}
              className={errors.address ? "border-red-500" : ""}
            />
            {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="city">City *</Label>
              <Input
                id="city"
                value={shippingAddress.city || ""}
                onChange={(e) => handleInputChange("city", e.target.value)}
                className={errors.city ? "border-red-500" : ""}
              />
              {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
            </div>
            <div>
              <Label htmlFor="state">State *</Label>
              <Select value={shippingAddress.state || ""} onValueChange={(value) => handleInputChange("state", value)}>
                <SelectTrigger className={errors.state ? "border-red-500" : ""}>
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="AL">Alabama</SelectItem>
                  <SelectItem value="CA">California</SelectItem>
                  <SelectItem value="FL">Florida</SelectItem>
                  <SelectItem value="NY">New York</SelectItem>
                  <SelectItem value="TX">Texas</SelectItem>
                  {/* Add more states as needed */}
                </SelectContent>
              </Select>
              {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
            </div>
            <div>
              <Label htmlFor="zipCode">ZIP Code *</Label>
              <Input
                id="zipCode"
                value={shippingAddress.zipCode || ""}
                onChange={(e) => handleInputChange("zipCode", e.target.value)}
                className={errors.zipCode ? "border-red-500" : ""}
              />
              {errors.zipCode && <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>}
            </div>
          </div>

          <div>
            <Label htmlFor="country">Country *</Label>
            <Select
              value={shippingAddress.country || ""}
              onValueChange={(value) => handleInputChange("country", value)}
            >
              <SelectTrigger className={errors.country ? "border-red-500" : ""}>
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="US">United States</SelectItem>
                <SelectItem value="CA">Canada</SelectItem>
                <SelectItem value="UK">United Kingdom</SelectItem>
                <SelectItem value="AU">Australia</SelectItem>
              </SelectContent>
            </Select>
            {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
          </div>
        </CardContent>
      </Card>

      {/* Shipping Options */}
      <Card>
        <CardHeader>
          <CardTitle>Shipping Options</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={selectedShipping} onValueChange={setSelectedShipping}>
            {shippingOptions.map((option) => (
              <div key={option.id} className="flex items-center space-x-2 p-4 border rounded-lg">
                <RadioGroupItem value={option.id} id={option.id} />
                <div className="flex-grow">
                  <Label htmlFor={option.id} className="font-medium">
                    {option.name}
                  </Label>
                  <p className="text-sm text-gray-600">{option.description}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{option.price === 0 ? "Free" : `$${option.price}`}</p>
                </div>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>

      <Button type="submit" className="w-full" size="lg" disabled={!selectedShipping}>
        Continue to Payment
      </Button>
    </form>
  )
}
