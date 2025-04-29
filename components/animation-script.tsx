"use client"

import { useEffect } from "react"

export function AnimationScript() {
  useEffect(() => {
    // Reveal animations on scroll
    const handleRevealElements = () => {
      const reveals = document.querySelectorAll(".reveal")

      reveals.forEach((element) => {
        const windowHeight = window.innerHeight
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active")
        }
      })
    }

    window.addEventListener("scroll", handleRevealElements)
    handleRevealElements() // Initial check

    return () => {
      window.removeEventListener("scroll", handleRevealElements)
    }
  }, [])

  return null
}
