import { ArrowRight, BookOpen, Code, Database, FileText, LayoutDashboard, LineChart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Products</h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Innovative solutions designed to enhance your project management and agile capabilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Tabs Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="software" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-4">
                  <TabsTrigger value="software">Software</TabsTrigger>
                  <TabsTrigger value="training">Training Kits</TabsTrigger>
                  <TabsTrigger value="templates">Templates</TabsTrigger>
                  <TabsTrigger value="merch">Merch & Cards</TabsTrigger>
                </TabsList>
              </div>

              {/* Software Products */}
              <TabsContent value="software" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="flex flex-col">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 mb-4">
                        <LayoutDashboard className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle>AgileBoard</CardTitle>
                      <CardDescription>
                        A comprehensive project management tool designed specifically for agile teams.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="rounded-lg overflow-hidden mb-4 bg-gray-100 flex items-center justify-center p-4">
                        <Image
                          src="/images/logo_big_transparent.png"
                          alt="AgileBoard dashboard"
                          width={200}
                          height={100}
                          className="w-auto h-16"
                        />
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-green-100 p-1">
                            <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                              <circle cx="3" cy="3" r="3" />
                            </svg>
                          </div>
                          <span>Kanban and Scrum board views</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-green-100 p-1">
                            <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                              <circle cx="3" cy="3" r="3" />
                            </svg>
                          </div>
                          <span>Sprint planning and tracking</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-green-100 p-1">
                            <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                              <circle cx="3" cy="3" r="3" />
                            </svg>
                          </div>
                          <span>Real-time collaboration features</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href="/products/release-soon" className="w-full">
                        <Button className="w-full">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card className="flex flex-col">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 mb-4">
                        <LineChart className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle>Pantau</CardTitle>
                      <CardDescription>
                        Project management dashboard and portal for comprehensive project oversight.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="rounded-lg overflow-hidden mb-4 bg-gray-100 flex items-center justify-center p-4">
                        <Image
                          src="/images/logo_big_transparent.png"
                          alt="Pantau dashboard"
                          width={200}
                          height={100}
                          className="w-auto h-16"
                        />
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-green-100 p-1">
                            <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                              <circle cx="3" cy="3" r="3" />
                            </svg>
                          </div>
                          <span>Real-time project monitoring</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-green-100 p-1">
                            <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                              <circle cx="3" cy="3" r="3" />
                            </svg>
                          </div>
                          <span>Customizable project dashboards</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-green-100 p-1">
                            <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                              <circle cx="3" cy="3" r="3" />
                            </svg>
                          </div>
                          <span>Stakeholder reporting portal</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href="/products/release-soon" className="w-full">
                        <Button className="w-full">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card className="flex flex-col">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 mb-4">
                        <Database className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle>Latih</CardTitle>
                      <CardDescription>Project Management Certification Exam Simulation platform.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="rounded-lg overflow-hidden mb-4 bg-gray-100 flex items-center justify-center p-4">
                        <Image
                          src="/images/logo_big_transparent.png"
                          alt="Latih platform"
                          width={200}
                          height={100}
                          className="w-auto h-16"
                        />
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-green-100 p-1">
                            <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                              <circle cx="3" cy="3" r="3" />
                            </svg>
                          </div>
                          <span>Realistic exam simulations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-green-100 p-1">
                            <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                              <circle cx="3" cy="3" r="3" />
                            </svg>
                          </div>
                          <span>Comprehensive question bank</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-green-100 p-1">
                            <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                              <circle cx="3" cy="3" r="3" />
                            </svg>
                          </div>
                          <span>Performance analytics and feedback</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href="/products/release-soon" className="w-full">
                        <Button className="w-full">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              {/* Training Kits */}
              <TabsContent value="training" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="flex flex-col">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 mb-4">
                        <BookOpen className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle>Agile Fundamentals Kit</CardTitle>
                      <CardDescription>Comprehensive training materials for agile methodology basics.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="rounded-lg overflow-hidden mb-4 bg-gray-100 flex items-center justify-center p-4">
                        <Image
                          src="/images/logo_big_transparent.png"
                          alt="Agile Fundamentals Kit"
                          width={200}
                          height={100}
                          className="w-auto h-16"
                        />
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-green-100 p-1">
                            <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                              <circle cx="3" cy="3" r="3" />
                            </svg>
                          </div>
                          <span>Instructor guides and presentations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-green-100 p-1">
                            <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                              <circle cx="3" cy="3" r="3" />
                            </svg>
                          </div>
                          <span>Hands-on exercises and activities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-green-100 p-1">
                            <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                              <circle cx="3" cy="3" r="3" />
                            </svg>
                          </div>
                          <span>Assessment tools and certificates</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href="/products/training-kits" className="w-full">
                        <Button className="w-full">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card className="flex flex-col">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 mb-4">
                        <Code className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle>Scrum Master Toolkit</CardTitle>
                      <CardDescription>
                        Essential resources for Scrum Masters to facilitate effective agile teams.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="rounded-lg overflow-hidden mb-4 bg-gray-100 flex items-center justify-center p-4">
                        <Image
                          src="/images/logo_big_transparent.png"
                          alt="Scrum Master Toolkit"
                          width={200}
                          height={100}
                          className="w-auto h-16"
                        />
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-green-100 p-1">
                            <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                              <circle cx="3" cy="3" r="3" />
                            </svg>
                          </div>
                          <span>Facilitation guides and techniques</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-green-100 p-1">
                            <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                              <circle cx="3" cy="3" r="3" />
                            </svg>
                          </div>
                          <span>Team building activities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-green-100 p-1">
                            <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                              <circle cx="3" cy="3" r="3" />
                            </svg>
                          </div>
                          <span>Impediment resolution frameworks</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href="/products/training-kits" className="w-full">
                        <Button className="w-full">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card className="flex flex-col">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 mb-4">
                        <LineChart className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle>Agile Leadership Program</CardTitle>
                      <CardDescription>
                        Advanced training materials for developing agile leaders and change agents.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="rounded-lg overflow-hidden mb-4 bg-gray-100 flex items-center justify-center p-4">
                        <Image
                          src="/images/logo_big_transparent.png"
                          alt="Agile Leadership Program"
                          width={200}
                          height={100}
                          className="w-auto h-16"
                        />
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-green-100 p-1">
                            <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                              <circle cx="3" cy="3" r="3" />
                            </svg>
                          </div>
                          <span>Leadership development modules</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-green-100 p-1">
                            <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                              <circle cx="3" cy="3" r="3" />
                            </svg>
                          </div>
                          <span>Organizational change strategies</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-green-100 p-1">
                            <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                              <circle cx="3" cy="3" r="3" />
                            </svg>
                          </div>
                          <span>Coaching and mentoring techniques</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href="/products/training-kits" className="w-full">
                        <Button className="w-full">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              {/* Templates */}
              <TabsContent value="templates" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="flex flex-col">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 mb-4">
                        <FileText className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle>Agile Project Documentation</CardTitle>
                      <CardDescription>Comprehensive templates for agile project documentation.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="rounded-lg overflow-hidden mb-4 bg-gray-100 flex items-center justify-center p-4">
                        <Image
                          src="/images/logo_big_transparent.png"
                          alt="Agile Project Documentation"
                          width={200}
                          height={100}
                          className="w-auto h-16"
                        />
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-green-100 p-1">
                            <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                              <circle cx="3" cy="3" r="3" />
                            </svg>
                          </div>
                          <span>User story templates</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-green-100 p-1">
                            <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                              <circle cx="3" cy="3" r="3" />
                            </svg>
                          </div>
                          <span>Sprint planning documents</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-green-100 p-1">
                            <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                              <circle cx="3" cy="3" r="3" />
                            </svg>
                          </div>
                          <span>Retrospective frameworks</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href="/products/release-soon" className="w-full">
                        <Button className="w-full">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card className="flex flex-col">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 mb-4">
                        <LayoutDashboard className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle>Project Management Toolkit</CardTitle>
                      <CardDescription>Essential templates for effective project management.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="rounded-lg overflow-hidden mb-4 bg-gray-100 flex items-center justify-center p-4">
                        <Image
                          src="/images/logo_big_transparent.png"
                          alt="Project Management Toolkit"
                          width={200}
                          height={100}
                          className="w-auto h-16"
                        />
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-green-100 p-1">
                            <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                              <circle cx="3" cy="3" r="3" />
                            </svg>
                          </div>
                          <span>Project charter templates</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-green-100 p-1">
                            <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                              <circle cx="3" cy="3" r="3" />
                            </svg>
                          </div>
                          <span>Risk management frameworks</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-green-100 p-1">
                            <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                              <circle cx="3" cy="3" r="3" />
                            </svg>
                          </div>
                          <span>Status reporting templates</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href="/products/release-soon" className="w-full">
                        <Button className="w-full">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card className="flex flex-col">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 mb-4">
                        <LineChart className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle>Agile Metrics Dashboard</CardTitle>
                      <CardDescription>
                        Ready-to-use templates for tracking and visualizing agile metrics.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="rounded-lg overflow-hidden mb-4 bg-gray-100 flex items-center justify-center p-4">
                        <Image
                          src="/images/logo_big_transparent.png"
                          alt="Agile Metrics Dashboard"
                          width={200}
                          height={100}
                          className="w-auto h-16"
                        />
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-green-100 p-1">
                            <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                              <circle cx="3" cy="3" r="3" />
                            </svg>
                          </div>
                          <span>Velocity tracking spreadsheets</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-green-100 p-1">
                            <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                              <circle cx="3" cy="3" r="3" />
                            </svg>
                          </div>
                          <span>Burndown chart templates</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-green-100 p-1">
                            <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                              <circle cx="3" cy="3" r="3" />
                            </svg>
                          </div>
                          <span>Team performance dashboards</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href="/products/release-soon" className="w-full">
                        <Button className="w-full">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              {/* Merch & Cards */}
              <TabsContent value="merch" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="flex flex-col">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 mb-4">
                        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                          />
                        </svg>
                      </div>
                      <CardTitle>Agile T-Shirts</CardTitle>
                      <CardDescription>
                        High-quality t-shirts featuring agile concepts and project management humor.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="rounded-lg overflow-hidden mb-4 bg-gray-100 flex items-center justify-center p-4">
                        <Image
                          src="/images/logo_big_transparent.png"
                          alt="Agile T-Shirts"
                          width={200}
                          height={100}
                          className="w-auto h-16"
                        />
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-green-100 p-1">
                            <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                              <circle cx="3" cy="3" r="3" />
                            </svg>
                          </div>
                          <span>Premium cotton material</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-green-100 p-1">
                            <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                              <circle cx="3" cy="3" r="3" />
                            </svg>
                          </div>
                          <span>Multiple designs available</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-green-100 p-1">
                            <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                              <circle cx="3" cy="3" r="3" />
                            </svg>
                          </div>
                          <span>Sizes S through 3XL</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href="/products/release-soon" className="w-full">
                        <Button className="w-full">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card className="flex flex-col">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 mb-4">
                        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                          />
                        </svg>
                      </div>
                      <CardTitle>Project Management Cards</CardTitle>
                      <CardDescription>
                        Educational cards featuring project management concepts and best practices.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="rounded-lg overflow-hidden mb-4 bg-gray-100 flex items-center justify-center p-4">
                        <Image
                          src="/images/logo_big_transparent.png"
                          alt="Project Management Cards"
                          width={200}
                          height={100}
                          className="w-auto h-16"
                        />
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-green-100 p-1">
                            <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                              <circle cx="3" cy="3" r="3" />
                            </svg>
                          </div>
                          <span>100 cards per deck</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-green-100 p-1">
                            <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                              <circle cx="3" cy="3" r="3" />
                            </svg>
                          </div>
                          <span>Key concepts and definitions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-green-100 p-1">
                            <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                              <circle cx="3" cy="3" r="3" />
                            </svg>
                          </div>
                          <span>Perfect for exam preparation</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href="/products/release-soon" className="w-full">
                        <Button className="w-full">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card className="flex flex-col">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 mb-4">
                        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                          />
                        </svg>
                      </div>
                      <CardTitle>Project Management Monopoly</CardTitle>
                      <CardDescription>
                        Educational board game that teaches project management principles through play.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="rounded-lg overflow-hidden mb-4 bg-gray-100 flex items-center justify-center p-4">
                        <Image
                          src="/images/logo_big_transparent.png"
                          alt="Project Management Monopoly"
                          width={200}
                          height={100}
                          className="w-auto h-16"
                        />
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-green-100 p-1">
                            <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                              <circle cx="3" cy="3" r="3" />
                            </svg>
                          </div>
                          <span>Fun and educational gameplay</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-green-100 p-1">
                            <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                              <circle cx="3" cy="3" r="3" />
                            </svg>
                          </div>
                          <span>2-6 players</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-green-100 p-1">
                            <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                              <circle cx="3" cy="3" r="3" />
                            </svg>
                          </div>
                          <span>High-quality game components</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href="/products/release-soon" className="w-full">
                        <Button className="w-full">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                  Ready to Enhance Your Capabilities?
                </h2>
                <p className="max-w-[600px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our products and discover how they can help you implement agile methodologies and improve
                  project management.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button className="inline-flex h-10 items-center justify-center rounded-md bg-white text-blue-600 px-8 text-sm font-medium shadow transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                    Request a Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent text-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Learn More
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

