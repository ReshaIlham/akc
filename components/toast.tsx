"use client"

import { useEffect, useState } from "react"
import { Check, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface ToastProps {
  message: string
  type?: "success" | "error" | "info"
  isVisible: boolean
  onClose: () => void
  duration?: number
}

export function Toast({ message, type = "success", isVisible, onClose, duration = 5000 }: ToastProps) {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true)
      const timer = setTimeout(() => {
        setIsAnimating(false)
        setTimeout(onClose, 300) // Wait for animation to complete
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [isVisible, duration, onClose])

  if (!isVisible && !isAnimating) return null

  const getTypeStyles = () => {
    switch (type) {
      case "success":
        return "bg-agile-green text-white dark:bg-agile-green-dark"
      case "error":
        return "bg-agile-red text-white dark:bg-agile-red-dark"
      case "info":
        return "bg-agile-blue text-white dark:bg-agile-blue-dark"
      default:
        return "bg-agile-green text-white dark:bg-agile-green-dark"
    }
  }

  const getIcon = () => {
    switch (type) {
      case "success":
        return <Check className="h-5 w-5" />
      case "error":
        return <X className="h-5 w-5" />
      case "info":
        return <Check className="h-5 w-5" />
      default:
        return <Check className="h-5 w-5" />
    }
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <div
        className={cn(
          "flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg transition-all duration-300 transform",
          getTypeStyles(),
          isAnimating ? "translate-x-0 opacity-100" : "translate-x-full opacity-0",
        )}
      >
        {getIcon()}
        <span className="font-medium">{message}</span>
        <button
          onClick={() => {
            setIsAnimating(false)
            setTimeout(onClose, 300)
          }}
          className="ml-2 hover:bg-white/20 rounded-full p-1 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
