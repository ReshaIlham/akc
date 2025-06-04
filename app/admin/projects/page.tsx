"use client"

import { useState, useEffect } from "react"
import { Plus, Search, Eye, EyeOff, Edit, Trash2, GripVertical, Star, StarOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AddProjectModal } from "@/components/admin/add-project-modal"
import { EditProjectModal } from "@/components/admin/edit-project-modal"
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd"
import { ConfirmationDialog } from "@/components/admin/confirmation-dialog"

interface Project {
  id: string
  title: string
  category: string
  description: string
  projectOverview: string
  image: string
  timeframe: string
  client: string
  industry: string
  results: string[]
  services: string[]
  challenge: string
  solution: string
  outcome: string
  displayStatus: boolean
  featured: boolean
  color: "blue" | "green" | "red"
  lastUpdated: string
  order: number
  testimonialClientName?: string
  testimonialPosition?: string
  testimonialCompany?: string
  testimonialText?: string
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: "1",
      title: "Enterprise PMO Transformation",
      category: "Financial Services",
      projectOverview:
        "This comprehensive PMO transformation project involved restructuring the client's project management capabilities from the ground up.",
      description:
        "We helped a leading financial institution establish a Project Management Office (PMO) that improved project success rates by 40% and reduced project costs by 25%.",
      image: "/modern-city-center.png",
      timeframe: "January 2022 - June 2022 (6 months)",
      client: "Global Financial Services Corp.",
      industry: "Financial Services",
      results: [
        "40% improvement in project success rates",
        "25% reduction in project costs",
        "320% ROI in the first year",
      ],
      services: ["PMO Design & Implementation", "Process Standardization", "Training & Capability Building"],
      challenge:
        "The client was struggling with inconsistent project delivery, cost overruns, and a lack of visibility into project status and resource allocation.",
      solution: "We designed and implemented a centralized PMO with standardized methodologies, tools, and templates.",
      outcome:
        "The new PMO structure provided clear visibility into all projects, enabling better resource allocation and prioritization.",
      displayStatus: true,
      featured: true,
      color: "blue",
      lastUpdated: "2024-01-15T10:30:00Z",
      order: 1,
      testimonialClientName: "John Smith",
      testimonialPosition: "CIO",
      testimonialCompany: "Global Financial Services Corp.",
      testimonialText:
        "The PMO transformation has been a game-changer for our organization. We now have clear visibility into all projects and can make informed decisions about resource allocation.",
    },
    {
      id: "2",
      title: "Agile Implementation",
      category: "Manufacturing",
      projectOverview:
        "This agile transformation project helped a traditional manufacturing company adopt modern project management practices.",
      description:
        "We guided a manufacturing company through an agile transformation that reduced time-to-market by 30% and improved team collaboration and morale.",
      image: "/bustling-factory-floor.png",
      timeframe: "March 2022 - June 2022 (4 months)",
      client: "InnoManufacture Inc.",
      industry: "Manufacturing",
      results: [
        "30% reduction in time-to-market",
        "45% improvement in team collaboration metrics",
        "25% increase in employee satisfaction scores",
      ],
      services: ["Agile Transformation", "Scrum Implementation", "Team Coaching"],
      challenge: "The client was using traditional waterfall methodologies that resulted in long development cycles.",
      solution: "We implemented Scrum as the primary agile framework, restructured teams to be cross-functional.",
      outcome:
        "The organization successfully transitioned to an agile mindset, with cross-functional teams delivering value in short iterations.",
      displayStatus: true,
      featured: false,
      color: "green",
      lastUpdated: "2024-01-14T15:45:00Z",
      order: 2,
      testimonialClientName: "Alice Johnson",
      testimonialPosition: "VP of Engineering",
      testimonialCompany: "InnoManufacture Inc.",
      testimonialText:
        "Agile implementation drastically improved our product delivery speed and team morale. We're now more responsive to market changes and customer needs.",
    },
    {
      id: "3",
      title: "Project Recovery",
      category: "Healthcare",
      projectOverview:
        "This project recovery initiative rescued a failing healthcare IT implementation that was significantly behind schedule and over budget.",
      description:
        "We recovered a critical healthcare IT project that was behind schedule and over budget, delivering it successfully within revised constraints.",
      image: "/collaborative-healthcare-discussion.png",
      timeframe: "August 2022 - October 2022 (3 months)",
      client: "MediCare Solutions",
      industry: "Healthcare",
      results: [
        "Successfully delivered project within revised timeline",
        "Reduced remaining budget overrun from 50% to 15%",
      ],
      services: ["Project Recovery", "Risk Management", "Stakeholder Management"],
      challenge: "The client's critical healthcare IT project was 6 months behind schedule, 50% over budget.",
      solution:
        "We conducted a rapid assessment to identify root causes, restructured the project plan with realistic timelines.",
      outcome:
        "The project was successfully delivered within the revised constraints, meeting all critical requirements.",
      displayStatus: false,
      featured: false,
      color: "red",
      lastUpdated: "2024-01-13T09:20:00Z",
      order: 3,
      testimonialClientName: "Bob Williams",
      testimonialPosition: "CTO",
      testimonialCompany: "MediCare Solutions",
      testimonialText:
        "The project recovery team was instrumental in getting our critical IT project back on track. Their expertise and dedication saved us from a potential disaster.",
    },
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<"all" | "displayed" | "hidden">("all")
  const [featuredFilter, setFeaturedFilter] = useState<"all" | "featured" | "regular">("all")
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [editingProject, setEditingProject] = useState<Project | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [deleteConfirmation, setDeleteConfirmation] = useState<{
    isOpen: boolean
    projectId: string | null
    projectTitle: string
  }>({
    isOpen: false,
    projectId: null,
    projectTitle: "",
  })

  const ITEMS_PER_PAGE = 10

  // Filter projects based on search, status, and featured
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.client.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "displayed" && project.displayStatus) ||
      (statusFilter === "hidden" && !project.displayStatus)
    const matchesFeatured =
      featuredFilter === "all" ||
      (featuredFilter === "featured" && project.featured) ||
      (featuredFilter === "regular" && !project.featured)

    return matchesSearch && matchesStatus && matchesFeatured
  })

  // Sort by order for display
  const sortedProjects = [...filteredProjects].sort((a, b) => a.order - b.order)

  // Pagination
  const totalPages = Math.ceil(sortedProjects.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const paginatedProjects = sortedProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, statusFilter, featuredFilter])

  const handleAddProject = (projectData: Omit<Project, "id" | "lastUpdated" | "order">) => {
    const newProject: Project = {
      ...projectData,
      id: Date.now().toString(),
      lastUpdated: new Date().toISOString(),
      order: Math.max(...projects.map((p) => p.order), 0) + 1,
    }
    setProjects([...projects, newProject])
  }

  const handleEditProject = (projectData: Omit<Project, "id" | "lastUpdated" | "order">) => {
    if (!editingProject) return

    setProjects(
      projects.map((project) =>
        project.id === editingProject.id
          ? { ...project, ...projectData, lastUpdated: new Date().toISOString() }
          : project,
      ),
    )
    setEditingProject(null)
  }

  const handleDeleteProject = (id: string, title: string) => {
    setDeleteConfirmation({
      isOpen: true,
      projectId: id,
      projectTitle: title,
    })
  }

  const confirmDeleteProject = () => {
    if (deleteConfirmation.projectId) {
      setProjects(projects.filter((project) => project.id !== deleteConfirmation.projectId))
      setDeleteConfirmation({
        isOpen: false,
        projectId: null,
        projectTitle: "",
      })
    }
  }

  const cancelDeleteProject = () => {
    setDeleteConfirmation({
      isOpen: false,
      projectId: null,
      projectTitle: "",
    })
  }

  const handleToggleStatus = (id: string) => {
    setProjects(
      projects.map((project) =>
        project.id === id
          ? { ...project, displayStatus: !project.displayStatus, lastUpdated: new Date().toISOString() }
          : project,
      ),
    )
  }

  const handleToggleFeatured = (id: string) => {
    setProjects(
      projects.map((project) =>
        project.id === id
          ? { ...project, featured: !project.featured, lastUpdated: new Date().toISOString() }
          : project,
      ),
    )
  }

  const handleDragEnd = (result: any) => {
    if (!result.destination) return

    const items = Array.from(sortedProjects)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    // Update order values
    const updatedProjects = items.map((item, index) => ({
      ...item,
      order: index + 1,
      lastUpdated: new Date().toISOString(),
    }))

    // Update the main projects array
    setProjects((prevProjects) => {
      const newProjects = [...prevProjects]
      updatedProjects.forEach((updatedProject) => {
        const index = newProjects.findIndex((p) => p.id === updatedProject.id)
        if (index !== -1) {
          newProjects[index] = updatedProject
        }
      })
      return newProjects
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

  const getColorClass = (color: string) => {
    switch (color) {
      case "blue":
        return "text-agile-blue dark:text-agile-blue-dark"
      case "green":
        return "text-agile-green dark:text-agile-green-dark"
      case "red":
        return "text-agile-red dark:text-agile-red-dark"
      default:
        return "text-agile-blue dark:text-agile-blue-dark"
    }
  }

  const displayedCount = projects.filter((p) => p.displayStatus).length
  const hiddenCount = projects.filter((p) => !p.displayStatus).length
  const featuredCount = projects.filter((p) => p.featured).length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-agile-dark dark:text-white">Projects Management</h1>
          <p className="text-agile-gray dark:text-gray-400">
            Manage project portfolio and display settings for the website
          </p>
        </div>
        <Button onClick={() => setIsAddModalOpen(true)} className="bg-agile-blue hover:bg-agile-blue/90">
          <Plus className="w-4 h-4 mr-2" />
          Add Project
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-agile-gray dark:text-gray-400">Total Projects</p>
              <p className="text-2xl font-bold text-agile-dark dark:text-white">{projects.length}</p>
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
              <p className="text-sm text-agile-gray dark:text-gray-400">Featured</p>
              <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">{featuredCount}</p>
            </div>
            <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/20 rounded-full flex items-center justify-center">
              <Star className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
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
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          <Button
            variant={statusFilter === "all" ? "blue" : "outline"}
            size="sm"
            onClick={() => setStatusFilter("all")}
          >
            All ({projects.length})
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
          <Button
            variant="outline"
            size="sm"
            onClick={() => setFeaturedFilter(featuredFilter === "featured" ? "all" : "featured")}
            className={`
              ${
                featuredFilter === "featured"
                  ? "bg-yellow-100 border-yellow-500 text-yellow-700 dark:bg-yellow-900/30 dark:border-yellow-400 dark:text-yellow-300"
                  : "border-yellow-500 text-yellow-600 hover:bg-yellow-50 dark:border-yellow-400 dark:text-yellow-400 dark:hover:bg-yellow-900/20"
              }
            `}
          >
            <Star
              className={`w-4 h-4 mr-1 ${featuredFilter === "featured" ? "fill-yellow-500 dark:fill-yellow-400" : ""}`}
            />
            Featured ({featuredCount})
          </Button>
        </div>
      </div>

      {/* Projects Table with Drag and Drop */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="projects">
              {(provided) => (
                <table className="w-full" {...provided.droppableProps} ref={provided.innerRef}>
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-agile-gray dark:text-gray-300 uppercase tracking-wider">
                        Order
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-agile-gray dark:text-gray-300 uppercase tracking-wider">
                        Project
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-agile-gray dark:text-gray-300 uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-agile-gray dark:text-gray-300 uppercase tracking-wider">
                        Client
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-agile-gray dark:text-gray-300 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-agile-gray dark:text-gray-300 uppercase tracking-wider">
                        Featured
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
                    {paginatedProjects.map((project, index) => (
                      <Draggable key={project.id} draggableId={project.id} index={index}>
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
                                  #{project.order}
                                </span>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <div className="w-12 h-8 bg-gray-100 dark:bg-gray-700 rounded border overflow-hidden flex-shrink-0">
                                  <img
                                    src={project.image || "/placeholder.svg"}
                                    alt={`${project.title} image`}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                      const target = e.target as HTMLImageElement
                                      target.src = "/placeholder.svg?height=32&width=48&text=Project"
                                    }}
                                  />
                                </div>
                                <div className="min-w-0">
                                  <div
                                    className={`text-sm font-medium ${getColorClass(project.color)} truncate max-w-xs`}
                                  >
                                    {project.title}
                                  </div>
                                  <div className="text-xs text-agile-gray dark:text-gray-400 truncate max-w-xs">
                                    {project.description}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-agile-dark dark:text-white">{project.category}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-agile-dark dark:text-white">{project.client}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <button
                                onClick={() => handleToggleStatus(project.id)}
                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors ${
                                  project.displayStatus
                                    ? "bg-agile-green/10 text-agile-green dark:bg-agile-green-dark/10 dark:text-agile-green-dark hover:bg-agile-green/20"
                                    : "bg-gray-100 text-agile-gray dark:bg-gray-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600"
                                }`}
                              >
                                {project.displayStatus ? (
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
                            <td className="px-6 py-4 whitespace-nowrap">
                              <button
                                onClick={() => handleToggleFeatured(project.id)}
                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors ${
                                  project.featured
                                    ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-900/30"
                                    : "bg-gray-100 text-agile-gray dark:bg-gray-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600"
                                }`}
                              >
                                {project.featured ? (
                                  <>
                                    <Star className="w-3 h-3 mr-1" />
                                    Featured
                                  </>
                                ) : (
                                  <>
                                    <StarOff className="w-3 h-3 mr-1" />
                                    Regular
                                  </>
                                )}
                              </button>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-agile-gray dark:text-gray-400">
                              {formatDate(project.lastUpdated)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <div className="flex items-center gap-2">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => setEditingProject(project)}
                                  className="text-agile-blue hover:text-agile-blue/80"
                                >
                                  <Edit className="w-4 h-4" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => handleDeleteProject(project.id, project.title)}
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
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
              <Eye className="w-8 h-8 text-agile-gray dark:text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-agile-dark dark:text-white mb-2">No projects found</h3>
            <p className="text-agile-gray dark:text-gray-400 mb-4">
              {searchTerm || statusFilter !== "all" || featuredFilter !== "all"
                ? "Try adjusting your search or filter criteria."
                : "Get started by adding your first project."}
            </p>
            {!searchTerm && statusFilter === "all" && featuredFilter === "all" && (
              <Button onClick={() => setIsAddModalOpen(true)} variant="blue">
                <Plus className="w-4 h-4 mr-2" />
                Add Project
              </Button>
            )}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="text-sm text-agile-gray dark:text-gray-400">
                Showing {startIndex + 1} to {Math.min(startIndex + ITEMS_PER_PAGE, filteredProjects.length)} of{" "}
                {filteredProjects.length} entries
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
      <AddProjectModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} onSubmit={handleAddProject} />

      {editingProject && (
        <EditProjectModal
          isOpen={!!editingProject}
          onClose={() => setEditingProject(null)}
          onSubmit={handleEditProject}
          project={editingProject}
        />
      )}

      {/* Delete Confirmation Dialog */}
      <ConfirmationDialog
        isOpen={deleteConfirmation.isOpen}
        onClose={cancelDeleteProject}
        onConfirm={confirmDeleteProject}
        title="Delete Project"
        message={`Are you sure you want to delete "${deleteConfirmation.projectTitle}"? This action cannot be undone and will remove the project from your website.`}
        confirmText="Delete Project"
        cancelText="Cancel"
        variant="danger"
      />
    </div>
  )
}
