"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { isAuthenticated } from "@/lib/auth"

interface AuthGuardProps {
  children: React.ReactNode
}

export function AuthGuard({ children }: AuthGuardProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [mounted, setMounted] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const checkAuth = () => {
      // Don't check auth for login page
      if (pathname === "/admin/login") {
        setIsLoading(false)
        return
      }

      if (!isAuthenticated()) {
        router.push("/admin/login")
        return
      }

      setIsLoading(false)
    }

    checkAuth()
  }, [mounted, router, pathname])

  // Don't show loading or auth guard for login page
  if (pathname === "/admin/login") {
    return <>{children}</>
  }

  if (!mounted || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="animate-pulse text-agile-gray dark:text-gray-300">Loading...</div>
      </div>
    )
  }

  return <>{children}</>
}
