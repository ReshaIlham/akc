"use client"

import { useState, useMemo } from "react"
import { Plus, Search, Edit, Trash2, Star, Eye, EyeOff, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AddTestimonialModal } from "@/components/admin/add-testimonial-modal"
import { EditTestimonialModal } from "@/components/admin/edit-testimonial-modal"
import { ConfirmationDialog } from "@/components/admin/confirmation-dialog"

// Mock testimonials data
const initialTestimonials = [
  {
    id: "1",
    name: "Sarah Johnson",
    position: "CEO",
    company: "TechCorp Solutions",
    rating: 5,
    description:
      "Agilenesia transformed our project management approach completely. Their expertise in agile methodologies helped us deliver projects 40% faster while maintaining exceptional quality. The team's dedication and innovative solutions exceeded our expectations.",
    profilePhoto: "/testimonial-1.png",
    status: "displayed",
    lastUpdated: "2024-01-15T10:30:00Z",
    createdAt: "2024-01-10T09:00:00Z",
  },
  {
    id: "2",
    name: "Michael Chen",
    position: "Project Manager",
    company: "Global Industries",
    rating: 5,
    description:
      "Working with Agilenesia was a game-changer for our organization. Their agile transformation program not only improved our delivery times but also enhanced team collaboration and product quality significantly.",
    profilePhoto: "/testimonial-2.png",
    status: "displayed",
    lastUpdated: "2024-01-14T14:20:00Z",
    createdAt: "2024-01-08T11:15:00Z",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    position: "Operations Director",
    company: "Healthcare Plus",
    rating: 4,
    description:
      "The consulting services provided by Agilenesia helped us streamline our processes and improve efficiency across all departments. Their team's professionalism and expertise are truly remarkable.",
    profilePhoto: "/testimonial-3.png",
    status: "hidden",
    lastUpdated: "2024-01-13T16:45:00Z",
    createdAt: "2024-01-05T13:30:00Z",
  },
  {
    id: "4",
    name: "David Kim",
    position: "CTO",
    company: "StartupX",
    rating: 5,
    description:
      "Agilenesia's project management solutions are top-notch. They helped us scale our development processes and implement best practices that continue to benefit our growing team.",
    profilePhoto: "",
    status: "displayed",
    lastUpdated: "2024-01-12T09:15:00Z",
    createdAt: "2024-01-03T10:00:00Z",
  },
  {
    id: "5",
    name: "Lisa Thompson",
    position: "Product Manager",
    company: "E-commerce Pro",
    rating: 4,
    description:
      "The training programs offered by Agilenesia significantly improved our team's agile practices. The hands-on approach and real-world examples made the learning experience exceptional.",
    profilePhoto: "",
    status: "displayed",
    lastUpdated: "2024-01-11T12:00:00Z",
    createdAt: "2024-01-01T08:45:00Z",
  },
]

type SortField = "name" | "company" | "rating" | "lastUpdated" | "status"
type SortDirection = "asc" | "desc"

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState(initialTestimonials)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<"all" | "displayed" | "hidden">("all")
  const [ratingFilter, setRatingFilter] = useState<"all" | "5" | "4" | "3">("all")
  const [sortField, setSortField] = useState<SortField>("lastUpdated")
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc")
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [selectedTestimonial, setSelectedTestimonial] = useState<any>(null)

  // Statistics
  const stats = useMemo(() => {
    const total = testimonials.length
    const displayed = testimonials.filter((t) => t.status === "displayed").length
    const hidden = testimonials.filter((t) => t.status === "hidden").length
    const avgRating =
      testimonials.length > 0
        ? (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1)
        : "0.0"

    return { total, displayed, hidden, avgRating }
  }, [testimonials])

  // Filtered and sorted testimonials
  const filteredTestimonials = useMemo(() => {
    const filtered = testimonials.filter((testimonial) => {
      const matchesSearch =
        testimonial.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        testimonial.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        testimonial.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
        testimonial.description.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesStatus = statusFilter === "all" || testimonial.status === statusFilter
      const matchesRating = ratingFilter === "all" || testimonial.rating.toString() === ratingFilter

      return matchesSearch && matchesStatus && matchesRating
    })

    // Sort testimonials
    filtered.sort((a, b) => {
      let aValue: any = a[sortField]
      let bValue: any = b[sortField]

      if (sortField === "lastUpdated") {
        aValue = new Date(aValue).getTime()
        bValue = new Date(bValue).getTime()
      } else if (typeof aValue === "string") {
        aValue = aValue.toLowerCase()
        bValue = bValue.toLowerCase()
      }

      if (sortDirection === "asc") {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0
      }
    })

    return filtered
  }, [testimonials, searchTerm, statusFilter, ratingFilter, sortField, sortDirection])

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  const handleAddTestimonial = (newTestimonial: any) => {
    setTestimonials([newTestimonial, ...testimonials])
  }

  const handleEditTestimonial = (updatedTestimonial: any) => {
    setTestimonials(testimonials.map((t) => (t.id === updatedTestimonial.id ? updatedTestimonial : t)))
  }

  const handleDeleteTestimonial = () => {
    if (selectedTestimonial) {
      setTestimonials(testimonials.filter((t) => t.id !== selectedTestimonial.id))
      setIsDeleteDialogOpen(false)
      setSelectedTestimonial(null)
    }
  }

  const handleToggleStatus = (testimonial: any) => {
    const newStatus = testimonial.status === "displayed" ? "hidden" : "displayed"
    const updatedTestimonial = {
      ...testimonial,
      status: newStatus,
      lastUpdated: new Date().toISOString(),
    }
    handleEditTestimonial(updatedTestimonial)
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

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? "text-yellow-400 fill-current" : "text-gray-300 dark:text-gray-600"
            }`}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-agile-dark dark:text-white">Testimonials Management</h1>
          <p className="text-agile-gray dark:text-gray-400">Manage customer testimonials and reviews</p>
        </div>
        <Button onClick={() => setIsAddModalOpen(true)} className="bg-agile-blue hover:bg-agile-blue/90">
          <Plus className="w-4 h-4 mr-2" />
          Add Testimonial
        </Button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-agile-gray dark:text-gray-400">Total Testimonials</p>
              <p className="text-2xl font-bold text-agile-dark dark:text-white">{stats.total}</p>
            </div>
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-agile-gray dark:text-gray-400">Displayed</p>
              <p className="text-2xl font-bold text-agile-dark dark:text-white">{stats.displayed}</p>
            </div>
            <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
              <Eye className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-agile-gray dark:text-gray-400">Hidden</p>
              <p className="text-2xl font-bold text-agile-dark dark:text-white">{stats.hidden}</p>
            </div>
            <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <EyeOff className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-agile-gray dark:text-gray-400">Avg Rating</p>
              <p className="text-2xl font-bold text-agile-dark dark:text-white">{stats.avgRating}</p>
            </div>
            <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg flex items-center justify-center">
              <Star className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-agile-gray dark:text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search testimonials..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <Button
            variant={statusFilter === "all" ? "blue" : "outline"}
            size="sm"
            onClick={() => setStatusFilter("all")}
          >
            All ({stats.total})
          </Button>
          <Button
            variant={statusFilter === "displayed" ? "blue" : "outline"}
            size="sm"
            onClick={() => setStatusFilter("displayed")}
          >
            Displayed ({stats.displayed})
          </Button>
          <Button
            variant={statusFilter === "hidden" ? "blue" : "outline"}
            size="sm"
            onClick={() => setStatusFilter("hidden")}
          >
            Hidden ({stats.hidden})
          </Button>
          <Button
            variant={ratingFilter !== "all" ? "blue" : "outline"}
            size="sm"
            onClick={() => setRatingFilter(ratingFilter === "all" ? "5" : ratingFilter === "5" ? "4" : "all")}
          >
            <Star className="w-4 h-4 mr-1" />
            {ratingFilter === "all" ? "All Ratings" : `${ratingFilter}+ Stars`}
          </Button>
        </div>
      </div>

      {/* Testimonials Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-gray-200 dark:border-gray-700">
              <tr>
                <th className="text-left p-4">
                  <button
                    onClick={() => handleSort("name")}
                    className="flex items-center gap-2 font-medium text-agile-dark dark:text-white hover:text-agile-blue dark:hover:text-agile-blue"
                  >
                    Testimonial
                    {sortField === "name" && <span className="text-xs">{sortDirection === "asc" ? "↑" : "↓"}</span>}
                  </button>
                </th>
                <th className="text-left p-4">
                  <button
                    onClick={() => handleSort("company")}
                    className="flex items-center gap-2 font-medium text-agile-dark dark:text-white hover:text-agile-blue dark:hover:text-agile-blue"
                  >
                    Company
                    {sortField === "company" && <span className="text-xs">{sortDirection === "asc" ? "↑" : "↓"}</span>}
                  </button>
                </th>
                <th className="text-left p-4">
                  <button
                    onClick={() => handleSort("rating")}
                    className="flex items-center gap-2 font-medium text-agile-dark dark:text-white hover:text-agile-blue dark:hover:text-agile-blue"
                  >
                    Rating
                    {sortField === "rating" && <span className="text-xs">{sortDirection === "asc" ? "↑" : "↓"}</span>}
                  </button>
                </th>
                <th className="text-left p-4">
                  <button
                    onClick={() => handleSort("status")}
                    className="flex items-center gap-2 font-medium text-agile-dark dark:text-white hover:text-agile-blue dark:hover:text-agile-blue"
                  >
                    Status
                    {sortField === "status" && <span className="text-xs">{sortDirection === "asc" ? "↑" : "↓"}</span>}
                  </button>
                </th>
                <th className="text-left p-4">
                  <button
                    onClick={() => handleSort("lastUpdated")}
                    className="flex items-center gap-2 font-medium text-agile-dark dark:text-white hover:text-agile-blue dark:hover:text-agile-blue"
                  >
                    Last Updated
                    {sortField === "lastUpdated" && (
                      <span className="text-xs">{sortDirection === "asc" ? "↑" : "↓"}</span>
                    )}
                  </button>
                </th>
                <th className="text-right p-4">
                  <span className="font-medium text-agile-dark dark:text-white">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredTestimonials.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-12">
                    <div className="flex flex-col items-center gap-3">
                      <MessageSquare className="w-12 h-12 text-agile-gray dark:text-gray-400" />
                      <div>
                        <p className="font-medium text-agile-dark dark:text-white">No testimonials found</p>
                        <p className="text-sm text-agile-gray dark:text-gray-400">
                          {searchTerm || statusFilter !== "all" || ratingFilter !== "all"
                            ? "Try adjusting your search or filters"
                            : "Get started by adding your first testimonial"}
                        </p>
                      </div>
                      {!searchTerm && statusFilter === "all" && ratingFilter === "all" && (
                        <Button onClick={() => setIsAddModalOpen(true)} className="mt-2">
                          <Plus className="w-4 h-4 mr-2" />
                          Add Testimonial
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>
              ) : (
                filteredTestimonials.map((testimonial) => (
                  <tr
                    key={testimonial.id}
                    className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-agile-blue/10 flex items-center justify-center overflow-hidden">
                          {testimonial.profilePhoto ? (
                            <img
                              src={testimonial.profilePhoto || "/placeholder.svg"}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <span className="text-sm font-medium text-agile-blue">{getInitials(testimonial.name)}</span>
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-agile-dark dark:text-white">{testimonial.name}</p>
                          <p className="text-sm text-agile-gray dark:text-gray-400">{testimonial.position}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-agile-dark dark:text-white">{testimonial.company}</span>
                    </td>
                    <td className="p-4">{renderStars(testimonial.rating)}</td>
                    <td className="p-4">
                      <button
                        onClick={() => handleToggleStatus(testimonial)}
                        className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium transition-colors ${
                          testimonial.status === "displayed"
                            ? "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/30"
                            : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600"
                        }`}
                      >
                        {testimonial.status === "displayed" ? (
                          <Eye className="w-3 h-3" />
                        ) : (
                          <EyeOff className="w-3 h-3" />
                        )}
                        {testimonial.status === "displayed" ? "Displayed" : "Hidden"}
                      </button>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-agile-gray dark:text-gray-400">
                        {formatDate(testimonial.lastUpdated)}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2 justify-end">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setSelectedTestimonial(testimonial)
                            setIsEditModalOpen(true)
                          }}
                          className="text-agile-blue hover:text-agile-blue/80 hover:bg-agile-blue/10"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setSelectedTestimonial(testimonial)
                            setIsDeleteDialogOpen(true)
                          }}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modals */}
      <AddTestimonialModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddTestimonial}
      />

      <EditTestimonialModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false)
          setSelectedTestimonial(null)
        }}
        onUpdate={handleEditTestimonial}
        testimonial={selectedTestimonial}
      />

      <ConfirmationDialog
        isOpen={isDeleteDialogOpen}
        onClose={() => {
          setIsDeleteDialogOpen(false)
          setSelectedTestimonial(null)
        }}
        onConfirm={handleDeleteTestimonial}
        title="Delete Testimonial"
        message={`Are you sure you want to delete the testimonial from ${selectedTestimonial?.name}? This action cannot be undone.`}
        confirmText="Delete"
        cancelText="Cancel"
        variant="danger"
      />
    </div>
  )
}
