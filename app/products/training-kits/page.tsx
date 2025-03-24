import { ArrowLeft, BookOpen, CheckCircle, Code, Download, FileText, GraduationCap, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function TrainingKitsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Training Kits</h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive training materials designed to help you deliver effective agile and project management
                  training.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Kit Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Featured Kit</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Agile Fundamentals Kit</h2>
                <p className="text-gray-500 md:text-lg/relaxed">
                  Our most comprehensive training kit provides everything you need to deliver effective agile training
                  sessions. Perfect for organizations looking to build a solid foundation in agile methodologies.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Complete instructor guides and presentation materials</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Interactive exercises and activities for hands-on learning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Assessment tools and certification templates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Digital and printable resources for all participants</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/contact">
                    <Button className="w-full sm:w-auto">Request Information</Button>
                  </Link>
                  <Link href="/products/release-soon">
                    <Button variant="outline" className="w-full sm:w-auto">
                      <Download className="mr-2 h-4 w-4" />
                      Sample Materials
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/Logo_Big_Transparent.png"
                    alt="Agile Fundamentals Kit"
                    width={500}
                    height={300}
                    className="object-contain bg-white p-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All Training Kits Section */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Training Kits</h2>
                <p className="max-w-[700px] text-gray-500">
                  Explore our range of training kits designed to meet different needs and skill levels.
                </p>
              </div>
            </div>
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
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                          <circle cx="3" cy="3" r="3" />
                        </svg>
                      </div>
                      <span>Instructor guides and presentations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                          <circle cx="3" cy="3" r="3" />
                        </svg>
                      </div>
                      <span>Hands-on exercises and activities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                          <circle cx="3" cy="3" r="3" />
                        </svg>
                      </div>
                      <span>Assessment tools and certificates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                          <circle cx="3" cy="3" r="3" />
                        </svg>
                      </div>
                      <span>Digital and printable resources</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/contact" className="w-full">
                    <Button className="w-full">Request Information</Button>
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
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                          <circle cx="3" cy="3" r="3" />
                        </svg>
                      </div>
                      <span>Facilitation guides and techniques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                          <circle cx="3" cy="3" r="3" />
                        </svg>
                      </div>
                      <span>Team building activities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                          <circle cx="3" cy="3" r="3" />
                        </svg>
                      </div>
                      <span>Impediment resolution frameworks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                          <circle cx="3" cy="3" r="3" />
                        </svg>
                      </div>
                      <span>Scrum event planning templates</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/contact" className="w-full">
                    <Button className="w-full">Request Information</Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 mb-4">
                    <GraduationCap className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Agile Leadership Program</CardTitle>
                  <CardDescription>
                    Advanced training materials for developing agile leaders and change agents.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                          <circle cx="3" cy="3" r="3" />
                        </svg>
                      </div>
                      <span>Leadership development modules</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                          <circle cx="3" cy="3" r="3" />
                        </svg>
                      </div>
                      <span>Organizational change strategies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                          <circle cx="3" cy="3" r="3" />
                        </svg>
                      </div>
                      <span>Coaching and mentoring techniques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                          <circle cx="3" cy="3" r="3" />
                        </svg>
                      </div>
                      <span>Executive briefing materials</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/contact" className="w-full">
                    <Button className="w-full">Request Information</Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 mb-4">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Project Management Essentials</CardTitle>
                  <CardDescription>
                    Core training materials for traditional project management methodologies.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                          <circle cx="3" cy="3" r="3" />
                        </svg>
                      </div>
                      <span>Project lifecycle management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                          <circle cx="3" cy="3" r="3" />
                        </svg>
                      </div>
                      <span>Risk and stakeholder management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                          <circle cx="3" cy="3" r="3" />
                        </svg>
                      </div>
                      <span>Project planning and execution</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                          <circle cx="3" cy="3" r="3" />
                        </svg>
                      </div>
                      <span>Case studies and practical exercises</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/contact" className="w-full">
                    <Button className="w-full">Request Information</Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 mb-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Team Collaboration Workshop</CardTitle>
                  <CardDescription>
                    Interactive workshop materials focused on improving team dynamics and collaboration.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                          <circle cx="3" cy="3" r="3" />
                        </svg>
                      </div>
                      <span>Team building exercises</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                          <circle cx="3" cy="3" r="3" />
                        </svg>
                      </div>
                      <span>Communication improvement activities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                          <circle cx="3" cy="3" r="3" />
                        </svg>
                      </div>
                      <span>Conflict resolution techniques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                          <circle cx="3" cy="3" r="3" />
                        </svg>
                      </div>
                      <span>Trust-building frameworks</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/contact" className="w-full">
                    <Button className="w-full">Request Information</Button>
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <CardTitle>Certification Preparation</CardTitle>
                  <CardDescription>
                    Specialized materials for preparing teams for agile and project management certifications.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                          <circle cx="3" cy="3" r="3" />
                        </svg>
                      </div>
                      <span>Exam preparation materials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                          <circle cx="3" cy="3" r="3" />
                        </svg>
                      </div>
                      <span>Practice questions and answers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                          <circle cx="3" cy="3" r="3" />
                        </svg>
                      </div>
                      <span>Study guides and reference sheets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 mt-0.5">
                        <svg className="h-2 w-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                          <circle cx="3" cy="3" r="3" />
                        </svg>
                      </div>
                      <span>Mock exam simulations</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/contact" className="w-full">
                    <Button className="w-full">Request Information</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How Our Training Kits Work</h2>
                <p className="max-w-[700px] text-gray-500">
                  Our training kits are designed to be flexible and easy to use, allowing you to deliver effective
                  training sessions.
                </p>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-bold">Select Your Kit</h3>
                <p className="text-gray-500">
                  Choose the training kit that best meets your organization's needs and learning objectives.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-xl font-bold">Customize Materials</h3>
                <p className="text-gray-500">
                  Tailor the materials to your specific context and audience using our editable templates.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-xl font-bold">Deliver Training</h3>
                <p className="text-gray-500">
                  Use our comprehensive instructor guides to deliver engaging and effective training sessions.
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
                  Ready to Enhance Your Training?
                </h2>
                <p className="max-w-[600px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us today to learn more about our training kits and how they can help your organization.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button className="inline-flex h-10 items-center justify-center rounded-md bg-white text-blue-600 px-8 text-sm font-medium shadow transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                    Contact Us
                  </Button>
                </Link>
                <Link href="/products">
                  <Button
                    variant="outline"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent text-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Products
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

