import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Laptop, BookOpen, FileText, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Reveal } from "@/components/reveal-animation"
import { HeroEnhanced } from "@/components/hero-enhanced"

// Product Category Component
const ProductCategory = ({
  title,
  description,
  icon,
  color,
  products,
}: {
  title: string
  description: string
  icon: React.ReactNode
  color: string
  products: any[]
}) => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 dark:opacity-20 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern-enhanced"></div>
      </div>

      <div className="container relative z-10">
        <div className="flex items-center mb-8">
          <div
            className={`p-3 rounded-full bg-agile-${color}/10 text-agile-${color} dark:bg-agile-${color}-dark/10 dark:text-agile-${color}-dark mr-4`}
          >
            {icon}
          </div>
          <div>
            <h2 className={`text-3xl font-bold text-gradient-${color}`}>{title}</h2>
            <p className="text-agile-gray dark:text-gray-300 mt-2">{description}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Reveal key={index} delay={index * 100} direction="up">
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
                      className={`absolute top-3 right-3 px-3 py-1 text-xs font-bold rounded-full bg-agile-${color} text-white dark:bg-agile-${color}-dark`}
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
                          <span className={`text-agile-${color} dark:text-agile-${color}-dark mr-2`}>•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex items-center justify-between mt-4">
                    {product.price && (
                      <div className="font-bold text-lg text-agile-dark dark:text-white">{product.price}</div>
                    )}
                    <Link href={product.link || `/products/${product.id}`}>
                      <Button variant={color as any} size="sm" className="group">
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
  )
}

export default function ProductsPage() {
  // Product categories with their products
  const productCategories = [
    {
      title: "Software",
      description: "Powerful digital tools to enhance your project management and learning capabilities",
      icon: <Laptop size={32} />,
      color: "blue",
      products: [
        {
          id: "aplikasi-tumbuh",
          title: "Aplikasi Tumbuh",
          description: "A learning management system specifically designed for coaching and project management.",
          image: "/project-management-suite.png",
          badge: "Popular",
          features: [
            "Customized learning paths",
            "Progress tracking and analytics",
            "Interactive coaching modules",
            "Project management integration",
          ],
          price: "Starting at $49/month",
          link: "/products/aplikasi-tumbuh",
        },
        {
          id: "aplikasi-pantau",
          title: "Aplikasi Pantau",
          description: "A comprehensive project management tool for tracking, managing, and optimizing your projects.",
          image: "/project-dashboard-overview.png",
          features: [
            "Real-time project tracking",
            "Resource allocation",
            "Gantt charts and timelines",
            "Customizable dashboards",
          ],
          price: "Starting at $39/month",
          link: "/products/aplikasi-pantau",
        },
        {
          id: "aplikasi-latih",
          title: "Aplikasi Latih",
          description:
            "Practice application for certification exam questions with comprehensive feedback and analytics.",
          image: "/project-toolkit.png",
          features: [
            "Thousands of practice questions",
            "Simulated exam environment",
            "Detailed performance analytics",
            "Study plan generator",
          ],
          price: "Starting at $29/month",
          link: "/products/aplikasi-latih",
        },
      ],
    },
    {
      title: "Training Kits",
      description: "Comprehensive training materials to develop project management skills in your organization",
      icon: <BookOpen size={32} />,
      color: "green",
      products: [
        {
          id: "agile-fundamentals-kit",
          title: "Agile Fundamentals Kit",
          description: "Everything you need to introduce and implement agile methodologies in your organization.",
          image: "/training-session.png",
          badge: "Bestseller",
          features: ["Facilitator guide", "Participant workbooks", "Digital slide deck", "Interactive exercises"],
          price: "$499",
          link: "/products/agile-fundamentals-kit",
        },
        {
          id: "scrum-master-toolkit",
          title: "Scrum Master Toolkit",
          description: "Comprehensive resources for Scrum Masters to effectively facilitate agile teams.",
          image: "/coaching-session.png",
          features: [
            "Scrum ceremony templates",
            "Team health assessment tools",
            "Impediment resolution guides",
            "Retrospective facilitation kit",
          ],
          price: "$349",
          link: "/products/scrum-master-toolkit",
        },
        {
          id: "agile-leadership-program",
          title: "Agile Leadership Program",
          description: "Training program designed to help leaders foster agile mindsets and practices.",
          image: "/consulting-meeting.png",
          features: [
            "Leadership assessment tools",
            "Organizational change guides",
            "Agile governance frameworks",
            "Executive coaching materials",
          ],
          price: "$799",
          link: "/products/agile-leadership-program",
        },
      ],
    },
    {
      title: "Templates",
      description: "Ready-to-use templates to streamline your project management processes",
      icon: <FileText size={32} />,
      color: "red",
      products: [
        {
          id: "agile-project-documentation",
          title: "Agile Project Documentation",
          description: "Comprehensive set of templates for documenting agile projects from inception to completion.",
          image: "/project-solutions.png",
          features: [
            "User story templates",
            "Sprint planning documents",
            "Release planning frameworks",
            "Project retrospective guides",
          ],
          price: "$199",
          link: "/products/agile-project-documentation",
        },
        {
          id: "project-management-toolkit",
          title: "Project Management Toolkit",
          description: "Essential templates for traditional project management, compatible with PMI standards.",
          image: "/project-collage.png",
          badge: "Complete",
          features: [
            "Project charter template",
            "WBS and scope documents",
            "Risk register and management plan",
            "Stakeholder communication templates",
          ],
          price: "$249",
          link: "/products/project-management-toolkit",
        },
        {
          id: "agile-metrics-dashboard",
          title: "Agile Metrics Dashboard",
          description: "Ready-to-use dashboards for tracking and visualizing key agile metrics and KPIs.",
          image: "/agile-transformation.png",
          features: ["Velocity tracking", "Burndown/burnup charts", "Cycle time analytics", "Team performance metrics"],
          price: "$149",
          link: "/products/agile-metrics-dashboard",
        },
      ],
    },
    {
      title: "Merch & Cards",
      description: "Fun and educational project management merchandise and learning tools",
      icon: <ShoppingBag size={32} />,
      color: "blue",
      products: [
        {
          id: "agile-tshirts",
          title: "Agile T-Shirts",
          description:
            "High-quality t-shirts featuring agile concepts, methodologies, and humorous project management quotes.",
          image: "/vibrant-startup-collaboration.png",
          features: [
            "Premium cotton material",
            "Multiple designs available",
            "Sizes S-XXL",
            "Bulk discounts for teams",
          ],
          price: "$24.99",
          link: "/products/agile-tshirts",
        },
        {
          id: "project-management-cards",
          title: "Project Management Cards",
          description: "Educational card deck for learning and applying project management concepts and techniques.",
          image: "/collaborative-project-success.png",
          badge: "New",
          features: ["100+ concept cards", "Activity instructions", "Team exercises", "Facilitation guide"],
          price: "$34.99",
          link: "/products/project-management-cards",
        },
        {
          id: "project-management-monopoly",
          title: "Project Management Monopoly",
          description: "Educational board game that simulates project execution with risks, decisions, and trade-offs.",
          image: "/collaborative-healthcare-discussion.png",
          features: ["2-6 players", "60-90 minute gameplay", "Real-world scenarios", "Learning guide included"],
          price: "$59.99",
          link: "/products/project-management-monopoly",
        },
      ],
    },
  ]

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
        ctaHref="#software"
        secondaryCtaText="Request Demo"
        secondaryCtaHref="/contact"
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

      {/* Product Categories */}
      <div id="software">
        {productCategories.map((category, index) => (
          <ProductCategory
            key={index}
            title={category.title}
            description={category.description}
            icon={category.icon}
            color={category.color}
            products={category.products}
          />
        ))}
      </div>

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
                <Button size="lg" className="bg-white text-agile-blue hover:bg-gray-100">
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
    </div>
  )
}
