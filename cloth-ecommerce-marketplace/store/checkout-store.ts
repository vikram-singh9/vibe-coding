import { create } from "zustand"
import type { CheckoutState, ShippingAddress } from "@/types"

interface CheckoutStore extends CheckoutState {
  setStep: (step: CheckoutState["step"]) => void
  updateShippingAddress: (address: Partial<ShippingAddress>) => void
  setSelectedShipping: (shippingId: string) => void
  setSelectedPayment: (paymentId: string) => void
  setProcessing: (processing: boolean) => void
  resetCheckout: () => void
}

export const useCheckoutStore = create<CheckoutStore>((set) => ({
  step: "shipping",
  shippingAddress: {},
  selectedShipping: "",
  selectedPayment: "",
  isProcessing: false,

  setStep: (step) => set({ step }),

  updateShippingAddress: (address) =>
    set((state) => ({
      shippingAddress: { ...state.shippingAddress, ...address },
    })),

  setSelectedShipping: (shippingId) => set({ selectedShipping: shippingId }),

  setSelectedPayment: (paymentId) => set({ selectedPayment: paymentId }),

  setProcessing: (processing) => set({ isProcessing: processing }),

  resetCheckout: () =>
    set({
      step: "shipping",
      shippingAddress: {},
      selectedShipping: "",
      selectedPayment: "",
      isProcessing: false,
    }),
}))
