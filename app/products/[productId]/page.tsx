"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, ChevronRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal-animation"
import { RequestDemoModal } from "@/components/request-demo-modal"
import { Toast } from "@/components/toast"
import { findProductById } from "@/lib/products"
import { productCategories } from "@/app/products/product-data"

export default function ProductDetailPage({ params }: { params: { productId: string } }) {
  const [product, setProduct] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [relatedProducts, setRelatedProducts] = useState<any[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    // Find the product by ID
    const foundProduct = findProductById(params.productId, productCategories)
    setProduct(foundProduct)

    // Find related products (from the same category)
    if (foundProduct) {
      const category = productCategories.find((cat) => cat.id === foundProduct.categoryId)
      if (category) {
        // Get up to 3 other products from the same category
        const related = category.products.filter((p) => p.id !== params.productId).slice(0, 3)
        setRelatedProducts(related)
      }
    }

    setLoading(false)
  }, [params.productId])

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

  if (loading) {
    return (
      <div className="container py-32 flex justify-center">
        <div className="animate-pulse">Loading product details...</div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="container py-32">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-8">The product you are looking for does not exist or has been removed.</p>
        <Link href="/products">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
        </Link>
      </div>
    )
  }

  const colorClass = product.categoryColor || "blue"

  // Determine the access URL based on product ID
  const getAccessUrl = product.id === "tumbuh" ? "https://tumbuh.vercel.app/" : "/contact" // Default to contact page for other products

  return (
    <div className="pt-36 pb-16">
      {/* Breadcrumb */}
      <div className="container mb-8">
        <div className="flex items-center text-sm text-agile-gray dark:text-gray-400 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-2 rounded-md inline-flex">
          <Link href="/" className="hover:text-agile-blue dark:hover:text-agile-blue-dark">
            Home
          </Link>
          <ChevronRight className="mx-2 h-4 w-4" />
          <Link href="/products" className="hover:text-agile-blue dark:hover:text-agile-blue-dark">
            Products
          </Link>
          <ChevronRight className="mx-2 h-4 w-4" />
          <span className={`text-agile-${colorClass} dark:text-agile-${colorClass}-dark`}>{product.title}</span>
        </div>
      </div>

      {/* Product Hero */}
      <section className="container mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <div
                className={`absolute -inset-1 bg-agile-${colorClass}/30 dark:bg-agile-${colorClass}-dark/30 blur-lg`}
              ></div>
              <div className="relative aspect-video">
                <Image
                  src={getImageUrl(product.image, product.id, product.categoryId) || "/placeholder.svg"}
                  fill
                  alt={product.title}
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
          </Reveal>

          <Reveal direction="left">
            <div>
              {product.badge && (
                <div
                  className={`inline-block px-3 py-1 mb-3 text-xs font-medium bg-agile-${colorClass}/10 text-agile-${colorClass} dark:bg-agile-${colorClass}-dark/10 dark:text-agile-${colorClass}-dark rounded-full`}
                >
                  {product.badge}
                </div>
              )}
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.title}</h1>
              <p className="text-xl text-agile-gray dark:text-gray-300 mb-6">{product.description}</p>

              <div className="mb-8">
                <div className="text-sm text-agile-gray dark:text-gray-400 mb-2">Start from</div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-3xl font-bold text-agile-dark dark:text-white">{product.price}</div>
                  {product.originalPrice && (
                    <div className="text-lg text-gray-500 line-through">{product.originalPrice}</div>
                  )}
                </div>
                <div className={`text-agile-${colorClass} dark:text-agile-${colorClass}-dark text-sm`}>
                  {product.categoryTitle} Category
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {/* 1. Get Access Now button - opens tumbuh.vercel.app in a new tab */}
                <a
                  href={getAccessUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-agile-${colorClass} text-white hover:bg-agile-${colorClass}/90 dark:bg-agile-${colorClass}-dark dark:text-white dark:hover:bg-agile-${colorClass}-dark/90 h-11 rounded-md px-8`}
                >
                  Get Access Now
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>

                {/* 2. Request Demo button - opens modal */}
                <Button
                  size="lg"
                  variant={`outline${colorClass.charAt(0).toUpperCase() + colorClass.slice(1)}`}
                  onClick={() => setIsModalOpen(true)}
                >
                  Request Demo
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Product Features */}
      <section className="container mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Reveal>
            <div>
              <h2 className={`text-3xl font-bold mb-6 text-gradient-${colorClass}`}>Key Features</h2>
              <div className="space-y-4">
                {product.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start">
                    <div className={`p-1 rounded-full bg-agile-${colorClass}/10 mr-3 mt-1`}>
                      <Check className={`h-4 w-4 text-agile-${colorClass} dark:text-agile-${colorClass}-dark`} />
                    </div>
                    <p className="text-agile-gray dark:text-gray-300">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal direction="left">
            <div>
              <h2 className={`text-3xl font-bold mb-6 text-gradient-${colorClass}`}>Why Choose {product.title}?</h2>
              <div className="space-y-4">
                <p className="text-agile-gray dark:text-gray-300">
                  {product.title} is designed to help you achieve your project management goals with ease and
                  efficiency. Our solution provides the tools and features you need to succeed in today's competitive
                  environment.
                </p>
                <p className="text-agile-gray dark:text-gray-300">
                  With {product.title}, you'll experience improved productivity, better collaboration, and measurable
                  results that drive your business forward.
                </p>
                <p className="text-agile-gray dark:text-gray-300">
                  Join the many satisfied customers who have transformed their project management capabilities with our
                  innovative solutions.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Call to Action */}
      <section className={`py-16 bg-agile-${colorClass}/10 dark:bg-gray-800`}>
        <div className="container">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started with {product.title}?</h2>
              <p className="text-lg text-agile-gray dark:text-gray-300 mb-8">
                Take the next step toward improving your project management capabilities today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                {/* Repeat the same buttons from above for consistency */}
                <a
                  href={getAccessUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-agile-${colorClass} text-white hover:bg-agile-${colorClass}/90 dark:bg-agile-${colorClass}-dark dark:text-white dark:hover:bg-agile-${colorClass}-dark/90 h-11 rounded-md px-8`}
                >
                  Get Access Now
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>

                <Button size="lg" variant="outline" onClick={() => setIsModalOpen(true)}>
                  Request Demo
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related Products */}
      <section className="container py-16">
        <Reveal>
          <h2 className="text-3xl font-bold mb-12 text-center">You May Also Like</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Show actual related products with links to their detail pages */}
          {relatedProducts.length > 0
            ? relatedProducts.map((relatedProduct, index) => (
                <Reveal key={relatedProduct.id} delay={index * 100} direction="up">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full">
                    <div className="relative h-48">
                      <Image
                        src={
                          getImageUrl(relatedProduct.image, relatedProduct.id, relatedProduct.categoryId) ||
                          "/placeholder.svg"
                        }
                        fill
                        alt={relatedProduct.title}
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      {relatedProduct.badge && (
                        <div
                          className={`inline-block px-3 py-1 mb-3 text-xs font-medium bg-agile-${colorClass}/10 text-agile-${colorClass} dark:bg-agile-${colorClass}-dark/10 dark:text-agile-${colorClass}-dark rounded-full`}
                        >
                          {relatedProduct.badge}
                        </div>
                      )}
                      <h3 className="text-xl font-bold mb-2">{relatedProduct.title}</h3>
                      <p className="text-agile-gray dark:text-gray-300 mb-4 line-clamp-2">
                        {relatedProduct.description}
                      </p>
                      <div className="mb-4">
                        <div className="text-xs text-agile-gray dark:text-gray-400 mb-1">Start from</div>
                        <div className="flex items-center gap-2">
                          <div className="font-bold text-lg">{relatedProduct.price}</div>
                          {relatedProduct.originalPrice && (
                            <div className="text-sm text-gray-500 line-through">{relatedProduct.originalPrice}</div>
                          )}
                        </div>
                      </div>
                      <Link href={`/products/${relatedProduct.id}`}>
                        <Button variant={colorClass as any} size="sm">
                          View Details
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Reveal>
              ))
            : // Fallback if no related products
              [1, 2, 3].map((_, index) => (
                <Reveal key={index} delay={index * 100} direction="up">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">Related Product</h3>
                      <p className="text-agile-gray dark:text-gray-300 mb-4">
                        Another product that might interest you based on your current selection.
                      </p>
                      <Link href="/products">
                        <Button variant="outline" size="sm">
                          Browse Products
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Reveal>
              ))}
        </div>
      </section>

      {/* Back to Products */}
      <div className="container">
        <Link href="/products">
          <Button variant="ghost" className="group">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to All Products
          </Button>
        </Link>
      </div>

      {/* Request Demo Modal */}
      <RequestDemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleDemoSuccess}
        preSelectedProduct={product.id}
      />

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
