import { BookOpen, Building, Clock, GraduationCap, Target, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  About Agilenesia Kreasi Cerdas
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We are a leading provider of education and consulting services with a focus on project management and
                  agile methodologies.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden">
                  <Image
                    src="/images/aboutus1.jpg"
                    alt="Our team at sunset"
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative w-full max-w-[500px] aspect-square rounded-xl overflow-hidden">
                  <Image
                    src="/images/aboutus2.jpg"
                    alt="Leadership silhouette"
                    width={500}
                    height={500}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 order-1 lg:order-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Our Story</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Journey</h2>
                <p className="text-gray-500 md:text-lg/relaxed">
                  Agilenesia Kreasi Cerdas was founded with a vision to transform organizations through innovative
                  project management and agile methodologies. Our journey began with a simple belief: that collaboration
                  and agility are key to creating value in today's rapidly changing business environment.
                </p>
                <p className="text-gray-500 md:text-lg/relaxed">
                  Over the years, we have grown to become a trusted partner for organizations seeking to enhance their
                  project management capabilities and embrace agile practices. Our team of experts brings together
                  decades of experience across various industries, allowing us to provide tailored solutions that
                  address the unique challenges of each client.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mission & Vision</h2>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 md:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
                <p className="text-gray-500 md:text-lg/relaxed">
                  To empower organizations with the knowledge, skills, and tools they need to excel in project
                  management and embrace agile methodologies, enabling them to deliver exceptional value to their
                  customers.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <GraduationCap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
                <p className="text-gray-500 md:text-lg/relaxed">
                  To be the leading provider of education and consulting services in project management and agile
                  methodologies, recognized for our innovative approaches, collaborative partnerships, and commitment to
                  excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Our Principles
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Core Values</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The principles that guide everything we do
                </p>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col space-y-3 p-6 bg-white rounded-xl shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Collaboration</h3>
                <p className="text-gray-500">
                  We believe in the power of working together to achieve common goals and create shared value.
                </p>
              </div>
              <div className="flex flex-col space-y-3 p-6 bg-white rounded-xl shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Continuous Learning</h3>
                <p className="text-gray-500">
                  We are committed to ongoing education and improvement, both for ourselves and our clients.
                </p>
              </div>
              <div className="flex flex-col space-y-3 p-6 bg-white rounded-xl shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <Building className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Integrity</h3>
                <p className="text-gray-500">
                  We uphold the highest standards of honesty, transparency, and ethical conduct in all our interactions.
                </p>
              </div>
              <div className="flex flex-col space-y-3 p-6 bg-white rounded-xl shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Adaptability</h3>
                <p className="text-gray-500">
                  We embrace change and help our clients navigate evolving business landscapes with agility.
                </p>
              </div>
              <div className="flex flex-col space-y-3 p-6 bg-white rounded-xl shadow-sm sm:col-span-2 lg:col-span-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Excellence</h3>
                <p className="text-gray-500">
                  We strive for excellence in everything we do, delivering high-quality solutions that exceed
                  expectations and create lasting impact.
                </p>
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
                  Ready to Work With Us?
                </h2>
                <p className="max-w-[600px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Let's collaborate to transform your organization and create value together.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button className="inline-flex h-10 items-center justify-center rounded-md bg-white text-blue-600 px-8 text-sm font-medium shadow transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                    Contact Us
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

