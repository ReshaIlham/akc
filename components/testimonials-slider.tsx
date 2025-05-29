"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal-animation"
import { cn } from "@/lib/utils"

interface Testimonial {
  id: number
  name: string
  position: string
  company: string
  image: string
  quote: string
  rating: number
}

export function TestimonialsSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CTO",
      company: "TechCorp Global",
      image: "/testimonial-1.png",
      quote:
        "Working with Agilenesia transformed our project management processes. Their expert team helped us implement agile methodologies that increased our delivery speed by 40% and significantly improved team collaboration.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Director of Operations",
      company: "InnovateCo",
      image: "/testimonial-2.png",
      quote:
        "Agilenesia's consulting services provided valuable insights that helped us streamline our project workflows and improve team collaboration significantly. The ROI was evident within the first quarter.",
      rating: 5,
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      position: "Project Manager",
      company: "FinSolutions Inc.",
      image: "/testimonial-3.png",
      quote:
        "The training programs from Agilenesia equipped our team with the skills needed to tackle complex projects. I highly recommend their services to any organization looking to improve their project management capabilities.",
      rating: 5,
    },
    {
      id: 4,
      name: "David Park",
      position: "CEO",
      company: "TechNova Startup",
      image: "/testimonial-1.png",
      quote:
        "Agilenesia understood our need to stay agile while adding just enough structure to scale effectively. The frameworks they implemented have been crucial to our growth from 3 to 12 concurrent projects.",
      rating: 5,
    },
    {
      id: 5,
      name: "Jennifer Lee",
      position: "COO",
      company: "RetailPlus Chain",
      image: "/testimonial-2.png",
      quote:
        "The efficiency and consistency with which Agilenesia managed our expansion was remarkable. Every location opened on time with the same high-quality standards. Truly professional service.",
      rating: 5,
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

  const goToSlide = (index: number) => {
    if (isAnimating || index === activeIndex) return
    setIsAnimating(true)
    setActiveIndex(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000) // Change slide every 6 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <Reveal>
      <div className="relative max-w-4xl mx-auto">
        {/* Main testimonial display */}
        <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-700 shadow-lg">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="min-w-full">
                <div className="p-8 md:p-12">
                  {/* Quote icon */}
                  <div className="flex justify-center mb-6">
                    <svg
                      className="h-12 w-12 text-agile-blue/30 dark:text-agile-blue-dark/30"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>

                  {/* Quote text */}
                  <p className="text-lg md:text-xl text-center mb-8 text-agile-gray dark:text-gray-300">
                    {testimonial.quote}
                  </p>

                  {/* Rating */}
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

                  {/* Author info */}
                  <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left">
                    <div className="w-16 h-16 mb-4 md:mb-0 md:mr-4 overflow-hidden rounded-full border-4 border-agile-blue/20 dark:border-agile-blue-dark/20">
                      <Image
                        src={testimonial.image || "/placeholder.svg?height=64&width=64&query=person"}
                        width={64}
                        height={64}
                        alt={testimonial.name}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl dark:text-white">{testimonial.name}</h4>
                      <p className="text-agile-gray dark:text-gray-400">{testimonial.position}</p>
                      <p className="text-agile-blue dark:text-agile-blue-dark font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
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

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                index === activeIndex
                  ? "bg-agile-blue dark:bg-agile-blue-dark w-8"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-agile-blue/50 dark:hover:bg-agile-blue-dark/50",
              )}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
            />
          ))}
        </div>
      </div>
    </Reveal>
  )
}
