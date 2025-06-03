"use client"

import type React from "react"

import { useState } from "react"
import { X, Mail, ArrowLeft, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface ForgotPasswordModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ForgotPasswordModal({ isOpen, onClose }: ForgotPasswordModalProps) {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Simulate success
      setIsSuccess(true)
    } catch (err) {
      setError("Failed to send reset email. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleClose = () => {
    setEmail("")
    setError("")
    setIsSuccess(false)
    onClose()
  }

  const handleBackToLogin = () => {
    handleClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md border border-gray-200 dark:border-gray-700">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-agile-dark dark:text-white">
            {isSuccess ? "Check Your Email" : "Forgot Password"}
          </h2>
          <button
            onClick={handleClose}
            className="text-agile-gray dark:text-gray-400 hover:text-agile-dark dark:hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full mb-4">
                <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-agile-dark dark:text-white">Email Sent!</h3>
                <p className="text-agile-gray dark:text-gray-300 text-sm leading-relaxed">
                  We've sent a password reset link to <strong>{email}</strong>. Please check your email and follow the
                  instructions to reset your password.
                </p>
              </div>
              <div className="pt-4">
                <Button variant="blue" onClick={handleBackToLogin} className="w-full">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Login
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center space-y-2">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-agile-blue/10 dark:bg-agile-blue-dark/10 rounded-full mb-4">
                  <Mail className="w-6 h-6 text-agile-blue dark:text-agile-blue-dark" />
                </div>
                <p className="text-agile-gray dark:text-gray-300 text-sm leading-relaxed">
                  Enter your email address and we'll send you a link to reset your password.
                </p>
              </div>

              <div>
                <label htmlFor="reset-email" className="block text-sm font-medium text-agile-dark dark:text-white mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-agile-gray dark:text-gray-400 h-5 w-5" />
                  <Input
                    id="reset-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="pl-10 h-12 border-gray-300 dark:border-gray-600 focus:border-agile-blue dark:focus:border-agile-blue-dark focus:ring-agile-blue/20 dark:focus:ring-agile-blue-dark/20 dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>

              {error && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg text-sm flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                  <span>{error}</span>
                </div>
              )}

              <div className="space-y-3">
                <Button type="submit" variant="blue" className="w-full h-12" disabled={isLoading}>
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    "Send Reset Link"
                  )}
                </Button>

                <Button type="button" variant="ghost" onClick={handleBackToLogin} className="w-full">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Login
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
