"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Mail, Lock, Eye, EyeOff, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { login, isAuthenticated } from "@/lib/auth"
import { ForgotPasswordModal } from "@/components/admin/forgot-password-modal"

export default function AdminLoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [mounted, setMounted] = useState(false)
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted && isAuthenticated()) {
      router.push("/admin")
    }
  }, [mounted, router])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const user = await login(formData.email, formData.password)
      if (user) {
        router.push("/admin")
      } else {
        setError("Invalid email or password")
      }
    } catch (err) {
      setError("Login failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a1f3a] to-[#2d1b69]">
        <div className="animate-pulse text-white">Loading...</div>
      </div>
    )
  }

  return (
    <>
      <div className="min-h-screen w-full flex overflow-hidden">
        {/* Left Side - Branding */}
        <div className="w-1/2 bg-gradient-to-br from-[#1a1f3a] via-[#2d1b69] to-[#1a1f3a] relative flex flex-col justify-center px-16 py-12">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-[15%] left-[8%] w-32 h-32 rounded-full bg-agile-red/10 blur-2xl animate-pulse"></div>
            <div
              className="absolute top-[45%] right-[10%] w-40 h-40 rounded-full bg-agile-blue/15 blur-2xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-[25%] left-[15%] w-36 h-36 rounded-full bg-agile-green/10 blur-2xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-white">
            <div className="mb-12">
              <Shield className="w-16 h-16 text-agile-blue mb-8" />
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Welcome to <span className="text-agile-blue">Agilenesia</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-md">
                Secure admin access to manage your project management platform and drive organizational excellence.
              </p>
            </div>

            <div className="space-y-6 text-gray-300">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-agile-green rounded-full flex-shrink-0"></div>
                <span className="text-lg">Advanced project analytics</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-agile-blue rounded-full flex-shrink-0"></div>
                <span className="text-lg">User management system</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-agile-red rounded-full flex-shrink-0"></div>
                <span className="text-lg">System configuration</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-1/2 bg-gray-50 dark:bg-gray-900 flex flex-col">
          {/* Back to Site Link */}
          <div className="p-8 pb-0">
            <Link
              href="/"
              className="inline-flex items-center text-agile-gray hover:text-agile-blue dark:text-gray-400 dark:hover:text-agile-blue-dark transition-colors group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Site
            </Link>
          </div>

          {/* Login Form Container */}
          <div className="flex-1 flex items-center justify-center px-8 py-12">
            <div className="w-full max-w-md">
              {/* Login Header */}
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-agile-blue/10 dark:bg-agile-blue-dark/10 rounded-full mb-6">
                  <Shield className="w-10 h-10 text-agile-blue dark:text-agile-blue-dark" />
                </div>
                <h2 className="text-4xl font-bold text-agile-dark dark:text-white mb-3">Admin Portal</h2>
                <p className="text-lg text-agile-gray dark:text-gray-400">Sign in to access the dashboard</p>
              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-agile-dark dark:text-white mb-3">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-agile-gray dark:text-gray-400 h-5 w-5" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="pl-12 h-14 text-base border-gray-300 dark:border-gray-600 focus:border-agile-blue dark:focus:border-agile-blue-dark focus:ring-agile-blue/20 dark:focus:ring-agile-blue-dark/20 dark:bg-gray-800 dark:text-white transition-colors rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-agile-dark dark:text-white mb-3">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-agile-gray dark:text-gray-400 h-5 w-5" />
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      required
                      className="pl-12 pr-12 h-14 text-base border-gray-300 dark:border-gray-600 focus:border-agile-blue dark:focus:border-agile-blue-dark focus:ring-agile-blue/20 dark:focus:ring-agile-blue-dark/20 dark:bg-gray-800 dark:text-white transition-colors rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-agile-gray dark:text-gray-400 hover:text-agile-blue dark:hover:text-agile-blue-dark transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                {/* Forgot Password Link */}
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => setIsForgotPasswordOpen(true)}
                    className="text-sm text-agile-blue dark:text-agile-blue-dark hover:underline transition-colors"
                  >
                    Forgot your password?
                  </button>
                </div>

                {error && (
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg text-sm flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                    <span>{error}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full h-14 text-base font-semibold bg-agile-blue hover:bg-agile-blue-dark text-white rounded-lg transition-colors"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Signing in...</span>
                    </div>
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </form>

              {/* Demo Credentials */}
              <div className="mt-8 p-5 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-3 h-3 bg-agile-green rounded-full"></div>
                  <p className="text-sm font-semibold text-agile-dark dark:text-white">Demo Credentials</p>
                </div>
                <div className="space-y-1 text-sm text-agile-gray dark:text-gray-400">
                  <p>
                    <span className="font-medium">Email:</span> admin@agilenesia.com
                  </p>
                  <p>
                    <span className="font-medium">Password:</span> admin123
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Forgot Password Modal */}
      <ForgotPasswordModal isOpen={isForgotPasswordOpen} onClose={() => setIsForgotPasswordOpen(false)} />
    </>
  )
}
