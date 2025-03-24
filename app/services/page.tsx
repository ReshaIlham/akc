import { ArrowRight, BookOpen, Compass, GraduationCap, LayoutDashboard, LineChart, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-3 max-w-[800px]">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Services & Solutions
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive education and consulting services to help your organization thrive in today's dynamic
                  business environment.
                </p>
              </div>
              <div className="w-full max-w-[900px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/service-header.jpeg"
                  alt="Team collaboration in a workshop"
                  width={900}
                  height={500}
                  className="w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main Services Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center mb-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Core Offerings
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Education & Training</h2>
                <p className="text-gray-500 md:text-lg/relaxed">
                  Our specialized training programs are designed to equip your team with the knowledge and skills they
                  need to excel in project management and agile methodologies.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <GraduationCap className="h-6 w-6 text-blue-600" />
                    <CardTitle className="text-base">Agile Certification</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Comprehensive training programs for Scrum, Kanban, SAFe, and other agile frameworks.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <Users className="h-6 w-6 text-blue-600" />
                    <CardTitle className="text-base">Leadership Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Programs designed to develop effective agile leaders and change agents.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                    <CardTitle className="text-base">Project Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Training in traditional and agile project management methodologies.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <LayoutDashboard className="h-6 w-6 text-blue-600" />
                    <CardTitle className="text-base">Customized Workshops</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Tailored training sessions addressing your organization's specific needs.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center mb-12">
              <div className="order-2 lg:order-1 grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <Compass className="h-6 w-6 text-blue-600" />
                    <CardTitle className="text-base">Agile Transformation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      End-to-end support for organizations transitioning to agile ways of working.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <LineChart className="h-6 w-6 text-blue-600" />
                    <CardTitle className="text-base">Process Optimization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Analysis and improvement of existing processes to enhance efficiency and effectiveness.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <Users className="h-6 w-6 text-blue-600" />
                    <CardTitle className="text-base">Team Coaching</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Hands-on coaching to help teams implement agile practices and overcome challenges.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <LayoutDashboard className="h-6 w-6 text-blue-600" />
                    <CardTitle className="text-base">Strategic Advisory</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Expert guidance on aligning agile practices with organizational strategy.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-4 order-1 lg:order-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Expert Guidance
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Consulting Services</h2>
                <p className="text-gray-500 md:text-lg/relaxed">
                  Our consulting services provide expert guidance to help your organization implement agile
                  methodologies, optimize project management processes, and drive sustainable change.
                </p>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Specialized Solutions
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Project Management Solutions</h2>
                <p className="text-gray-500 md:text-lg/relaxed">
                  We offer comprehensive project management solutions to help your organization deliver successful
                  projects on time and within budget.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <LayoutDashboard className="h-6 w-6 text-blue-600" />
                    <CardTitle className="text-base">Project Governance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Establishing effective governance frameworks to ensure project success.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <LineChart className="h-6 w-6 text-blue-600" />
                    <CardTitle className="text-base">Portfolio Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Strategic management of project portfolios to maximize value and resource utilization.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <Compass className="h-6 w-6 text-blue-600" />
                    <CardTitle className="text-base">Project Recovery</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Expert intervention to get troubled projects back on track and delivering value.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <Users className="h-6 w-6 text-blue-600" />
                    <CardTitle className="text-base">PMO Establishment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Setting up effective Project Management Offices tailored to your organization's needs.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                  Ready to Transform Your Organization?
                </h2>
                <p className="max-w-[600px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us today to discuss how our services can help you achieve your goals.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button className="inline-flex h-10 items-center justify-center rounded-md bg-white text-blue-600 px-8 text-sm font-medium shadow transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
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

