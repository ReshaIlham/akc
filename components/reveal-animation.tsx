"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "scale" | "none"
}

export function Reveal({ children, className, delay = 0, direction = "up" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("opacity-100")

              switch (direction) {
                case "up":
                  entry.target.classList.add("translate-y-0")
                  break
                case "down":
                  entry.target.classList.add("translate-y-0")
                  break
                case "left":
                  entry.target.classList.add("translate-x-0")
                  break
                case "right":
                  entry.target.classList.add("translate-x-0")
                  break
                case "scale":
                  entry.target.classList.add("scale-100")
                  break
                default:
                  break
              }
            }, delay)

            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay, direction])

  const getInitialClasses = () => {
    switch (direction) {
      case "up":
        return "opacity-0 translate-y-10"
      case "down":
        return "opacity-0 -translate-y-10"
      case "left":
        return "opacity-0 translate-x-10"
      case "right":
        return "opacity-0 -translate-x-10"
      case "scale":
        return "opacity-0 scale-95"
      case "none":
        return "opacity-0"
      default:
        return "opacity-0 translate-y-10"
    }
  }

  return (
    <div ref={ref} className={cn(getInitialClasses(), "transition-all duration-700 ease-out", className)}>
      {children}
    </div>
  )
}
