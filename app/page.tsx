"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, useScroll, useTransform, AnimatePresence, stagger, useAnimate } from "framer-motion"
import { ArrowRight, CheckCircle, ChevronRight, Star, ArrowUpRight, MousePointerClick, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Enhanced services data with more details
const services = [
  {
    title: "Coaching & Consulting",
    description: "Expert guidance to navigate project complexities and optimize team performance.",
    icon: "/leadership-coaching-session.png",
    features: ["Personalized coaching", "Team workshops", "Process optimization"],
    color: "from-purple-500/20 to-purple-500/5",
    hoverColor: "group-hover:from-purple-500/30 group-hover:to-purple-500/10",
  },
  {
    title: "Education & Training",
    description: "Comprehensive training programs to develop skills in Agile methodologies and project management.",
    icon: "/diverse-students-learning.png",
    features: ["Certified courses", "Hands-on workshops", "Custom programs"],
    color: "from-blue-500/20 to-blue-500/5",
    hoverColor: "group-hover:from-blue-500/30 group-hover:to-blue-500/10",
  },
  {
    title: "Project Management Solutions",
    description: "Tailored strategies and tools to streamline project delivery and maximize success.",
    icon: "/collaborative-project-roadmap.png",
    features: ["Custom frameworks", "Tool implementation", "Process design"],
    color: "from-violet-500/20 to-violet-500/5",
    hoverColor: "group-hover:from-violet-500/30 group-hover:to-violet-500/10",
  },
]

const stats = [
  { value: "95%", label: "Client Satisfaction", icon: Star },
  { value: "200+", label: "Projects Completed", icon: CheckCircle },
  { value: "50+", label: "Companies Served", icon: ArrowUpRight },
  { value: "10+", label: "Years Experience", icon: MousePointerClick },
]

const testimonials = [
  {
    quote:
      "Agilenesia transformed our approach to project management. Their coaching and training programs have significantly improved our team's productivity.",
    author: "Sarah Johnson",
    position: "CTO, TechCorp",
    avatar: "/serene-gaze.png",
    rating: 5,
  },
  {
    quote:
      "The project management solutions provided by Agilenesia helped us deliver our products on time and within budget. Highly recommended!",
    author: "David Chen",
    position: "Project Director, InnoSystems",
    avatar: "/thoughtful-gaze.png",
    rating: 5,
  },
  {
    quote:
      "Working with Agilenesia has been a game-changer for our organization. Their expertise in Agile methodologies is unmatched.",
    author: "Amanda Rodriguez",
    position: "Product Manager, GlobalTech",
    avatar: "/confident-businesswoman.png",
    rating: 5,
  },
]

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const scaleOnHover = {
  rest: { scale: 1, transition: { duration: 0.2, type: "tween" } },
  hover: { scale: 1.05, transition: { duration: 0.2, type: "tween" } },
}

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [scope, animate] = useAnimate()

  const heroRef = useRef(null)
  const statsRef = useRef(null)
  const servicesRef = useRef(null)
  const testimonialsRef = useRef(null)
  const benefitsRef = useRef(null)
  const ctaRef = useRef(null)
  const clientsRef = useRef(null)

  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.3])
  const heroScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95])
  const heroY = useTransform(scrollYProgress, [0, 0.1], [0, -50])

  const statsInView = useInView(statsRef, { once: true, amount: 0.3 })
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.3 })
  const testimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.3 })
  const benefitsInView = useInView(benefitsRef, { once: true, amount: 0.3 })
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.5 })
  const clientsInView = useInView(clientsRef, { once: true, amount: 0.3 })

  // Parallax effect for background elements
  const bgCircle1Y = useTransform(scrollYProgress, [0, 1], [0, -150])
  const bgCircle2Y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const bgCircle3Y = useTransform(scrollYProgress, [0, 1], [0, -200])

  // Rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Text reveal animation for hero section
  useEffect(() => {
    const sequence = async () => {
      await animate("h1 span", { opacity: 1, y: 0 }, { duration: 0.8, delay: stagger(0.05) })
      await animate(".hero-description", { opacity: 1, y: 0 }, { duration: 0.5 })
      await animate(".hero-buttons", { opacity: 1, y: 0 }, { duration: 0.5 })
    }

    sequence()
  }, [animate])

  return (
    <div className="overflow-hidden">
      {/* Background patterns */}
      <div className="fixed inset-0 -z-50 opacity-30">
        <div className="absolute w-full h-full">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-purple-200/20 to-transparent rounded-full blur-3xl" />
          <motion.div
            style={{ y: bgCircle1Y }}
            className="absolute bottom-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-radial from-blue-200/10 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            style={{ y: bgCircle2Y }}
            className="absolute top-1/3 right-1/3 w-1/4 h-1/4 bg-gradient-radial from-violet-200/15 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            style={{ y: bgCircle3Y }}
            className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-gradient-radial from-purple-200/10 to-transparent rounded-full blur-3xl"
          />
        </div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* Hero section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden" ref={heroRef}>
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          className="container mx-auto px-4 relative z-10"
        >
          <div ref={scope} className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              {/* Split text for character animation */}
              {Array.from("Accelerate Your Project Management Success").map((char, i) => (
                <span
                  key={i}
                  className="inline-block opacity-0 translate-y-8"
                  style={{
                    textShadow: "0 0 1px rgba(0,0,0,0.1)",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>
            <p className="hero-description text-xl text-muted-foreground mb-8 opacity-0 translate-y-8">
              Agilenesia provides expert coaching, training, and tailored solutions to help your organization master
              project management.
            </p>
            <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center opacity-0 translate-y-8">
              <Button size="lg" className="text-base group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
              <Button size="lg" variant="outline" className="text-base group relative overflow-hidden border-2">
                <span className="relative z-10">Learn More</span>
                <span className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </div>
          </div>

          <motion.div
            className="mt-16 md:mt-24 relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-500 -m-1"></div>
              <div className="bg-card border shadow-xl rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
                <Image
                  src="/project-overview-board.png"
                  alt="Agilenesia project management dashboard"
                  width={1200}
                  height={600}
                  className="w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-md shadow-lg rounded-lg p-3 flex items-center gap-2 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-green-500" />
              </div>
              <div className="text-sm font-medium">Project Completed</div>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md shadow-lg rounded-lg p-3 flex items-center gap-2 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            >
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Users className="h-5 w-5 text-blue-500" />
              </div>
              <div className="text-sm font-medium">Team Collaboration</div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <div className="text-sm text-muted-foreground mb-2">Scroll to explore</div>
          <motion.div
            className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1"
            initial={{ y: 0 }}
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          >
            <motion.div
              className="w-1.5 h-1.5 bg-primary rounded-full"
              initial={{ y: 0 }}
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats section */}
      <section className="py-16 bg-gradient-to-r from-muted/80 to-muted/30 relative overflow-hidden" ref={statsRef}>
        {/* Background pattern */}
        <div className="absolute inset-0 bg-dot-pattern opacity-5"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerChildren}
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
          >
            {stats.map((stat, index) => (
              <motion.div key={index} className="text-center" variants={itemFadeIn}>
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-primary mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={statsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services section */}
      <section className="py-24 md:py-32 relative" ref={servicesRef}>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-primary/5 to-transparent rounded-tr-full"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
          >
            <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              Our Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Comprehensive Project Management Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              Tailored services designed to meet your organization's unique needs and drive project success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative"
                whileHover={{ y: -5 }}
              >
                <Card className="h-full transition-all duration-500 hover:shadow-xl overflow-hidden border-transparent hover:border-primary/20 relative z-10">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} transition-all duration-500 ${service.hoverColor} opacity-50`}
                  ></div>
                  <CardHeader className="relative z-10">
                    <div className="w-14 h-14 mb-4 rounded-lg bg-white shadow-md flex items-center justify-center transform transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110">
                      <Image
                        src={service.icon || "/placeholder.svg"}
                        width={40}
                        height={40}
                        alt={service.title}
                        className="transition-all duration-500 group-hover:scale-110"
                      />
                    </div>
                    <CardTitle className="text-xl transition-all duration-300 group-hover:text-primary">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-base mb-4">{service.description}</CardDescription>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                            <CheckCircle className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Link href="/services" className="inline-flex items-center text-primary font-medium group">
                        <span className="relative">
                          Learn more
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </span>
                        <ChevronRight
                          className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                            hoveredCard === index ? "translate-x-1" : ""
                          }`}
                        />
                      </Link>
                    </div>
                  </CardContent>
                  {hoveredCard === index && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-primary"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Card>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rotate-45 transform origin-top-right"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits section */}
      <section className="py-24 bg-gradient-to-b from-white to-muted/20 relative" ref={benefitsRef}>
        {/* Background pattern */}
        <div className="absolute inset-0 bg-wave-pattern opacity-5"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={benefitsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Why Choose Agilenesia?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We provide comprehensive project management solutions tailored to your unique needs. Our expert team
                ensures your projects succeed.
              </p>

              <div className="space-y-4">
                {[
                  "Expert consultants with proven track records",
                  "Customized approaches for your specific challenges",
                  "Continuous support throughout your project lifecycle",
                  "Measurable improvements in project outcomes",
                  "Knowledge transfer to build internal capabilities",
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button className="group relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Discover More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={benefitsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-blue-500/20 opacity-0 hover:opacity-100 transition-opacity duration-700 z-10"></div>
                <Image
                  src="/collaborative-brainstorm.png"
                  alt="Team collaboration meeting"
                  width={800}
                  height={600}
                  className="w-full transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 w-full h-full bg-primary/5 rounded-2xl -right-6 -bottom-6"></div>
              <div className="absolute -right-4 -top-4 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl"></div>
              <div className="absolute -left-8 bottom-1/3 w-16 h-16 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-xl"></div>

              {/* Floating badge */}
              <motion.div
                className="absolute top-4 left-4 bg-white/90 backdrop-blur-md shadow-lg rounded-full py-2 px-4 flex items-center gap-2 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <Star className="h-4 w-4 text-yellow-500" />
                <div className="text-sm font-medium">Trusted by 50+ companies</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="py-24 md:py-32 relative overflow-hidden" ref={testimonialsRef}>
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-muted/30 to-transparent"></div>
        <div className="absolute -left-32 top-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -right-32 bottom-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
          >
            <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Hear from organizations that have achieved success with our project management solutions
            </p>
          </motion.div>

          <div className="relative h-[400px] md:h-[350px]">
            <AnimatePresence mode="wait">
              {testimonials.map(
                (testimonial, index) =>
                  index === activeTestimonial && (
                    <motion.div
                      key={index}
                      className="absolute inset-0"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Card className="max-w-3xl mx-auto h-full shadow-lg border-primary/10 overflow-hidden">
                        <CardContent className="p-8 h-full flex flex-col">
                          <div className="mb-6">
                            {Array(testimonial.rating)
                              .fill(0)
                              .map((_, i) => (
                                <Star key={i} className="inline-block h-5 w-5 text-yellow-400 fill-yellow-400" />
                              ))}
                          </div>
                          <div className="relative">
                            <div className="absolute -top-6 -left-6 text-6xl text-primary/10 font-serif">"</div>
                            <p className="text-xl mb-8 relative z-10 flex-grow">"{testimonial.quote}"</p>
                          </div>
                          <div className="flex items-center mt-auto">
                            <div className="relative">
                              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
                                <Image
                                  src={testimonial.avatar || "/placeholder.svg"}
                                  alt={testimonial.author}
                                  width={56}
                                  height={56}
                                  className="object-cover"
                                />
                              </div>
                              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                                <CheckCircle className="h-4 w-4 text-white" />
                              </div>
                            </div>
                            <div className="ml-4">
                              <div className="font-medium">{testimonial.author}</div>
                              <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>

          {/* Testimonial navigation */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeTestimonial === index ? "bg-primary w-6" : "bg-primary/30"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 relative overflow-hidden" ref={ctaRef}>
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5"></div>

        {/* Animated background shapes */}
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 8,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 10,
            ease: "easeInOut",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto bg-white/70 backdrop-blur-lg rounded-2xl p-12 shadow-xl border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Ready to Transform Your Project Management?
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-8">
              Get in touch with our team to discuss how Agilenesia can help your organization achieve project management
              excellence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="text-base group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Contact Us Today
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
              <Button size="lg" variant="outline" className="text-base group relative overflow-hidden border-2">
                <span className="relative z-10">Schedule a Demo</span>
                <span className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Clients section */}
      <section className="py-16 md:py-24 relative" ref={clientsRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Trusted by Leading Organizations</h2>
          </div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center"
            variants={staggerChildren}
            initial="hidden"
            animate={clientsInView ? "visible" : "hidden"}
          >
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <motion.div
                  key={index}
                  variants={itemFadeIn}
                  whileHover={{ y: -5, filter: "brightness(1.1)" }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Image
                    src={`/abstract-corporate-logo.png?key=101vg&height=80&width=120&query=company_logo_${index + 1}`}
                    alt={`Company logo ${index + 1}`}
                    width={120}
                    height={80}
                    className="max-h-12 w-auto transition-all duration-300 filter grayscale group-hover:grayscale-0"
                  />
                </motion.div>
              ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
