"use client"
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNotificationStore } from "@/store/notification-store"

export default function NotificationProvider() {
  const { notifications, removeNotification } = useNotificationStore()

  const getIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "error":
        return <AlertCircle className="h-5 w-5 text-red-500" />
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />
      default:
        return <Info className="h-5 w-5 text-blue-500" />
    }
  }

  const getBgColor = (type: string) => {
    switch (type) {
      case "success":
        return "bg-green-50 border-green-200"
      case "error":
        return "bg-red-50 border-red-200"
      case "warning":
        return "bg-yellow-50 border-yellow-200"
      default:
        return "bg-blue-50 border-blue-200"
    }
  }

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`max-w-sm w-full ${getBgColor(
            notification.type,
          )} border rounded-lg shadow-lg p-4 animate-in slide-in-from-right-full`}
        >
          <div className="flex items-start">
            <div className="flex-shrink-0">{getIcon(notification.type)}</div>
            <div className="ml-3 w-0 flex-1">
              <p className="text-sm font-medium text-gray-900">{notification.title}</p>
              {notification.message && <p className="mt-1 text-sm text-gray-500">{notification.message}</p>}
            </div>
            <div className="ml-4 flex-shrink-0 flex">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeNotification(notification.id)}
                className="h-6 w-6 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
