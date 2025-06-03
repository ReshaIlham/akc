"use client"

import { useState } from "react"
import { Search, Plus, Edit, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AddUserModal } from "@/components/admin/add-user-modal"
import { EditUserModal } from "@/components/admin/edit-user-modal"
import { formatDistanceToNow } from "date-fns"

// Mock user data
const initialUsers = [
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
]

export default function UsersPage() {
  const [users, setUsers] = useState(initialUsers)
  const [searchTerm, setSearchTerm] = useState("")
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleAddUser = (newUser) => {
    const id = users.length > 0 ? Math.max(...users.map((user) => user.id)) + 1 : 1
    setUsers([...users, { ...newUser, id, lastUpdated: new Date() }])
    setIsAddModalOpen(false)
  }

  const handleEditUser = (updatedUser) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? { ...updatedUser, lastUpdated: new Date() } : user)))
    setIsEditModalOpen(false)
    setCurrentUser(null)
  }

  const handleDeleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== id))
    }
  }

  const openEditModal = (user) => {
    setCurrentUser(user)
    setIsEditModalOpen(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-agile-dark dark:text-white">Users Management</h1>
        <Button variant="blue" onClick={() => setIsAddModalOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add User
        </Button>
      </div>

      <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="text-agile-dark dark:text-white">All Users</CardTitle>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-agile-gray dark:text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-agile-gray/30 focus:border-agile-blue focus:ring-agile-blue/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 font-medium text-agile-gray dark:text-gray-300">Name</th>
                  <th className="text-left py-3 px-4 font-medium text-agile-gray dark:text-gray-300">Email</th>
                  <th className="text-left py-3 px-4 font-medium text-agile-gray dark:text-gray-300">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-agile-gray dark:text-gray-300">Last Updated</th>
                  <th className="text-left py-3 px-4 font-medium text-agile-gray dark:text-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <td className="py-3 px-4">
                      <div className="font-medium text-agile-dark dark:text-white">{user.name}</div>
                    </td>
                    <td className="py-3 px-4 text-agile-gray dark:text-gray-300">{user.email}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          user.status === "Active"
                            ? "bg-agile-green/10 text-agile-green dark:bg-agile-green-dark/10 dark:text-agile-green-dark"
                            : "bg-agile-red/10 text-agile-red dark:bg-agile-red-dark/10 dark:text-agile-red-dark"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-agile-gray dark:text-gray-300">
                      {formatDistanceToNow(user.lastUpdated, { addSuffix: true })}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm" onClick={() => openEditModal(user)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-agile-red dark:text-agile-red-dark"
                          onClick={() => handleDeleteUser(user.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <AddUserModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} onAddUser={handleAddUser} />

      {currentUser && (
        <EditUserModal
          isOpen={isEditModalOpen}
          onClose={() => {
            setIsEditModalOpen(false)
            setCurrentUser(null)
          }}
          onEditUser={handleEditUser}
          user={currentUser}
        />
      )}
    </div>
  )
}
