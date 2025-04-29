"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, Mail, Phone, MapPin, Send, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal-animation"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-agile-dark text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Reveal>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                  Get in <span className="text-agile-green">Touch</span>
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-lg text-gray-300 mb-6">
                  Contact our team to discuss how we can help your organization improve its project management
                  capabilities.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="text-agile-green mr-3" />
                    <a href="mailto:info@agilenesia.com" className="hover:text-agile-green transition-colors">
                      info@agilenesia.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-agile-green mr-3" />
                    <a href="tel:+6281234567890" className="hover:text-agile-green transition-colors">
                      +62 812 3456 7890
                    </a>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="text-agile-green mr-3 mt-1" />
                    <address className="not-italic">
                      123 Project Street, Suite 100
                      <br />
                      Jakarta, Indonesia 12345
                    </address>
                  </div>
                </div>
              </Reveal>
            </div>
            <Reveal direction="left" delay={300}>
              <div className="relative animated-border">
                <div className="bg-white p-2 rounded-lg">
                  <Image
                    src="/contact-team.png"
                    width={800}
                    height={600}
                    alt="Contact Team"
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Reveal>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gradient-blue">Send Us a Message</h2>
                <p className="text-agile-gray mb-8">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="border-agile-gray/30 focus:border-agile-blue focus:ring-agile-blue/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                        className="border-agile-gray/30 focus:border-agile-blue focus:ring-agile-blue/20"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                      className="border-agile-gray/30 focus:border-agile-blue focus:ring-agile-blue/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      rows={5}
                      required
                      className="border-agile-gray/30 focus:border-agile-blue focus:ring-agile-blue/20"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-agile-blue hover:bg-agile-blue/90" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                  {isSubmitted && (
                    <div className="flex items-center text-agile-green bg-agile-green/10 p-3 rounded-md">
                      <Check className="mr-2 h-5 w-5" />
                      <span>Your message has been sent successfully!</span>
                    </div>
                  )}
                </form>
              </div>
            </Reveal>

            <Reveal direction="right" delay={200}>
              <div className="h-full">
                <div className="bg-gray-50 rounded-lg shadow-lg p-6 h-full">
                  <h3 className="text-2xl font-bold mb-6 text-gradient-green">Our Office</h3>
                  <div className="aspect-video relative mb-6 overflow-hidden rounded-lg">
                    <Image src="/sleek-glass-tower.png" fill alt="Agilenesia Office" className="object-cover" />
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="text-agile-red mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold">Address</h4>
                        <p className="text-agile-gray">
                          123 Project Street, Suite 100
                          <br />
                          Jakarta, Indonesia 12345
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="text-agile-green mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold">Phone</h4>
                        <p className="text-agile-gray">+62 812 3456 7890</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="text-agile-blue mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold">Email</h4>
                        <p className="text-agile-gray">info@agilenesia.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <SectionHeading
            title="Visit Our Office"
            subtitle="We're conveniently located in the heart of Jakarta's business district"
            color="red"
          />

          <Reveal>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image src="/jakarta-map.png" fill alt="Office Location Map" className="object-cover" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-agile-red rounded-full opacity-20 animate-pulse"></div>
                  <div className="bg-agile-red w-8 h-8 rounded-full flex items-center justify-center">
                    <MapPin className="text-white h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our services and approach"
            color="blue"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What industries do you work with?",
                answer:
                  "We work with organizations across various industries, including financial services, healthcare, manufacturing, technology, retail, and the public sector. Our methodologies are adaptable to the specific needs of each industry.",
              },
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary depending on the scope and complexity of the engagement. A typical consulting project might take 3-6 months, while training programs can be completed in a few weeks. We'll provide a detailed timeline during our initial consultation.",
              },
              {
                question: "Do you offer remote services?",
                answer:
                  "Yes, we offer both on-site and remote services. Many of our consulting and coaching engagements can be conducted virtually, and our training programs are available in both in-person and online formats.",
              },
              {
                question: "What certifications do your consultants hold?",
                answer:
                  "Our consultants hold various industry-recognized certifications, including PMP, PRINCE2, Scrum Master, SAFe, and more. We ensure that our team members have the expertise needed to deliver exceptional results.",
              },
            ].map((faq, index) => (
              <Reveal key={index} delay={index * 100}>
                <div className="bg-gray-50 rounded-lg p-6 card-hover">
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-agile-gray">{faq.answer}</p>
                </div>
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
                Contact us today to discuss how we can help your organization improve project outcomes and achieve
                strategic objectives.
              </p>
              <Button size="lg" className="bg-white text-agile-blue hover:bg-gray-100">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
