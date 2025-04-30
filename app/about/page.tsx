"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { BarChart, Building, Clock, Users } from "lucide-react"

export default function AboutPage() {
  const storyRef = useRef(null)
  const missionRef = useRef(null)
  const valuesRef = useRef(null)
  const teamRef = useRef(null)

  const storyInView = useInView(storyRef, { once: true, amount: 0.3 })
  const missionInView = useInView(missionRef, { once: true, amount: 0.3 })
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.3 })
  const teamInView = useInView(teamRef, { once: true, amount: 0.3 })

  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, delivering high-quality solutions and services.",
      icon: BarChart,
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnership with our clients to achieve shared goals.",
      icon: Users,
    },
    {
      title: "Innovation",
      description: "We continuously explore new approaches and methodologies to solve complex project challenges.",
      icon: Building,
    },
    {
      title: "Reliability",
      description:
        "We are committed to delivering on our promises and maintaining the highest standards of professionalism.",
      icon: Clock,
    },
  ]

  const team = [
    {
      name: "John Smith",
      position: "CEO & Founder",
      bio: "With over 15 years of experience in project management, John has led numerous successful projects across various industries.",
      image: "/placeholder.svg?height=400&width=400&query=executive_man_portrait",
    },
    {
      name: "Emily Chen",
      position: "Head of Consulting",
      bio: "Emily brings extensive expertise in Agile methodologies and has helped transform project management practices for many organizations.",
      image: "/placeholder.svg?height=400&width=400&query=executive_woman_portrait",
    },
    {
      name: "Michael Wong",
      position: "Training Director",
      bio: "Michael is an experienced trainer and coach who has developed comprehensive training programs for project managers at all levels.",
      image: "/placeholder.svg?height=400&width=400&query=professional_man_training",
    },
    {
      name: "Sophia Garcia",
      position: "Solutions Architect",
      bio: "Sophia specializes in designing tailored project management solutions that align with organizational goals and culture.",
      image: "/placeholder.svg?height=400&width=400&query=professional_woman_tech",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero section */}
      <section className="relative py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Agilenesia</h1>
            <p className="text-xl text-muted-foreground">
              We are a dedicated team of project management professionals committed to helping organizations achieve
              their goals through effective project management.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story section */}
      <section className="py-24" ref={storyRef}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: storyInView ? 1 : 0, x: storyInView ? 0 : -30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-lg">
                <p>
                  Founded in 2013, Agilenesia began with a simple mission: to transform how organizations approach
                  project management. Our founder, having witnessed the challenges and inefficiencies in traditional
                  project management, envisioned a company that would provide holistic solutions to these problems.
                </p>
                <p>
                  Over the years, we have evolved from a small consultancy to a comprehensive project management
                  solutions provider, serving clients across various industries throughout Indonesia and Southeast Asia.
                </p>
                <p>
                  Today, we are proud to have helped hundreds of organizations improve their project delivery through
                  our coaching, training, and tailored solutions.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: storyInView ? 1 : 0, x: storyInView ? 0 : 30 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=600&width=800&query=office_team_meeting"
                  alt="Our team in a meeting"
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

      {/* Mission and Vision section */}
      <section className="py-24 bg-muted/30" ref={missionRef}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="bg-card p-8 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: missionInView ? 1 : 0, y: missionInView ? 0 : 30 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg">
                To empower organizations with the knowledge, skills, and tools they need to excel in project management
                and achieve sustained success in their endeavors.
              </p>
            </motion.div>

            <motion.div
              className="bg-card p-8 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: missionInView ? 1 : 0, y: missionInView ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg">
                To be the leading project management solutions provider in Southeast Asia, recognized for our
                excellence, innovation, and commitment to client success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values section */}
      <section className="py-24" ref={valuesRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: valuesInView ? 1 : 0, y: valuesInView ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              The core principles that guide our approach and define who we are
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-card p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: valuesInView ? 1 : 0, y: valuesInView ? 0 : 30 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team section */}
      <section className="py-24 bg-muted/30" ref={teamRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: teamInView ? 1 : 0, y: teamInView ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-lg text-muted-foreground">Meet the experienced professionals leading Agilenesia</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: teamInView ? 1 : 0, y: teamInView ? 0 : 30 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-card rounded-xl shadow-md overflow-hidden"
              >
                <div className="aspect-square relative">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary mb-3">{member.position}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
