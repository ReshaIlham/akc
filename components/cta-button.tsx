import type React from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CTAButtonProps {
  href: string
  children: React.ReactNode
  variant?: "primary" | "secondary" | "outline"
  size?: "default" | "sm" | "lg"
  className?: string
}

export function CTAButton({ href, children, variant = "primary", size = "default", className }: CTAButtonProps) {
  // Map our simplified variants to the actual button variants with proper contrast
  const variantMap = {
    primary: "blue",
    secondary: "red",
    outline: "outlineBlue",
  }

  return (
    <Link href={href}>
      <Button variant={variantMap[variant] as any} size={size} className={className}>
        {children}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </Link>
  )
}
