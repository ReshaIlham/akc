import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal-animation"
import { HeroEnhanced } from "@/components/hero-enhanced"
import { projects } from "@/lib/projects"

export default function ProjectsPage() {
  // Featured projects are the first 3 projects
  const featuredProjects = projects.slice(0, 3)
  // More projects are the rest
  const moreProjects = projects.slice(3)

  return (
    <div>
      {/* Hero Section */}
      <HeroEnhanced
        title={
          <>
            Our <span className="text-agile-blue">Projects</span>
          </>
        }
        subtitle="Case studies of successful project management implementations and transformations across various industries."
        ctaText="View All Projects"
        ctaHref="#featured-projects"
        secondaryCtaText="Contact Us"
        secondaryCtaHref="/contact"
        imageSrc="/project-collage.png"
        imageAlt="Project Collage"
        variant="green"
        floatingElements={[
          {
            text: "Projects Completed",
            highlight: "200+",
            position: "top-right",
            color: "blue",
          },
          {
            text: "Client Success Rate",
            highlight: "95%",
            position: "bottom-left",
            color: "red",
          },
        ]}
      />

      {/* Featured Projects */}
      <section id="featured-projects" className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 dark:opacity-20 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern-enhanced"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="Featured Projects"
            subtitle="Explore our most impactful project management implementations"
            color="red"
          />

          <div className="grid grid-cols-1 gap-16">
            {/* Map through featured projects */}
            {featuredProjects.map((project, index) => {
              // Determine color based on category
              const getCategoryColor = (category: string) => {
                switch (category) {
                  case "Financial Services":
                    return "blue"
                  case "Manufacturing":
                    return "green"
                  case "Healthcare":
                    return "red"
                  default:
                    return "blue"
                }
              }

              const colorClass = getCategoryColor(project.category)
              const isEven = index % 2 === 0

              return (
                <div key={project.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <Reveal className={isEven ? "" : "lg:order-2"}>
                    <div>
                      <div
                        className={`inline-block px-3 py-1 mb-3 text-xs font-medium bg-agile-${colorClass}/10 text-agile-${colorClass} rounded-full`}
                      >
                        {project.category}
                      </div>
                      <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                      <p className="text-agile-gray mb-6">{project.shortDescription}</p>
                      <div className="space-y-4 mb-6">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Timeline</span>
                          <span className="text-sm text-agile-gray">{project.timeframe.split("(")[0].trim()}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Services Provided</span>
                          <span className="text-sm text-agile-gray">
                            {project.services.slice(0, 2).join(", ")}
                            {project.services.length > 2 ? "..." : ""}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Client</span>
                          <span className="text-sm text-agile-gray">{project.client}</span>
                        </div>
                      </div>
                      <Link href={`/projects/${project.id}`}>
                        <Button className={`bg-agile-${colorClass} hover:bg-agile-${colorClass}/90`}>
                          Read Case Study
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </Reveal>
                  <Reveal direction={isEven ? "left" : "right"} className={isEven ? "lg:order-2" : "lg:order-1"}>
                    <Link
                      href={`/projects/${project.id}`}
                      className="block relative rounded-lg overflow-hidden shadow-lg"
                    >
                      <Image
                        src={project.image || "/placeholder.svg"}
                        width={600}
                        height={400}
                        alt={project.title}
                        className="rounded-lg shadow-lg w-full h-auto transition-transform duration-300 hover:scale-105"
                      />
                    </Link>
                  </Reveal>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* More Projects */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <SectionHeading
            title="More Success Stories"
            subtitle="Explore additional projects across various industries"
            color="green"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {moreProjects.map((project, index) => {
              // Determine color based on category
              const getCategoryColor = (category: string) => {
                switch (category) {
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
                <Reveal key={project.id} delay={index * 100} direction="up">
                  <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg card-hover h-full border border-transparent dark:border-gray-700">
                    <div className="relative h-48">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        fill
                        alt={project.title}
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div
                        className={`inline-block px-3 py-1 mb-3 text-xs font-medium bg-agile-${colorClass}/10 text-agile-${colorClass} dark:bg-agile-${colorClass}-dark/10 dark:text-agile-${colorClass}-dark rounded-full`}
                      >
                        {project.category}
                      </div>
                      <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
                      <p className="text-agile-gray dark:text-gray-300 mb-4">{project.shortDescription}</p>
                      <Link href={`/projects/${project.id}`}>
                        <Button
                          variant="outline"
                          className={`text-agile-${colorClass} border-agile-${colorClass} hover:bg-agile-${colorClass}/10 dark:text-agile-${colorClass}-dark dark:border-agile-${colorClass}-dark dark:hover:bg-agile-${colorClass}-dark/10`}
                          size="sm"
                        >
                          View Details
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-primary text-white">
        <div className="container">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready to Start Your Success Story?</h2>
              <p className="text-lg text-gray-100 mb-8">
                Contact us today to discuss how we can help your organization achieve similar results with our project
                management expertise.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-agile-blue hover:bg-gray-100">
                    Start Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outlineDark">
                    Schedule a Consultation
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
