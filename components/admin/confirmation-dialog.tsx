"use client"

import { AlertTriangle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ConfirmationDialogProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  message: string
  confirmText?: string
  cancelText?: string
  variant?: "danger" | "warning" | "info"
  isLoading?: boolean
}

export function ConfirmationDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  variant = "danger",
  isLoading = false,
}: ConfirmationDialogProps) {
  if (!isOpen) return null

  const handleConfirm = () => {
    if (!isLoading) {
      onConfirm()
    }
  }

  const handleClose = () => {
    if (!isLoading) {
      onClose()
    }
  }

  const getVariantStyles = () => {
    switch (variant) {
      case "danger":
        return {
          iconBg: "bg-red-100 dark:bg-red-900/20",
          iconColor: "text-red-600 dark:text-red-400",
          confirmButton: "red",
        }
      case "warning":
        return {
          iconBg: "bg-yellow-100 dark:bg-yellow-900/20",
          iconColor: "text-yellow-600 dark:text-yellow-400",
          confirmButton: "blue",
        }
      case "info":
        return {
          iconBg: "bg-blue-100 dark:bg-blue-900/20",
          iconColor: "text-blue-600 dark:text-blue-400",
          confirmButton: "blue",
        }
      default:
        return {
          iconBg: "bg-red-100 dark:bg-red-900/20",
          iconColor: "text-red-600 dark:text-red-400",
          confirmButton: "red",
        }
    }
  }

  const styles = getVariantStyles()

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md">
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-agile-dark dark:text-white">{title}</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            disabled={isLoading}
            className="text-agile-gray hover:text-agile-dark dark:text-gray-400 dark:hover:text-white"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${styles.iconBg}`}>
              <AlertTriangle className={`w-6 h-6 ${styles.iconColor}`} />
            </div>
            <div className="flex-1">
              <p className="text-agile-dark dark:text-white leading-relaxed">{message}</p>
            </div>
          </div>
        </div>

        <div className="flex gap-3 p-6 pt-0">
          <Button type="button" variant="outline" onClick={handleClose} disabled={isLoading} className="flex-1">
            {cancelText}
          </Button>
          <Button
            type="button"
            variant={styles.confirmButton as any}
            onClick={handleConfirm}
            disabled={isLoading}
            className="flex-1"
          >
            {isLoading ? "Processing..." : confirmText}
          </Button>
        </div>
      </div>
    </div>
  )
}
