import type React from "react"
import type { Metadata } from "next"
import { AdminNavbar } from "@/components/admin-navbar"
import { AuthGuard } from "@/components/auth-guard"

export const metadata: Metadata = {
  title: "Admin Panel - Agilenesia",
  description: "Admin panel for Agilenesia project management services",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <AdminNavbar />
        <main className="container py-8">{children}</main>
      </div>
    </AuthGuard>
  )
}
