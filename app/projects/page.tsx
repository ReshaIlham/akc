import { ArrowRight, Calendar, Code, Layers, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Projects</h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our latest work and success stories in agile transformation and project management.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Project Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start space-y-4 mb-10">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                Featured Project
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">National Bank Agile Transformation</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <p className="text-gray-500 md:text-lg/relaxed">
                  We partnered with one of Indonesia's largest banks to transform their software development process
                  from traditional waterfall to agile methodologies. This comprehensive transformation involved training
                  over 200 staff members, establishing Scrum teams, and implementing new tools and processes.
                </p>
                <div className="flex flex-wrap gap-2 py-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                    Agile Transformation
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                    Banking
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                    Enterprise
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                    Scrum
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-4 py-2">
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-medium flex items-center">
                      <Calendar className="mr-2 h-4 w-4 text-blue-600" />
                      18 months
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Team Size</p>
                    <p className="font-medium flex items-center">
                      <Users className="mr-2 h-4 w-4 text-blue-600" />
                      12 consultants
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button className="w-full sm:w-auto">
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/aboutus1.jpg"
                    alt="Team collaboration"
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Projects Section */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Recent Projects</h2>
                <p className="max-w-[700px] text-gray-500">
                  Explore our latest work across various industries and project types.
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/images/aboutus2.jpg"
                      alt="E-commerce platform project"
                      width={400}
                      height={225}
                      className="object-cover"
                    />
                  </div>
                  <CardTitle>E-commerce Platform Optimization</CardTitle>
                  <CardDescription>
                    Helped a leading e-commerce company implement Kanban to optimize their development workflow.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                      Kanban
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                      E-commerce
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                      Process Optimization
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-medium flex items-center">
                        <Calendar className="mr-2 h-4 w-4 text-blue-600" />6 months
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Client</p>
                      <p className="font-medium">Major Retailer</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col">
                <CardHeader>
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/images/service-header.jpeg"
                      alt="Government agency project"
                      width={400}
                      height={225}
                      className="object-cover"
                    />
                  </div>
                  <CardTitle>Government Agency Transformation</CardTitle>
                  <CardDescription>
                    Implemented agile methodologies in a government agency to improve service delivery.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                      Public Sector
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                      Scrum
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                      Training
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-medium flex items-center">
                        <Calendar className="mr-2 h-4 w-4 text-blue-600" />
                        12 months
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Client</p>
                      <p className="font-medium">Government Agency</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col">
                <CardHeader>
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/images/hero-collaboration.jpeg"
                      alt="Healthcare software project"
                      width={400}
                      height={225}
                      className="object-cover"
                    />
                  </div>
                  <CardTitle>Healthcare Software Development</CardTitle>
                  <CardDescription>
                    Established agile practices for a healthcare software company developing patient management systems.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                      Healthcare
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                      Software Development
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                      SAFe
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-medium flex items-center">
                        <Calendar className="mr-2 h-4 w-4 text-blue-600" />9 months
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Client</p>
                      <p className="font-medium">Healthcare Provider</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col">
                <CardHeader>
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/images/aboutus1.jpg"
                      alt="Telecommunications project"
                      width={400}
                      height={225}
                      className="object-cover"
                    />
                  </div>
                  <CardTitle>Telecommunications Agile Coaching</CardTitle>
                  <CardDescription>
                    Provided agile coaching for a telecommunications company's product development teams.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                      Telecommunications
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                      Coaching
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                      Product Development
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-medium flex items-center">
                        <Calendar className="mr-2 h-4 w-4 text-blue-600" />8 months
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Client</p>
                      <p className="font-medium">Telecom Provider</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col">
                <CardHeader>
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/images/aboutus2.jpg"
                      alt="Financial services project"
                      width={400}
                      height={225}
                      className="object-cover"
                    />
                  </div>
                  <CardTitle>Financial Services DevOps Implementation</CardTitle>
                  <CardDescription>
                    Implemented DevOps practices and CI/CD pipelines for a financial services company.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                      Financial Services
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                      DevOps
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                      CI/CD
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-medium flex items-center">
                        <Calendar className="mr-2 h-4 w-4 text-blue-600" />
                        10 months
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Client</p>
                      <p className="font-medium">Investment Firm</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col">
                <CardHeader>
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/images/service-header.jpeg"
                      alt="Manufacturing project"
                      width={400}
                      height={225}
                      className="object-cover"
                    />
                  </div>
                  <CardTitle>Manufacturing Process Improvement</CardTitle>
                  <CardDescription>
                    Applied Lean and Agile principles to improve manufacturing processes and reduce waste.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                      Manufacturing
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                      Lean
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                      Process Improvement
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-medium flex items-center">
                        <Calendar className="mr-2 h-4 w-4 text-blue-600" />7 months
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Client</p>
                      <p className="font-medium">Manufacturing Company</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Industries We Serve</h2>
                <p className="max-w-[700px] text-gray-500">
                  We have experience implementing agile methodologies across a wide range of industries.
                </p>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center space-y-3 p-6 bg-white rounded-xl shadow-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Banking & Finance</h3>
                <p className="text-gray-500">
                  Helping financial institutions adapt to changing market conditions with agile methodologies.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3 p-6 bg-white rounded-xl shadow-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Healthcare</h3>
                <p className="text-gray-500">
                  Implementing agile practices in healthcare to improve patient care and operational efficiency.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3 p-6 bg-white rounded-xl shadow-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Code className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Technology</h3>
                <p className="text-gray-500">
                  Helping technology companies deliver better products faster through agile methodologies.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3 p-6 bg-white rounded-xl shadow-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Telecommunications</h3>
                <p className="text-gray-500">
                  Transforming telecommunications companies with agile practices for faster innovation.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3 p-6 bg-white rounded-xl shadow-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Layers className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Manufacturing</h3>
                <p className="text-gray-500">
                  Applying Lean and Agile principles to improve manufacturing processes and reduce waste.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3 p-6 bg-white rounded-xl shadow-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Government</h3>
                <p className="text-gray-500">
                  Helping government agencies improve service delivery through agile methodologies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                  Ready to Start Your Project?
                </h2>
                <p className="max-w-[600px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us today to discuss how we can help your organization implement agile methodologies and
                  improve project outcomes.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button className="inline-flex h-10 items-center justify-center rounded-md bg-white text-blue-600 px-8 text-sm font-medium shadow transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent text-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Explore Our Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

