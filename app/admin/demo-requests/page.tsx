"use client"

import { useState, useEffect } from "react"
import { Search, Filter, Edit, Eye, Clock, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { EditDemoRequestModal } from "@/components/admin/edit-demo-request-modal"
import { cn } from "@/lib/utils"

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

// Mock data for demo requests
const mockDemoRequests: DemoRequest[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+62 812 3456 7890",
    product: "Tumbuh - Learning Management System",
    needs:
      "We need a comprehensive learning management system for our 500+ employees to track training progress and certifications.",
    status: "pending",
    lastUpdated: "2024-01-15T10:30:00Z",
    submittedAt: "2024-01-15T10:30:00Z",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah.johnson@techcorp.com",
    phone: "+62 813 9876 5432",
    product: "Pantau - Project Management Tool",
    needs:
      "Looking for a project monitoring solution that can handle multiple concurrent projects with real-time analytics.",
    status: "followed_up",
    lastUpdated: "2024-01-14T15:45:00Z",
    submittedAt: "2024-01-14T09:20:00Z",
  },
  {
    id: "3",
    name: "Michael Chen",
    email: "m.chen@startup.io",
    phone: "+62 814 5555 1234",
    product: "Agile Fundamentals Kit",
    needs: "Our startup team wants to implement agile methodologies. Need training materials and guidance.",
    status: "pending",
    lastUpdated: "2024-01-13T14:20:00Z",
    submittedAt: "2024-01-13T14:20:00Z",
  },
  {
    id: "4",
    name: "Lisa Wang",
    email: "lisa.wang@enterprise.com",
    phone: "+62 815 7777 8888",
    product: "Project Charter Template",
    needs: "Need standardized project charter templates for our enterprise project management office.",
    status: "followed_up",
    lastUpdated: "2024-01-12T11:10:00Z",
    submittedAt: "2024-01-12T08:30:00Z",
  },
  {
    id: "5",
    name: "David Rodriguez",
    email: "david.r@consulting.com",
    phone: "+62 816 9999 0000",
    product: "Agile T-Shirts",
    needs: "Looking to purchase branded agile t-shirts for our team building event. Need bulk pricing.",
    status: "pending",
    lastUpdated: "2024-01-11T16:45:00Z",
    submittedAt: "2024-01-11T16:45:00Z",
  },
  {
    id: "6",
    name: "Emma Wilson",
    email: "emma.wilson@startup.com",
    phone: "+62 817 1111 2222",
    product: "Scrum Master Certification",
    needs: "Looking for Scrum Master certification training for our development team.",
    status: "pending",
    lastUpdated: "2024-01-10T14:30:00Z",
    submittedAt: "2024-01-10T14:30:00Z",
  },
  {
    id: "7",
    name: "Robert Kim",
    email: "robert.kim@enterprise.co.id",
    phone: "+62 818 3333 4444",
    product: "Kanban Board Template",
    needs: "Need customizable Kanban board templates for our project management workflow.",
    status: "followed_up",
    lastUpdated: "2024-01-09T11:20:00Z",
    submittedAt: "2024-01-09T09:15:00Z",
  },
  {
    id: "8",
    name: "Maria Santos",
    email: "maria.santos@consulting.id",
    phone: "+62 819 5555 6666",
    product: "Agile Coaching Services",
    needs: "Seeking agile coaching services for our organization's digital transformation initiative.",
    status: "pending",
    lastUpdated: "2024-01-08T16:45:00Z",
    submittedAt: "2024-01-08T16:45:00Z",
  },
  {
    id: "9",
    name: "James Lee",
    email: "james.lee@techfirm.com",
    phone: "+62 820 7777 8888",
    product: "Project Risk Assessment Tool",
    needs: "Need a comprehensive tool for project risk assessment and mitigation planning.",
    status: "followed_up",
    lastUpdated: "2024-01-07T13:30:00Z",
    submittedAt: "2024-01-07T10:20:00Z",
  },
  {
    id: "10",
    name: "Anna Putri",
    email: "anna.putri@localcompany.co.id",
    phone: "+62 821 9999 0000",
    product: "Team Building Workshop",
    needs: "Interested in team building workshops focused on agile collaboration and communication.",
    status: "pending",
    lastUpdated: "2024-01-06T15:15:00Z",
    submittedAt: "2024-01-06T15:15:00Z",
  },
]

export default function DemoRequestsPage() {
  const [demoRequests, setDemoRequests] = useState<DemoRequest[]>(mockDemoRequests)
  const [filteredRequests, setFilteredRequests] = useState<DemoRequest[]>(mockDemoRequests)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<"all" | "pending" | "followed_up">("all")
  const [editingRequest, setEditingRequest] = useState<DemoRequest | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const requestsPerPage = 8

  // Filter requests based on search and filters
  useEffect(() => {
    const filtered = demoRequests.filter((request) => {
      const matchesSearch =
        request.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        request.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        request.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
        request.needs.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesStatus = statusFilter === "all" || request.status === statusFilter

      return matchesSearch && matchesStatus
    })

    // Sort by submission date (newest first)
    filtered.sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime())
    setFilteredRequests(filtered)
    setCurrentPage(1)
  }, [demoRequests, searchTerm, statusFilter])

  // Pagination
  const totalPages = Math.ceil(filteredRequests.length / requestsPerPage)
  const startIndex = (currentPage - 1) * requestsPerPage
  const paginatedRequests = filteredRequests.slice(startIndex, startIndex + requestsPerPage)

  const handleEditRequest = (requestData: DemoRequest) => {
    setDemoRequests(demoRequests.map((r) => (r.id === requestData.id ? requestData : r)))
    setEditingRequest(null)
  }

  const handleToggleStatus = (request: DemoRequest) => {
    const newStatus = request.status === "pending" ? "followed_up" : "pending"
    const updatedRequest = {
      ...request,
      status: newStatus,
      lastUpdated: new Date().toISOString(),
    }
    setDemoRequests(demoRequests.map((r) => (r.id === request.id ? updatedRequest : r)))
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
    total: demoRequests.length,
    pending: demoRequests.filter((r) => r.status === "pending").length,
    followedUp: demoRequests.filter((r) => r.status === "followed_up").length,
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-agile-dark dark:text-white">Demo Requests</h1>
          <p className="text-agile-gray dark:text-gray-400">Manage and follow up on product demo requests</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-agile-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-agile-gray dark:text-gray-400">Total Requests</p>
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
              <p className="text-sm text-agile-gray dark:text-gray-400">Pending</p>
              <p className="text-2xl font-bold text-orange-500 dark:text-orange-400">{stats.pending}</p>
            </div>
            <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-orange-500" />
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-agile-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-agile-gray dark:text-gray-400">Followed Up</p>
              <p className="text-2xl font-bold text-agile-green dark:text-agile-green-dark">{stats.followedUp}</p>
            </div>
            <div className="w-12 h-12 bg-agile-green/10 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-agile-green" />
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
              placeholder="Search requests by name, email, product, or needs..."
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
              onChange={(e) => setStatusFilter(e.target.value as "all" | "pending" | "followed_up")}
              className="text-sm px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-agile-dark text-agile-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-agile-blue focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="followed_up">Followed Up</option>
            </select>
          </div>
        </div>
      </div>

      {/* Requests Table */}
      <div className="bg-white dark:bg-agile-dark rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        {filteredRequests.length === 0 ? (
          <div className="p-12 text-center">
            <div className="w-16 h-16 bg-agile-gray/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="w-8 h-8 text-agile-gray/40" />
            </div>
            <h3 className="text-lg font-medium text-agile-dark dark:text-white mb-2">No demo requests found</h3>
            <p className="text-agile-gray dark:text-gray-400">
              {searchTerm || statusFilter !== "all"
                ? "Try adjusting your search or filters"
                : "Demo requests will appear here when users submit them"}
            </p>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-agile-gray dark:text-gray-400 uppercase tracking-wider w-1/5">
                      Contact
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-agile-gray dark:text-gray-400 uppercase tracking-wider w-1/6">
                      Product
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-agile-gray dark:text-gray-400 uppercase tracking-wider w-2/5">
                      Needs
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-agile-gray dark:text-gray-400 uppercase tracking-wider w-1/8">
                      Status
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-agile-gray dark:text-gray-400 uppercase tracking-wider w-1/8">
                      Last Updated
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-agile-gray dark:text-gray-400 uppercase tracking-wider w-16">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-agile-dark divide-y divide-gray-200 dark:divide-gray-700">
                  {paginatedRequests.map((request) => (
                    <tr key={request.id} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      <td className="px-4 py-4">
                        <div className="max-w-xs">
                          <div className="text-sm font-medium text-agile-dark dark:text-white truncate">
                            {request.name}
                          </div>
                          <div className="text-xs text-agile-gray dark:text-gray-400 truncate">{request.email}</div>
                          <div className="text-xs text-agile-gray dark:text-gray-400">{request.phone}</div>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div
                          className="text-sm text-agile-dark dark:text-white max-w-xs truncate"
                          title={request.product}
                        >
                          {request.product}
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div
                          className="text-sm text-agile-gray dark:text-gray-400 max-w-md line-clamp-2"
                          title={request.needs}
                        >
                          {request.needs || "No specific needs mentioned"}
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <button
                          onClick={() => handleToggleStatus(request)}
                          className={cn(
                            "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium transition-colors whitespace-nowrap",
                            request.status === "followed_up"
                              ? "bg-agile-green/10 text-agile-green dark:bg-agile-green-dark/10 dark:text-agile-green-dark hover:bg-agile-green/20"
                              : "bg-orange-500/10 text-orange-500 dark:bg-orange-400/10 dark:text-orange-400 hover:bg-orange-500/20",
                          )}
                        >
                          {request.status === "followed_up" ? (
                            <>
                              <CheckCircle size={10} className="mr-1" />
                              Followed Up
                            </>
                          ) : (
                            <>
                              <Clock size={10} className="mr-1" />
                              Pending
                            </>
                          )}
                        </button>
                      </td>
                      <td className="px-4 py-4">
                        <div className="text-xs text-agile-gray dark:text-gray-400 whitespace-nowrap">
                          {formatDate(request.lastUpdated)}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setEditingRequest(request)}
                          className="text-agile-blue dark:text-agile-blue-dark hover:bg-agile-blue/10 p-1"
                        >
                          <Edit size={14} />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center text-sm text-agile-gray dark:text-gray-400">
                  Showing {startIndex + 1} to {Math.min(startIndex + requestsPerPage, filteredRequests.length)} of{" "}
                  {filteredRequests.length} requests
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="flex items-center"
                  >
                    <ChevronLeft size={16} className="mr-1" />
                    Previous
                  </Button>
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setCurrentPage(page)}
                        className={cn(
                          "w-8 h-8 p-0",
                          currentPage === page
                            ? "bg-agile-blue text-white"
                            : "text-agile-gray dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700",
                        )}
                      >
                        {page}
                      </Button>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="flex items-center"
                  >
                    Next
                    <ChevronRight size={16} className="ml-1" />
                  </Button>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Edit Modal */}
      {editingRequest && (
        <EditDemoRequestModal
          isOpen={true}
          onClose={() => setEditingRequest(null)}
          onEdit={handleEditRequest}
          request={editingRequest}
        />
      )}
    </div>
  )
}
