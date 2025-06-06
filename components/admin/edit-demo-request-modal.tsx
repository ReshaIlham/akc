"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface DemoRequest {
  id: string
  name: string
  email: string
  phone: string
  product: string
  needs: string
  status: "pending" | "followed_up"
  lastUpdated: string
  submittedAt: string
}

interface EditDemoRequestModalProps {
  isOpen: boolean
  onClose: () => void
  onEdit: (request: DemoRequest) => void
  request: DemoRequest
}

export function EditDemoRequestModal({ isOpen, onClose, onEdit, request }: EditDemoRequestModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    needs: "",
    status: "pending" as "pending" | "followed_up",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const products = [
    "Tumbuh - Learning Management System",
    "Pantau - Project Management Tool",
    "Latih - Practice Application",
    "Agile Fundamentals Kit",
    "Scrum Master Toolkit",
    "Agile Leadership Program",
    "Agile Project Documentation",
    "Project Management Toolkit",
    "Agile Metrics Dashboard",
    "Agile T-Shirts",
    "Project Management Cards",
    "Project Management Monopoly",
  ]

  useEffect(() => {
    if (request) {
      setFormData({
        name: request.name,
        email: request.email,
        phone: request.phone,
        product: request.product,
        needs: request.needs,
        status: request.status,
      })
    }
  }, [request])

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    if (!formData.phone.trim()) newErrors.phone = "Phone is required"
    if (!formData.product.trim()) newErrors.product = "Product is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    const updatedRequest: DemoRequest = {
      ...request,
      ...formData,
      lastUpdated: new Date().toISOString(),
    }

    onEdit(updatedRequest)
    setErrors({})
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-agile-dark rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-agile-dark dark:text-white">Edit Demo Request</h2>
          <button
            onClick={onClose}
            className="text-agile-gray dark:text-gray-400 hover:text-agile-dark dark:hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={errors.phone ? "border-red-500" : ""}
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div>
              <Label htmlFor="status">Status *</Label>
              <select
                id="status"
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as "pending" | "followed_up" })}
                className="text-sm w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-agile-dark text-agile-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-agile-blue focus:border-transparent"
              >
                <option value="pending">Pending</option>
                <option value="followed_up">Followed Up</option>
              </select>
            </div>
          </div>

          <div>
            <Label htmlFor="product">Product *</Label>
            <select
              id="product"
              value={formData.product}
              onChange={(e) => setFormData({ ...formData, product: e.target.value })}
              className="text-sm w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-agile-dark text-agile-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-agile-blue focus:border-transparent"
            >
              <option value="">Select a product</option>
              {products.map((product) => (
                <option key={product} value={product}>
                  {product}
                </option>
              ))}
            </select>
            {errors.product && <p className="text-red-500 text-sm mt-1">{errors.product}</p>}
          </div>

          <div>
            <Label htmlFor="needs">Needs (Optional)</Label>
            <Textarea
              id="needs"
              rows={4}
              value={formData.needs}
              onChange={(e) => setFormData({ ...formData, needs: e.target.value })}
              placeholder="Describe specific requirements or questions..."
            />
          </div>

          <div className="flex justify-end gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-agile-blue hover:bg-agile-blue/90">
              Update Request
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
