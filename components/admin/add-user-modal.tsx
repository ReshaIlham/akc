"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface AddUserModalProps {
  isOpen: boolean
  onClose: () => void
  onAddUser: (user: any) => void
}

export function AddUserModal({ isOpen, onClose, onAddUser }: AddUserModalProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("Active")
  const [errors, setErrors] = useState({ name: "", email: "" })

  if (!isOpen) return null

  const validateForm = () => {
    let valid = true
    const newErrors = { name: "", email: "" }

    if (!name.trim()) {
      newErrors.name = "Name is required"
      valid = false
    }

    if (!email.trim()) {
      newErrors.email = "Email is required"
      valid = false
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid"
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      onAddUser({ name, email, status })
      setName("")
      setEmail("")
      setStatus("Active")
      setErrors({ name: "", email: "" })
      onClose()
    }
  }

  const handleClose = () => {
    setName("")
    setEmail("")
    setStatus("Active")
    setErrors({ name: "", email: "" })
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-md border border-gray-200 dark:border-gray-700">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Add New User</h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-5">
            {/* Name Field */}
            <div>
              <Label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Name *
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter user name"
                className={`mt-1 ${errors.name ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Email Field */}
            <div>
              <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter user email"
                className={`mt-1 ${errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Status Field */}
            <div>
              <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">Status</Label>
              <RadioGroup value={status} onValueChange={setStatus} className="flex space-x-4 mt-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Active" id="active" className="border-blue-500 text-blue-600" />
                  <Label htmlFor="active" className="cursor-pointer">
                    Active
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Inactive" id="inactive" className="border-blue-500 text-blue-600" />
                  <Label htmlFor="inactive" className="cursor-pointer">
                    Inactive
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 mt-6 pt-4">
            <Button type="button" variant="outline" onClick={handleClose} className="w-full">
              Cancel
            </Button>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white w-full">
              Add User
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
