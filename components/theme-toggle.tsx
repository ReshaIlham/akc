"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="rounded-full w-10 h-10" aria-label="Toggle theme">
        <Sun className="h-5 w-5 text-gray-400" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full w-10 h-10 relative"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {/* Sun icon */}
      <Sun
        className={`h-5 w-5 absolute transition-all ${theme === "dark" ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"}`}
      />
      {/* Moon icon */}
      <Moon
        className={`h-5 w-5 absolute transition-all ${theme === "dark" ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"}`}
      />

      {/* Visual indicator for active state */}
      <span
        className={`absolute inset-0 rounded-full border-2 scale-0 transition-all ${theme === "dark" ? "border-white" : "border-agile-dark"} ${theme === "dark" ? "scale-0" : "scale-0"}`}
      ></span>
    </Button>
  )
}
