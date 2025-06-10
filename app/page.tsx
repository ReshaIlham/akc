"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Users, Briefcase, BookOpen, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Reveal } from "@/components/reveal-animation"
import { HeroEnhanced } from "@/components/hero-enhanced"
import { MovingClients } from "@/components/moving-clients"
import { TestimonialsSlider } from "@/components/testimonials-slider"

export default function Home() {
  useEffect(() => {
    // Reveal animations on scroll
    const handleRevealElements = () => {
      const reveals = document.querySelectorAll(".reveal-on-scroll")
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

  return (
    <div className="overflow-hidden">
      {/* 1. Hero Section - Updated CTAs */}
      <HeroEnhanced
        title={
          <>
            Elevate Your <span className="text-agile-blue">Project</span>{" "}
            <span className="text-agile-red">Management</span>
          </>
        }
        subtitle="Agilenesia provides comprehensive project management services, coaching, consulting, and training to help your organization succeed."
        ctaText="Get Started"
        ctaHref="#what-we-offer"
        secondaryCtaText="Learn More"
        secondaryCtaHref="/about"
        imageSrc="/coaching-session.png"
        imageAlt="Project Management Coaching Session"
      />

      {/* 2. Value Proposition Section - Added ID for anchor link */}
      <section id="what-we-offer" className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 dark:opacity-20 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern-enhanced"></div>
        </div>

        <div className="container relative z-10">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gradient-blue">What We Offer</h2>
            <p className="text-lg text-center text-agile-gray dark:text-gray-300 mb-12 max-w-3xl mx-auto">
              Our comprehensive suite of services is designed to enhance your organization's project management
              capabilities and drive successful outcomes.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users size={48} />,
                title: "Coaching and Consulting",
                description:
                  "Expert guidance to help organizations and individuals improve their project management capabilities through personalized coaching and strategic consulting services.",
                color: "blue",
              },
              {
                icon: <BookOpen size={48} />,
                title: "Education and Training",
                description:
                  "Comprehensive training programs designed to develop project management skills at all levels of your organization, from foundational concepts to advanced methodologies.",
                color: "green",
              },
              {
                icon: <Briefcase size={48} />,
                title: "Project Management Solutions",
                description:
                  "End-to-end solutions for establishing, improving, and recovering projects and project management functions within your organization.",
                color: "red",
              },
              {
                icon: <Globe size={48} />,
                title: "Digital Transformation",
                description:
                  "Comprehensive digital solutions to help organizations leverage technology for improved project delivery, collaboration, and business outcomes.",
                color: "blue",
              },
            ].map((service, index) => (
              <Reveal key={index} delay={index * 100} direction="up">
                <Card
                  className={`card-hover border-t-4 border-agile-${service.color} h-full dark:bg-gray-800 dark:border-agile-${service.color}-dark`}
                >
                  <CardContent className="p-6">
                    <div className={`text-agile-${service.color} dark:text-agile-${service.color}-dark mb-4`}>
                      {service.icon}
                    </div>
                    <h3
                      className={`text-xl font-bold mb-3 text-agile-${service.color} dark:text-agile-${service.color}-dark`}
                    >
                      {service.title}
                    </h3>
                    <p className="text-agile-gray dark:text-gray-300 mb-4">{service.description}</p>
                    <div className="mt-auto">
                      <Link
                        href="/services"
                        className={`text-agile-${service.color} dark:text-agile-${service.color}-dark font-medium inline-flex items-center group`}
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Testimonials / Client Logos Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        <div className="container">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gradient-red">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-center text-agile-gray dark:text-gray-300 mb-12 max-w-3xl mx-auto">
              We've helped organizations across various industries improve their project management capabilities and
              achieve exceptional results.
            </p>
          </Reveal>

          {/* Moving Client Logos */}
          <div className="mb-16">
            <MovingClients />
          </div>

          {/* Testimonials Slider */}
          <TestimonialsSlider />
        </div>
      </section>

      {/* 4. Impact Numbers Section */}
      <section className="py-16 md:py-24 bg-agile-dark text-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-20"></div>
          <div className="absolute top-[10%] right-[10%] w-64 h-64 rounded-full bg-agile-red blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-[10%] left-[10%] w-64 h-64 rounded-full bg-agile-green blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container relative z-10">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Our Impact by the Numbers</h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "95%", label: "Client Satisfaction", color: "red" },
              { value: "200+", label: "Projects Completed", color: "blue" },
              { value: "40%", label: "Average Efficiency Gained", color: "green" },
              { value: "15+", label: "Years of Experience", color: "red" },
            ].map((stat, index) => (
              <Reveal key={index} delay={index * 100}>
                <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover-lift">
                  <div
                    className={`text-6xl md:text-7xl font-extrabold mb-2 text-agile-${stat.color} dark:text-agile-${stat.color}-dark`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xl text-gray-300">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Methodology Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 dark:opacity-20 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern-enhanced"></div>
        </div>

        <div className="container relative z-10">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient-green">
              Our Proven Methodology
            </h2>
            <p className="text-lg text-center text-agile-gray dark:text-gray-300 mb-12 max-w-3xl mx-auto">
              We implement data-driven, results-oriented methodologies that have been refined through years of
              experience across various industries.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <div className="space-y-6">
                  {[
                    {
                      title: "Discovery & Assessment",
                      description:
                        "We begin by understanding your organization's current state, challenges, and goals.",
                      color: "blue",
                    },
                    {
                      title: "Strategy Development",
                      description:
                        "Based on our assessment, we develop a customized strategy that addresses your specific needs.",
                      color: "red",
                    },
                    {
                      title: "Implementation",
                      description: "We work with your team to implement the strategy, providing guidance and support.",
                      color: "green",
                    },
                    {
                      title: "Monitoring & Optimization",
                      description:
                        "We continuously monitor progress and make necessary adjustments to ensure optimal results.",
                      color: "blue",
                    },
                  ].map((step, index) => (
                    <div
                      key={index}
                      className={`p-4 border-l-4 border-agile-${step.color} dark:border-agile-${step.color}-dark`}
                    >
                      <h3
                        className={`text-xl font-bold mb-2 text-agile-${step.color} dark:text-agile-${step.color}-dark`}
                      >
                        {step.title}
                      </h3>
                      <p className="text-agile-gray dark:text-gray-300">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal direction="left">
              <div className="relative">
                <div className="absolute -inset-1 bg-agile-green/30 dark:bg-agile-green-dark/30 blur-lg"></div>
                <img
                  src="/training-session.png"
                  alt="Project Management Coaching"
                  className="w-full h-auto rounded-lg relative z-10"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-primary dark:bg-gradient-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-30"></div>
        </div>

        <div className="container relative z-10">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready to Transform Your Project Management?</h2>
              <p className="text-lg text-gray-100 mb-8">
                Partner with Agilenesia to enhance your organization's project management capabilities and achieve your
                strategic objectives.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="group bg-white text-agile-blue hover:bg-gray-100">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outlineDark">
                    Learn More
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
