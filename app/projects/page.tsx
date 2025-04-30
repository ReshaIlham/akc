"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Clock, Users, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProjectsPage() {
  const heroRef = useRef(null)
  const featuredRef = useRef(null)
  const allProjectsRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 })
  const featuredInView = useInView(featuredRef, { once: true, amount: 0.3 })
  const allProjectsInView = useInView(allProjectsRef, { once: true, amount: 0.3 })

  const featuredProjects = [
    {
      title: "Digital Transformation for Global Bank",
      description:
        "Led a comprehensive digital transformation initiative for a leading global bank, implementing Agile methodologies across multiple departments.",
      image: "/placeholder.svg?height=600&width=800&query=banking_digital_transformation",
      client: "Global Banking Corp",
      category: "Digital Transformation",
      duration: "18 months",
      teamSize: "25+ professionals",
    },
    {
      title: "E-commerce Platform Optimization",
      description:
        "Optimized project management processes for a major e-commerce platform, resulting in 40% faster product launches and improved team collaboration.",
      image: "/placeholder.svg?height=600&width=800&query=ecommerce_platform",
      client: "ShopQuick",
      category: "Process Optimization",
      duration: "12 months",
      teamSize: "15 professionals",
    },
  ]

  const allProjects = [
    {
      title: "Healthcare Provider Agile Transformation",
      description:
        "Implemented Agile methodologies for a healthcare provider, improving project delivery times by 35%.",
      image: "/placeholder.svg?height=400&width=600&query=healthcare_project",
      category: "Agile Transformation",
      client: "National Healthcare Services",
    },
    {
      title: "Manufacturing Process Optimization",
      description:
        "Streamlined project management processes for a manufacturing company, resulting in significant cost reductions.",
      image: "/placeholder.svg?height=400&width=600&query=manufacturing_project",
      category: "Process Optimization",
      client: "Global Manufacturing Inc.",
    },
    {
      title: "Government Agency PMO Setup",
      description:
        "Established a Project Management Office for a government agency, standardizing processes across departments.",
      image: "/placeholder.svg?height=400&width=600&query=government_project",
      category: "PMO Establishment",
      client: "Federal Agency",
    },
    {
      title: "Technology Startup Scaling",
      description: "Provided coaching and project management frameworks for a rapidly growing technology startup.",
      image: "/placeholder.svg?height=400&width=600&query=startup_project",
      category: "Coaching & Training",
      client: "TechInnovate",
    },
    {
      title: "Retail Chain Project Portfolio Management",
      description: "Implemented portfolio management practices for a retail chain undergoing national expansion.",
      image: "/placeholder.svg?height=400&width=600&query=retail_project",
      category: "Portfolio Management",
      client: "National Retail Group",
    },
    {
      title: "Financial Services Compliance Project",
      description: "Managed a complex regulatory compliance project for a financial services company.",
      image: "/placeholder.svg?height=400&width=600&query=financial_compliance_project",
      category: "Compliance",
      client: "FinServe Solutions",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero section */}
      <section className="relative py-24 md:py-32 bg-muted/30" ref={heroRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-muted-foreground">
              Explore our portfolio of successful project management initiatives across various industries and
              organizations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects section */}
      <section className="py-24" ref={featuredRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: featuredInView ? 1 : 0, y: featuredInView ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">
              In-depth case studies of our most impactful project management engagements
            </p>
          </motion.div>

          <div className="space-y-24">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: featuredInView ? 1 : 0, y: featuredInView ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:grid-flow-col-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <Badge className="mb-4">{project.category}</Badge>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-lg text-muted-foreground mb-6">{project.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-sm text-muted-foreground">Client</div>
                      <div className="font-medium">{project.client}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Duration</div>
                      <div className="font-medium">{project.duration}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Team Size</div>
                      <div className="font-medium">{project.teamSize}</div>
                    </div>
                  </div>

                  <Button>
                    Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <div className={`relative ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full"
                    />
                  </div>
                  <div className="absolute -z-10 w-full h-full bg-primary/5 rounded-2xl -left-6 -bottom-6" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Project Outcomes</h2>
            <p className="text-lg text-muted-foreground">
              Measurable results our clients have achieved through our project management services
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                stat: "40%",
                description: "Average reduction in project delivery time",
                icon: Clock,
              },
              {
                stat: "200+",
                description: "Projects successfully completed",
                icon: Building,
              },
              {
                stat: "5,000+",
                description: "Professionals trained in project management",
                icon: Users,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-xl shadow-md text-center"
              >
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{item.stat}</div>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects section */}
      <section className="py-24" ref={allProjectsRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: allProjectsInView ? 1 : 0, y: allProjectsInView ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">More Success Stories</h2>
            <p className="text-lg text-muted-foreground">
              Explore our full range of project management initiatives across industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: allProjectsInView ? 1 : 0, y: allProjectsInView ? 0 : 30 }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
              >
                <Card className="h-full overflow-hidden">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <Badge className="w-fit mb-2">{project.category}</Badge>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>Client: {project.client}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{project.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild className="w-full">
                      <Link href="#">
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="outline">
              Load More Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Industries section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-lg text-muted-foreground">
              Our project management expertise spans across diverse industries
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Banking & Finance",
              "Healthcare",
              "Technology",
              "Manufacturing",
              "Government",
              "Retail",
              "Education",
              "Energy",
              "Telecommunications",
              "Insurance",
              "Transportation",
              "Media & Entertainment",
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.03 * index }}
                viewport={{ once: true }}
                className="bg-card p-4 rounded-lg shadow-sm text-center hover:bg-primary/5 transition-colors"
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-primary/5 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Success Story?</h2>
            <p className="text-lg mb-8">
              Contact us today to discuss how Agilenesia can help your organization achieve project success.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg">Contact Us</Button>
              <Button size="lg" variant="outline">
                View Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
