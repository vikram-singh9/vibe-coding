"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useCartStore } from "@/store/cart-store"
import { useCheckoutStore } from "@/store/checkout-store"
import { useNotificationStore } from "@/store/notification-store"
import { shippingOptions, paymentMethods } from "@/lib/shipping-data"
import { useRouter } from "next/navigation"

export default function OrderReview() {
  const router = useRouter()
  const { items, getTotalPrice, clearCart } = useCartStore()
  const { shippingAddress, selectedShipping, selectedPayment, setStep, setProcessing, isProcessing, resetCheckout } =
    useCheckoutStore()
  const { addNotification } = useNotificationStore()

  const selectedShippingOption = shippingOptions.find((option) => option.id === selectedShipping)
  const selectedPaymentMethod = paymentMethods.find((method) => method.id === selectedPayment)

  const subtotal = getTotalPrice()
  const shipping = selectedShippingOption?.price || 0
  const tax = subtotal * 0.08 // 8% tax
  const total = subtotal + shipping + tax

  const handlePlaceOrder = async () => {
    setProcessing(true)

    try {
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 3000))

      // Clear cart and reset checkout
      clearCart()
      resetCheckout()

      // Show success notification
      addNotification({
        type: "success",
        title: "Order Placed Successfully!",
        message: "Thank you for your purchase. You will receive a confirmation email shortly.",
        duration: 8000,
      })

      // Redirect to home or order confirmation page
      router.push("/")
    } catch (error) {
      addNotification({
        type: "error",
        title: "Payment Failed",
        message: "There was an error processing your payment. Please try again.",
      })
    } finally {
      setProcessing(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* Order Items */}
      <Card>
        <CardHeader>
          <CardTitle>Order Items</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`}
                className="flex items-center space-x-4"
              >
                <Image
                  src={item.product.images[0] || "/placeholder.svg"}
                  alt={item.product.name}
                  width={60}
                  height={60}
                  className="rounded-lg object-cover"
                />
                <div className="flex-grow">
                  <h4 className="font-medium">{item.product.name}</h4>
                  <div className="text-sm text-gray-600">
                    {item.selectedColor && <span>Color: {item.selectedColor}</span>}
                    {item.selectedColor && item.selectedSize && <span> • </span>}
                    {item.selectedSize && <span>Size: {item.selectedSize}</span>}
                  </div>
                  <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Shipping Address */}
      <Card>
        <CardHeader>
          <CardTitle>Shipping Address</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-sm">
            <p className="font-medium">
              {shippingAddress.firstName} {shippingAddress.lastName}
            </p>
            <p>{shippingAddress.address}</p>
            <p>
              {shippingAddress.city}, {shippingAddress.state} {shippingAddress.zipCode}
            </p>
            <p>{shippingAddress.country}</p>
            <p className="mt-2">
              <span className="font-medium">Email:</span> {shippingAddress.email}
            </p>
            <p>
              <span className="font-medium">Phone:</span> {shippingAddress.phone}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Shipping & Payment */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Shipping Method</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">{selectedShippingOption?.name}</p>
                <p className="text-sm text-gray-600">{selectedShippingOption?.description}</p>
              </div>
              <p className="font-medium">
                {selectedShippingOption?.price === 0 ? "Free" : `$${selectedShippingOption?.price}`}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{selectedPaymentMethod?.icon}</span>
              <p className="font-medium">{selectedPaymentMethod?.name}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Order Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax:</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <Separator />
            <div className="flex justify-between text-lg font-bold">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex space-x-4">
        <Button
          type="button"
          variant="outline"
          onClick={() => setStep("payment")}
          className="flex-1"
          disabled={isProcessing}
        >
          Back to Payment
        </Button>
        <Button onClick={handlePlaceOrder} className="flex-1" disabled={isProcessing}>
          {isProcessing ? "Processing..." : `Place Order - $${total.toFixed(2)}`}
        </Button>
      </div>
    </div>
  )
}
