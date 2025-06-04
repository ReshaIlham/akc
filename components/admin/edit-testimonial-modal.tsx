"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ImageUpload } from "./image-upload"

interface EditTestimonialModalProps {
  isOpen: boolean
  onClose: () => void
  onUpdate: (testimonial: any) => void
  testimonial: any
}

export function EditTestimonialModal({ isOpen, onClose, onUpdate, testimonial }: EditTestimonialModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    company: "",
    rating: 5,
    description: "",
    profilePicture: "",
    status: "displayed" as "displayed" | "hidden",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    if (testimonial) {
      setFormData({
        name: testimonial.name || "",
        position: testimonial.position || "",
        company: testimonial.company || "",
        rating: testimonial.rating || 5,
        description: testimonial.description || "",
        profilePicture: testimonial.profilePicture || testimonial.profilePhoto || "",
        status: testimonial.status || "displayed",
      })
    }
  }, [testimonial])

  if (!isOpen) return null

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }
    if (!formData.position.trim()) {
      newErrors.position = "Position is required"
    }
    if (!formData.company.trim()) {
      newErrors.company = "Company is required"
    }
    if (!formData.description.trim()) {
      newErrors.description = "Description is required"
    }
    if (formData.description.length < 10) {
      newErrors.description = "Description must be at least 10 characters"
    }
    if (formData.rating < 1 || formData.rating > 5) {
      newErrors.rating = "Rating must be between 1 and 5"
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

      const updatedTestimonial = {
        ...testimonial,
        ...formData,
        lastUpdated: new Date().toISOString(),
      }

      onUpdate(updatedTestimonial)
      onClose()
      setErrors({})
    } catch (error) {
      console.error("Error updating testimonial:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    if (!isSubmitting) {
      onClose()
      setErrors({})
    }
  }

  const renderStarRating = () => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setFormData({ ...formData, rating: star })}
            className={`p-1 rounded transition-colors ${
              star <= formData.rating
                ? "text-yellow-400 hover:text-yellow-500"
                : "text-gray-300 dark:text-gray-600 hover:text-gray-400"
            }`}
          >
            <Star className="w-5 h-5 fill-current" />
          </button>
        ))}
        <span className="ml-2 text-sm text-agile-gray dark:text-gray-400">
          {formData.rating} star{formData.rating !== 1 ? "s" : ""}
        </span>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-agile-dark dark:text-white">Edit Testimonial</h2>
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
          {/* Profile Photo */}
          <div className="space-y-2">
            <Label htmlFor="profilePhoto">Profile Picture</Label>
            <ImageUpload
              value={formData.profilePicture}
              onChange={(url) => setFormData({ ...formData, profilePicture: url })}
              onError={(error) => setErrors({ ...errors, profilePicture: error })}
            />
            {errors.profilePicture && <p className="text-sm text-red-600 dark:text-red-400">{errors.profilePicture}</p>}
          </div>

          {/* Name and Position */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">
                Full Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter full name"
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && <p className="text-sm text-red-600 dark:text-red-400">{errors.name}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="position">
                Job Position <span className="text-red-500">*</span>
              </Label>
              <Input
                id="position"
                value={formData.position}
                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                placeholder="e.g., CEO, Project Manager"
                className={errors.position ? "border-red-500" : ""}
              />
              {errors.position && <p className="text-sm text-red-600 dark:text-red-400">{errors.position}</p>}
            </div>
          </div>

          {/* Company */}
          <div className="space-y-2">
            <Label htmlFor="company">
              Company/Client <span className="text-red-500">*</span>
            </Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="Enter company or client name"
              className={errors.company ? "border-red-500" : ""}
            />
            {errors.company && <p className="text-sm text-red-600 dark:text-red-400">{errors.company}</p>}
          </div>

          {/* Rating */}
          <div className="space-y-2">
            <Label>
              Rating <span className="text-red-500">*</span>
            </Label>
            {renderStarRating()}
            {errors.rating && <p className="text-sm text-red-600 dark:text-red-400">{errors.rating}</p>}
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">
              Testimonial Description <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Enter the testimonial content..."
              rows={4}
              className={errors.description ? "border-red-500" : ""}
            />
            <p className="text-xs text-agile-gray dark:text-gray-400">{formData.description.length}/500 characters</p>
            {errors.description && <p className="text-sm text-red-600 dark:text-red-400">{errors.description}</p>}
          </div>

          {/* Status */}
          <div className="space-y-2">
            <Label>Status</Label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="status"
                  value="displayed"
                  checked={formData.status === "displayed"}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value as "displayed" | "hidden" })}
                  className="text-agile-blue focus:ring-agile-blue"
                />
                <span className="text-sm text-agile-dark dark:text-white">Displayed</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="status"
                  value="hidden"
                  checked={formData.status === "hidden"}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value as "displayed" | "hidden" })}
                  className="text-agile-blue focus:ring-agile-blue"
                />
                <span className="text-sm text-agile-dark dark:text-white">Hidden</span>
              </label>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={handleClose} disabled={isSubmitting} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" variant="blue" disabled={isSubmitting} className="flex-1">
              {isSubmitting ? "Updating..." : "Update Testimonial"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
