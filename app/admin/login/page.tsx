"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Mail, Lock, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { login, isAuthenticated } from "@/lib/auth"

export default function AdminLoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  // Set mounted to true after component mounts
  useEffect(() => {
    setMounted(true)
  }, [])

  // Check authentication only after component is mounted
  useEffect(() => {
    if (mounted && isAuthenticated()) {
      router.push("/admin")
    }
  }, [mounted, router])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError("") // Clear error when user types
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

  // Show loading only if not mounted yet
  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-agile-dark to-agile-dark/90">
        <div className="animate-pulse text-white">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-agile-dark to-agile-dark/90 dark:from-[#0a1930] dark:to-[#0f2a4a] flex items-center justify-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-[10%] left-[5%] w-[30vw] h-[30vw] rounded-full bg-agile-red blur-3xl animate-pulse"></div>
        <div
          className="absolute top-[40%] left-[60%] w-[40vw] h-[40vw] rounded-full bg-agile-blue blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-[70%] left-[30%] w-[35vw] h-[35vw] rounded-full bg-agile-green blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="relative z-10 w-full max-w-md mx-4">
        {/* Back to site link */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-white hover:text-agile-blue-dark transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Site
          </Link>
        </div>

        {/* Login Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-agile-dark dark:text-white mb-2">Admin Login</h1>
            <p className="text-agile-gray dark:text-gray-300">Sign in to access the admin dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-agile-dark dark:text-white">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-agile-gray dark:text-gray-400 h-5 w-5" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="admin@agilenesia.com"
                  required
                  className="pl-10 border-agile-gray/30 focus:border-agile-blue focus:ring-agile-blue/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-agile-blue-dark dark:focus:ring-agile-blue-dark/20"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2 text-agile-dark dark:text-white">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-agile-gray dark:text-gray-400 h-5 w-5" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                  className="pl-10 pr-10 border-agile-gray/30 focus:border-agile-blue focus:ring-agile-blue/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-agile-blue-dark dark:focus:ring-agile-blue-dark/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-agile-gray dark:text-gray-400 hover:text-agile-blue dark:hover:text-agile-blue-dark"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-agile-red/10 border border-agile-red/20 text-agile-red dark:bg-agile-red-dark/10 dark:border-agile-red-dark/20 dark:text-agile-red-dark px-4 py-3 rounded-md text-sm">
                {error}
              </div>
            )}

            <Button type="submit" variant="blue" className="w-full" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          {/* Demo credentials */}
          <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <p className="text-sm text-agile-gray dark:text-gray-300 mb-2">Demo Credentials:</p>
            <p className="text-xs text-agile-gray dark:text-gray-400">Email: admin@agilenesia.com</p>
            <p className="text-xs text-agile-gray dark:text-gray-400">Password: admin123</p>
          </div>
        </div>
      </div>
    </div>
  )
}
