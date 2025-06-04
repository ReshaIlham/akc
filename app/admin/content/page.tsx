"use client"

import { useState, useEffect } from "react"
import { Search, Plus, Edit, Trash2, ImageIcon, Link2, Tag, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AddContentModal } from "@/components/admin/add-content-modal"
import { EditContentModal } from "@/components/admin/edit-content-modal"
import { ConfirmationDialog } from "@/components/admin/confirmation-dialog"

interface ContentItem {
  id: number
  key: string
  value: string
  type: "Label" | "Image" | "Link"
  lastUpdated: Date
}

// Mock content data - expanded for pagination demo
const initialContent: ContentItem[] = [
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

export default function ContentPage() {
  const [content, setContent] = useState<ContentItem[]>(initialContent)
  const [searchTerm, setSearchTerm] = useState("")
  const [typeFilter, setTypeFilter] = useState<"all" | "Label" | "Image" | "Link">("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [editingContent, setEditingContent] = useState<ContentItem | null>(null)
  const [deleteConfirmation, setDeleteConfirmation] = useState<{
    isOpen: boolean
    contentId: number | null
    contentKey: string
  }>({
    isOpen: false,
    contentId: null,
    contentKey: "",
  })

  const ITEMS_PER_PAGE = 10

  // Filter content based on search term and type
  const filteredContent = content.filter((item) => {
    const matchesSearch =
      item.key.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.value.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesType = typeFilter === "all" || item.type === typeFilter

    return matchesSearch && matchesType
  })

  // Calculate pagination
  const totalPages = Math.ceil(filteredContent.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const paginatedContent = filteredContent.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, typeFilter])

  const handleAddContent = (newContent: Omit<ContentItem, "id" | "lastUpdated">) => {
    const id = content.length > 0 ? Math.max(...content.map((item) => item.id)) + 1 : 1
    setContent([...content, { ...newContent, id, lastUpdated: new Date() }])
    setIsAddModalOpen(false)
  }

  const handleEditContent = (updatedContent: Omit<ContentItem, "id" | "lastUpdated">) => {
    if (!editingContent) return

    setContent(
      content.map((item) =>
        item.id === editingContent.id ? { ...item, ...updatedContent, lastUpdated: new Date() } : item,
      ),
    )
    setEditingContent(null)
  }

  const handleDeleteContent = (id: number, key: string) => {
    setDeleteConfirmation({
      isOpen: true,
      contentId: id,
      contentKey: key,
    })
  }

  const confirmDeleteContent = () => {
    if (deleteConfirmation.contentId) {
      setContent(content.filter((item) => item.id !== deleteConfirmation.contentId))
      setDeleteConfirmation({
        isOpen: false,
        contentId: null,
        contentKey: "",
      })
    }
  }

  const cancelDeleteContent = () => {
    setDeleteConfirmation({
      isOpen: false,
      contentId: null,
      contentKey: "",
    })
  }

  const getTypeIcon = (type: string) => {
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

  const getTypeCount = (type: "Label" | "Image" | "Link") => {
    return content.filter((item) => item.type === type).length
  }

  const formatDate = (date: Date) => {
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))

    if (diffInHours < 1) return "Just now"
    if (diffInHours < 24) return `${diffInHours}h ago`
    if (diffInHours < 168) return `${Math.floor(diffInHours / 24)}d ago`
    return date.toLocaleDateString()
  }

  const totalContent = content.length
  const labelCount = getTypeCount("Label")
  const imageCount = getTypeCount("Image")
  const linkCount = getTypeCount("Link")

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-agile-dark dark:text-white">Content Management</h1>
          <p className="text-agile-gray dark:text-gray-400">
            Manage website content including labels, images, and links
          </p>
        </div>
        <Button onClick={() => setIsAddModalOpen(true)} className="bg-agile-blue hover:bg-agile-blue/90">
          <Plus className="w-4 h-4 mr-2" />
          Add Content
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-agile-gray dark:text-gray-400">Total Content</p>
              <p className="text-2xl font-bold text-agile-dark dark:text-white">{totalContent}</p>
            </div>
            <div className="w-10 h-10 bg-agile-blue/10 rounded-full flex items-center justify-center">
              <FileText className="w-5 h-5 text-agile-blue" />
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-agile-gray dark:text-gray-400">Labels</p>
              <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{labelCount}</p>
            </div>
            <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center">
              <Tag className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-agile-gray dark:text-gray-400">Images</p>
              <p className="text-2xl font-bold text-agile-green dark:text-agile-green-dark">{imageCount}</p>
            </div>
            <div className="w-10 h-10 bg-agile-green/10 rounded-full flex items-center justify-center">
              <ImageIcon className="w-5 h-5 text-agile-green" />
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-agile-gray dark:text-gray-400">Links</p>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{linkCount}</p>
            </div>
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
              <Link2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-agile-gray dark:text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search content..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <Button variant={typeFilter === "all" ? "blue" : "outline"} size="sm" onClick={() => setTypeFilter("all")}>
            All ({totalContent})
          </Button>
          <Button
            variant={typeFilter === "Label" ? "blue" : "outline"}
            size="sm"
            onClick={() => setTypeFilter("Label")}
          >
            <Tag className="mr-1 h-3 w-3" />
            Labels ({labelCount})
          </Button>
          <Button
            variant={typeFilter === "Image" ? "blue" : "outline"}
            size="sm"
            onClick={() => setTypeFilter("Image")}
          >
            <ImageIcon className="mr-1 h-3 w-3" />
            Images ({imageCount})
          </Button>
          <Button variant={typeFilter === "Link" ? "blue" : "outline"} size="sm" onClick={() => setTypeFilter("Link")}>
            <Link2 className="mr-1 h-3 w-3" />
            Links ({linkCount})
          </Button>
        </div>
      </div>

      {/* Content Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-agile-gray dark:text-gray-300 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-agile-gray dark:text-gray-300 uppercase tracking-wider">
                  Content Key
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-agile-gray dark:text-gray-300 uppercase tracking-wider">
                  Value
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-agile-gray dark:text-gray-300 uppercase tracking-wider">
                  Last Updated
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-agile-gray dark:text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {paginatedContent.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
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
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-agile-dark dark:text-white">{item.key}</div>
                  </td>
                  <td className="px-6 py-4">
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
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-agile-gray dark:text-gray-400">
                    {formatDate(item.lastUpdated)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setEditingContent(item)}
                        className="text-agile-blue hover:text-agile-blue/80"
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteContent(item.id, item.key)}
                        className="text-agile-red hover:text-agile-red/80"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
              <FileText className="w-8 h-8 text-agile-gray dark:text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-agile-dark dark:text-white mb-2">No content found</h3>
            <p className="text-agile-gray dark:text-gray-400 mb-4">
              {searchTerm || typeFilter !== "all"
                ? "Try adjusting your search or filter criteria."
                : "Get started by adding your first content."}
            </p>
            {!searchTerm && typeFilter === "all" && (
              <Button onClick={() => setIsAddModalOpen(true)} variant="blue">
                <Plus className="w-4 h-4 mr-2" />
                Add Content
              </Button>
            )}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="text-sm text-agile-gray dark:text-gray-400">
                Showing {startIndex + 1} to {Math.min(startIndex + ITEMS_PER_PAGE, filteredContent.length)} of{" "}
                {filteredContent.length} entries
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "blue" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </Button>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modals */}
      <AddContentModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddContent={handleAddContent}
      />

      {editingContent && (
        <EditContentModal
          isOpen={!!editingContent}
          onClose={() => setEditingContent(null)}
          onEditContent={handleEditContent}
          content={editingContent}
        />
      )}

      {/* Delete Confirmation Dialog */}
      <ConfirmationDialog
        isOpen={deleteConfirmation.isOpen}
        onClose={cancelDeleteContent}
        onConfirm={confirmDeleteContent}
        title="Delete Content"
        message={`Are you sure you want to delete the content "${deleteConfirmation.contentKey}"? This action cannot be undone and may affect your website's display.`}
        confirmText="Delete Content"
        cancelText="Cancel"
        variant="danger"
      />
    </div>
  )
}
