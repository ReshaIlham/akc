"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal-animation"
import { cn } from "@/lib/utils"

interface HeroEnhancedProps {
  title: React.ReactNode
  subtitle: string
  ctaText?: string
  ctaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  imageSrc: string
  imageAlt: string
  reversed?: boolean
  variant?: "blue" | "red" | "green" | "purple" | "cyan"
  floatingElements?: Array<{
    text: string
    highlight: string
    position: "top-left" | "top-right" | "bottom-left" | "bottom-right"
    color: "red" | "green" | "blue"
  }>
}

export function HeroEnhanced({
  title,
  subtitle,
  ctaText = "Get Started",
  ctaHref = "#",
  secondaryCtaText = "Learn More",
  secondaryCtaHref = "#",
  imageSrc,
  imageAlt,
  reversed = false,
  variant = "blue",
  floatingElements = [
    {
      text: "Success Rate",
      highlight: "100%",
      position: "top-right",
      color: "red",
    },
    {
      text: "Support",
      highlight: "24/7",
      position: "bottom-left",
      color: "green",
    },
  ],
}: HeroEnhancedProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const moveX = clientX - window.innerWidth / 2
      const moveY = clientY - window.innerHeight / 2
      const offsetFactor = 15 // Reduced for more subtle movement
      setMousePosition({
        x: moveX / offsetFactor,
        y: moveY / offsetFactor,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Define gradient and blob colors based on variant
  const gradientStyles = {
    blue: "from-agile-dark to-agile-dark/90 dark:from-[#0a1930] dark:to-[#0f2a4a]",
    red: "from-agile-dark to-[#331122] dark:from-[#2a0a1a] dark:to-[#3a0a1a]",
    green: "from-agile-dark to-[#112233] dark:from-[#0a2a1a] dark:to-[#0a3a2a]",
    purple: "from-[#221133] to-agile-dark dark:from-[#1a0a2a] dark:to-[#2a0a3a]",
    cyan: "from-[#113344] to-agile-dark dark:from-[#0a2a3a] dark:to-[#0a1a2a]",
  }

  const blobColors = {
    blue: {
      first: "bg-agile-red dark:bg-agile-red-dark",
      second: "bg-agile-blue dark:bg-agile-blue-dark",
      third: "bg-agile-green dark:bg-agile-green-dark",
    },
    red: {
      first: "bg-agile-red dark:bg-[#ff3366]",
      second: "bg-[#ff6699] dark:bg-[#cc3366]",
      third: "bg-agile-blue dark:bg-[#3366cc]",
    },
    green: {
      first: "bg-agile-green dark:bg-[#00aa77]",
      second: "bg-agile-blue dark:bg-[#3366aa]",
      third: "bg-[#66ccff] dark:bg-[#33aacc]",
    },
    purple: {
      first: "bg-[#9966ff] dark:bg-[#7744cc]",
      second: "bg-agile-red dark:bg-[#cc3366]",
      third: "bg-agile-blue dark:bg-[#3366aa]",
    },
    cyan: {
      first: "bg-[#00ccff] dark:bg-[#00aacc]",
      second: "bg-agile-green dark:bg-[#00aa77]",
      third: "bg-[#66ffcc] dark:bg-[#33ccaa]",
    },
  }

  // Define blob positions based on variant
  const blobPositions = {
    blue: {
      first: "top-[10%] left-[5%]",
      second: "top-[40%] left-[60%]",
      third: "top-[70%] left-[30%]",
    },
    red: {
      first: "top-[15%] left-[10%]",
      second: "top-[30%] left-[70%]",
      third: "top-[65%] left-[20%]",
    },
    green: {
      first: "top-[20%] left-[15%]",
      second: "top-[50%] left-[65%]",
      third: "top-[75%] left-[25%]",
    },
    purple: {
      first: "top-[5%] left-[20%]",
      second: "top-[45%] left-[75%]",
      third: "top-[60%] left-[15%]",
    },
    cyan: {
      first: "top-[25%] left-[5%]",
      second: "top-[35%] left-[80%]",
      third: "top-[80%] left-[35%]",
    },
  }

  // Helper function to get position classes for floating elements
  const getPositionClasses = (position: string) => {
    switch (position) {
      case "top-left":
        return "-top-6 -left-6"
      case "top-right":
        return "-top-6 -right-6"
      case "bottom-left":
        return "-bottom-4 -left-4"
      case "bottom-right":
        return "-bottom-4 -right-4"
      default:
        return "-top-6 -right-6"
    }
  }

  return (
    <div
      className={`pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden bg-gradient-to-br ${gradientStyles[variant]} text-white`}
    >
      {/* Animated background blobs */}
      <div className="absolute -z-0 inset-0 opacity-30">
        <div
          className={`absolute ${blobPositions[variant].first} w-[30vw] h-[30vw] rounded-full ${blobColors[variant].first} blur-3xl animate-pulse`}
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className={`absolute ${blobPositions[variant].second} w-[40vw] h-[40vw] rounded-full ${blobColors[variant].second} blur-3xl animate-pulse`}
          style={{ animationDuration: "10s", animationDelay: "1s" }}
        ></div>
        <div
          className={`absolute ${blobPositions[variant].third} w-[35vw] h-[35vw] rounded-full ${blobColors[variant].third} blur-3xl animate-pulse`}
          style={{ animationDuration: "12s", animationDelay: "2s" }}
        ></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="container relative z-10">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reversed ? "lg:flex-row-reverse" : ""}`}>
          <div className={`text-white ${reversed ? "lg:order-2" : "lg:order-1"}`}>
            <Reveal>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 leading-relaxed">
                {title}
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-lg md:text-xl text-gray-300 mb-8">{subtitle}</p>
            </Reveal>
            <Reveal delay={400}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="white" className="group" href={ctaHref}>
                  {ctaText}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outlineDark" href={secondaryCtaHref}>
                  {secondaryCtaText}
                </Button>
              </div>
            </Reveal>
          </div>
          <div
            className={`relative ${reversed ? "lg:order-1" : "lg:order-2"}`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <Reveal direction={reversed ? "right" : "left"} delay={300}>
              <div
                className={cn(
                  "relative animated-border transform transition-all duration-500",
                  isHovering ? "scale-[1.02]" : "scale-100",
                )}
                style={{
                  transform: isHovering
                    ? `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px) scale(1.02)`
                    : "scale(1)",
                }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-agile-blue via-agile-red to-agile-green rounded-xl blur-lg opacity-75 animate-gradient-x dark:from-agile-blue-dark dark:via-agile-red-dark dark:to-agile-green-dark"></div>
                <div className="relative bg-white dark:bg-gray-800 p-2 rounded-lg">
                  <Image
                    src={imageSrc || "/placeholder.svg"}
                    width={800}
                    height={600}
                    alt={imageAlt}
                    className="rounded-lg w-full h-auto"
                    priority
                  />

                  {/* Interactive overlay */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-tr from-agile-blue/40 to-transparent rounded-lg opacity-0 transition-opacity duration-300 dark:from-agile-blue-dark/40",
                      isHovering ? "opacity-30" : "opacity-0",
                    )}
                  ></div>
                </div>
              </div>
            </Reveal>

            {/* Floating elements */}
            {floatingElements.map((element, index) => (
              <div
                key={index}
                className={`absolute ${getPositionClasses(element.position)} bg-agile-${element.color} dark:bg-agile-${element.color}-dark text-white p-3 rounded-lg shadow-lg animate-bounce-slow z-10`}
                style={{
                  animationDelay: `${index * 0.5}s`,
                  transform: isHovering
                    ? `translate(${mousePosition.x * -0.2}px, ${mousePosition.y * -0.2}px)`
                    : "translate(0, 0)",
                  transition: "transform 0.2s ease-out",
                }}
              >
                <span className="font-bold">{element.highlight}</span> {element.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
