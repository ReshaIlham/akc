import { Building, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We'd love to hear from you. Contact us to discuss how we can help your organization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contact Information</h2>
                  <p className="text-gray-500 md:text-lg/relaxed">
                    Reach out to us through any of the following channels or fill out the contact form.
                  </p>
                </div>
                <div className="grid gap-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <MapPin className="h-6 w-6 text-blue-600" />
                      <CardTitle>Our Location</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        Gedung Artha Graha, Jl. Jenderal Sudirman No.52-53, RT.5/RW.3, Senayan, Kebayoran Baru, South
                        Jakarta City, Jakarta 12190
                      </CardDescription>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <Mail className="h-6 w-6 text-blue-600" />
                      <CardTitle>Email Us</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">info@agilenesia.co.id</CardDescription>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <Phone className="h-6 w-6 text-blue-600" />
                      <CardTitle>Call Us</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">(021) 31141268</CardDescription>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <Building className="h-6 w-6 text-blue-600" />
                      <CardTitle>Business Hours</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">Monday - Friday: 9:00 AM - 5:00 PM</CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Send Us a Message</h2>
                  <p className="text-gray-500 md:text-lg/relaxed">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>
                <form className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Your email address" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Your company name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What is this regarding?" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message" className="min-h-[150px]" />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

