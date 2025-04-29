"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight, Users, Briefcase, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal-animation"

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
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[-1]">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-agile-dark to-agile-dark/80"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-agile-red blur-3xl animate-pulse"></div>
            <div
              className="absolute top-[40%] left-[60%] w-96 h-96 rounded-full bg-agile-blue blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-[70%] left-[30%] w-80 h-80 rounded-full bg-agile-green blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Reveal>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
                  Elevate Your <span className="text-agile-blue">Project</span>{" "}
                  <span className="text-agile-red">Management</span>
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-lg md:text-xl text-gray-300 mb-8">
                  Agilenesia provides comprehensive project management services, coaching, consulting, and training to
                  help your organization succeed.
                </p>
              </Reveal>
              <Reveal delay={400}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-agile-blue hover:bg-agile-blue/90 text-white">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                    Learn More
                  </Button>
                </div>
              </Reveal>
            </div>
            <Reveal direction="left" delay={300}>
              <div className="relative animated-border">
                <div className="bg-white p-2 rounded-lg">
                  <Image
                    src="/project-dashboard-overview.png"
                    width={800}
                    height={600}
                    alt="Project Management Dashboard"
                    className="rounded-lg w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <SectionHeading
            title="Why Choose Agilenesia"
            subtitle="We deliver exceptional project management services that drive results"
            color="blue"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users size={48} className="text-agile-blue mb-4" />,
                title: "Expert Team",
                description:
                  "Our team of certified project management professionals brings years of experience across various industries.",
                color: "blue",
              },
              {
                icon: <Briefcase size={48} className="text-agile-red mb-4" />,
                title: "Proven Methodology",
                description: "We implement proven project management methodologies tailored to your specific needs.",
                color: "red",
              },
              {
                icon: <Award size={48} className="text-agile-green mb-4" />,
                title: "Measurable Results",
                description: "Our approach focuses on delivering measurable improvements in project outcomes.",
                color: "green",
              },
            ].map((feature, index) => (
              <Reveal key={index} delay={index * 100} direction="up">
                <Card className="card-hover border-none shadow-lg h-full">
                  <CardContent className="p-8 text-center">
                    <div className="flex justify-center">{feature.icon}</div>
                    <h3 className={`text-2xl font-bold mb-3 text-agile-${feature.color}`}>{feature.title}</h3>
                    <p className="text-agile-gray">{feature.description}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive project management services tailored to meet your organization's unique needs"
            color="red"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal direction="right">
              <div className="relative">
                <div className="absolute -z-10 top-1/4 -left-4 w-24 h-24 bg-agile-red/20 rounded-full blur-2xl"></div>
                <div className="absolute -z-10 bottom-1/4 -right-4 w-32 h-32 bg-agile-blue/20 rounded-full blur-2xl"></div>
                <Image
                  src="/collaborative-project-success.png"
                  width={800}
                  height={600}
                  alt="Team Collaboration"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </Reveal>

            <div>
              <Reveal>
                <h3 className="text-3xl font-bold mb-6">Transforming Project Management</h3>
                <p className="text-agile-gray mb-6">
                  Our comprehensive suite of services is designed to enhance your organization's project management
                  capabilities and drive successful outcomes.
                </p>
              </Reveal>

              <div className="space-y-4">
                {[
                  {
                    title: "Project Management Coaching",
                    description: "One-on-one coaching for project managers to enhance their skills.",
                    color: "blue",
                  },
                  {
                    title: "Consulting Services",
                    description: "Expert consulting to improve project management practices.",
                    color: "red",
                  },
                  {
                    title: "Education & Training",
                    description: "Comprehensive training programs to develop project management skills.",
                    color: "green",
                  },
                ].map((service, index) => (
                  <Reveal key={index} delay={index * 100}>
                    <div className={`border-l-4 border-agile-${service.color} pl-4 py-2`}>
                      <h4 className="font-bold text-lg">{service.title}</h4>
                      <p className="text-sm text-agile-gray">{service.description}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={400}>
                <div className="mt-8">
                  <Link href="/services">
                    <Button className="bg-agile-red hover:bg-agile-red/90">
                      Explore All Services
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <SectionHeading
            title="Featured Projects"
            subtitle="Case studies of successful project management implementations and transformations"
            color="green"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/modern-city-center.png",
                title: "Enterprise PMO Transformation",
                category: "Financial Services",
                description:
                  "Helped a leading financial institution establish a Project Management Office (PMO) that improved project success rates by 40%.",
              },
              {
                image: "/bustling-factory-floor.png",
                title: "Agile Implementation",
                category: "Manufacturing",
                description:
                  "Guided a manufacturing company through an agile transformation that reduced time-to-market by 30%.",
              },
              {
                image: "/collaborative-healthcare-discussion.png",
                title: "Project Recovery",
                category: "Healthcare",
                description:
                  "Recovered a critical healthcare IT project that was behind schedule and over budget, delivering it successfully within revised constraints.",
              },
            ].map((project, index) => (
              <Reveal key={index} delay={index * 100} direction="up">
                <Card className="overflow-hidden card-hover border-none shadow-lg h-full">
                  <div className="relative h-48">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      fill
                      alt={project.title}
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="inline-block px-3 py-1 mb-3 text-xs font-medium bg-agile-blue/10 text-agile-blue rounded-full">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-agile-gray mb-4">{project.description}</p>
                    <Link
                      href="/projects"
                      className="text-agile-blue hover:text-agile-blue/80 font-medium inline-flex items-center"
                    >
                      Read Case Study
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Reveal>
              <Link href="/projects">
                <Button
                  variant="outline"
                  className="border-agile-green text-agile-green hover:bg-agile-green hover:text-white"
                >
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-agile-dark text-white">
        <div className="container">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready to Transform Your Project Management?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Partner with Agilenesia to enhance your organization's project management capabilities and achieve your
                strategic objectives.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-agile-blue hover:bg-agile-blue/90">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
