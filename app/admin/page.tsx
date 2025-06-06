"use client"

import { useState, useEffect } from "react"
import {
  Users,
  FileText,
  Activity,
  MessageSquare,
  Clock,
  CheckCircle,
  Monitor,
  Plus,
  ChevronLeft,
  ChevronRight,
  Search,
  Package,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getCurrentUser } from "@/lib/auth"
import Link from "next/link"

interface ActivityLog {
  id: string
  activity: string
  user: string
  timestamp: string
  type: "user" | "project" | "product" | "client" | "testimonial" | "content" | "demo"
  details?: string
}

interface DemoRequest {
  id: string
  name: string
  email: string
  product: string
  submittedAt: string
  status: "pending" | "followed_up"
}

// Mock data for activity logs
const mockActivityLogs: ActivityLog[] = [
  {
    id: "1",
    activity: "New user registered",
    user: "john.doe@example.com",
    timestamp: "2024-01-15T10:30:00Z",
    type: "user",
    details: "User registration completed successfully",
  },
  {
    id: "2",
    activity: "Project updated",
    user: "Admin User",
    timestamp: "2024-01-15T09:45:00Z",
    type: "project",
    details: "Enterprise PMO Transformation project status changed",
  },
  {
    id: "3",
    activity: "Demo request submitted",
    user: "sarah.johnson@techcorp.com",
    timestamp: "2024-01-15T09:20:00Z",
    type: "demo",
    details: "Requested demo for Pantau - Project Management Tool",
  },
  {
    id: "4",
    activity: "Product created",
    user: "Admin User",
    timestamp: "2024-01-15T08:15:00Z",
    type: "product",
    details: "New product 'Agile Coaching Kit' added to catalog",
  },
  {
    id: "5",
    activity: "Client information updated",
    user: "Admin User",
    timestamp: "2024-01-14T16:30:00Z",
    type: "client",
    details: "Updated contact information for TechCorp Indonesia",
  },
  {
    id: "6",
    activity: "Testimonial approved",
    user: "Admin User",
    timestamp: "2024-01-14T15:20:00Z",
    type: "testimonial",
    details: "Testimonial from Michael Chen approved and published",
  },
  {
    id: "7",
    activity: "Content published",
    user: "Content Manager",
    timestamp: "2024-01-14T14:10:00Z",
    type: "content",
    details: "New blog post about Agile methodologies published",
  },
  {
    id: "8",
    activity: "User role updated",
    user: "Admin User",
    timestamp: "2024-01-14T13:45:00Z",
    type: "user",
    details: "Changed user role from Editor to Admin",
  },
  {
    id: "9",
    activity: "Project completed",
    user: "Project Manager",
    timestamp: "2024-01-14T12:30:00Z",
    type: "project",
    details: "Digital Transformation Initiative marked as completed",
  },
  {
    id: "10",
    activity: "Demo request followed up",
    user: "Sales Team",
    timestamp: "2024-01-14T11:15:00Z",
    type: "demo",
    details: "Follow-up completed for Lisa Wang's demo request",
  },
]

// Mock data for pending demo requests
const mockPendingDemoRequests: DemoRequest[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    product: "Tumbuh - Learning Management System",
    submittedAt: "2024-01-15T10:30:00Z",
    status: "pending",
  },
  {
    id: "2",
    name: "Michael Chen",
    email: "m.chen@startup.io",
    product: "Agile Fundamentals Kit",
    submittedAt: "2024-01-13T14:20:00Z",
    status: "pending",
  },
  {
    id: "3",
    name: "David Rodriguez",
    email: "david.r@consulting.com",
    product: "Agile T-Shirts",
    submittedAt: "2024-01-11T16:45:00Z",
    status: "pending",
  },
  {
    id: "4",
    name: "Emma Wilson",
    email: "emma.wilson@startup.com",
    product: "Scrum Master Certification",
    submittedAt: "2024-01-10T14:30:00Z",
    status: "pending",
  },
  {
    id: "5",
    name: "Maria Santos",
    email: "maria.santos@consulting.id",
    product: "Agile Coaching Services",
    submittedAt: "2024-01-08T16:45:00Z",
    status: "pending",
  },
  {
    id: "6",
    name: "Alex Johnson",
    email: "alex.j@techfirm.co",
    product: "Project Management Workshop",
    submittedAt: "2024-01-07T09:15:00Z",
    status: "pending",
  },
  {
    id: "7",
    name: "Sarah Miller",
    email: "sarah.m@enterprise.com",
    product: "Enterprise Agile Transformation",
    submittedAt: "2024-01-06T11:30:00Z",
    status: "pending",
  },
  {
    id: "8",
    name: "James Wilson",
    email: "james.w@corporation.id",
    product: "Leadership Training",
    submittedAt: "2024-01-05T14:45:00Z",
    status: "pending",
  },
  {
    id: "9",
    name: "Linda Garcia",
    email: "linda.g@startup.net",
    product: "Agile Team Building",
    submittedAt: "2024-01-04T10:20:00Z",
    status: "pending",
  },
]

export default function AdminDashboard() {
  const [user, setUser] = useState<any>(null)
  const [activityLogs, setActivityLogs] = useState<ActivityLog[]>(mockActivityLogs)
  const [filteredLogs, setFilteredLogs] = useState<ActivityLog[]>(mockActivityLogs)
  const [pendingDemoRequests] = useState<DemoRequest[]>(mockPendingDemoRequests)
  const [searchTerm, setSearchTerm] = useState("")
  const [typeFilter, setTypeFilter] = useState<string>("all")
  const [currentPage, setCurrentPage] = useState(1)
  const logsPerPage = 8

  useEffect(() => {
    setUser(getCurrentUser())
  }, [])

  // Filter activity logs
  useEffect(() => {
    const filtered = activityLogs.filter((log) => {
      const matchesSearch =
        log.activity.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.details?.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesType = typeFilter === "all" || log.type === typeFilter

      return matchesSearch && matchesType
    })

    setFilteredLogs(filtered)
    setCurrentPage(1)
  }, [activityLogs, searchTerm, typeFilter])

  // Pagination
  const totalPages = Math.ceil(filteredLogs.length / logsPerPage)
  const startIndex = (currentPage - 1) * logsPerPage
  const paginatedLogs = filteredLogs.slice(startIndex, startIndex + logsPerPage)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "user":
        return <Users className="h-4 w-4" />
      case "project":
        return <FileText className="h-4 w-4" />
      case "product":
        return <Package className="h-4 w-4" />
      case "client":
        return <Users className="h-4 w-4" />
      case "testimonial":
        return <MessageSquare className="h-4 w-4" />
      case "content":
        return <FileText className="h-4 w-4" />
      case "demo":
        return <Monitor className="h-4 w-4" />
      default:
        return <Activity className="h-4 w-4" />
    }
  }

  const getActivityColor = (type: string) => {
    switch (type) {
      case "user":
        return "bg-blue-500/10 text-blue-500"
      case "project":
        return "bg-green-500/10 text-green-500"
      case "product":
        return "bg-purple-500/10 text-purple-500"
      case "client":
        return "bg-orange-500/10 text-orange-500"
      case "testimonial":
        return "bg-pink-500/10 text-pink-500"
      case "content":
        return "bg-indigo-500/10 text-indigo-500"
      case "demo":
        return "bg-cyan-500/10 text-cyan-500"
      default:
        return "bg-gray-500/10 text-gray-500"
    }
  }

  const quickActions = [
    {
      title: "Add New User",
      description: "Create a new user account",
      icon: <Users className="h-5 w-5" />,
      href: "/admin/users",
      color: "blue",
    },
    {
      title: "Create Project",
      description: "Start a new project",
      icon: <FileText className="h-5 w-5" />,
      href: "/admin/projects",
      color: "green",
    },
    {
      title: "Add Product",
      description: "Add new product to catalog",
      icon: <Plus className="h-5 w-5" />,
      href: "/admin/products",
      color: "purple",
    },
    {
      title: "Add Testimonials",
      description: "Add client testimonials",
      icon: <MessageSquare className="h-5 w-5" />,
      href: "/admin/testimonials",
      color: "pink",
    },
    {
      title: "Manage Demo Requests",
      description: "Follow up on pending demos",
      icon: <Monitor className="h-5 w-5" />,
      href: "/admin/demo-requests",
      color: "cyan",
    },
    {
      title: "Manage Content",
      description: "Update website content",
      icon: <FileText className="h-5 w-5" />,
      href: "/admin/content",
      color: "indigo",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h1 className="text-3xl font-bold text-agile-dark dark:text-white mb-2">Welcome back, {user?.name}!</h1>
        <p className="text-agile-gray dark:text-gray-300">Here's what's happening with your business today.</p>
      </div>

      {/* Pending Demo Requests */}
      <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="flex items-center justify-between text-agile-dark dark:text-white">
            <div className="flex items-center">
              <Clock className="mr-2 h-5 w-5" />
              Pending Demo Requests ({pendingDemoRequests.length})
            </div>
            <Link href="/admin/demo-requests">
              <Button variant="ghost" size="sm" className="text-agile-blue dark:text-agile-blue-dark">
                View All
              </Button>
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {pendingDemoRequests.length === 0 ? (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-agile-green mx-auto mb-4" />
              <h3 className="text-lg font-medium text-agile-dark dark:text-white mb-2">All caught up!</h3>
              <p className="text-sm text-agile-gray dark:text-gray-400">All demo requests have been followed up.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[400px] overflow-y-auto pr-1">
              {pendingDemoRequests.map((request) => (
                <div
                  key={request.id}
                  className="p-4 rounded-lg bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-agile-dark dark:text-white">{request.name}</p>
                      <p className="text-xs text-agile-gray dark:text-gray-400 mb-2">{request.email}</p>
                    </div>
                    <div className="flex items-center text-orange-600 dark:text-orange-400">
                      <Clock size={12} />
                    </div>
                  </div>
                  <p className="text-xs text-orange-600 dark:text-orange-400 mb-3 line-clamp-2">{request.product}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-agile-gray dark:text-gray-400">{formatDate(request.submittedAt)}</p>
                    <Link href={`/admin/demo-requests`}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-orange-600 dark:text-orange-400 h-6 px-2 text-xs"
                      >
                        Follow Up
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="text-agile-dark dark:text-white">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickActions.map((action, index) => (
              <Link key={index} href={action.href}>
                <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-agile-blue dark:hover:border-agile-blue-dark transition-colors cursor-pointer group">
                  <div className="flex items-start space-x-3">
                    <div
                      className={`p-2 rounded-lg bg-${action.color}-500/10 text-${action.color}-500 group-hover:bg-${action.color}-500/20 transition-colors`}
                    >
                      {action.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-agile-dark dark:text-white group-hover:text-agile-blue dark:group-hover:text-agile-blue-dark transition-colors">
                        {action.title}
                      </h3>
                      <p className="text-xs text-agile-gray dark:text-gray-400 mt-1">{action.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Activity Logs */}
      <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-800">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center text-agile-dark dark:text-white">
              <Activity className="mr-2 h-5 w-5" />
              Activity Logs
            </CardTitle>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-agile-gray dark:text-gray-400"
                  size={14}
                />
                <Input
                  placeholder="Search activities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 w-48 h-8 text-sm"
                />
              </div>
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="text-sm px-2 py-1 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-agile-dark text-agile-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-agile-blue focus:border-transparent"
              >
                <option value="all">All Types</option>
                <option value="user">Users</option>
                <option value="project">Projects</option>
                <option value="product">Products</option>
                <option value="client">Clients</option>
                <option value="demo">Demo Requests</option>
                <option value="testimonial">Testimonials</option>
                <option value="content">Content</option>
              </select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Activity Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700 rounded-lg">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-agile-gray dark:text-gray-400 uppercase tracking-wider">
                    Activity
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-agile-gray dark:text-gray-400 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-agile-gray dark:text-gray-400 uppercase tracking-wider">
                    Time
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {paginatedLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <td className="px-4 py-4">
                      <div className="flex items-start space-x-3">
                        <div className={`p-2 rounded-full ${getActivityColor(log.type)}`}>
                          {getActivityIcon(log.type)}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-agile-dark dark:text-white">{log.activity}</p>
                          {log.details && (
                            <p className="text-xs text-agile-gray dark:text-gray-400 mt-1">{log.details}</p>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <p className="text-sm text-agile-dark dark:text-white">{log.user}</p>
                    </td>
                    <td className="px-4 py-4">
                      <p className="text-sm text-agile-gray dark:text-gray-400">{formatDate(log.timestamp)}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-6">
              <p className="text-sm text-agile-gray dark:text-gray-400">
                Showing {startIndex + 1} to {Math.min(startIndex + logsPerPage, filteredLogs.length)} of{" "}
                {filteredLogs.length} activities
              </p>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft size={16} />
                </Button>
                <span className="text-sm text-agile-dark dark:text-white">
                  {currentPage} of {totalPages}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight size={16} />
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
