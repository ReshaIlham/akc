"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/reveal-animation"

interface ParallaxSectionProps {
  imageSrc: string
  title: string
  subtitle: string
  direction?: "left" | "right"
  color?: "red" | "green" | "blue"
}

export function ParallaxSection({
  imageSrc,
  title,
  subtitle,
  direction = "left",
  color = "blue",
}: ParallaxSectionProps) {
  const [offset, setOffset] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const { top } = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementVisible = windowHeight * 0.8

      if (top < elementVisible && top > -elementVisible) {
        // Element is in view
        const scrollPosition = windowHeight - top
        const scrollFactor = scrollPosition / (windowHeight * 2)
        setOffset(scrollFactor * 100) // Move up to 100px
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const imageTransform =
    direction === "left"
      ? { transform: `translateY(${-offset * 0.5}px)` }
      : { transform: `translateY(${-offset * 0.5}px)` }

  const textTransform =
    direction === "left"
      ? { transform: `translateY(${offset * 0.3}px)` }
      : { transform: `translateY(${offset * 0.3}px)` }

  return (
    <section
      ref={sectionRef}
      className={cn(
        "py-16 md:py-24 overflow-hidden relative",
        direction === "left" ? "bg-gray-50 dark:bg-gray-900" : "bg-white dark:bg-gray-900",
      )}
    >
      <div className="container">
        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
            direction === "right" && "lg:flex-row-reverse",
          )}
        >
          <div className="relative z-10 transition-transform duration-300 ease-out" style={imageTransform}>
            <Reveal direction={direction}>
              <div className="relative rounded-lg overflow-hidden shadow-2xl transform transition-transform hover:scale-105 duration-500">
                <div className={cn("absolute -inset-1", `bg-agile-${color}/30`, "blur-lg")}></div>
                <Image
                  src={imageSrc || "/placeholder.svg"}
                  width={800}
                  height={600}
                  alt={title}
                  className="w-full h-auto rounded-lg relative z-10"
                />
              </div>
            </Reveal>
          </div>

          <div className="transition-transform duration-300 ease-out" style={textTransform}>
            <Reveal direction={direction === "left" ? "right" : "left"}>
              <h2 className={cn("text-3xl md:text-4xl font-bold mb-6", `text-gradient-${color}`)}>{title}</h2>
              <p className="text-lg text-agile-gray dark:text-gray-300">{subtitle}</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
