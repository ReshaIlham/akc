"use client"

import { useState } from "react"
import { Search, Plus, Edit, Trash2, ImageIcon, Link2, Tag, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AddContentModal } from "@/components/admin/add-content-modal"
import { EditContentModal } from "@/components/admin/edit-content-modal"
import { formatDistanceToNow } from "date-fns"

// Mock content data - expanded for pagination demo
const initialContent = [
  {
    id: 1,
    key: "hero_title",
    value: "Transform Your Project Management",
    type: "Label",
    lastUpdated: new Date(2024, 4, 15),
  },
  {
    id: 2,
    key: "hero_image",
    value: "/uploads/images/1703123456789-hero-banner.jpg",
    type: "Image",
    lastUpdated: new Date(2024, 5, 20),
  },
  {
    id: 3,
    key: "contact_link",
    value: "https://agilenesia.com/contact",
    type: "Link",
    lastUpdated: new Date(2024, 4, 10),
  },
  {
    id: 4,
    key: "about_banner",
    value: "/uploads/images/1703123456790-about-us.png",
    type: "Image",
    lastUpdated: new Date(2024, 5, 18),
  },
  {
    id: 5,
    key: "footer_text",
    value: "© 2024 Agilenesia. All rights reserved.",
    type: "Label",
    lastUpdated: new Date(2024, 4, 12),
  },
  {
    id: 6,
    key: "services_image",
    value: "/uploads/images/1703123456791-services.jpg",
    type: "Image",
    lastUpdated: new Date(2024, 5, 15),
  },
  {
    id: 7,
    key: "documentation_link",
    value: "https://docs.agilenesia.com",
    type: "Link",
    lastUpdated: new Date(2024, 4, 8),
  },
  {
    id: 8,
    key: "company_description",
    value: "Leading project management solutions provider",
    type: "Label",
    lastUpdated: new Date(2024, 5, 22),
  },
  {
    id: 9,
    key: "team_photo",
    value: "/uploads/images/1703123456792-team.png",
    type: "Image",
    lastUpdated: new Date(2024, 5, 10),
  },
  {
    id: 10,
    key: "support_link",
    value: "https://support.agilenesia.com",
    type: "Link",
    lastUpdated: new Date(2024, 4, 5),
  },
]

const ITEMS_PER_PAGE = 10

export default function ContentPage() {
  const [content, setContent] = useState(initialContent)
  const [searchTerm, setSearchTerm] = useState("")
  const [typeFilter, setTypeFilter] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [currentContent, setCurrentContent] = useState(null)

  // Filter content based on search term and type
  const filteredContent = content.filter((item) => {
    const matchesSearch =
      item.key.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.value.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesType = typeFilter === "All" || item.type === typeFilter

    return matchesSearch && matchesType
  })

  // Calculate pagination
  const totalPages = Math.ceil(filteredContent.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const paginatedContent = filteredContent.slice(startIndex, endIndex)

  // Reset to first page when filters change
  const handleSearchChange = (value) => {
    setSearchTerm(value)
    setCurrentPage(1)
  }

  const handleTypeFilterChange = (type) => {
    setTypeFilter(type)
    setCurrentPage(1)
  }

  const handleAddContent = (newContent) => {
    const id = content.length > 0 ? Math.max(...content.map((item) => item.id)) + 1 : 1
    setContent([...content, { ...newContent, id, lastUpdated: new Date() }])
    setIsAddModalOpen(false)
  }

  const handleEditContent = (updatedContent) => {
    setContent(
      content.map((item) => (item.id === updatedContent.id ? { ...updatedContent, lastUpdated: new Date() } : item)),
    )
    setIsEditModalOpen(false)
    setCurrentContent(null)
  }

  const handleDeleteContent = (id) => {
    if (window.confirm("Are you sure you want to delete this content?")) {
      setContent(content.filter((item) => item.id !== id))
      // Adjust current page if necessary
      const newFilteredContent = content.filter((item) => item.id !== id)
      const newTotalPages = Math.ceil(newFilteredContent.length / ITEMS_PER_PAGE)
      if (currentPage > newTotalPages && newTotalPages > 0) {
        setCurrentPage(newTotalPages)
      }
    }
  }

  const openEditModal = (contentItem) => {
    setCurrentContent(contentItem)
    setIsEditModalOpen(true)
  }

  const getTypeIcon = (type) => {
    switch (type) {
      case "Label":
        return <Tag className="h-4 w-4" />
      case "Image":
        return <ImageIcon className="h-4 w-4" />
      case "Link":
        return <Link2 className="h-4 w-4" />
      default:
        return <Tag className="h-4 w-4" />
    }
  }

  const getTypeCount = (type) => {
    return content.filter((item) => item.type === type).length
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-agile-dark dark:text-white">Content Management</h1>
        <Button variant="blue" onClick={() => setIsAddModalOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Content
        </Button>
      </div>

      <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="text-agile-dark dark:text-white">All Content</CardTitle>

          {/* Filters and Search */}
          <div className="space-y-4">
            {/* Type Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={typeFilter === "All" ? "blue" : "ghost"}
                size="sm"
                onClick={() => handleTypeFilterChange("All")}
                className="text-sm"
              >
                All ({content.length})
              </Button>
              <Button
                variant={typeFilter === "Label" ? "blue" : "ghost"}
                size="sm"
                onClick={() => handleTypeFilterChange("Label")}
                className="text-sm"
              >
                <Tag className="mr-1 h-3 w-3" />
                Labels ({getTypeCount("Label")})
              </Button>
              <Button
                variant={typeFilter === "Image" ? "blue" : "ghost"}
                size="sm"
                onClick={() => handleTypeFilterChange("Image")}
                className="text-sm"
              >
                <ImageIcon className="mr-1 h-3 w-3" />
                Images ({getTypeCount("Image")})
              </Button>
              <Button
                variant={typeFilter === "Link" ? "blue" : "ghost"}
                size="sm"
                onClick={() => handleTypeFilterChange("Link")}
                className="text-sm"
              >
                <Link2 className="mr-1 h-3 w-3" />
                Links ({getTypeCount("Link")})
              </Button>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-agile-gray dark:text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search content..."
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="pl-10 border-agile-gray/30 focus:border-agile-blue focus:ring-agile-blue/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 font-medium text-agile-gray dark:text-gray-300">Type</th>
                  <th className="text-left py-3 px-4 font-medium text-agile-gray dark:text-gray-300">Content Key</th>
                  <th className="text-left py-3 px-4 font-medium text-agile-gray dark:text-gray-300">Value</th>
                  <th className="text-left py-3 px-4 font-medium text-agile-gray dark:text-gray-300">Last Updated</th>
                  <th className="text-left py-3 px-4 font-medium text-agile-gray dark:text-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedContent.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <span
                          className={`p-1.5 rounded-full mr-2 ${
                            item.type === "Label"
                              ? "bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400"
                              : item.type === "Image"
                                ? "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400"
                                : "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                          }`}
                        >
                          {getTypeIcon(item.type)}
                        </span>
                        <span className="text-agile-dark dark:text-white">{item.type}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-medium text-agile-dark dark:text-white">{item.key}</div>
                    </td>
                    <td className="py-3 px-4">
                      {item.type === "Image" ? (
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded overflow-hidden mr-3 flex-shrink-0">
                            <img
                              src={item.value || "/placeholder.svg"}
                              alt="Preview"
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.src = "/placeholder.svg"
                              }}
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-sm font-medium text-agile-dark dark:text-white truncate">
                              {item.value.split("/").pop() || "Uploaded Image"}
                            </div>
                            <div className="text-xs text-agile-gray dark:text-gray-400 truncate">{item.value}</div>
                          </div>
                        </div>
                      ) : (
                        <div className="text-agile-gray dark:text-gray-300 max-w-xs truncate">{item.value}</div>
                      )}
                    </td>
                    <td className="py-3 px-4 text-sm text-agile-gray dark:text-gray-300">
                      {formatDistanceToNow(item.lastUpdated, { addSuffix: true })}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm" onClick={() => openEditModal(item)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-agile-red dark:text-agile-red-dark hover:bg-red-50 dark:hover:bg-red-900/20"
                          onClick={() => handleDeleteContent(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {paginatedContent.length === 0 && (
              <div className="text-center py-8 text-agile-gray dark:text-gray-400">
                {filteredContent.length === 0 ? "No content found matching your criteria." : "No content to display."}
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="text-sm text-agile-gray dark:text-gray-400">
                Showing {startIndex + 1} to {Math.min(endIndex, filteredContent.length)} of {filteredContent.length}{" "}
                entries
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="text-agile-gray dark:text-gray-400"
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Previous
                </Button>

                <div className="flex space-x-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "blue" : "ghost"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                      className="w-8 h-8 p-0"
                    >
                      {page}
                    </Button>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="text-agile-gray dark:text-gray-400"
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <AddContentModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddContent={handleAddContent}
      />

      {currentContent && (
        <EditContentModal
          isOpen={isEditModalOpen}
          onClose={() => {
            setIsEditModalOpen(false)
            setCurrentContent(null)
          }}
          onEditContent={handleEditContent}
          content={currentContent}
        />
      )}
    </div>
  )
}
