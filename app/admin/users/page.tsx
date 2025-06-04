"use client"

import { useState, useEffect } from "react"
import { Plus, Search, UserCheck, UserX, Edit, Trash2, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AddUserModal } from "@/components/admin/add-user-modal"
import { EditUserModal } from "@/components/admin/edit-user-modal"
import { ConfirmationDialog } from "@/components/admin/confirmation-dialog"

interface User {
  id: number
  name: string
  email: string
  status: "Active" | "Inactive"
  lastUpdated: Date
}

const initialUsers: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    status: "Active",
    lastUpdated: new Date(2024, 4, 15),
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.johnson@techcorp.com",
    status: "Active",
    lastUpdated: new Date(2024, 5, 20),
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "michael.chen@innovateco.com",
    status: "Inactive",
    lastUpdated: new Date(2024, 4, 10),
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@startup.com",
    status: "Active",
    lastUpdated: new Date(2024, 5, 25),
  },
  {
    id: 5,
    name: "Robert Wilson",
    email: "robert.wilson@corp.com",
    status: "Inactive",
    lastUpdated: new Date(2024, 3, 8),
  },
  {
    id: 6,
    name: "Lisa Anderson",
    email: "lisa.anderson@tech.com",
    status: "Active",
    lastUpdated: new Date(2024, 5, 30),
  },
]

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>(initialUsers)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "inactive">("all")
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [editingUser, setEditingUser] = useState<User | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [deleteConfirmation, setDeleteConfirmation] = useState<{
    isOpen: boolean
    userId: number | null
    userName: string
  }>({
    isOpen: false,
    userId: null,
    userName: "",
  })

  const ITEMS_PER_PAGE = 10

  // Filter users based on search and status
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "active" && user.status === "Active") ||
      (statusFilter === "inactive" && user.status === "Inactive")

    return matchesSearch && matchesStatus
  })

  // Pagination
  const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, statusFilter])

  const handleAddUser = (userData: Omit<User, "id" | "lastUpdated">) => {
    const newUser: User = {
      ...userData,
      id: Math.max(...users.map((u) => u.id), 0) + 1,
      lastUpdated: new Date(),
    }
    setUsers([...users, newUser])
  }

  const handleEditUser = (userData: Omit<User, "id" | "lastUpdated">) => {
    if (!editingUser) return

    setUsers(
      users.map((user) => (user.id === editingUser.id ? { ...user, ...userData, lastUpdated: new Date() } : user)),
    )
    setEditingUser(null)
  }

  const handleDeleteUser = (id: number, name: string) => {
    setDeleteConfirmation({
      isOpen: true,
      userId: id,
      userName: name,
    })
  }

  const confirmDeleteUser = () => {
    if (deleteConfirmation.userId) {
      setUsers(users.filter((user) => user.id !== deleteConfirmation.userId))
      setDeleteConfirmation({
        isOpen: false,
        userId: null,
        userName: "",
      })
    }
  }

  const cancelDeleteUser = () => {
    setDeleteConfirmation({
      isOpen: false,
      userId: null,
      userName: "",
    })
  }

  const handleToggleStatus = (id: number) => {
    setUsers(
      users.map((user) =>
        user.id === id
          ? { ...user, status: user.status === "Active" ? "Inactive" : "Active", lastUpdated: new Date() }
          : user,
      ),
    )
  }

  const formatDate = (date: Date) => {
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))

    if (diffInHours < 1) return "Just now"
    if (diffInHours < 24) return `${diffInHours}h ago`
    if (diffInHours < 168) return `${Math.floor(diffInHours / 24)}d ago`
    return date.toLocaleDateString()
  }

  const totalUsers = users.length
  const activeUsers = users.filter((u) => u.status === "Active").length
  const inactiveUsers = users.filter((u) => u.status === "Inactive").length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-agile-dark dark:text-white">Users Management</h1>
          <p className="text-agile-gray dark:text-gray-400">Manage user accounts and permissions</p>
        </div>
        <Button onClick={() => setIsAddModalOpen(true)} className="bg-agile-blue hover:bg-agile-blue/90">
          <Plus className="w-4 h-4 mr-2" />
          Add User
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-agile-gray dark:text-gray-400">Total Users</p>
              <p className="text-2xl font-bold text-agile-dark dark:text-white">{totalUsers}</p>
            </div>
            <div className="w-10 h-10 bg-agile-blue/10 rounded-full flex items-center justify-center">
              <Users className="w-5 h-5 text-agile-blue" />
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-agile-gray dark:text-gray-400">Active</p>
              <p className="text-2xl font-bold text-agile-green dark:text-agile-green-dark">{activeUsers}</p>
            </div>
            <div className="w-10 h-10 bg-agile-green/10 rounded-full flex items-center justify-center">
              <UserCheck className="w-5 h-5 text-agile-green" />
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-agile-gray dark:text-gray-400">Inactive</p>
              <p className="text-2xl font-bold text-agile-gray dark:text-gray-400">{inactiveUsers}</p>
            </div>
            <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
              <UserX className="w-5 h-5 text-agile-gray dark:text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-agile-gray dark:text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search users..."
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
            All ({totalUsers})
          </Button>
          <Button
            variant={statusFilter === "active" ? "green" : "outline"}
            size="sm"
            onClick={() => setStatusFilter("active")}
          >
            Active ({activeUsers})
          </Button>
          <Button
            variant={statusFilter === "inactive" ? "outline" : "outline"}
            size="sm"
            onClick={() => setStatusFilter("inactive")}
          >
            Inactive ({inactiveUsers})
          </Button>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-agile-gray dark:text-gray-300 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-agile-gray dark:text-gray-300 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-agile-gray dark:text-gray-300 uppercase tracking-wider">
                  Status
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
              {paginatedUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-agile-blue/10 dark:bg-agile-blue-dark/10 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-agile-blue dark:text-agile-blue-dark">
                          {user.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div className="text-sm font-medium text-agile-dark dark:text-white">{user.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-agile-gray dark:text-gray-300">{user.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleToggleStatus(user.id)}
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors ${
                        user.status === "Active"
                          ? "bg-agile-green/10 text-agile-green dark:bg-agile-green-dark/10 dark:text-agile-green-dark hover:bg-agile-green/20"
                          : "bg-gray-100 text-agile-gray dark:bg-gray-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600"
                      }`}
                    >
                      {user.status === "Active" ? (
                        <>
                          <UserCheck className="w-3 h-3 mr-1" />
                          Active
                        </>
                      ) : (
                        <>
                          <UserX className="w-3 h-3 mr-1" />
                          Inactive
                        </>
                      )}
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-agile-gray dark:text-gray-400">
                    {formatDate(user.lastUpdated)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setEditingUser(user)}
                        className="text-agile-blue hover:text-agile-blue/80"
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteUser(user.id, user.name)}
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
        {filteredUsers.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-agile-gray dark:text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-agile-dark dark:text-white mb-2">No users found</h3>
            <p className="text-agile-gray dark:text-gray-400 mb-4">
              {searchTerm || statusFilter !== "all"
                ? "Try adjusting your search or filter criteria."
                : "Get started by adding your first user."}
            </p>
            {!searchTerm && statusFilter === "all" && (
              <Button onClick={() => setIsAddModalOpen(true)} variant="blue">
                <Plus className="w-4 h-4 mr-2" />
                Add User
              </Button>
            )}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="text-sm text-agile-gray dark:text-gray-400">
                Showing {startIndex + 1} to {Math.min(startIndex + ITEMS_PER_PAGE, filteredUsers.length)} of{" "}
                {filteredUsers.length} entries
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
      <AddUserModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} onAddUser={handleAddUser} />

      {editingUser && (
        <EditUserModal
          isOpen={!!editingUser}
          onClose={() => setEditingUser(null)}
          onEditUser={handleEditUser}
          user={editingUser}
        />
      )}

      {/* Delete Confirmation Dialog */}
      <ConfirmationDialog
        isOpen={deleteConfirmation.isOpen}
        onClose={cancelDeleteUser}
        onConfirm={confirmDeleteUser}
        title="Delete User"
        message={`Are you sure you want to delete "${deleteConfirmation.userName}"? This action cannot be undone and will permanently remove the user account.`}
        confirmText="Delete User"
        cancelText="Cancel"
        variant="danger"
      />
    </div>
  )
}
