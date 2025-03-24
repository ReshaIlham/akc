"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, Bell, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ReleaseSoonPage() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this to your backend
    console.log("Email submitted:", email)
    setSubmitted(true)
    setEmail("")
  }

  // Calculate a release date 30 days from now
  const releaseDate = new Date()
  releaseDate.setDate(releaseDate.getDate() + 30)
  const formattedDate = releaseDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800 mb-4">
                Coming Soon
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Product Details Releasing Soon
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're putting the finishing touches on this product. Sign up to be notified when it's available.
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm font-medium">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-blue-600">{formattedDate}</span>
                  <span className="text-gray-500">Estimated Release</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Preview Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex justify-center">
                <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Product preview"
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <p className="font-medium">Preview of our upcoming product</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Be the First to Know</h2>
                <p className="text-gray-500">
                  Our team is working hard to bring you a product that will transform how you manage projects and
                  implement agile methodologies. Sign up below to receive exclusive updates and be the first to know
                  when it's available.
                </p>
                {submitted ? (
                  <Alert className="bg-green-50 border-green-200">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-600">
                      Thank you for your interest! We'll notify you when the product is released.
                    </AlertDescription>
                  </Alert>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="flex-1"
                      />
                      <Button type="submit" className="inline-flex items-center">
                        <Bell className="mr-2 h-4 w-4" />
                        Notify Me
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500">
                      We respect your privacy. Your email will only be used to send product updates.
                    </p>
                  </form>
                )}
                <div className="pt-4">
                  <Link href="/products">
                    <Button variant="outline" className="inline-flex items-center">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to Products
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Preview Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">What to Expect</h2>
              <p className="max-w-[700px] text-gray-500">
                Here's a sneak peek at some of the features we're working on.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col space-y-3 p-6 bg-gray-50 rounded-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Intuitive Interface</h3>
                <p className="text-gray-500">
                  A user-friendly interface designed for maximum productivity and ease of use.
                </p>
              </div>
              <div className="flex flex-col space-y-3 p-6 bg-gray-50 rounded-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Powerful Analytics</h3>
                <p className="text-gray-500">
                  Comprehensive analytics to help you track progress and make data-driven decisions.
                </p>
              </div>
              <div className="flex flex-col space-y-3 p-6 bg-gray-50 rounded-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Team Collaboration</h3>
                <p className="text-gray-500">
                  Enhanced collaboration features to keep your team connected and aligned.
                </p>
              </div>
              <div className="flex flex-col space-y-3 p-6 bg-gray-50 rounded-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Customizable Templates</h3>
                <p className="text-gray-500">A library of templates to help you get started quickly and efficiently.</p>
              </div>
              <div className="flex flex-col space-y-3 p-6 bg-gray-50 rounded-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Enterprise Security</h3>
                <p className="text-gray-500">Advanced security features to keep your data safe and secure.</p>
              </div>
              <div className="flex flex-col space-y-3 p-6 bg-gray-50 rounded-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Integration Ecosystem</h3>
                <p className="text-gray-500">Seamless integration with your favorite tools and platforms.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-2xl font-bold tracking-tighter text-white sm:text-3xl">Stay Updated</h2>
              <p className="max-w-[600px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Don't miss out on our product launch. Sign up for notifications and be the first to know.
              </p>
              {!submitted && (
                <form onSubmit={handleSubmit} className="flex w-full max-w-sm flex-col gap-2 min-[400px]:flex-row">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 bg-white/10 text-white placeholder:text-white/50 border-white/20 focus-visible:ring-white"
                  />
                  <Button type="submit" className="bg-white text-blue-600 hover:bg-white/90">
                    Notify Me
                  </Button>
                </form>
              )}
              {submitted && (
                <div className="bg-white/10 text-white p-4 rounded-lg max-w-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    <span>Thank you! We'll keep you updated.</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

