"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ImageUpload } from "@/components/admin/image-upload"

interface Product {
  id: string
  title: string
  category: string
  shortDescription: string
  whyChooseProduct: string
  keyFeatures: string[]
  originalPrice: string
  price: string
  image: string
  badge?: string
  status: "displayed" | "hidden"
  order: number
  categoryColor: string
  lastUpdated: string
  link: string // Link field is now mandatory
}

interface EditProductModalProps {
  isOpen: boolean
  onClose: () => void
  onEdit: (product: Product) => void
  product: Product
}

export function EditProductModal({ isOpen, onClose, onEdit, product }: EditProductModalProps) {
  const [formData, setFormData] = useState({
    title: "",
    category: "Application",
    shortDescription: "",
    whyChooseProduct: "",
    keyFeatures: "",
    originalPrice: "",
    price: "",
    image: "",
    badge: "",
    status: "displayed" as "displayed" | "hidden",
    link: "", // Initialize link field
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const categories = [
    { value: "Application", color: "blue" },
    { value: "Training Kits", color: "green" },
    { value: "Templates", color: "red" },
    { value: "Merch & Cards", color: "red" },
  ]

  const getCategoryColor = (category: string) => {
    const cat = categories.find((c) => c.value === category)
    return cat?.color || "blue"
  }

  useEffect(() => {
    if (product) {
      setFormData({
        title: product.title,
        category: product.category,
        shortDescription: product.shortDescription,
        whyChooseProduct: product.whyChooseProduct,
        keyFeatures: product.keyFeatures.join("\n"),
        originalPrice: product.originalPrice,
        price: product.price,
        image: product.image,
        badge: product.badge || "",
        status: product.status,
        link: product.link || "", // Initialize link from existing product data
      })
    }
  }, [product])

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.title.trim()) newErrors.title = "Title is required"
    if (!formData.shortDescription.trim()) newErrors.shortDescription = "Short description is required"
    if (!formData.whyChooseProduct.trim()) newErrors.whyChooseProduct = "Why choose product is required"
    if (!formData.keyFeatures.trim()) newErrors.keyFeatures = "Key features are required"
    if (!formData.price.trim()) newErrors.price = "Price is required"
    if (!formData.image.trim()) newErrors.image = "Image is required"
    if (!formData.link.trim()) newErrors.link = "Product link is required" // Make link mandatory

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    const updatedProduct: Product = {
      ...product,
      ...formData,
      keyFeatures: formData.keyFeatures.split("\n").filter((f) => f.trim()),
      categoryColor: getCategoryColor(formData.category),
      badge: formData.badge || undefined,
      link: formData.link, // Link is now mandatory, no || undefined
      lastUpdated: new Date().toISOString(),
    }

    onEdit(updatedProduct)
    setErrors({})
  }

  const handleImageUpload = (imageUrl: string) => {
    setFormData({ ...formData, image: imageUrl })
    if (errors.image) {
      setErrors({ ...errors, image: "" })
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-agile-dark rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-agile-dark dark:text-white">Edit Product</h2>
          <button
            onClick={onClose}
            className="text-agile-gray dark:text-gray-400 hover:text-agile-dark dark:hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Product Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className={errors.title ? "border-red-500" : ""}
                />
                {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
              </div>

              <div>
                <Label htmlFor="category">Category *</Label>
                <select
                  id="category"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="text-sm w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-agile-dark text-agile-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-agile-blue focus:border-transparent"
                >
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.value}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <Label htmlFor="shortDescription">Short Description *</Label>
                <Textarea
                  id="shortDescription"
                  rows={2}
                  value={formData.shortDescription}
                  onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                  className={errors.shortDescription ? "border-red-500" : ""}
                />
                {errors.shortDescription && <p className="text-red-500 text-sm mt-1">{errors.shortDescription}</p>}
              </div>

              <div>
                <Label htmlFor="whyChooseProduct">Why Choose Product *</Label>
                <Textarea
                  id="whyChooseProduct"
                  rows={4}
                  value={formData.whyChooseProduct}
                  onChange={(e) => setFormData({ ...formData, whyChooseProduct: e.target.value })}
                  className={errors.whyChooseProduct ? "border-red-500" : ""}
                />
                {errors.whyChooseProduct && <p className="text-red-500 text-sm mt-1">{errors.whyChooseProduct}</p>}
              </div>

              <div>
                <Label htmlFor="keyFeatures">Key Features (one per line) *</Label>
                <Textarea
                  id="keyFeatures"
                  rows={4}
                  placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
                  value={formData.keyFeatures}
                  onChange={(e) => setFormData({ ...formData, keyFeatures: e.target.value })}
                  className={errors.keyFeatures ? "border-red-500" : ""}
                />
                {errors.keyFeatures && <p className="text-red-500 text-sm mt-1">{errors.keyFeatures}</p>}
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="originalPrice">Original Price</Label>
                  <Input
                    id="originalPrice"
                    placeholder="Rp 1,000,000"
                    value={formData.originalPrice}
                    onChange={(e) => setFormData({ ...formData, originalPrice: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="price">Current Price *</Label>
                  <Input
                    id="price"
                    placeholder="Rp 800,000"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className={errors.price ? "border-red-500" : ""}
                  />
                  {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
                </div>
              </div>

              <div>
                <Label htmlFor="badge">Badge (optional)</Label>
                <Input
                  id="badge"
                  placeholder="Popular, Best Seller, New, etc."
                  value={formData.badge}
                  onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="link">Product Link *</Label>
                <Input
                  id="link"
                  placeholder="e.g., https://yourproduct.com/buy"
                  value={formData.link}
                  onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                  className={errors.link ? "border-red-500" : ""}
                />
                {errors.link && <p className="text-red-500 text-sm mt-1">{errors.link}</p>}
              </div>

              <div>
                <Label htmlFor="status">Status *</Label>
                <select
                  id="status"
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value as "displayed" | "hidden" })}
                  className="text-sm w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-agile-dark text-agile-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-agile-blue focus:border-transparent"
                >
                  <option value="displayed">Displayed</option>
                  <option value="hidden">Hidden</option>
                </select>
              </div>

              <div>
                <Label>Product Image *</Label>
                <ImageUpload onImageUpload={handleImageUpload} currentImage={formData.image} />
                {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-agile-blue hover:bg-agile-blue/90">
              Update Product
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
