"use client"

import { useState, useEffect } from "react"

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [colorClass, setColorClass] = useState("")

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)

      // Change color based on position
      const windowWidth = window.innerWidth
      if (e.clientX < windowWidth / 3) {
        setColorClass("red")
      } else if (e.clientX < (windowWidth / 3) * 2) {
        setColorClass("green")
      } else {
        setColorClass("blue")
      }
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  if (typeof window === "undefined") return null

  return (
    <div
      className={`cursor-glow ${colorClass} ${isVisible ? "opacity-100" : "opacity-0"}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  )
}
