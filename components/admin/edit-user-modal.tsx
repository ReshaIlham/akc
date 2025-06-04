"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface EditUserModalProps {
  isOpen: boolean
  onClose: () => void
  onEditUser: (user: any) => void
  user: any
}

export function EditUserModal({ isOpen, onClose, onEditUser, user }: EditUserModalProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("Active")
  const [errors, setErrors] = useState({ name: "", email: "" })

  useEffect(() => {
    if (user) {
      setName(user.name || "")
      setEmail(user.email || "")
      setStatus(user.status || "Active")
      setErrors({ name: "", email: "" })
    }
  }, [user])

  if (!isOpen || !user) return null

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
      onEditUser({ ...user, name, email, status })
      onClose()
    }
  }

  const handleClose = () => {
    if (user) {
      setName(user.name || "")
      setEmail(user.email || "")
      setStatus(user.status || "Active")
    }
    setErrors({ name: "", email: "" })
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-md border border-gray-200 dark:border-gray-700">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Edit User</h2>
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
              <Label htmlFor="edit-name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Name *
              </Label>
              <Input
                id="edit-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter user name"
                className={`mt-1 ${errors.name ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Email Field */}
            <div>
              <Label htmlFor="edit-email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Email *
              </Label>
              <Input
                id="edit-email"
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
                  <RadioGroupItem value="Active" id="edit-active" className="border-blue-500 text-blue-600" />
                  <Label htmlFor="edit-active" className="cursor-pointer">
                    Active
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Inactive" id="edit-inactive" className="border-blue-500 text-blue-600" />
                  <Label htmlFor="edit-inactive" className="cursor-pointer">
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
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
