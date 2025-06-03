"use client"

import type React from "react"

import { useState, useRef, useCallback } from "react"
import { Upload, X, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ImageUploadProps {
  value?: string
  onChange: (url: string) => void
  onError?: (error: string) => void
  className?: string
}

export function ImageUpload({ value, onChange, onError, className = "" }: ImageUploadProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [previewUrl, setPreviewUrl] = useState(value || "")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const validateFile = (file: File) => {
    const maxSize = 5 * 1024 * 1024 // 5MB
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp"]

    if (!allowedTypes.includes(file.type)) {
      throw new Error("Please upload a valid image file (JPEG, PNG, GIF, or WebP)")
    }

    if (file.size > maxSize) {
      throw new Error("File size must be less than 5MB")
    }
  }

  const simulateUpload = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      try {
        validateFile(file)

        // Simulate upload progress
        let progress = 0
        const interval = setInterval(() => {
          progress += Math.random() * 30
          setUploadProgress(Math.min(progress, 90))
        }, 200)

        // Simulate upload completion after 2 seconds
        setTimeout(() => {
          clearInterval(interval)
          setUploadProgress(100)

          // Create a blob URL for the uploaded file
          const url = URL.createObjectURL(file)

          // In a real implementation, this would be the URL returned from your server
          const finalUrl = `/uploads/images/${Date.now()}-${file.name}`

          setTimeout(() => {
            resolve(finalUrl)
          }, 500)
        }, 2000)
      } catch (error) {
        reject(error)
      }
    })
  }

  const handleFileUpload = useCallback(
    async (file: File) => {
      try {
        setIsUploading(true)
        setUploadProgress(0)

        // Create preview immediately
        const objectUrl = URL.createObjectURL(file)
        setPreviewUrl(objectUrl)

        const uploadedUrl = await simulateUpload(file)

        // Update with final URL
        setPreviewUrl(uploadedUrl)
        onChange(uploadedUrl)
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Upload failed"
        onError?.(errorMessage)
        setPreviewUrl("")
      } finally {
        setIsUploading(false)
        setUploadProgress(0)
      }
    },
    [onChange, onError],
  )

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragging(false)

      const files = Array.from(e.dataTransfer.files)
      if (files.length > 0) {
        handleFileUpload(files[0])
      }
    },
    [handleFileUpload],
  )

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files
      if (files && files.length > 0) {
        handleFileUpload(files[0])
      }
    },
    [handleFileUpload],
  )

  const handleRemove = () => {
    setPreviewUrl("")
    onChange("")
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const openFileDialog = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {!previewUrl ? (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`
            relative border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors
            ${
              isDragging
                ? "border-agile-blue bg-agile-blue/5"
                : "border-gray-300 dark:border-gray-600 hover:border-agile-blue dark:hover:border-agile-blue"
            }
            ${isUploading ? "pointer-events-none" : ""}
          `}
          onClick={openFileDialog}
        >
          <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileSelect} className="hidden" />

          {isUploading ? (
            <div className="space-y-4">
              <div className="w-12 h-12 mx-auto bg-agile-blue/10 rounded-full flex items-center justify-center">
                <Upload className="w-6 h-6 text-agile-blue animate-pulse" />
              </div>
              <div>
                <p className="text-sm font-medium text-agile-dark dark:text-white">Uploading...</p>
                <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-agile-blue h-2 rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
                <p className="text-xs text-agile-gray dark:text-gray-400 mt-1">{Math.round(uploadProgress)}%</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="w-12 h-12 mx-auto bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                <ImageIcon className="w-6 h-6 text-gray-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-agile-dark dark:text-white">
                  Drop your image here, or <span className="text-agile-blue">browse</span>
                </p>
                <p className="text-xs text-agile-gray dark:text-gray-400 mt-1">
                  Supports: JPEG, PNG, GIF, WebP (max 5MB)
                </p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-3">
          <div className="relative group">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <img
                src={previewUrl || "/placeholder.svg"}
                alt="Preview"
                className="w-full h-48 object-cover"
                onError={() => {
                  setPreviewUrl("")
                  onError?.("Failed to load image preview")
                }}
              />
            </div>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleRemove}
              className="absolute top-2 right-2 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 shadow-sm"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-agile-gray dark:text-gray-400">Image uploaded successfully</p>
            <Button type="button" variant="outline" size="sm" onClick={openFileDialog}>
              Change Image
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
