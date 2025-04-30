"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ArrowRight, CheckCircle, Shield, BarChart, Users, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductsPage() {
  const heroRef = useRef(null)
  const featuresRef = useRef(null)
  const pricingRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 })
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.3 })
  const pricingInView = useInView(pricingRef, { once: true, amount: 0.3 })

  const products = [
    {
      name: "ProjectTrack",
      description:
        "Comprehensive project management software that streamlines task management, resource allocation, and reporting.",
      features: [
        "Intuitive task management",
        "Resource allocation and tracking",
        "Real-time reporting and analytics",
        "Team collaboration tools",
        "Integration with popular tools",
        "Mobile application",
      ],
      image: "/placeholder.svg?height=600&width=800&query=project_management_software",
    },
    {
      name: "AgileCoach",
      description: "Digital coaching platform that provides personalized guidance for project managers and teams.",
      features: [
        "Personalized learning paths",
        "On-demand coaching sessions",
        "Best practice templates",
        "Performance tracking",
        "Team assessment tools",
        "Knowledge library",
      ],
      image: "/placeholder.svg?height=600&width=800&query=digital_coaching_platform",
    },
  ]

  const pricing = [
    {
      name: "Basic",
      price: "$499",
      description: "Essential tools for small teams",
      features: [
        "Up to 10 users",
        "Core project management features",
        "Basic reporting",
        "Email support",
        "5GB storage",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$999",
      description: "Advanced features for growing teams",
      features: [
        "Up to 30 users",
        "All Basic features",
        "Advanced reporting and analytics",
        "Priority support",
        "25GB storage",
        "API access",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited users",
        "All Professional features",
        "Dedicated account manager",
        "Custom integrations",
        "Unlimited storage",
        "Enhanced security features",
        "On-premise deployment option",
      ],
      popular: false,
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero section */}
      <section className="relative py-24 md:py-32 bg-muted/30" ref={heroRef}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: heroInView ? 1 : 0, x: heroInView ? 0 : -30 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Project Management Tools That Work For You</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Our suite of project management products is designed to enhance productivity, streamline workflows, and
                drive project success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Request Demo
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: heroInView ? 1 : 0, x: heroInView ? 0 : 30 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800&query=project_management_dashboard"
                  alt="Project management dashboard"
                  width={800}
                  height={600}
                  className="w-full"
                />
              </div>
              <div className="absolute -z-10 w-full h-full bg-primary/5 rounded-2xl -right-6 -bottom-6" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Tabs section */}
      <section className="py-24" ref={featuresRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: featuresInView ? 1 : 0, y: featuresInView ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
            <p className="text-lg text-muted-foreground">Tailored solutions to meet your project management needs</p>
          </motion.div>

          <Tabs defaultValue={products[0].name.toLowerCase()}>
            <div className="flex justify-center mb-8">
              <TabsList>
                {products.map((product, index) => (
                  <TabsTrigger key={index} value={product.name.toLowerCase()}>
                    {product.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {products.map((product, index) => (
              <TabsContent key={index} value={product.name.toLowerCase()}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid md:grid-cols-2 gap-12 items-center"
                >
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
                    <p className="text-lg text-muted-foreground mb-6">{product.description}</p>

                    <div className="space-y-4 mb-8">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  <div className="relative">
                    <div className="relative rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={800}
                        height={600}
                        className="w-full"
                      />
                    </div>
                    <div className="absolute -z-10 w-full h-full bg-primary/5 rounded-2xl -left-6 -bottom-6" />
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Key Benefits section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Benefits</h2>
            <p className="text-lg text-muted-foreground">
              Our products deliver tangible benefits to your project management processes
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: "Increased Efficiency",
                description: "Streamline workflows and save time with intuitive project management tools.",
              },
              {
                icon: BarChart,
                title: "Improved Visibility",
                description: "Gain real-time insights into project status and team performance.",
              },
              {
                icon: Users,
                title: "Enhanced Collaboration",
                description: "Foster teamwork with collaborative features designed for modern teams.",
              },
              {
                icon: Shield,
                title: "Risk Mitigation",
                description: "Identify and address potential risks before they impact your projects.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-xl shadow-md"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing section */}
      <section className="py-24" ref={pricingRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: pricingInView ? 1 : 0, y: pricingInView ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing Plans</h2>
            <p className="text-lg text-muted-foreground">Flexible options to suit organizations of all sizes</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: pricingInView ? 1 : 0, y: pricingInView ? 0 : 30 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className={`h-full relative overflow-hidden ${plan.popular ? "border-primary shadow-lg" : ""}`}>
                  {plan.popular && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                        MOST POPULAR
                      </div>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      {plan.price !== "Custom" && <span className="text-muted-foreground"> /month</span>}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                      {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              All plans include a 14-day free trial. No credit card required.
            </p>
            <Button variant="link">View Full Pricing Details</Button>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Project Management?</h2>
            <p className="text-lg mb-8">Experience the difference our products can make for your organization.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg">Get Started Now</Button>
              <Button size="lg" variant="outline">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
