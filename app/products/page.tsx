import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, BarChart, Layers, Database, LineChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal-animation"

export default function ProductsPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-agile-dark text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Reveal>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                  Our <span className="text-agile-red">Products</span>
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-lg text-gray-300 mb-6">
                  Innovative tools and resources to enhance your project management capabilities and drive successful
                  outcomes.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <Button className="bg-agile-red hover:bg-agile-red/90">
                  Explore Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
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
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="py-16 md:py-24">
        <div className="container">
          <SectionHeading
            title="Agilenesia Project Management Suite"
            subtitle="Our flagship project management software helps teams collaborate, track progress, and deliver projects on time and within budget"
            color="blue"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <h3 className="text-3xl font-bold mb-6">Comprehensive Project Management Solution</h3>
                <p className="text-agile-gray mb-6">
                  The Agilenesia Project Management Suite is a comprehensive solution designed to address the full
                  lifecycle of project management, from planning and execution to monitoring and reporting.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Task and resource management",
                    "Real-time collaboration features",
                    "Customizable dashboards and reporting",
                    "Integration with popular tools and platforms",
                    "Advanced analytics and insights",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="text-agile-blue mr-3 mt-1 h-5 w-5" />
                      <p className="text-agile-gray">{feature}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-agile-blue hover:bg-agile-blue/90">Request a Demo</Button>
                  <Button variant="outline" className="border-agile-blue text-agile-blue hover:bg-agile-blue/10">
                    View Pricing
                  </Button>
                </div>
              </div>
            </Reveal>
            <Reveal direction="left">
              <div className="relative">
                <div className="absolute -z-10 top-1/4 -left-4 w-24 h-24 bg-agile-blue/20 rounded-full blur-2xl"></div>
                <div className="absolute -z-10 bottom-1/4 -right-4 w-32 h-32 bg-agile-red/20 rounded-full blur-2xl"></div>
                <Image
                  src="/project-management-suite.png"
                  width={800}
                  height={600}
                  alt="Project Management Suite"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Product Modules */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <SectionHeading
            title="Product Modules"
            subtitle="Flexible modules that can be combined to create your ideal project management solution"
            color="green"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Layers size={48} className="text-agile-blue mb-4" />,
                title: "Project Planning",
                description:
                  "Comprehensive planning tools including Gantt charts, task dependencies, and resource allocation.",
                features: [
                  "Interactive Gantt charts",
                  "Task dependencies and critical path",
                  "Resource allocation and leveling",
                  "Project templates and wizards",
                ],
                color: "blue",
              },
              {
                icon: <Database size={48} className="text-agile-red mb-4" />,
                title: "Resource Management",
                description: "Tools to optimize resource allocation, track utilization, and manage capacity.",
                features: [
                  "Resource calendars and availability",
                  "Skill matching and allocation",
                  "Utilization reporting",
                  "Capacity planning",
                ],
                color: "red",
              },
              {
                icon: <LineChart size={48} className="text-agile-green mb-4" />,
                title: "Performance Analytics",
                description:
                  "Advanced analytics to track project performance, identify trends, and make data-driven decisions.",
                features: [
                  "Real-time dashboards",
                  "Customizable KPIs and metrics",
                  "Trend analysis and forecasting",
                  "Automated reporting",
                ],
                color: "green",
              },
              {
                icon: <BarChart size={48} className="text-agile-blue mb-4" />,
                title: "Portfolio Management",
                description:
                  "Tools to manage multiple projects, prioritize initiatives, and align with strategic objectives.",
                features: [
                  "Project prioritization",
                  "Resource allocation across projects",
                  "Strategic alignment",
                  "Portfolio dashboards",
                ],
                color: "blue",
              },
            ].map((module, index) => (
              <Reveal key={index} delay={index * 100} direction="up">
                <Card className={`card-hover border-t-4 border-agile-${module.color} h-full`}>
                  <CardContent className="p-6">
                    <div className="flex justify-center">{module.icon}</div>
                    <h3 className={`text-xl font-bold mb-3 text-center text-agile-${module.color}`}>{module.title}</h3>
                    <p className="text-agile-gray mb-4 text-center">{module.description}</p>
                    <div className="space-y-2">
                      {module.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className={`h-4 w-4 mr-2 text-agile-${module.color}`} />
                          <span className="text-sm text-agile-gray">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Project Management Toolkit */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal direction="right" className="order-2 lg:order-1">
              <Image
                src="/project-toolkit.png"
                width={600}
                height={400}
                alt="Project Management Toolkit"
                className="rounded-lg shadow-lg"
              />
            </Reveal>
            <Reveal className="order-1 lg:order-2">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gradient-red">Project Management Toolkit</h2>
                <p className="text-agile-gray mb-6">
                  A comprehensive set of templates, tools, and resources to help project managers plan, execute, and
                  monitor projects effectively.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    {
                      title: "Project Planning Templates",
                      description: "Standardized templates for project charters, plans, and schedules.",
                    },
                    {
                      title: "Risk Management Tools",
                      description: "Tools to identify, assess, and mitigate project risks.",
                    },
                    {
                      title: "Resource Allocation Framework",
                      description: "Framework for optimal resource allocation and utilization.",
                    },
                    {
                      title: "Performance Tracking Dashboard",
                      description: "Dashboard to monitor project performance and progress.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="border-l-4 border-agile-red pl-4 py-2">
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-agile-gray">{item.description}</p>
                    </div>
                  ))}
                </div>
                <Button className="bg-agile-red hover:bg-agile-red/90">
                  Download Toolkit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <SectionHeading
            title="Pricing Plans"
            subtitle="Flexible pricing options to meet the needs of organizations of all sizes"
            color="blue"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$29",
                description: "Perfect for small teams and simple projects",
                features: [
                  "Up to 10 users",
                  "Basic project planning",
                  "Task management",
                  "File sharing",
                  "Email support",
                ],
                buttonText: "Get Started",
                color: "blue",
                popular: false,
              },
              {
                name: "Professional",
                price: "$79",
                description: "Ideal for growing teams with multiple projects",
                features: [
                  "Up to 50 users",
                  "Advanced project planning",
                  "Resource management",
                  "Custom dashboards",
                  "API access",
                  "Priority support",
                ],
                buttonText: "Get Started",
                color: "green",
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "For large organizations with complex requirements",
                features: [
                  "Unlimited users",
                  "Portfolio management",
                  "Advanced analytics",
                  "Custom integrations",
                  "Dedicated account manager",
                  "24/7 premium support",
                ],
                buttonText: "Contact Sales",
                color: "red",
                popular: false,
              },
            ].map((plan, index) => (
              <Reveal key={index} delay={index * 100} direction="up">
                <Card className={`card-hover h-full relative ${plan.popular ? "border-2 border-agile-green" : ""}`}>
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-agile-green text-white px-4 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                      Popular
                    </div>
                  )}
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.price !== "Custom" && <span className="text-agile-gray">/month</span>}
                    </div>
                    <p className="text-agile-gray mb-6">{plan.description}</p>
                    <div className="space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className={`h-4 w-4 mr-2 text-agile-${plan.color}`} />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className={`w-full bg-agile-${plan.color} hover:bg-agile-${plan.color}/90`}>
                      {plan.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

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
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
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
