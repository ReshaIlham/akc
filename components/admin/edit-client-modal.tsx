"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ImageUpload } from "@/components/admin/image-upload"

interface Client {
  id: string
  name: string
  logo: string
  displayStatus: boolean
  lastUpdated: string
  order: number
}

interface EditClientModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: { name: string; logo: string; displayStatus: boolean }) => void
  client: Client
}

export function EditClientModal({ isOpen, onClose, onSubmit, client }: EditClientModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    logo: "",
    displayStatus: true,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (client) {
      setFormData({
        name: client.name,
        logo: client.logo,
        displayStatus: client.displayStatus,
      })
    }
  }, [client])

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Client name is required"
    }

    if (!formData.logo.trim()) {
      newErrors.logo = "Client logo is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      onSubmit(formData)
      setErrors({})
    } catch (error) {
      console.error("Error updating client:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    if (!isSubmitting) {
      setErrors({})
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-agile-dark dark:text-white">Edit Client</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            disabled={isSubmitting}
            className="text-agile-gray hover:text-agile-dark dark:text-gray-400 dark:hover:text-white"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-agile-dark dark:text-white">
              Client Name *
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter client name"
              className={errors.name ? "border-agile-red" : ""}
              disabled={isSubmitting}
            />
            {errors.name && <p className="text-sm text-agile-red">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium text-agile-dark dark:text-white">Client Logo *</Label>
            <ImageUpload
              value={formData.logo}
              onChange={(url) => setFormData({ ...formData, logo: url })}
              onError={(error) => setErrors({ ...errors, logo: error })}
            />
            {errors.logo && <p className="text-sm text-agile-red">{errors.logo}</p>}
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium text-agile-dark dark:text-white">Display Status</Label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="displayStatus"
                  checked={formData.displayStatus === true}
                  onChange={() => setFormData({ ...formData, displayStatus: true })}
                  className="w-4 h-4 text-agile-blue border-gray-300 focus:ring-agile-blue"
                  disabled={isSubmitting}
                />
                <span className="text-sm text-agile-dark dark:text-white">Display on landing page</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="displayStatus"
                  checked={formData.displayStatus === false}
                  onChange={() => setFormData({ ...formData, displayStatus: false })}
                  className="w-4 h-4 text-agile-blue border-gray-300 focus:ring-agile-blue"
                  disabled={isSubmitting}
                />
                <span className="text-sm text-agile-dark dark:text-white">Keep hidden</span>
              </label>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={handleClose} disabled={isSubmitting} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" variant="blue" disabled={isSubmitting} className="flex-1">
              {isSubmitting ? "Updating..." : "Update Client"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
