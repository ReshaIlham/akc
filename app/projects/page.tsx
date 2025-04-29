import Image from "next/image"
import { ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal-animation"

export default function ProjectsPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-agile-dark text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Reveal>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                  Our <span className="text-agile-blue">Projects</span>
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-lg text-gray-300 mb-6">
                  Case studies of successful project management implementations and transformations across various
                  industries.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <Button className="bg-agile-blue hover:bg-agile-blue/90">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Reveal>
            </div>
            <Reveal direction="left" delay={300}>
              <div className="relative animated-border">
                <div className="bg-white p-2 rounded-lg">
                  <Image
                    src="/project-collage.png"
                    width={800}
                    height={600}
                    alt="Project Collage"
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24">
        <div className="container">
          <SectionHeading
            title="Featured Projects"
            subtitle="Explore our most impactful project management implementations"
            color="red"
          />

          <div className="grid grid-cols-1 gap-16">
            {/* Project 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal>
                <div>
                  <div className="inline-block px-3 py-1 mb-3 text-xs font-medium bg-agile-blue/10 text-agile-blue rounded-full">
                    Financial Services
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Enterprise PMO Transformation</h2>
                  <p className="text-agile-gray mb-6">
                    We helped a leading financial institution establish a Project Management Office (PMO) that improved
                    project success rates by 40% and reduced project costs by 25%.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Timeline</span>
                      <span className="text-sm text-agile-gray">6 months</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Services Provided</span>
                      <span className="text-sm text-agile-gray">Consulting, Training</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">ROI</span>
                      <span className="text-sm text-agile-gray">320% in first year</span>
                    </div>
                  </div>
                  <Button className="bg-agile-blue hover:bg-agile-blue/90">
                    Read Case Study
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Reveal>
              <Reveal direction="left">
                <Image
                  src="/modern-city-center.png"
                  width={600}
                  height={400}
                  alt="Enterprise PMO Transformation"
                  className="rounded-lg shadow-lg"
                />
              </Reveal>
            </div>

            {/* Project 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal direction="right" className="order-2 lg:order-1">
                <Image
                  src="/bustling-factory-floor.png"
                  width={600}
                  height={400}
                  alt="Agile Implementation"
                  className="rounded-lg shadow-lg"
                />
              </Reveal>
              <Reveal className="order-1 lg:order-2">
                <div>
                  <div className="inline-block px-3 py-1 mb-3 text-xs font-medium bg-agile-green/10 text-agile-green rounded-full">
                    Manufacturing
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Agile Implementation</h2>
                  <p className="text-agile-gray mb-6">
                    We guided a manufacturing company through an agile transformation that reduced time-to-market by 30%
                    and improved team collaboration and morale.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Timeline</span>
                      <span className="text-sm text-agile-gray">4 months</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Services Provided</span>
                      <span className="text-sm text-agile-gray">Agile Transformation, Training</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">ROI</span>
                      <span className="text-sm text-agile-gray">250% in first year</span>
                    </div>
                  </div>
                  <Button className="bg-agile-green hover:bg-agile-green/90">
                    Read Case Study
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Project 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal>
                <div>
                  <div className="inline-block px-3 py-1 mb-3 text-xs font-medium bg-agile-red/10 text-agile-red rounded-full">
                    Healthcare
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Project Recovery</h2>
                  <p className="text-agile-gray mb-6">
                    We recovered a critical healthcare IT project that was behind schedule and over budget, delivering
                    it successfully within revised constraints and meeting all key requirements.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Timeline</span>
                      <span className="text-sm text-agile-gray">3 months</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Services Provided</span>
                      <span className="text-sm text-agile-gray">Project Recovery, Consulting</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">ROI</span>
                      <span className="text-sm text-agile-gray">400% vs. project abandonment</span>
                    </div>
                  </div>
                  <Button className="bg-agile-red hover:bg-agile-red/90">
                    Read Case Study
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Reveal>
              <Reveal direction="left">
                <Image
                  src="/collaborative-healthcare-discussion.png"
                  width={600}
                  height={400}
                  alt="Project Recovery"
                  className="rounded-lg shadow-lg"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* More Projects */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <SectionHeading
            title="More Success Stories"
            subtitle="Explore additional projects across various industries"
            color="green"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/vibrant-startup-collaboration.png",
                title: "Startup Scaling",
                category: "Technology",
                description:
                  "Helped a tech startup scale its project management capabilities to support rapid growth and multiple concurrent projects.",
              },
              {
                image: "/government-building.png",
                title: "Government Transformation",
                category: "Public Sector",
                description:
                  "Implemented a project governance framework for a government agency that improved transparency and accountability.",
              },
              {
                image: "/bustling-market-day.png",
                title: "Retail Expansion",
                category: "Retail",
                description:
                  "Managed a retail chain's expansion project, opening 15 new locations on time and within budget.",
              },
              {
                image: "/education-campus.png",
                title: "Education Platform",
                category: "Education",
                description:
                  "Developed a project management framework for a university's digital transformation initiative.",
              },
              {
                image: "/energy-plant.png",
                title: "Energy Sector Optimization",
                category: "Energy",
                description: "Implemented portfolio management practices for an energy company's capital projects.",
              },
              {
                image: "/telecom-tower.png",
                title: "Telecom Infrastructure",
                category: "Telecommunications",
                description:
                  "Managed a complex infrastructure upgrade project for a major telecommunications provider.",
              },
            ].map((project, index) => (
              <Reveal key={index} delay={index * 100} direction="up">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg card-hover h-full">
                  <div className="relative h-48">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      fill
                      alt={project.title}
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="inline-block px-3 py-1 mb-3 text-xs font-medium bg-agile-blue/10 text-agile-blue rounded-full">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-agile-gray mb-4">{project.description}</p>
                    <Button
                      variant="outline"
                      className="text-agile-blue border-agile-blue hover:bg-agile-blue/10"
                      size="sm"
                    >
                      View Details
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
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
                <Button size="lg" className="bg-white text-agile-blue hover:bg-gray-100">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
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
