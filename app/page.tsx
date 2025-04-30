"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Users, Briefcase, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Reveal } from "@/components/reveal-animation"
import { HeroEnhanced } from "@/components/hero-enhanced"

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
      {/* 1. Hero Section */}
      <HeroEnhanced
        title={
          <>
            Elevate Your <span className="text-agile-blue">Project</span>{" "}
            <span className="text-agile-red">Management</span>
          </>
        }
        subtitle="Agilenesia provides comprehensive project management services, coaching, consulting, and training to help your organization succeed."
        ctaText="Get Started"
        ctaHref="/contact"
        secondaryCtaText="Learn More"
        secondaryCtaHref="/about"
        imageSrc="/project-dashboard-overview.png"
        imageAlt="Project Management Dashboard"
      />

      {/* 2. Value Proposition Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users size={48} />,
                title: "Expert Coaching",
                description:
                  "One-on-one coaching for project managers to enhance their skills and overcome specific challenges.",
                color: "blue",
              },
              {
                icon: <Briefcase size={48} />,
                title: "Strategic Consulting",
                description:
                  "Expert consulting to help organizations improve their project management practices and processes.",
                color: "red",
              },
              {
                icon: <Award size={48} />,
                title: "Comprehensive Training",
                description: "Training programs to develop project management skills across your organization.",
                color: "green",
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
                    <p className="text-agile-gray dark:text-gray-300">{service.description}</p>
                    <div className="mt-4">
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

          {/* Client Logos */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <Reveal key={index} delay={index * 50}>
                <div className="flex items-center justify-center h-20 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-agile-gray dark:text-gray-300 font-semibold">Client {index}</div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Featured Testimonial */}
          <Reveal>
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-agile-blue/20 dark:border-agile-blue-dark/20">
                  <Image src="/testimonial-1.png" width={96} height={96} alt="Sarah Johnson" className="object-cover" />
                </div>
                <div>
                  <svg
                    className="h-8 w-8 text-agile-blue/30 dark:text-agile-blue-dark/30 mb-4"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-lg mb-6 text-agile-gray dark:text-gray-300">
                    Working with Agilenesia transformed our project management processes. Their expert team helped us
                    implement agile methodologies that increased our delivery speed by 40% and significantly improved
                    team collaboration.
                  </p>
                  <div>
                    <h4 className="font-bold text-xl">Sarah Johnson</h4>
                    <p className="text-agile-gray dark:text-gray-400">CTO, TechCorp Global</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
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
                <Image
                  src="/project-overview-dashboard.png"
                  width={800}
                  height={600}
                  alt="Our Proven Methodology"
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
