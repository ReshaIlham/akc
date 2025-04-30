"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  const introRef = useRef(null)
  const serviceRef1 = useRef(null)
  const serviceRef2 = useRef(null)
  const serviceRef3 = useRef(null)
  const processRef = useRef(null)

  const introInView = useInView(introRef, { once: true, amount: 0.3 })
  const service1InView = useInView(serviceRef1, { once: true, amount: 0.3 })
  const service2InView = useInView(serviceRef2, { once: true, amount: 0.3 })
  const service3InView = useInView(serviceRef3, { once: true, amount: 0.3 })
  const processInView = useInView(processRef, { once: true, amount: 0.3 })

  const services = [
    {
      title: "Coaching & Consulting",
      description: "Expert guidance to optimize your project management practices",
      features: [
        "One-on-one coaching for project managers",
        "Team-level coaching to enhance collaboration",
        "Project management office (PMO) consulting",
        "Agile transformation consulting",
        "Project recovery services",
        "Customized consulting solutions",
      ],
      image: "/placeholder.svg?height=600&width=800&query=coaching_session",
      ref: serviceRef1,
    },
    {
      title: "Education & Training",
      description: "Comprehensive learning programs to develop project management skills",
      features: [
        "Certified project management training",
        "Agile and Scrum methodology workshops",
        "Leadership development for project managers",
        "Customized training programs",
        "Virtual and in-person training options",
        "Continuous learning support",
      ],
      image: "/placeholder.svg?height=600&width=800&query=training_workshop",
      ref: serviceRef2,
    },
    {
      title: "Project Management Solutions",
      description: "Tailored strategies and tools to streamline project delivery",
      features: [
        "Project methodology development",
        "Tool selection and implementation",
        "Process optimization",
        "Project portfolio management",
        "Risk management frameworks",
        "Performance measurement systems",
      ],
      image: "/placeholder.svg?height=600&width=800&query=project_management_tools",
      ref: serviceRef3,
    },
  ]

  const processSteps = [
    {
      number: "01",
      title: "Assessment",
      description:
        "We conduct a thorough assessment of your current project management practices to identify strengths and areas for improvement.",
    },
    {
      number: "02",
      title: "Solution Design",
      description:
        "Based on the assessment findings, we design a tailored solution that addresses your specific needs and aligns with your organizational goals.",
    },
    {
      number: "03",
      title: "Implementation",
      description:
        "We work closely with your team to implement the solution, providing guidance and support throughout the process.",
    },
    {
      number: "04",
      title: "Evaluation",
      description:
        "We evaluate the impact of the solution and make any necessary adjustments to ensure optimal results.",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero section */}
      <section className="relative py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive project management solutions designed to help your organization succeed
            </p>
          </div>
        </div>
      </section>

      {/* Introduction section */}
      <section className="py-24" ref={introRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: introInView ? 1 : 0, y: introInView ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Can Help You</h2>
            <p className="text-lg text-muted-foreground mb-12">
              At Agilenesia, we offer a range of services designed to address your specific project management
              challenges and help you achieve your strategic objectives. Our integrated approach ensures that you
              receive the right combination of coaching, training, and solutions for your needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: introInView ? 1 : 0, y: introInView ? 0 : 30 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild>
                      <Link href={`#${service.title.toLowerCase().replace(/\s+/g, "-")}`}>Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed service sections */}
      {services.map((service, index) => (
        <section
          key={index}
          id={service.title.toLowerCase().replace(/\s+/g, "-")}
          className={`py-24 ${index % 2 === 1 ? "bg-muted/30" : ""}`}
          ref={service.ref}
        >
          <div className="container mx-auto px-4">
            <div
              className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:grid-flow-col-reverse" : ""}`}
            >
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{
                  opacity:
                    index === 0
                      ? service1InView
                        ? 1
                        : 0
                      : index === 1
                        ? service2InView
                          ? 1
                          : 0
                        : service3InView
                          ? 1
                          : 0,
                  x:
                    index === 0
                      ? service1InView
                        ? 0
                        : index % 2 === 0
                          ? -30
                          : 30
                      : index === 1
                        ? service2InView
                          ? 0
                          : index % 2 === 0
                            ? -30
                            : 30
                        : service3InView
                          ? 0
                          : index % 2 === 0
                            ? -30
                            : 30,
                }}
                transition={{ duration: 0.6 }}
                className={`${index % 2 === 1 ? "md:order-2" : ""}`}
              >
                <h2 className="text-3xl font-bold mb-6">{service.title}</h2>
                <p className="text-lg text-muted-foreground mb-8">{service.description}</p>

                <div className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity:
                          index === 0
                            ? service1InView
                              ? 1
                              : 0
                            : index === 1
                              ? service2InView
                                ? 1
                                : 0
                              : service3InView
                                ? 1
                                : 0,
                        y:
                          index === 0
                            ? service1InView
                              ? 0
                              : 10
                            : index === 1
                              ? service2InView
                                ? 0
                                : 10
                              : service3InView
                                ? 0
                                : 10,
                      }}
                      transition={{ duration: 0.3, delay: 0.1 * idx }}
                    >
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8">
                  <Button>
                    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                animate={{
                  opacity:
                    index === 0
                      ? service1InView
                        ? 1
                        : 0
                      : index === 1
                        ? service2InView
                          ? 1
                          : 0
                        : service3InView
                          ? 1
                          : 0,
                  x:
                    index === 0
                      ? service1InView
                        ? 0
                        : index % 2 === 0
                          ? 30
                          : -30
                      : index === 1
                        ? service2InView
                          ? 0
                          : index % 2 === 0
                            ? 30
                            : -30
                        : service3InView
                          ? 0
                          : index % 2 === 0
                            ? 30
                            : -30,
                }}
                transition={{ duration: 0.6 }}
                className={`relative ${index % 2 === 1 ? "md:order-1" : ""}`}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={800}
                    height={600}
                    className="w-full"
                  />
                </div>
                <div className="absolute -z-10 w-full h-full bg-primary/5 rounded-2xl -left-6 -bottom-6" />
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Our Process section */}
      <section className="py-24 bg-muted/30" ref={processRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: processInView ? 1 : 0, y: processInView ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground">
              How we work with you to deliver effective project management solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: processInView ? 1 : 0, y: processInView ? 0 : 30 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-card p-6 rounded-xl shadow-md relative"
              >
                <div className="text-4xl font-bold text-primary/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>

                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-muted-foreground/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-primary/5 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Enhance Your Project Management?</h2>
            <p className="text-lg mb-8">
              Contact us today to discuss how our services can help your organization achieve project success.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg">Contact Us</Button>
              <Button size="lg" variant="outline">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
