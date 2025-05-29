"use client"

import type React from "react"

import { useState } from "react"
import { X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface RequestDemoModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
  preSelectedProduct?: string
}

export function RequestDemoModal({ isOpen, onClose, onSuccess, preSelectedProduct }: RequestDemoModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: preSelectedProduct || "",
    needs: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const products = [
    { value: "", label: "Select a product" },
    { value: "tumbuh", label: "Tumbuh - Learning Management System" },
    { value: "pantau", label: "Pantau - Project Management Tool" },
    { value: "latih", label: "Latih - Practice Application" },
    { value: "agile-fundamentals-kit", label: "Agile Fundamentals Kit" },
    { value: "scrum-master-toolkit", label: "Scrum Master Toolkit" },
    { value: "agile-leadership-program", label: "Agile Leadership Program" },
    { value: "agile-project-documentation", label: "Agile Project Documentation" },
    { value: "project-management-toolkit", label: "Project Management Toolkit" },
    { value: "agile-metrics-dashboard", label: "Agile Metrics Dashboard" },
    { value: "agile-tshirts", label: "Agile T-Shirts" },
    { value: "project-management-cards", label: "Project Management Cards" },
    { value: "project-management-monopoly", label: "Project Management Monopoly" },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    onSuccess()
    onClose()

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      product: preSelectedProduct || "",
      needs: "",
    })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal */}
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <div>
            <h2 className="text-2xl font-bold text-agile-dark dark:text-white">Request Demo</h2>
            <p className="text-sm text-agile-gray dark:text-gray-300 mt-1">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
          >
            <X className="h-5 w-5 text-agile-gray dark:text-gray-400" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-agile-dark dark:text-white">
              Full Name *
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="border-agile-gray/30 focus:border-agile-blue focus:ring-agile-blue/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-agile-blue-dark dark:focus:ring-agile-blue-dark/20"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-agile-dark dark:text-white">
              Email Address *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
              className="border-agile-gray/30 focus:border-agile-blue focus:ring-agile-blue/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-agile-blue-dark dark:focus:ring-agile-blue-dark/20"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2 text-agile-dark dark:text-white">
              Phone Number *
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
              className="border-agile-gray/30 focus:border-agile-blue focus:ring-agile-blue/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-agile-blue-dark dark:focus:ring-agile-blue-dark/20"
            />
          </div>

          <div>
            <label htmlFor="product" className="block text-sm font-medium mb-2 text-agile-dark dark:text-white">
              Product *
            </label>
            <select
              id="product"
              name="product"
              value={formData.product}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-agile-gray/30 rounded-md shadow-sm focus:outline-none focus:ring-agile-blue focus:border-agile-blue dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-agile-blue-dark dark:focus:border-agile-blue-dark"
            >
              {products.map((product) => (
                <option key={product.value} value={product.value}>
                  {product.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="needs" className="block text-sm font-medium mb-2 text-agile-dark dark:text-white">
              Write down your needs (Optional)
            </label>
            <Textarea
              id="needs"
              name="needs"
              value={formData.needs}
              onChange={handleChange}
              placeholder="Tell us about your specific requirements or questions..."
              rows={4}
              className="border-agile-gray/30 focus:border-agile-blue focus:ring-agile-blue/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-agile-blue-dark dark:focus:ring-agile-blue-dark/20"
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-agile-gray/30 text-agile-gray hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              Cancel
            </Button>
            <Button type="submit" variant="blue" disabled={isSubmitting} className="flex-1">
              {isSubmitting ? (
                "Submitting..."
              ) : (
                <>
                  Submit Request
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
