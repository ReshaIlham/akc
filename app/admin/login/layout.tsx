import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin Login - Agilenesia",
  description: "Login to Agilenesia admin panel",
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
