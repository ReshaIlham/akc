"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Building, Briefcase, CheckCircle, Quote, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Reveal } from "@/components/reveal-animation"
import { findProjectById } from "@/lib/projects"

export default function ProjectDetailPage({ params }: { params: { projectId: string } }) {
  const [project, setProject] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Find the project by ID
    const foundProject = findProjectById(params.projectId)
    setProject(foundProject)
    setLoading(false)
  }, [params.projectId])

  if (loading) {
    return (
      <div className="container py-32 flex justify-center">
        <div className="animate-pulse">Loading project details...</div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="container py-32">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="mb-8">The project you are looking for does not exist or has been removed.</p>
        <Link href="/projects">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>
      </div>
    )
  }

  // Determine color based on category
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Financial Services":
        return "blue"
      case "Manufacturing":
        return "green"
      case "Healthcare":
        return "red"
      case "Technology":
        return "blue"
      case "Public Sector":
        return "green"
      case "Retail":
        return "red"
      default:
        return "blue"
    }
  }

  const colorClass = getCategoryColor(project.category)

  return (
    <div className="pt-36 pb-16">
      {/* Breadcrumb */}
      <div className="container mb-8">
        <div className="flex items-center text-sm text-agile-gray dark:text-gray-400 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-2 rounded-md inline-flex">
          <Link href="/" className="hover:text-agile-blue dark:hover:text-agile-blue-dark">
            Home
          </Link>
          <ChevronRight className="mx-2 h-4 w-4" />
          <Link href="/projects" className="hover:text-agile-blue dark:hover:text-agile-blue-dark">
            Projects
          </Link>
          <ChevronRight className="mx-2 h-4 w-4" />
          <span className={`text-agile-${colorClass} dark:text-agile-${colorClass}-dark`}>{project.title}</span>
        </div>
      </div>

      {/* Project Hero */}
      <section className="container mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <div
                className={`absolute -inset-1 bg-agile-${colorClass}/30 dark:bg-agile-${colorClass}-dark/30 blur-lg`}
              ></div>
              <div className="relative aspect-video">
                <Image
                  src={project.image || "/placeholder.svg"}
                  fill
                  alt={project.title}
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
          </Reveal>

          <Reveal direction="left">
            <div>
              <div
                className={`inline-block px-3 py-1 mb-3 text-xs font-medium bg-agile-${colorClass}/10 text-agile-${colorClass} dark:bg-agile-${colorClass}-dark/10 dark:text-agile-${colorClass}-dark rounded-full`}
              >
                {project.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl text-agile-gray dark:text-gray-300 mb-6">{project.shortDescription}</p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Calendar className={`mr-3 h-5 w-5 text-agile-${colorClass} dark:text-agile-${colorClass}-dark`} />
                  <div>
                    <span className="font-medium">Timeframe:</span> {project.timeframe}
                  </div>
                </div>
                <div className="flex items-center">
                  <Building className={`mr-3 h-5 w-5 text-agile-${colorClass} dark:text-agile-${colorClass}-dark`} />
                  <div>
                    <span className="font-medium">Client:</span> {project.client}
                  </div>
                </div>
                <div className="flex items-center">
                  <Briefcase className={`mr-3 h-5 w-5 text-agile-${colorClass} dark:text-agile-${colorClass}-dark`} />
                  <div>
                    <span className="font-medium">Industry:</span> {project.industry}
                  </div>
                </div>
              </div>

              <Link href="/contact">
                <Button size="lg" variant={colorClass as any} className="group">
                  Discuss a Similar Project
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Project Description */}
      <section className="container mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <Reveal className="lg:col-span-2">
            <div>
              <h2 className={`text-3xl font-bold mb-6 text-gradient-${colorClass}`}>Project Overview</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-agile-gray dark:text-gray-300 mb-6">{project.description}</p>

                <h3 className="text-2xl font-bold mt-8 mb-4">The Challenge</h3>
                <p className="text-agile-gray dark:text-gray-300 mb-6">{project.challenge}</p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Our Solution</h3>
                <p className="text-agile-gray dark:text-gray-300 mb-6">{project.solution}</p>

                <h3 className="text-2xl font-bold mt-8 mb-4">The Outcome</h3>
                <p className="text-agile-gray dark:text-gray-300">{project.outcome}</p>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" className="space-y-8">
            {/* Results */}
            <Card className={`border-t-4 border-agile-${colorClass} dark:border-agile-${colorClass}-dark`}>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Results</h3>
                <ul className="space-y-3">
                  {project.results.map((result: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle
                        className={`text-agile-${colorClass} dark:text-agile-${colorClass}-dark mr-2 mt-1 h-5 w-5 flex-shrink-0`}
                      />
                      <span className="text-agile-gray dark:text-gray-300">{result}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Services Provided */}
            <Card className={`border-t-4 border-agile-${colorClass} dark:border-agile-${colorClass}-dark`}>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Services Provided</h3>
                <ul className="space-y-3">
                  {project.services.map((service: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle
                        className={`text-agile-${colorClass} dark:text-agile-${colorClass}-dark mr-2 mt-1 h-5 w-5 flex-shrink-0`}
                      />
                      <span className="text-agile-gray dark:text-gray-300">{service}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Testimonial if available */}
            {project.testimonial && (
              <Card className="bg-gray-50 dark:bg-gray-800 border-none shadow-lg">
                <CardContent className="p-6">
                  <Quote
                    className={`text-agile-${colorClass}/30 dark:text-agile-${colorClass}-dark/30 h-10 w-10 mb-4`}
                  />
                  <p className="text-agile-gray dark:text-gray-300 italic mb-4">"{project.testimonial.quote}"</p>
                  <div>
                    <p className="font-bold">{project.testimonial.author}</p>
                    <p className="text-sm text-agile-gray dark:text-gray-400">
                      {project.testimonial.position}, {project.testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </Reveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 bg-agile-${colorClass}/10 dark:bg-gray-800`}>
        <div className="container">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Projects?</h2>
              <p className="text-lg text-agile-gray dark:text-gray-300 mb-8">
                Contact us today to discuss how we can help your organization achieve similar results.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" variant={colorClass as any} className="group">
                    Contact Us
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline">
                    Explore Our Services
                  </Button>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Back to Projects */}
      <div className="container mt-16">
        <Link href="/projects">
          <Button variant="ghost" className="group">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to All Projects
          </Button>
        </Link>
      </div>
    </div>
  )
}
