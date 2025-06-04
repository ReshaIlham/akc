"use client"

import { useState, useEffect } from "react"
import { X, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { ImageUpload } from "./image-upload"

interface EditContentModalProps {
  isOpen: boolean
  onClose: () => void
  onEditContent: (content: any) => void
  content: any
}

export function EditContentModal({ isOpen, onClose, onEditContent, content }: EditContentModalProps) {
  const [key, setKey] = useState("")
  const [value, setValue] = useState("")
  const [type, setType] = useState("Label")
  const [errors, setErrors] = useState({ key: "", value: "", upload: "" })

  useEffect(() => {
    if (content) {
      setKey(content.key || "")
      setValue(content.value || "")
      setType(content.type || "Label")
      setErrors({ key: "", value: "", upload: "" })
    }
  }, [content])

  if (!isOpen || !content) return null

  const validateForm = () => {
    let valid = true
    const newErrors = { key: "", value: "", upload: "" }

    if (!key.trim()) {
      newErrors.key = "Content key is required"
      valid = false
    }

    if (!value.trim()) {
      newErrors.value = "Value is required"
      valid = false
    }

    // Additional validation for specific types
    if (type === "Link" && !value.trim().match(/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/)) {
      newErrors.value = "Please enter a valid URL"
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      onEditContent({ ...content, key, value, type })
      onClose()
    }
  }

  const handleImageUpload = (url: string) => {
    setValue(url)
    setErrors((prev) => ({ ...prev, value: "", upload: "" }))
  }

  const handleImageError = (error: string) => {
    setErrors((prev) => ({ ...prev, upload: error }))
  }

  const handleTypeChange = (newType: string) => {
    setType(newType)
    if (newType !== type) {
      setValue("")
    }
    setErrors({ key: "", value: "", upload: "" })
  }

  const handleClose = () => {
    if (content) {
      setKey(content.key || "")
      setValue(content.value || "")
      setType(content.type || "Label")
    }
    setErrors({ key: "", value: "", upload: "" })
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-700">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Edit Content</h2>
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
            {/* Content Type */}
            <div>
              <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">Content Type</Label>
              <RadioGroup value={type} onValueChange={handleTypeChange} className="flex space-x-4 mt-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Label" id="edit-label-type" className="border-blue-500 text-blue-600" />
                  <Label htmlFor="edit-label-type" className="cursor-pointer">
                    Label
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Image" id="edit-image-type" className="border-blue-500 text-blue-600" />
                  <Label htmlFor="edit-image-type" className="cursor-pointer">
                    Image
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Link" id="edit-link-type" className="border-blue-500 text-blue-600" />
                  <Label htmlFor="edit-link-type" className="cursor-pointer">
                    Link
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Content Key */}
            <div>
              <Label htmlFor="edit-content-key" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Content Key *
              </Label>
              <Input
                id="edit-content-key"
                value={key}
                onChange={(e) => setKey(e.target.value)}
                placeholder="Enter content key (e.g., hero_title)"
                className={`mt-1 ${errors.key ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}`}
              />
              {errors.key && <p className="text-red-500 text-sm mt-1">{errors.key}</p>}
            </div>

            {/* Content Value */}
            <div>
              <Label htmlFor="edit-content-value" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {type === "Image" ? "Image Upload" : "Value"} *
              </Label>

              {type === "Image" ? (
                <div className="mt-2">
                  <ImageUpload value={value} onChange={handleImageUpload} onError={handleImageError} />
                  {errors.upload && (
                    <div className="flex items-center mt-2 text-red-500 text-sm">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.upload}
                    </div>
                  )}
                  {errors.value && !errors.upload && <p className="text-red-500 text-sm mt-1">{errors.value}</p>}
                </div>
              ) : type === "Label" ? (
                <Textarea
                  id="edit-content-value"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Enter content value"
                  className={`min-h-[100px] mt-1 ${errors.value ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}`}
                />
              ) : (
                <Input
                  id="edit-content-value"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Enter URL (e.g., https://example.com)"
                  className={`mt-1 ${errors.value ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}`}
                />
              )}

              {errors.value && type !== "Image" && <p className="text-red-500 text-sm mt-1">{errors.value}</p>}
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
