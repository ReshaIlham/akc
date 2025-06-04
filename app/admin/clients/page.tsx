"use client"

import { useState, useEffect } from "react"
import { Plus, Search, Eye, EyeOff, Edit, Trash2, GripVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AddClientModal } from "@/components/admin/add-client-modal"
import { EditClientModal } from "@/components/admin/edit-client-modal"
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd"
import { ConfirmationDialog } from "@/components/admin/confirmation-dialog"

interface Client {
  id: string
  name: string
  logo: string
  displayStatus: boolean
  lastUpdated: string
  order: number
}

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([
    {
      id: "1",
      name: "TechCorp Solutions",
      logo: "/placeholder.svg?height=60&width=120&text=TechCorp",
      displayStatus: true,
      lastUpdated: "2024-01-15T10:30:00Z",
      order: 1,
    },
    {
      id: "2",
      name: "Global Industries",
      logo: "/placeholder.svg?height=60&width=120&text=Global",
      displayStatus: true,
      lastUpdated: "2024-01-14T15:45:00Z",
      order: 2,
    },
    {
      id: "3",
      name: "Innovation Labs",
      logo: "/placeholder.svg?height=60&width=120&text=Innovation",
      displayStatus: false,
      lastUpdated: "2024-01-13T09:20:00Z",
      order: 3,
    },
    {
      id: "4",
      name: "Future Systems",
      logo: "/placeholder.svg?height=60&width=120&text=Future",
      displayStatus: true,
      lastUpdated: "2024-01-12T14:10:00Z",
      order: 4,
    },
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<"all" | "displayed" | "hidden">("all")
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [editingClient, setEditingClient] = useState<Client | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [deleteConfirmation, setDeleteConfirmation] = useState<{
    isOpen: boolean
    clientId: string | null
    clientName: string
  }>({
    isOpen: false,
    clientId: null,
    clientName: "",
  })

  const ITEMS_PER_PAGE = 10

  // Filter clients based on search and status
  const filteredClients = clients.filter((client) => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "displayed" && client.displayStatus) ||
      (statusFilter === "hidden" && !client.displayStatus)

    return matchesSearch && matchesStatus
  })

  // Sort by order for display
  const sortedClients = [...filteredClients].sort((a, b) => a.order - b.order)

  // Pagination
  const totalPages = Math.ceil(sortedClients.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const paginatedClients = sortedClients.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, statusFilter])

  const handleAddClient = (clientData: Omit<Client, "id" | "lastUpdated" | "order">) => {
    const newClient: Client = {
      ...clientData,
      id: Date.now().toString(),
      lastUpdated: new Date().toISOString(),
      order: Math.max(...clients.map((c) => c.order), 0) + 1,
    }
    setClients([...clients, newClient])
  }

  const handleEditClient = (clientData: Omit<Client, "id" | "lastUpdated" | "order">) => {
    if (!editingClient) return

    setClients(
      clients.map((client) =>
        client.id === editingClient.id ? { ...client, ...clientData, lastUpdated: new Date().toISOString() } : client,
      ),
    )
    setEditingClient(null)
  }

  const handleDeleteClient = (id: string, name: string) => {
    setDeleteConfirmation({
      isOpen: true,
      clientId: id,
      clientName: name,
    })
  }

  const confirmDeleteClient = () => {
    if (deleteConfirmation.clientId) {
      setClients(clients.filter((client) => client.id !== deleteConfirmation.clientId))
      setDeleteConfirmation({
        isOpen: false,
        clientId: null,
        clientName: "",
      })
    }
  }

  const cancelDeleteClient = () => {
    setDeleteConfirmation({
      isOpen: false,
      clientId: null,
      clientName: "",
    })
  }

  const handleToggleStatus = (id: string) => {
    setClients(
      clients.map((client) =>
        client.id === id
          ? { ...client, displayStatus: !client.displayStatus, lastUpdated: new Date().toISOString() }
          : client,
      ),
    )
  }

  const handleDragEnd = (result: any) => {
    if (!result.destination) return

    const items = Array.from(sortedClients)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    // Update order values
    const updatedClients = items.map((item, index) => ({
      ...item,
      order: index + 1,
      lastUpdated: new Date().toISOString(),
    }))

    // Update the main clients array
    setClients((prevClients) => {
      const newClients = [...prevClients]
      updatedClients.forEach((updatedClient) => {
        const index = newClients.findIndex((c) => c.id === updatedClient.id)
        if (index !== -1) {
          newClients[index] = updatedClient
        }
      })
      return newClients
    })
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))

    if (diffInHours < 1) return "Just now"
    if (diffInHours < 24) return `${diffInHours}h ago`
    if (diffInHours < 168) return `${Math.floor(diffInHours / 24)}d ago`
    return date.toLocaleDateString()
  }

  const displayedCount = clients.filter((c) => c.displayStatus).length
  const hiddenCount = clients.filter((c) => !c.displayStatus).length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-agile-dark dark:text-white">Clients Management</h1>
          <p className="text-agile-gray dark:text-gray-400">
            Manage client logos and display order for the landing page
          </p>
        </div>
        <Button onClick={() => setIsAddModalOpen(true)} className="bg-agile-blue hover:bg-agile-blue/90">
          <Plus className="w-4 h-4 mr-2" />
          Add Client
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-agile-gray dark:text-gray-400">Total Clients</p>
              <p className="text-2xl font-bold text-agile-dark dark:text-white">{clients.length}</p>
            </div>
            <div className="w-10 h-10 bg-agile-blue/10 rounded-full flex items-center justify-center">
              <Eye className="w-5 h-5 text-agile-blue" />
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-agile-gray dark:text-gray-400">Displayed</p>
              <p className="text-2xl font-bold text-agile-green dark:text-agile-green-dark">{displayedCount}</p>
            </div>
            <div className="w-10 h-10 bg-agile-green/10 rounded-full flex items-center justify-center">
              <Eye className="w-5 h-5 text-agile-green" />
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-agile-gray dark:text-gray-400">Hidden</p>
              <p className="text-2xl font-bold text-agile-gray dark:text-gray-400">{hiddenCount}</p>
            </div>
            <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
              <EyeOff className="w-5 h-5 text-agile-gray dark:text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-agile-gray dark:text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search clients..."
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
            All ({clients.length})
          </Button>
          <Button
            variant={statusFilter === "displayed" ? "green" : "outline"}
            size="sm"
            onClick={() => setStatusFilter("displayed")}
          >
            Displayed ({displayedCount})
          </Button>
          <Button
            variant={statusFilter === "hidden" ? "outline" : "outline"}
            size="sm"
            onClick={() => setStatusFilter("hidden")}
          >
            Hidden ({hiddenCount})
          </Button>
        </div>
      </div>

      {/* Clients Table with Drag and Drop */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="clients">
              {(provided) => (
                <table className="w-full" {...provided.droppableProps} ref={provided.innerRef}>
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-agile-gray dark:text-gray-300 uppercase tracking-wider">
                        Order
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-agile-gray dark:text-gray-300 uppercase tracking-wider">
                        Logo
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-agile-gray dark:text-gray-300 uppercase tracking-wider">
                        Name
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
                    {paginatedClients.map((client, index) => (
                      <Draggable key={client.id} draggableId={client.id} index={index}>
                        {(provided, snapshot) => (
                          <tr
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            className={`hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                              snapshot.isDragging ? "bg-agile-blue/5 shadow-lg" : ""
                            }`}
                          >
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center gap-2">
                                <div
                                  {...provided.dragHandleProps}
                                  className="cursor-grab hover:cursor-grabbing p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
                                >
                                  <GripVertical className="w-4 h-4 text-agile-gray dark:text-gray-400" />
                                </div>
                                <span className="text-sm font-medium text-agile-dark dark:text-white">
                                  #{client.order}
                                </span>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="w-16 h-10 bg-gray-100 dark:bg-gray-700 rounded border overflow-hidden">
                                <img
                                  src={client.logo || "/placeholder.svg"}
                                  alt={`${client.name} logo`}
                                  className="w-full h-full object-contain"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement
                                    target.src = "/placeholder.svg?height=40&width=64&text=Logo"
                                  }}
                                />
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-agile-dark dark:text-white">{client.name}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <button
                                onClick={() => handleToggleStatus(client.id)}
                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors ${
                                  client.displayStatus
                                    ? "bg-agile-green/10 text-agile-green dark:bg-agile-green-dark/10 dark:text-agile-green-dark hover:bg-agile-green/20"
                                    : "bg-gray-100 text-agile-gray dark:bg-gray-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600"
                                }`}
                              >
                                {client.displayStatus ? (
                                  <>
                                    <Eye className="w-3 h-3 mr-1" />
                                    Displayed
                                  </>
                                ) : (
                                  <>
                                    <EyeOff className="w-3 h-3 mr-1" />
                                    Hidden
                                  </>
                                )}
                              </button>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-agile-gray dark:text-gray-400">
                              {formatDate(client.lastUpdated)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <div className="flex items-center gap-2">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => setEditingClient(client)}
                                  className="text-agile-blue hover:text-agile-blue/80"
                                >
                                  <Edit className="w-4 h-4" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => handleDeleteClient(client.id, client.name)}
                                  className="text-agile-red hover:text-agile-red/80"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </tbody>
                </table>
              )}
            </Droppable>
          </DragDropContext>
        </div>

        {/* Empty State */}
        {filteredClients.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
              <Eye className="w-8 h-8 text-agile-gray dark:text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-agile-dark dark:text-white mb-2">No clients found</h3>
            <p className="text-agile-gray dark:text-gray-400 mb-4">
              {searchTerm || statusFilter !== "all"
                ? "Try adjusting your search or filter criteria."
                : "Get started by adding your first client."}
            </p>
            {!searchTerm && statusFilter === "all" && (
              <Button onClick={() => setIsAddModalOpen(true)} variant="blue">
                <Plus className="w-4 h-4 mr-2" />
                Add Client
              </Button>
            )}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="text-sm text-agile-gray dark:text-gray-400">
                Showing {startIndex + 1} to {Math.min(startIndex + ITEMS_PER_PAGE, filteredClients.length)} of{" "}
                {filteredClients.length} entries
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
      <AddClientModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} onSubmit={handleAddClient} />

      {editingClient && (
        <EditClientModal
          isOpen={!!editingClient}
          onClose={() => setEditingClient(null)}
          onSubmit={handleEditClient}
          client={editingClient}
        />
      )}

      {/* Delete Confirmation Dialog */}
      <ConfirmationDialog
        isOpen={deleteConfirmation.isOpen}
        onClose={cancelDeleteClient}
        onConfirm={confirmDeleteClient}
        title="Delete Client"
        message={`Are you sure you want to delete "${deleteConfirmation.clientName}"? This action cannot be undone and will remove the client from your landing page.`}
        confirmText="Delete Client"
        cancelText="Cancel"
        variant="danger"
      />
    </div>
  )
}
