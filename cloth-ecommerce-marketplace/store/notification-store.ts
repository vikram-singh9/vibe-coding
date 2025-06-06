import { create } from "zustand"

export interface Notification {
  id: string
  type: "success" | "error" | "info" | "warning"
  title: string
  message?: string
  duration?: number
}

interface NotificationStore {
  notifications: Notification[]
  addNotification: (notification: Omit<Notification, "id">) => void
  removeNotification: (id: string) => void
  clearNotifications: () => void
}

export const useNotificationStore = create<NotificationStore>((set, get) => ({
  notifications: [],

  addNotification: (notification) => {
    const id = Math.random().toString(36).substr(2, 9)
    const newNotification = { ...notification, id }

    set((state) => ({
      notifications: [...state.notifications, newNotification],
    }))

    // Auto remove after duration (default 5 seconds)
    const duration = notification.duration || 5000
    setTimeout(() => {
      get().removeNotification(id)
    }, duration)
  },

  removeNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    })),

  clearNotifications: () => set({ notifications: [] }),
}))
