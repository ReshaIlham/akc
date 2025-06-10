"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  CheckCircle,
  Users,
  Briefcase,
  BookOpen,
  BarChart,
  Clock,
  RefreshCw,
  Target,
  UserPlus,
  Lightbulb,
  Award,
  GraduationCap,
  LineChart,
  Layers,
  FileText,
  Shuffle,
  Code,
  Database,
  Server,
  Globe,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal-animation"
import { HeroEnhanced } from "@/components/hero-enhanced"
import { Card, CardContent } from "@/components/ui/card"

// Service Category Component
const ServiceCategory = ({
  category,
  description,
  icon,
  color,
  services,
  imageSrc,
}: {
  category: string
  description: string
  icon: React.ReactNode
  color: string
  services: any[]
  imageSrc: string
}) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-8">
        <Reveal>
          <div>
            <div
              className={`inline-flex items-center justify-center p-3 rounded-full bg-agile-${color}/10 text-agile-${color} dark:bg-agile-${color}-dark/10 dark:text-agile-${color}-dark mb-4`}
            >
              {icon}
            </div>
            <h2 className="text-3xl font-bold mb-4">{category}</h2>
            <p className="text-agile-gray dark:text-gray-300 mb-6">{description}</p>
            <Button variant={color as any} onClick={() => setExpanded(!expanded)} className="group">
              {expanded ? "Show Less" : "Explore Services"}
              <ArrowRight
                className={`ml-2 h-4 w-4 transition-transform ${expanded ? "rotate-90" : "group-hover:translate-x-1"}`}
              />
            </Button>
          </div>
        </Reveal>
        <Reveal direction="left">
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <Image
              src={imageSrc || "/placeholder.svg"}
              width={600}
              height={400}
              alt={category}
              className="w-full h-auto"
            />
            <div className={`absolute inset-0 bg-gradient-to-r from-agile-${color}/30 to-transparent opacity-60`}></div>
          </div>
        </Reveal>
      </div>

      {expanded && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 100} direction="up">
              <Card className={`card-hover border-t-4 border-agile-${color} dark:border-agile-${color}-dark h-full`}>
                <CardContent className="p-6">
                  <div className={`text-agile-${color} dark:text-agile-${color}-dark mb-4`}>{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-agile-gray dark:text-gray-300 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature: string, idx: number) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle
                          className={`text-agile-${color} dark:text-agile-${color}-dark mr-2 mt-1 h-4 w-4 flex-shrink-0`}
                        />
                        <p className="text-sm text-agile-gray dark:text-gray-300">{feature}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      )}
    </div>
  )
}

export default function ServicesPage() {
  // Core service categories
  const serviceCategories = [
    {
      category: "Coaching and Consulting",
      description:
        "Expert guidance to help organizations and individuals improve their project management capabilities through personalized coaching and strategic consulting services.",
      icon: <Users size={32} />,
      color: "blue",
      imageSrc: "/coaching-session.png",
      services: [
        {
          icon: <RefreshCw size={24} />,
          title: "Agile Transformation",
          description:
            "Guide your organization through the transition to agile methodologies for increased adaptability and innovation.",
          features: [
            "Agile readiness assessment",
            "Customized transformation roadmap",
            "Scrum and Kanban implementation",
            "Hybrid approaches for complex environments",
          ],
        },
        {
          icon: <Target size={24} />,
          title: "Process Optimization",
          description: "Streamline your project management processes to improve efficiency and effectiveness.",
          features: [
            "Process assessment and mapping",
            "Bottleneck identification",
            "Workflow redesign",
            "Continuous improvement frameworks",
          ],
        },
        {
          icon: <UserPlus size={24} />,
          title: "Team Coaching",
          description: "Enhance team performance through targeted coaching focused on collaboration and delivery.",
          features: [
            "Team dynamics assessment",
            "Conflict resolution strategies",
            "Communication improvement",
            "High-performance team building",
          ],
        },
        {
          icon: <Lightbulb size={24} />,
          title: "Strategic Advisory",
          description: "Expert guidance on strategic project management decisions and organizational alignment.",
          features: [
            "Strategic alignment assessment",
            "Executive advisory services",
            "Change management strategy",
            "Long-term capability development",
          ],
        },
      ],
    },
    {
      category: "Education and Training",
      description:
        "Comprehensive training programs designed to develop project management skills at all levels of your organization, from foundational concepts to advanced methodologies.",
      icon: <BookOpen size={32} />,
      color: "green",
      imageSrc: "/training-session.png",
      services: [
        {
          icon: <Award size={24} />,
          title: "Agile Certification",
          description: "Prepare for and obtain industry-recognized agile certifications to validate your expertise.",
          features: [
            "Scrum Master certification prep",
            "Product Owner training",
            "SAFe certification courses",
            "Agile Coach certification",
          ],
        },
        {
          icon: <GraduationCap size={24} />,
          title: "Leadership Development",
          description: "Develop the leadership skills necessary for effective project and team management.",
          features: [
            "Project leadership fundamentals",
            "Emotional intelligence training",
            "Decision-making frameworks",
            "Stakeholder management skills",
          ],
        },
        {
          icon: <FileText size={24} />,
          title: "Project Management Courses",
          description: "Comprehensive courses covering all aspects of traditional and modern project management.",
          features: [
            "PMP certification preparation",
            "PRINCE2 methodology training",
            "Risk management fundamentals",
            "Estimation and planning techniques",
          ],
        },
        {
          icon: <Shuffle size={24} />,
          title: "Customized Workshops",
          description: "Tailored training sessions designed to address your organization's specific challenges.",
          features: [
            "Needs assessment and design",
            "Interactive learning activities",
            "Real-world case studies",
            "Post-workshop implementation support",
          ],
        },
      ],
    },
    {
      category: "Project Management Solutions",
      description:
        "End-to-end solutions for establishing, improving, and recovering projects and project management functions within your organization.",
      icon: <BarChart size={32} />,
      color: "red",
      imageSrc: "/project-solutions.png",
      services: [
        {
          icon: <Briefcase size={24} />,
          title: "Project Governance",
          description: "Establish effective governance frameworks to ensure project alignment and success.",
          features: [
            "Governance structure design",
            "Decision-making frameworks",
            "Reporting and oversight systems",
            "Compliance and audit processes",
          ],
        },
        {
          icon: <Layers size={24} />,
          title: "Portfolio Management",
          description: "Optimize your project portfolio to maximize strategic value and resource utilization.",
          features: [
            "Portfolio assessment and alignment",
            "Project prioritization frameworks",
            "Resource allocation optimization",
            "Portfolio performance dashboards",
          ],
        },
        {
          icon: <Clock size={24} />,
          title: "Project Recovery",
          description: "Rescue troubled projects and get them back on track toward successful delivery.",
          features: [
            "Root cause analysis",
            "Recovery plan development",
            "Rapid implementation support",
            "Stakeholder confidence restoration",
          ],
        },
        {
          icon: <LineChart size={24} />,
          title: "PMO Establishment",
          description: "Design and implement a Project Management Office tailored to your organizational needs.",
          features: [
            "PMO model selection",
            "Process and template development",
            "Tool selection and implementation",
            "PMO staff training and mentoring",
          ],
        },
      ],
    },
    {
      category: "Digital Transformation",
      description:
        "Comprehensive digital solutions to help organizations leverage technology for improved project delivery, collaboration, and business outcomes.",
      icon: <Globe size={32} />,
      color: "blue",
      imageSrc: "/digital-transformation-unsplash.jpg",
      services: [
        {
          icon: <Code size={24} />,
          title: "Agile Development",
          description: "Implement agile software development practices to deliver high-quality solutions faster.",
          features: [
            "DevOps implementation",
            "CI/CD pipeline setup",
            "Test automation frameworks",
            "Agile development coaching",
          ],
        },
        {
          icon: <Database size={24} />,
          title: "Data-Driven Projects",
          description: "Leverage data analytics to make informed project decisions and drive continuous improvement.",
          features: [
            "Project analytics implementation",
            "KPI dashboard development",
            "Predictive analytics for projects",
            "Data-driven decision frameworks",
          ],
        },
        {
          icon: <Server size={24} />,
          title: "Technology Integration",
          description: "Seamlessly integrate project management tools and technologies into your existing ecosystem.",
          features: [
            "Tool selection and evaluation",
            "System integration planning",
            "API and workflow automation",
            "Legacy system migration",
          ],
        },
        {
          icon: <Globe size={24} />,
          title: "Digital Workspace",
          description: "Create effective digital environments for distributed and hybrid project teams.",
          features: [
            "Remote collaboration frameworks",
            "Digital workspace design",
            "Virtual team management",
            "Asynchronous workflow optimization",
          ],
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
            Our <span className="text-agile-green">Services</span>
          </>
        }
        subtitle="Comprehensive project management services tailored to meet your organization's unique needs and challenges."
        ctaText="Get Started"
        ctaHref="/contact"
        secondaryCtaText="Learn More"
        secondaryCtaHref="/products"
        imageSrc="/project-dashboard-overview.png"
        imageAlt="Project Management Dashboard"
      />

      {/* Services List */}
      <section id="services" className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 dark:opacity-20 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern-enhanced"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="Our Core Service Offerings"
            subtitle="Tailored solutions to address your project management challenges"
            color="blue"
          />

          {serviceCategories.map((category, index) => (
            <ServiceCategory
              key={index}
              category={category.category}
              description={category.description}
              icon={category.icon}
              color={category.color}
              services={category.services}
              imageSrc={category.imageSrc}
            />
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-[20%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-agile-blue blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-[20%] left-[10%] w-[30vw] h-[30vw] rounded-full bg-agile-red blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="Our Proven Process"
            subtitle="How we deliver exceptional results for our clients"
            color="red"
          />

          <div className="relative mt-16">
            {/* Process Timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-agile-red/20 dark:bg-agile-red-dark/20"></div>

            {[
              {
                step: "01",
                title: "Discovery & Assessment",
                description:
                  "We begin by understanding your organization's current state, challenges, and goals through interviews, surveys, and document reviews.",
                color: "red",
              },
              {
                step: "02",
                title: "Strategy Development",
                description:
                  "Based on our assessment, we develop a customized strategy that addresses your specific needs and aligns with your organizational objectives.",
                color: "blue",
              },
              {
                step: "03",
                title: "Implementation",
                description:
                  "We work with your team to implement the strategy, providing guidance, tools, and support throughout the process.",
                color: "green",
              },
              {
                step: "04",
                title: "Monitoring & Optimization",
                description:
                  "We continuously monitor progress, collect feedback, and make necessary adjustments to ensure optimal results.",
                color: "red",
              },
              {
                step: "05",
                title: "Evaluation & Handover",
                description:
                  "We evaluate the results, document lessons learned, and ensure your team has the capability to sustain and build upon the improvements.",
                color: "blue",
              },
            ].map((process, index) => (
              <Reveal key={index} delay={index * 200}>
                <div
                  className={`relative mb-16 ${index % 2 === 0 ? "md:ml-auto md:mr-[50%] md:pr-12" : "md:mr-auto md:ml-[50%] md:pl-12"}`}
                >
                  <div className="md:max-w-[90%]">
                    <div
                      className={`absolute top-0 ${index % 2 === 0 ? "right-0 md:right-5" : "left-0 md:left-5"} w-8 h-8 rounded-full bg-white dark:bg-gray-800 border-4 border-agile-${process.color} dark:border-agile-${process.color}-dark z-10 transform md:translate-x-1/2 md:translate-y-1/2`}
                    ></div>

                    <div
                      className={`p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg border-l-4 border-agile-${process.color} dark:border-agile-${process.color}-dark hover-lift`}
                    >
                      <div
                        className={`inline-block px-4 py-1 rounded-full text-sm font-bold mb-3 bg-agile-${process.color}/10 text-agile-${process.color} dark:bg-agile-${process.color}-dark/10 dark:text-agile-${process.color}-dark`}
                      >
                        Step {process.step}
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{process.title}</h3>
                      <p className="text-agile-gray dark:text-gray-300">{process.description}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 dark:opacity-20 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern-enhanced"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="Benefits of Working With Us"
            subtitle="How our services create value for your organization"
            color="green"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Improved Project Success Rates",
                description:
                  "Our methodologies and best practices help increase the percentage of projects delivered on time, within budget, and meeting objectives.",
                color: "blue",
              },
              {
                title: "Enhanced Team Productivity",
                description:
                  "We optimize workflows and collaboration, enabling your teams to accomplish more with the same resources.",
                color: "red",
              },
              {
                title: "Reduced Project Risks",
                description:
                  "Our proactive approach to risk management helps identify, assess, and mitigate potential issues before they impact your projects.",
                color: "green",
              },
              {
                title: "Better Resource Utilization",
                description:
                  "We help you optimize the allocation and utilization of resources across your portfolio of projects.",
                color: "blue",
              },
              {
                title: "Increased Stakeholder Satisfaction",
                description:
                  "Improved communication and delivery lead to higher satisfaction among both internal and external stakeholders.",
                color: "red",
              },
              {
                title: "Knowledge Transfer & Capability Building",
                description:
                  "We don't just solve problems; we transfer knowledge to build your organization's internal capabilities.",
                color: "green",
              },
            ].map((benefit, index) => (
              <Reveal key={index} delay={index * 100} direction="up">
                <div
                  className={`border-t-4 border-agile-${benefit.color} dark:border-agile-${benefit.color}-dark p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover-lift h-full`}
                >
                  <h3
                    className={`text-xl font-bold mb-3 text-agile-${benefit.color} dark:text-agile-${benefit.color}-dark`}
                  >
                    {benefit.title}
                  </h3>
                  <p className="text-agile-gray dark:text-gray-300">{benefit.description}</p>
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
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready to Transform Your Project Management?</h2>
              <p className="text-lg text-gray-100 mb-8">
                Contact us today to discuss how our services can help your organization improve project outcomes and
                achieve strategic objectives.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="group bg-white text-agile-blue hover:bg-gray-100">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Button size="lg" variant="outlineDark">
                  Download Service Catalog
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
