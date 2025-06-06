"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Plus, Search, Filter, Eye, EyeOff, Edit, Trash2, GripVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { AddProductModal } from "@/components/admin/add-product-modal"
import { EditProductModal } from "@/components/admin/edit-product-modal"
import { ConfirmationDialog } from "@/components/admin/confirmation-dialog"
import { cn } from "@/lib/utils"

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
}

// Mock data for products
const mockProducts: Product[] = [
  {
    id: "1",
    title: "Tumbuh",
    category: "Application",
    shortDescription: "Comprehensive learning management system",
    whyChooseProduct:
      "A complete learning management platform designed to help organizations grow their talent through structured learning paths, assessments, and progress tracking.",
    keyFeatures: ["Learning Management", "Progress Tracking", "Assessment Tools", "Reporting Dashboard"],
    originalPrice: "Rp 1,299,000",
    price: "Rp 899,000",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
    badge: "Popular",
    status: "displayed",
    order: 1,
    categoryColor: "blue",
    lastUpdated: "2024-01-15T10:30:00Z",
  },
  {
    id: "2",
    title: "Pantau",
    category: "Application",
    shortDescription: "Advanced project monitoring dashboard",
    whyChooseProduct:
      "Real-time project monitoring and analytics platform that provides comprehensive insights into project performance, team productivity, and resource utilization.",
    keyFeatures: ["Real-time Monitoring", "Analytics Dashboard", "Team Performance", "Resource Management"],
    originalPrice: "Rp 1,999,000",
    price: "Rp 1,599,000",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center",
    status: "displayed",
    order: 2,
    categoryColor: "blue",
    lastUpdated: "2024-01-14T15:45:00Z",
  },
  {
    id: "3",
    title: "Agile Fundamentals Kit",
    category: "Training Kits",
    shortDescription: "Complete agile training materials",
    whyChooseProduct:
      "Comprehensive training kit covering agile methodologies, scrum practices, and team collaboration techniques for modern project management.",
    keyFeatures: ["Training Materials", "Workshop Guides", "Assessment Tools", "Certification"],
    originalPrice: "Rp 2,499,000",
    price: "Rp 1,999,000",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=center",
    badge: "Best Seller",
    status: "displayed",
    order: 3,
    categoryColor: "green",
    lastUpdated: "2024-01-13T09:20:00Z",
  },
  {
    id: "4",
    title: "Project Charter Template",
    category: "Templates",
    shortDescription: "Professional project charter template",
    whyChooseProduct:
      "Ready-to-use project charter template that helps teams define project scope, objectives, stakeholders, and success criteria effectively.",
    keyFeatures: ["Editable Template", "Multiple Formats", "Best Practices", "Examples Included"],
    originalPrice: "Rp 599,000",
    price: "Rp 449,000",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop&crop=center",
    status: "displayed",
    order: 4,
    categoryColor: "red",
    lastUpdated: "2024-01-12T14:10:00Z",
  },
  {
    id: "5",
    title: "Agilenesia T-Shirt",
    category: "Merch & Cards",
    shortDescription: "Premium quality branded t-shirt",
    whyChooseProduct:
      "High-quality cotton t-shirt featuring the Agilenesia logo and motivational agile quotes. Perfect for team building and corporate events.",
    keyFeatures: ["100% Cotton", "Multiple Sizes", "Durable Print", "Comfortable Fit"],
    originalPrice: "Rp 199,000",
    price: "Rp 149,000",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop&crop=center",
    status: "hidden",
    order: 5,
    categoryColor: "red",
    lastUpdated: "2024-01-11T16:45:00Z",
  },
]

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>(mockProducts)
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(mockProducts)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<"all" | "displayed" | "hidden">("all")
  const [categoryFilter, setCategoryFilter] = useState<string>("all")
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [deletingProduct, setDeletingProduct] = useState<Product | null>(null)
  const [draggedItem, setDraggedItem] = useState<Product | null>(null)

  // Filter products based on search and filters
  useEffect(() => {
    const filtered = products.filter((product) => {
      const matchesSearch =
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesStatus = statusFilter === "all" || product.status === statusFilter
      const matchesCategory = categoryFilter === "all" || product.category === categoryFilter

      return matchesSearch && matchesStatus && matchesCategory
    })

    filtered.sort((a, b) => a.order - b.order)
    setFilteredProducts(filtered)
  }, [products, searchTerm, statusFilter, categoryFilter])

  const handleAddProduct = (productData: Omit<Product, "id" | "order" | "lastUpdated">) => {
    const newProduct: Product = {
      ...productData,
      id: Date.now().toString(),
      order: products.length + 1,
      lastUpdated: new Date().toISOString(),
    }
    setProducts([...products, newProduct])
  }

  const handleEditProduct = (productData: Product) => {
    setProducts(products.map((p) => (p.id === productData.id ? productData : p)))
    setEditingProduct(null)
  }

  const handleDeleteProduct = (product: Product) => {
    setProducts(products.filter((p) => p.id !== product.id))
    setDeletingProduct(null)
  }

  const handleToggleStatus = (product: Product) => {
    const newStatus = product.status === "displayed" ? "hidden" : "displayed"
    const updatedProduct = {
      ...product,
      status: newStatus,
      lastUpdated: new Date().toISOString(),
    }
    setProducts(products.map((p) => (p.id === product.id ? updatedProduct : p)))
  }

  const handleDragStart = (e: React.DragEvent, product: Product) => {
    setDraggedItem(product)
    e.dataTransfer.effectAllowed = "move"
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = "move"
  }

  const handleDrop = (e: React.DragEvent, targetProduct: Product) => {
    e.preventDefault()
    if (!draggedItem || draggedItem.id === targetProduct.id) return

    const draggedIndex = products.findIndex((p) => p.id === draggedItem.id)
    const targetIndex = products.findIndex((p) => p.id === targetProduct.id)

    const newProducts = [...products]
    newProducts.splice(draggedIndex, 1)
    newProducts.splice(targetIndex, 0, draggedItem)

    // Update order numbers and last updated
    const updatedProducts = newProducts.map((product, index) => ({
      ...product,
      order: index + 1,
      lastUpdated: new Date().toISOString(),
    }))

    setProducts(updatedProducts)
    setDraggedItem(null)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const stats = {
    total: products.length,
    displayed: products.filter((p) => p.status === "displayed").length,
    hidden: products.filter((p) => p.status === "hidden").length,
  }

  const categories = ["Application", "Training Kits", "Templates", "Merch & Cards"]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-agile-dark dark:text-white">Products Management</h1>
          <p className="text-agile-gray dark:text-gray-400">Manage your product catalog and pricing</p>
        </div>
        <Button onClick={() => setIsAddModalOpen(true)} className="bg-agile-blue hover:bg-agile-blue/90">
          <Plus size={16} className="mr-2" />
          Add Product
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-agile-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-agile-gray dark:text-gray-400">Total Products</p>
              <p className="text-2xl font-bold text-agile-dark dark:text-white">{stats.total}</p>
            </div>
            <div className="w-12 h-12 bg-agile-blue/10 rounded-lg flex items-center justify-center">
              <Eye className="w-6 h-6 text-agile-blue" />
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-agile-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-agile-gray dark:text-gray-400">Displayed</p>
              <p className="text-2xl font-bold text-agile-green dark:text-agile-green-dark">{stats.displayed}</p>
            </div>
            <div className="w-12 h-12 bg-agile-green/10 rounded-lg flex items-center justify-center">
              <Eye className="w-6 h-6 text-agile-green" />
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-agile-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-agile-gray dark:text-gray-400">Hidden</p>
              <p className="text-2xl font-bold text-agile-gray dark:text-gray-400">{stats.hidden}</p>
            </div>
            <div className="w-12 h-12 bg-agile-gray/10 rounded-lg flex items-center justify-center">
              <EyeOff className="w-6 h-6 text-agile-gray dark:text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-agile-gray dark:text-gray-400"
              size={16}
            />
            <Input
              placeholder="Search products by title, category, or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex items-center gap-2">
            <Filter size={16} className="text-agile-gray dark:text-gray-400" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as "all" | "displayed" | "hidden")}
              className="text-sm px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-agile-dark text-agile-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-agile-blue focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="displayed">Displayed</option>
              <option value="hidden">Hidden</option>
            </select>
          </div>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="text-sm px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-agile-dark text-agile-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-agile-blue focus:border-transparent"
          >
            <option value="all">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white dark:bg-agile-dark rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        {filteredProducts.length === 0 ? (
          <div className="p-12 text-center">
            <div className="w-16 h-16 bg-agile-gray/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-agile-gray/20 rounded"></div>
            </div>
            <h3 className="text-lg font-medium text-agile-dark dark:text-white mb-2">No products found</h3>
            <p className="text-agile-gray dark:text-gray-400 mb-4">
              {searchTerm || statusFilter !== "all" || categoryFilter !== "all"
                ? "Try adjusting your search or filters"
                : "Get started by adding your first product"}
            </p>
            {!searchTerm && statusFilter === "all" && categoryFilter === "all" && (
              <Button onClick={() => setIsAddModalOpen(true)} className="bg-agile-blue hover:bg-agile-blue/90">
                <Plus size={16} className="mr-2" />
                Add Product
              </Button>
            )}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-agile-gray dark:text-gray-400 uppercase tracking-wider">
                    Order
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-agile-gray dark:text-gray-400 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-agile-gray dark:text-gray-400 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-agile-gray dark:text-gray-400 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-agile-gray dark:text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-agile-gray dark:text-gray-400 uppercase tracking-wider">
                    Last Updated
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-agile-gray dark:text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-agile-dark divide-y divide-gray-200 dark:divide-gray-700">
                {filteredProducts.map((product) => (
                  <tr
                    key={product.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, product)}
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, product)}
                    className={cn(
                      "hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-move",
                      draggedItem?.id === product.id && "opacity-50",
                    )}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <GripVertical size={16} className="text-agile-gray dark:text-gray-400 mr-2" />
                        <span className="text-sm text-agile-gray dark:text-gray-400">#{product.order}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.title}
                          className="w-12 h-12 rounded-lg object-cover mr-4"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <div className="text-sm font-medium text-agile-dark dark:text-white">{product.title}</div>
                            {product.badge && (
                              <Badge variant="secondary" className="text-xs">
                                {product.badge}
                              </Badge>
                            )}
                          </div>
                          <div className="text-sm text-agile-gray dark:text-gray-400">{product.shortDescription}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={cn(
                          "inline-block px-3 py-1 text-xs font-medium rounded-full",
                          product.categoryColor === "blue" &&
                            "bg-agile-blue/10 text-agile-blue dark:bg-agile-blue-dark/10 dark:text-agile-blue-dark",
                          product.categoryColor === "green" &&
                            "bg-agile-green/10 text-agile-green dark:bg-agile-green-dark/10 dark:text-agile-green-dark",
                          product.categoryColor === "red" &&
                            "bg-agile-red/10 text-agile-red dark:bg-agile-red-dark/10 dark:text-agile-red-dark",
                        )}
                      >
                        {product.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm">
                        <div className="font-medium text-agile-dark dark:text-white">{product.price}</div>
                        {product.originalPrice !== product.price && (
                          <div className="text-xs text-agile-gray dark:text-gray-400 line-through">
                            {product.originalPrice}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => handleToggleStatus(product)}
                        className={cn(
                          "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-colors",
                          product.status === "displayed"
                            ? "bg-agile-green/10 text-agile-green dark:bg-agile-green-dark/10 dark:text-agile-green-dark hover:bg-agile-green/20"
                            : "bg-agile-gray/10 text-agile-gray dark:bg-gray-600/10 dark:text-gray-400 hover:bg-agile-gray/20",
                        )}
                      >
                        {product.status === "displayed" ? (
                          <>
                            <Eye size={12} className="mr-1" />
                            Displayed
                          </>
                        ) : (
                          <>
                            <EyeOff size={12} className="mr-1" />
                            Hidden
                          </>
                        )}
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-agile-gray dark:text-gray-400">
                        {formatDate(product.lastUpdated)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setEditingProduct(product)}
                          className="text-agile-blue dark:text-agile-blue-dark hover:bg-agile-blue/10"
                        >
                          <Edit size={16} />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setDeletingProduct(product)}
                          className="text-agile-red dark:text-agile-red-dark hover:bg-agile-red/10"
                        >
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modals */}
      <AddProductModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} onAdd={handleAddProduct} />

      {editingProduct && (
        <EditProductModal
          isOpen={true}
          onClose={() => setEditingProduct(null)}
          onEdit={handleEditProduct}
          product={editingProduct}
        />
      )}

      {deletingProduct && (
        <ConfirmationDialog
          isOpen={true}
          onClose={() => setDeletingProduct(null)}
          onConfirm={() => handleDeleteProduct(deletingProduct)}
          title="Delete Product"
          description={`Are you sure you want to delete ${deletingProduct.title}? This action cannot be undone and will remove the product from your website.`}
          confirmText="Delete Product"
          cancelText="Cancel"
        />
      )}
    </div>
  )
}
