"use client"

import { useState } from "react"
import { X, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { ImageUpload } from "./image-upload"

interface AddContentModalProps {
  isOpen: boolean
  onClose: () => void
  onAddContent: (content: any) => void
}

export function AddContentModal({ isOpen, onClose, onAddContent }: AddContentModalProps) {
  const [key, setKey] = useState("")
  const [value, setValue] = useState("")
  const [type, setType] = useState("Label")
  const [errors, setErrors] = useState({ key: "", value: "", upload: "" })

  if (!isOpen) return null

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
      onAddContent({ key, value, type })
      setKey("")
      setValue("")
      setType("Label")
      setErrors({ key: "", value: "", upload: "" })
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
    setValue("")
    setErrors({ key: "", value: "", upload: "" })
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-agile-dark dark:text-white">Add New Content</h2>
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
              <Label htmlFor="content-type">Content Type</Label>
              <RadioGroup value={type} onValueChange={handleTypeChange} className="flex space-x-4 mt-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Label" id="label-type" />
                  <Label htmlFor="label-type" className="cursor-pointer">
                    Label
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Image" id="image-type" />
                  <Label htmlFor="image-type" className="cursor-pointer">
                    Image
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Link" id="link-type" />
                  <Label htmlFor="link-type" className="cursor-pointer">
                    Link
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="content-key">Content Key</Label>
              <Input
                id="content-key"
                value={key}
                onChange={(e) => setKey(e.target.value)}
                placeholder="Enter content key (e.g., hero_title)"
                className={errors.key ? "border-red-500" : ""}
              />
              {errors.key && <p className="text-red-500 text-sm mt-1">{errors.key}</p>}
            </div>

            <div>
              <Label htmlFor="content-value">{type === "Image" ? "Image Upload" : "Value"}</Label>

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
                  id="content-value"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Enter content value"
                  className={`min-h-[100px] mt-2 ${errors.value ? "border-red-500" : ""}`}
                />
              ) : (
                <Input
                  id="content-value"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Enter URL (e.g., https://example.com)"
                  className={`mt-2 ${errors.value ? "border-red-500" : ""}`}
                />
              )}

              {errors.value && type !== "Image" && <p className="text-red-500 text-sm mt-1">{errors.value}</p>}
            </div>
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" variant="blue">
              Add Content
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
