"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Reveal } from "@/components/reveal-animation"
import { HeroEnhanced } from "@/components/hero-enhanced"
import { RequestDemoModal } from "@/components/request-demo-modal"
import { Toast } from "@/components/toast"
import { cn } from "@/lib/utils"
import { productCategories } from "./product-data"

export default function ProductsPage() {
  // State to track active category tab
  const [activeCategory, setActiveCategory] = useState("application")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showToast, setShowToast] = useState(false)

  // Get current category data
  const currentCategory = productCategories.find((category) => category.id === activeCategory) || productCategories[0]

  const handleDemoSuccess = () => {
    setShowToast(true)
  }

  // Function to get appropriate image URL with better fallbacks
  const getImageUrl = (imageSrc: string, productId: string, categoryId: string) => {
    // If image is already a full URL (Unsplash), return it
    if (imageSrc.startsWith("http")) {
      return imageSrc
    }

    // If it's a placeholder or doesn't exist, provide category-specific Unsplash images
    const fallbackImages = {
      application: {
        tumbuh:
          "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
        pantau:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
        latih:
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
      },
      "training-kits": {
        "agile-fundamentals-kit":
          "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
        "scrum-master-toolkit":
          "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
        "agile-leadership-program":
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
      },
      templates: {
        "agile-project-documentation":
          "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
        "project-management-toolkit":
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
        "agile-metrics-dashboard":
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
      },
      merch: {
        "agile-tshirts":
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
        "project-management-cards":
          "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
        "project-management-monopoly":
          "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
      },
    }

    // Return specific fallback or try the original image
    return (
      fallbackImages[categoryId]?.[productId] ||
      imageSrc ||
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&crop=center&auto=format&q=80"
    )
  }

  return (
    <div>
      {/* Hero Section */}
      <HeroEnhanced
        title={
          <>
            Our <span className="text-agile-red">Products</span>
          </>
        }
        subtitle="Innovative tools, resources, and merchandise to enhance your project management capabilities and drive successful outcomes."
        ctaText="Explore Products"
        ctaHref="#discover-products"
        secondaryCtaText="Request Demo"
        secondaryCtaHref="#"
        onSecondaryCtaClick={() => setIsModalOpen(true)}
        imageSrc="/project-dashboard-overview.png"
        imageAlt="Project Management Dashboard"
        variant="red"
        floatingElements={[
          {
            text: "Integrations",
            highlight: "30+",
            position: "top-right",
            color: "blue",
          },
          {
            text: "Satisfaction",
            highlight: "98%",
            position: "bottom-left",
            color: "green",
          },
        ]}
      />

      {/* Combined Products Section with Tabs */}
      <section id="discover-products" className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 dark:opacity-20 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern-enhanced"></div>
        </div>

        <div className="container relative z-10">
          <Reveal>
            <h2 className="text-4xl font-bold text-center mb-4">Discover Our Product Ecosystem</h2>
            <p className="text-agile-gray dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Explore our comprehensive suite of tools and resources designed to elevate your project management
              capabilities
            </p>
          </Reveal>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center mb-12">
            <div className="bg-gray-100 dark:bg-gray-800 p-1 rounded-lg flex flex-wrap justify-center">
              {productCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "flex items-center px-4 py-2 m-1 rounded-md transition-all",
                    activeCategory === category.id
                      ? `bg-agile-${category.color} text-white dark:bg-agile-${category.color}-dark`
                      : "bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700",
                  )}
                >
                  <span className="mr-2">{category.icon}</span>
                  <span>{category.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Category Description */}
          <Reveal>
            <div className="text-center mb-12">
              <div
                className={`inline-flex items-center justify-center p-3 rounded-full bg-agile-${currentCategory.color}/10 text-agile-${currentCategory.color} dark:bg-agile-${currentCategory.color}-dark/10 dark:text-agile-${currentCategory.color}-dark mb-4`}
              >
                {currentCategory.icon}
              </div>
              <h3 className={`text-2xl font-bold mb-2 text-gradient-${currentCategory.color}`}>
                {currentCategory.title}
              </h3>
              <p className="text-agile-gray dark:text-gray-300 max-w-2xl mx-auto">{currentCategory.description}</p>
            </div>
          </Reveal>

          {/* Product Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentCategory.products.map((product, index) => (
              <Reveal key={product.id} delay={index * 100} direction="up">
                <Card className="card-hover h-full overflow-hidden border-none shadow-lg dark:bg-gray-800">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={getImageUrl(product.image, product.id, currentCategory.id) || "/placeholder.svg"}
                      fill
                      alt={product.title}
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    {product.badge && (
                      <div
                        className={`inline-block px-3 py-1 mb-3 text-xs font-medium bg-agile-${currentCategory.color}/10 text-agile-${currentCategory.color} dark:bg-agile-${currentCategory.color}-dark/10 dark:text-agile-${currentCategory.color}-dark rounded-full`}
                      >
                        {product.badge}
                      </div>
                    )}
                    <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                    <p className="text-agile-gray dark:text-gray-300 mb-4">{product.description}</p>

                    {product.features && (
                      <ul className="mb-4 space-y-1">
                        {product.features.map((feature: string, idx: number) => (
                          <li key={idx} className="text-sm text-agile-gray dark:text-gray-300 flex items-start">
                            <span
                              className={`text-agile-${currentCategory.color} dark:text-agile-${currentCategory.color}-dark mr-2`}
                            >
                              •
                            </span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex flex-col">
                        <div className="text-sm text-agile-gray dark:text-gray-400 mb-1">Start from</div>
                        <div className="flex items-center gap-2">
                          <div className="font-bold text-lg text-agile-dark dark:text-white">{product.price}</div>
                          {product.originalPrice && (
                            <div className="text-sm text-gray-500 line-through">{product.originalPrice}</div>
                          )}
                        </div>
                      </div>
                      <Link href={`/products/${product.id}`}>
                        <Button variant={currentCategory.color as any} size="sm" className="group">
                          View Details
                          <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-secondary text-white">
        <div className="container">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready to Transform Your Project Management?</h2>
              <p className="text-lg text-gray-100 mb-8">
                Get started with our products today and see the difference they can make in your project outcomes.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-white text-agile-blue hover:bg-gray-100"
                  onClick={() => setIsModalOpen(true)}
                >
                  Request a Demo
                </Button>
                <Link href="/contact">
                  <Button size="lg" variant="outlineDark">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Request Demo Modal */}
      <RequestDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSuccess={handleDemoSuccess} />

      {/* Toast Notification */}
      <Toast
        message="Demo request submitted successfully! We'll contact you within 24 hours."
        type="success"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  )
}
