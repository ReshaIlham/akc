import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Users, Briefcase, BookOpen, BarChart, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal-animation"

export default function ServicesPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-agile-dark text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Reveal>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                  Our <span className="text-agile-green">Services</span>
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-lg text-gray-300 mb-6">
                  Comprehensive project management services tailored to meet your organization's unique needs and
                  challenges.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <Button className="bg-agile-green hover:bg-agile-green/90">
                  Get Started
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

      {/* Services List */}
      <section className="py-16 md:py-24">
        <div className="container">
          <SectionHeading
            title="Our Service Offerings"
            subtitle="Tailored solutions to address your project management challenges"
            color="blue"
          />

          <div className="grid grid-cols-1 gap-16">
            {/* Service 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal>
                <div>
                  <div className="inline-flex items-center justify-center p-3 bg-agile-blue/10 rounded-lg mb-4">
                    <Users size={32} className="text-agile-blue" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Project Management Coaching</h2>
                  <p className="text-agile-gray mb-6">
                    One-on-one coaching for project managers to enhance their skills and overcome specific challenges.
                    Our coaching programs are tailored to the individual needs of each project manager.
                  </p>
                  <div className="space-y-3 mb-6">
                    {[
                      "Personalized guidance from experienced coaches",
                      "Skill development in key project management areas",
                      "Performance improvement strategies",
                      "Career advancement support",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="text-agile-blue mr-3 mt-1 h-5 w-5" />
                        <p className="text-agile-gray">{feature}</p>
                      </div>
                    ))}
                  </div>
                  <Button className="bg-agile-blue hover:bg-agile-blue/90">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Reveal>
              <Reveal direction="left">
                <Image
                  src="/coaching-session.png"
                  width={600}
                  height={400}
                  alt="Project Management Coaching"
                  className="rounded-lg shadow-lg"
                />
              </Reveal>
            </div>

            {/* Service 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal direction="right" className="order-2 lg:order-1">
                <Image
                  src="/consulting-meeting.png"
                  width={600}
                  height={400}
                  alt="Consulting Services"
                  className="rounded-lg shadow-lg"
                />
              </Reveal>
              <Reveal className="order-1 lg:order-2">
                <div>
                  <div className="inline-flex items-center justify-center p-3 bg-agile-red/10 rounded-lg mb-4">
                    <Briefcase size={32} className="text-agile-red" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Consulting Services</h2>
                  <p className="text-agile-gray mb-6">
                    Expert consulting to help organizations improve their project management practices and processes. We
                    work with you to identify areas for improvement and implement effective solutions.
                  </p>
                  <div className="space-y-3 mb-6">
                    {[
                      "Process assessment and optimization",
                      "Methodology implementation (Agile, Waterfall, Hybrid)",
                      "PMO establishment and maturity development",
                      "Project recovery for troubled projects",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="text-agile-red mr-3 mt-1 h-5 w-5" />
                        <p className="text-agile-gray">{feature}</p>
                      </div>
                    ))}
                  </div>
                  <Button className="bg-agile-red hover:bg-agile-red/90">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Service 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal>
                <div>
                  <div className="inline-flex items-center justify-center p-3 bg-agile-green/10 rounded-lg mb-4">
                    <BookOpen size={32} className="text-agile-green" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Education & Training</h2>
                  <p className="text-agile-gray mb-6">
                    Comprehensive training programs to develop project management skills across your organization. Our
                    training programs are designed to build both theoretical knowledge and practical skills.
                  </p>
                  <div className="space-y-3 mb-6">
                    {[
                      "Certification preparation (PMP, PRINCE2, Agile)",
                      "Customized workshops for specific needs",
                      "Team training for collaborative project execution",
                      "Agile methodologies and implementation",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="text-agile-green mr-3 mt-1 h-5 w-5" />
                        <p className="text-agile-gray">{feature}</p>
                      </div>
                    ))}
                  </div>
                  <Button className="bg-agile-green hover:bg-agile-green/90">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Reveal>
              <Reveal direction="left">
                <Image
                  src="/training-session.png"
                  width={600}
                  height={400}
                  alt="Education & Training"
                  className="rounded-lg shadow-lg"
                />
              </Reveal>
            </div>

            {/* Service 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal direction="right" className="order-2 lg:order-1">
                <Image
                  src="/project-solutions.png"
                  width={600}
                  height={400}
                  alt="Project Management Solutions"
                  className="rounded-lg shadow-lg"
                />
              </Reveal>
              <Reveal className="order-1 lg:order-2">
                <div>
                  <div className="inline-flex items-center justify-center p-3 bg-agile-blue/10 rounded-lg mb-4">
                    <BarChart size={32} className="text-agile-blue" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Project Management Solutions</h2>
                  <p className="text-agile-gray mb-6">
                    Tailored solutions to address specific project management challenges and improve outcomes. We
                    provide end-to-end support for your project management needs.
                  </p>
                  <div className="space-y-3 mb-6">
                    {[
                      "Tool implementation and integration",
                      "Process optimization and standardization",
                      "Portfolio management frameworks",
                      "Resource allocation and optimization",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="text-agile-blue mr-3 mt-1 h-5 w-5" />
                        <p className="text-agile-gray">{feature}</p>
                      </div>
                    ))}
                  </div>
                  <Button className="bg-agile-blue hover:bg-agile-blue/90">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Service 5 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal>
                <div>
                  <div className="inline-flex items-center justify-center p-3 bg-agile-red/10 rounded-lg mb-4">
                    <Clock size={32} className="text-agile-red" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Agile Transformation</h2>
                  <p className="text-agile-gray mb-6">
                    Guide your organization through the transition to agile project management methodologies. We help
                    you implement agile practices that drive innovation and adaptability.
                  </p>
                  <div className="space-y-3 mb-6">
                    {[
                      "Agile coaching and mentoring",
                      "Scrum implementation and optimization",
                      "Kanban systems and workflow management",
                      "Hybrid approaches for complex environments",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="text-agile-red mr-3 mt-1 h-5 w-5" />
                        <p className="text-agile-gray">{feature}</p>
                      </div>
                    ))}
                  </div>
                  <Button className="bg-agile-red hover:bg-agile-red/90">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Reveal>
              <Reveal direction="left">
                <Image
                  src="/agile-transformation.png"
                  width={600}
                  height={400}
                  alt="Agile Transformation"
                  className="rounded-lg shadow-lg"
                />
              </Reveal>
            </div>
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
                  <Button size="lg" className="bg-white text-agile-blue hover:bg-gray-100">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
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
