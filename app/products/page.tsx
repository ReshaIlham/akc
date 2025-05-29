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
                      src={product.image || "/placeholder.svg"}
                      fill
                      alt={product.title}
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    {product.badge && (
                      <div
                        className={`absolute top-3 right-3 px-3 py-1 text-xs font-bold rounded-full bg-agile-${currentCategory.color} text-white dark:bg-agile-${currentCategory.color}-dark`}
                      >
                        {product.badge}
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
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
                      {product.price && (
                        <div className="font-bold text-lg text-agile-dark dark:text-white">{product.price}</div>
                      )}
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
