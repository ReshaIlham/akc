"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ImageUpload } from "@/components/admin/image-upload"

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

interface EditProjectModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (projectData: {
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
    testimonialClientName: string
    testimonialPosition: string
    testimonialCompany: string
    testimonialText: string
  }) => void
  project: Project
}

export function EditProjectModal({ isOpen, onClose, onSubmit, project }: EditProjectModalProps) {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    projectOverview: "",
    image: "",
    timeframe: "",
    client: "",
    industry: "",
    results: "",
    services: "",
    challenge: "",
    solution: "",
    outcome: "",
    displayStatus: true,
    featured: false,
    color: "blue" as "blue" | "green" | "red",
    testimonialClientName: "",
    testimonialPosition: "",
    testimonialCompany: "",
    testimonialText: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title,
        category: project.category,
        description: project.description || "",
        projectOverview: project.projectOverview || "",
        image: project.image,
        timeframe: project.timeframe,
        client: project.client,
        industry: project.industry,
        results: project.results.join("\n"),
        services: project.services.join("\n"),
        challenge: project.challenge,
        solution: project.solution,
        outcome: project.outcome,
        displayStatus: project.displayStatus,
        featured: project.featured,
        color: project.color,
        testimonialClientName: project.testimonialClientName || "",
        testimonialPosition: project.testimonialPosition || "",
        testimonialCompany: project.testimonialCompany || "",
        testimonialText: project.testimonialText || "",
      })
    }
  }, [project])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validation
    const newErrors: Record<string, string> = {}
    if (!formData.title.trim()) newErrors.title = "Title is required"
    if (!formData.category.trim()) newErrors.category = "Category is required"
    if (!formData.description.trim()) newErrors.description = "Description is required"
    if (!formData.projectOverview.trim()) newErrors.projectOverview = "Project overview is required"
    if (!formData.client.trim()) newErrors.client = "Client is required"
    if (!formData.industry.trim()) newErrors.industry = "Industry is required"
    if (!formData.timeframe.trim()) newErrors.timeframe = "Timeframe is required"
    if (!formData.challenge.trim()) newErrors.challenge = "Challenge is required"
    if (!formData.solution.trim()) newErrors.solution = "Solution is required"
    if (!formData.outcome.trim()) newErrors.outcome = "Outcome is required"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Process arrays
    const results = formData.results.split("\n").filter((item) => item.trim() !== "")
    const services = formData.services.split("\n").filter((item) => item.trim() !== "")

    onSubmit({
      ...formData,
      results,
      services,
    })

    setErrors({})
    onClose()
  }

  const handleClose = () => {
    setErrors({})
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-agile-dark dark:text-white">Edit Project</h2>
          <button
            onClick={handleClose}
            className="text-agile-gray dark:text-gray-400 hover:text-agile-dark dark:hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Basic Information */}
            <div className="space-y-5">
              <h3 className="text-lg font-semibold text-agile-dark dark:text-white">Basic Information</h3>

              <div>
                <Label htmlFor="title" className="text-sm font-medium text-agile-dark dark:text-white">
                  Project Title *
                </Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className={`mt-1 ${errors.title ? "border-red-500" : ""}`}
                  placeholder="Enter project title"
                />
                {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
              </div>

              <div>
                <Label htmlFor="category" className="text-sm font-medium text-agile-dark dark:text-white">
                  Category *
                </Label>
                <Input
                  id="category"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className={`mt-1 ${errors.category ? "border-red-500" : ""}`}
                  placeholder="e.g., Financial Services, Manufacturing"
                />
                {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category}</p>}
              </div>

              <div>
                <Label htmlFor="client" className="text-sm font-medium text-agile-dark dark:text-white">
                  Client *
                </Label>
                <Input
                  id="client"
                  value={formData.client}
                  onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                  className={`mt-1 ${errors.client ? "border-red-500" : ""}`}
                  placeholder="Client company name"
                />
                {errors.client && <p className="text-red-500 text-xs mt-1">{errors.client}</p>}
              </div>

              <div>
                <Label htmlFor="industry" className="text-sm font-medium text-agile-dark dark:text-white">
                  Industry *
                </Label>
                <Input
                  id="industry"
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  className={`mt-1 ${errors.industry ? "border-red-500" : ""}`}
                  placeholder="Industry sector"
                />
                {errors.industry && <p className="text-red-500 text-xs mt-1">{errors.industry}</p>}
              </div>

              <div>
                <Label htmlFor="timeframe" className="text-sm font-medium text-agile-dark dark:text-white">
                  Timeframe *
                </Label>
                <Input
                  id="timeframe"
                  value={formData.timeframe}
                  onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                  className={`mt-1 ${errors.timeframe ? "border-red-500" : ""}`}
                  placeholder="e.g., January 2022 - June 2022 (6 months)"
                />
                {errors.timeframe && <p className="text-red-500 text-xs mt-1">{errors.timeframe}</p>}
              </div>
            </div>

            {/* Settings */}
            <div className="space-y-5">
              <h3 className="text-lg font-semibold text-agile-dark dark:text-white">Settings</h3>

              <div>
                <Label className="text-sm font-medium text-agile-dark dark:text-white">Display Status</Label>
                <RadioGroup
                  value={formData.displayStatus.toString()}
                  onValueChange={(value) => setFormData({ ...formData, displayStatus: value === "true" })}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="true" id="displayed" className="border-blue-500 text-blue-600" />
                    <Label htmlFor="displayed" className="text-sm text-agile-dark dark:text-white">
                      Displayed
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="false" id="hidden" className="border-blue-500 text-blue-600" />
                    <Label htmlFor="hidden" className="text-sm text-agile-dark dark:text-white">
                      Hidden
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-sm font-medium text-agile-dark dark:text-white">Featured</Label>
                <RadioGroup
                  value={formData.featured.toString()}
                  onValueChange={(value) => setFormData({ ...formData, featured: value === "true" })}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="true" id="featured" className="border-blue-500 text-blue-600" />
                    <Label htmlFor="featured" className="text-sm text-agile-dark dark:text-white">
                      Featured
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="false" id="regular" className="border-blue-500 text-blue-600" />
                    <Label htmlFor="regular" className="text-sm text-agile-dark dark:text-white">
                      Regular
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-sm font-medium text-agile-dark dark:text-white">Color Theme</Label>
                <RadioGroup
                  value={formData.color}
                  onValueChange={(value) => setFormData({ ...formData, color: value as "blue" | "green" | "red" })}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="blue" id="blue" className="border-blue-500 text-blue-600" />
                    <Label htmlFor="blue" className="text-sm text-agile-dark dark:text-white">
                      Blue
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="green" id="green" className="border-blue-500 text-blue-600" />
                    <Label htmlFor="green" className="text-sm text-agile-dark dark:text-white">
                      Green
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="red" id="red" className="border-blue-500 text-blue-600" />
                    <Label htmlFor="red" className="text-sm text-agile-dark dark:text-white">
                      Red
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-sm font-medium text-agile-dark dark:text-white">Project Image</Label>
                <ImageUpload
                  value={formData.image}
                  onChange={(url) => setFormData({ ...formData, image: url })}
                  className="mt-2"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-5">
            <h3 className="text-lg font-semibold text-agile-dark dark:text-white">Descriptions</h3>

            <div>
              <Label htmlFor="description" className="text-sm font-medium text-agile-dark dark:text-white">
                Short Description *
              </Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className={`mt-1 ${errors.description ? "border-red-500" : ""}`}
                placeholder="Brief project summary for listings"
                rows={2}
              />
              {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
            </div>

            <div>
              <Label htmlFor="projectOverview" className="text-sm font-medium text-agile-dark dark:text-white">
                Project Overview *
              </Label>
              <Textarea
                id="projectOverview"
                value={formData.projectOverview}
                onChange={(e) => setFormData({ ...formData, projectOverview: e.target.value })}
                className={`mt-1 ${errors.projectOverview ? "border-red-500" : ""}`}
                placeholder="Detailed project overview"
                rows={3}
              />
              {errors.projectOverview && <p className="text-red-500 text-xs mt-1">{errors.projectOverview}</p>}
            </div>

            <div>
              <Label htmlFor="challenge" className="text-sm font-medium text-agile-dark dark:text-white">
                Challenge *
              </Label>
              <Textarea
                id="challenge"
                value={formData.challenge}
                onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                className={`mt-1 ${errors.challenge ? "border-red-500" : ""}`}
                placeholder="What challenges did the client face?"
                rows={2}
              />
              {errors.challenge && <p className="text-red-500 text-xs mt-1">{errors.challenge}</p>}
            </div>

            <div>
              <Label htmlFor="solution" className="text-sm font-medium text-agile-dark dark:text-white">
                Solution *
              </Label>
              <Textarea
                id="solution"
                value={formData.solution}
                onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                className={`mt-1 ${errors.solution ? "border-red-500" : ""}`}
                placeholder="How did you solve the problem?"
                rows={2}
              />
              {errors.solution && <p className="text-red-500 text-xs mt-1">{errors.solution}</p>}
            </div>

            <div>
              <Label htmlFor="outcome" className="text-sm font-medium text-agile-dark dark:text-white">
                Outcome *
              </Label>
              <Textarea
                id="outcome"
                value={formData.outcome}
                onChange={(e) => setFormData({ ...formData, outcome: e.target.value })}
                className={`mt-1 ${errors.outcome ? "border-red-500" : ""}`}
                placeholder="What were the final results?"
                rows={2}
              />
              {errors.outcome && <p className="text-red-500 text-xs mt-1">{errors.outcome}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="results" className="text-sm font-medium text-agile-dark dark:text-white">
                  Results (one per line)
                </Label>
                <Textarea
                  id="results"
                  value={formData.results}
                  onChange={(e) => setFormData({ ...formData, results: e.target.value })}
                  className="mt-1"
                  placeholder="40% improvement in project success rates&#10;25% reduction in project costs&#10;320% ROI in the first year"
                  rows={4}
                />
              </div>

              <div>
                <Label htmlFor="services" className="text-sm font-medium text-agile-dark dark:text-white">
                  Services Provided (one per line)
                </Label>
                <Textarea
                  id="services"
                  value={formData.services}
                  onChange={(e) => setFormData({ ...formData, services: e.target.value })}
                  className="mt-1"
                  placeholder="PMO Design & Implementation&#10;Process Standardization&#10;Training & Capability Building"
                  rows={4}
                />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-agile-dark dark:text-white mt-8">Client Testimonial</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <Label htmlFor="testimonialClientName" className="text-sm font-medium text-agile-dark dark:text-white">
                  Client Name
                </Label>
                <Input
                  id="testimonialClientName"
                  value={formData.testimonialClientName}
                  onChange={(e) => setFormData({ ...formData, testimonialClientName: e.target.value })}
                  className="mt-1"
                  placeholder="Full name of the client"
                />
              </div>
              <div>
                <Label htmlFor="testimonialPosition" className="text-sm font-medium text-agile-dark dark:text-white">
                  Position
                </Label>
                <Input
                  id="testimonialPosition"
                  value={formData.testimonialPosition}
                  onChange={(e) => setFormData({ ...formData, testimonialPosition: e.target.value })}
                  className="mt-1"
                  placeholder="Job title"
                />
              </div>
              <div>
                <Label htmlFor="testimonialCompany" className="text-sm font-medium text-agile-dark dark:text-white">
                  Company
                </Label>
                <Input
                  id="testimonialCompany"
                  value={formData.testimonialCompany}
                  onChange={(e) => setFormData({ ...formData, testimonialCompany: e.target.value })}
                  className="mt-1"
                  placeholder="Company name"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="testimonialText" className="text-sm font-medium text-agile-dark dark:text-white">
                Testimonial
              </Label>
              <Textarea
                id="testimonialText"
                value={formData.testimonialText}
                onChange={(e) => setFormData({ ...formData, testimonialText: e.target.value })}
                className="mt-1"
                placeholder="Client's feedback about the project"
                rows={3}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-6 pt-4">
            <Button type="button" variant="outline" onClick={handleClose} className="w-full">
              Cancel
            </Button>
            <Button type="submit" variant="blue" className="w-full">
              Update Project
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
