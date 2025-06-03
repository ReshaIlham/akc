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
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-agile-dark dark:text-white">Edit User</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4">
          <div className="space-y-4">
            <div>
              <Label htmlFor="edit-name">Name</Label>
              <Input
                id="edit-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter user name"
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <Label htmlFor="edit-email">Email</Label>
              <Input
                id="edit-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter user email"
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <Label>Status</Label>
              <RadioGroup value={status} onValueChange={setStatus} className="flex space-x-4 mt-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Active" id="edit-active" />
                  <Label htmlFor="edit-active" className="cursor-pointer">
                    Active
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Inactive" id="edit-inactive" />
                  <Label htmlFor="edit-inactive" className="cursor-pointer">
                    Inactive
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" variant="blue">
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
