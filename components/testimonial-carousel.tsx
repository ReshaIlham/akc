"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal-animation"

interface Testimonial {
  id: number
  name: string
  position: string
  company: string
  image: string
  quote: string
  rating: number
}

interface TestimonialCarouselProps {
  inCombinedSection?: boolean
}

export function TestimonialCarousel({ inCombinedSection = false }: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [touchStart, setTouchStart] = useState(0)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CTO",
      company: "TechCorp Global",
      image: "/testimonial-1.png",
      quote:
        "Working with Agilenesia transformed our project management processes. Their expert team helped us implement agile methodologies that increased our delivery speed by 40%.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Director of Operations",
      company: "InnovateCo",
      image: "/testimonial-2.png",
      quote:
        "Agilenesia's consulting services provided valuable insights that helped us streamline our project workflows and improve team collaboration significantly.",
      rating: 5,
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      position: "Project Manager",
      company: "FinSolutions Inc.",
      image: "/testimonial-3.png",
      quote:
        "The training programs from Agilenesia equipped our team with the skills needed to tackle complex projects. I highly recommend their services to any organization.",
      rating: 4,
    },
  ]

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((current) => (current + 1) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX
    if (touchStart - touchEnd > 70) {
      nextSlide()
    } else if (touchStart - touchEnd < -70) {
      prevSlide()
    }
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000)
    return () => clearInterval(interval)
  }, [])

  // If this is a standalone section (not in combined section), use the full section styling
  if (!inCombinedSection) {
    return (
      <section className="py-16 md:py-24 bg-agile-dark text-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-30"></div>
          <div className="absolute -top-[10vw] -left-[10vw] w-[50vw] h-[50vw] rounded-full bg-agile-blue blur-[100px] animate-pulse opacity-20"></div>
          <div
            className="absolute -bottom-[10vw] -right-[10vw] w-[50vw] h-[50vw] rounded-full bg-agile-red blur-[100px] animate-pulse opacity-20"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container relative z-10">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">What Our Clients Say</h2>
          </Reveal>

          {renderCarouselContent()}
        </div>
      </section>
    )
  }

  // If this is part of a combined section, just render the carousel content
  return (
    <>
      <Reveal>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">What Our Clients Say</h2>
      </Reveal>
      {renderCarouselContent()}
    </>
  )

  function renderCarouselContent() {
    return (
      <div className="max-w-4xl mx-auto" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <div className="relative overflow-hidden rounded-2xl">
          <div
            className="transition-all duration-500 ease-in-out flex"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="min-w-full">
                <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-8 md:p-12 rounded-2xl shadow-2xl">
                  <div className="flex justify-center mb-6">
                    <Quote size={48} className="text-agile-blue/30 dark:text-agile-blue-dark/30" />
                  </div>

                  <p className="text-lg md:text-xl text-center mb-8">{testimonial.quote}</p>

                  <div className="flex items-center justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={cn(
                          "mx-0.5",
                          i < testimonial.rating
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-gray-300 dark:text-gray-600",
                        )}
                      />
                    ))}
                  </div>

                  <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left">
                    <div className="w-20 h-20 mb-4 md:mb-0 md:mr-4 overflow-hidden rounded-full border-4 border-agile-blue/20 dark:border-agile-blue-dark/20">
                      <Image
                        src={testimonial.image || "/placeholder.svg?height=80&width=80&query=person"}
                        width={80}
                        height={80}
                        alt={testimonial.name}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl">{testimonial.name}</h4>
                      <p className="text-agile-gray dark:text-gray-400">{testimonial.position}</p>
                      <p className="text-agile-blue dark:text-agile-blue-dark">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 text-agile-dark dark:text-white border-none shadow-lg hover:bg-white dark:hover:bg-gray-800 rounded-full"
            onClick={prevSlide}
            disabled={isAnimating}
          >
            <ChevronLeft size={24} />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 text-agile-dark dark:text-white border-none shadow-lg hover:bg-white dark:hover:bg-gray-800 rounded-full"
            onClick={nextSlide}
            disabled={isAnimating}
          >
            <ChevronRight size={24} />
          </Button>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-3 h-3 rounded-full transition-all",
                index === activeIndex ? "bg-agile-blue dark:bg-agile-blue-dark w-8" : "bg-white/30 dark:bg-gray-600",
              )}
              onClick={() => {
                if (isAnimating) return
                setIsAnimating(true)
                setActiveIndex(index)
                setTimeout(() => setIsAnimating(false), 500)
              }}
            />
          ))}
        </div>
      </div>
    )
  }
}
