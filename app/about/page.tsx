import Image from "next/image"
import { CheckCircle, Users, Award, Briefcase, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal-animation"
import { HeroEnhanced } from "@/components/hero-enhanced"

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <HeroEnhanced
        title={
          <>
            About <span className="text-agile-blue">Agile</span>
            <span className="text-agile-red">nesia</span>
          </>
        }
        subtitle="We are dedicated to helping organizations improve their project management capabilities through expert coaching, consulting, and training."
        ctaText="Our Services"
        ctaHref="/services"
        secondaryCtaText="Contact Us"
        secondaryCtaHref="/contact"
        imageSrc="/collaborative-project-success.png"
        imageAlt="Team Collaboration"
        variant="purple"
        reversed={true}
        floatingElements={[
          {
            text: "Experience",
            highlight: "15+ Years",
            position: "top-right",
            color: "blue",
          },
          {
            text: "Certified Experts",
            highlight: "50+",
            position: "bottom-left",
            color: "green",
          },
        ]}
      />

      {/* Mission & Vision - Updated with pattern background */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 dark:opacity-20 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern-enhanced"></div>
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Reveal>
              <Card className="card-hover border-t-4 border-agile-blue h-full dark:bg-gray-800 dark:border-agile-blue-dark">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-4 text-gradient-blue">Our Mission</h2>
                  <p className="text-agile-gray dark:text-gray-300 mb-6">
                    To empower organizations with the knowledge, skills, and tools they need to execute projects
                    successfully and achieve their strategic objectives.
                  </p>
                  <p className="text-agile-gray dark:text-gray-300">
                    We believe that effective project management is a key driver of organizational success, and we are
                    committed to helping our clients develop the capabilities they need to excel in this area.
                  </p>
                </CardContent>
              </Card>
            </Reveal>
            <Reveal delay={200}>
              <Card className="card-hover border-t-4 border-agile-red h-full dark:bg-gray-800 dark:border-agile-red-dark">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-4 text-gradient-red">Our Vision</h2>
                  <p className="text-agile-gray dark:text-gray-300 mb-6">
                    To be the leading provider of project management services in Southeast Asia, recognized for our
                    expertise, innovation, and commitment to client success.
                  </p>
                  <p className="text-agile-gray dark:text-gray-300">
                    We envision a future where organizations of all sizes have access to the project management
                    capabilities they need to thrive in an increasingly complex and competitive business environment.
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Values - Updated for dark mode */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide our work and relationships"
            color="green"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="text-agile-blue dark:text-agile-blue-dark h-12 w-12" />,
                title: "Collaboration",
                description: "We believe in the power of teamwork and collaboration to achieve exceptional results.",
              },
              {
                icon: <Lightbulb className="text-agile-green dark:text-agile-green-dark h-12 w-12" />,
                title: "Innovation",
                description: "We continuously seek new and better ways to solve problems and deliver value.",
              },
              {
                icon: <Award className="text-agile-red dark:text-agile-red-dark h-12 w-12" />,
                title: "Excellence",
                description: "We strive for excellence in everything we do, from client service to project delivery.",
              },
              {
                icon: <Briefcase className="text-agile-blue dark:text-agile-blue-dark h-12 w-12" />,
                title: "Integrity",
                description: "We act with honesty, transparency, and ethical conduct in all our interactions.",
              },
            ].map((value, index) => (
              <Reveal key={index} delay={index * 100} direction="up">
                <Card className="card-hover border-none shadow-lg h-full dark:bg-gray-700 dark:text-white">
                  <CardContent className="p-8 text-center">
                    <div className="flex justify-center mb-4">{value.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-agile-gray dark:text-gray-300">{value.description}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team - Updated with pattern background and dark mode fixes */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 dark:opacity-20 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern-enhanced"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="Our Leadership Team"
            subtitle="Meet the experts behind Agilenesia's success"
            color="blue"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/team-member-1.png",
                name: "Sarah Johnson",
                position: "CEO & Founder",
                bio: "With over 15 years of experience in project management, Sarah founded Agilenesia to help organizations improve their project delivery capabilities.",
              },
              {
                image: "/team-member-2.png",
                name: "Michael Chen",
                position: "Chief Consulting Officer",
                bio: "Michael leads our consulting practice, bringing 12 years of experience in implementing PMOs and improving project management processes.",
              },
              {
                image: "/team-member-3.png",
                name: "Anita Wijaya",
                position: "Head of Training",
                bio: "Anita oversees our training programs, leveraging her extensive experience in adult education and project management certification.",
              },
            ].map((member, index) => (
              <Reveal key={index} delay={index * 100} direction="up">
                <Card className="card-hover border-none shadow-lg h-full overflow-hidden dark:bg-gray-800 dark:border dark:border-gray-700">
                  <div className="relative h-64">
                    <Image src={member.image || "/placeholder.svg"} fill alt={member.name} className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-1 dark:text-white">{member.name}</h3>
                    <p className="text-agile-blue dark:text-agile-blue-dark font-medium mb-3">{member.position}</p>
                    <p className="text-agile-gray dark:text-gray-300">{member.bio}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach - Updated for dark mode */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Reveal>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-red">Our Approach</h2>
                <p className="text-agile-gray dark:text-gray-300 mb-6">
                  At Agilenesia, we take a holistic approach to project management, recognizing that successful project
                  delivery requires a combination of people, processes, and tools.
                </p>
              </Reveal>

              <div className="space-y-4">
                {[
                  "We start by understanding your organization's unique needs and challenges.",
                  "We develop customized solutions that address your specific requirements.",
                  "We work closely with your team to implement these solutions and build internal capabilities.",
                  "We provide ongoing support to ensure sustainable improvement in project outcomes.",
                ].map((step, index) => (
                  <Reveal key={index} delay={index * 100}>
                    <div className="flex items-start">
                      <CheckCircle className="text-agile-green dark:text-agile-green-dark mr-3 mt-1 h-5 w-5" />
                      <p className="text-agile-gray dark:text-gray-300">{step}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal direction="right" delay={300}>
              <div className="relative">
                <div className="absolute -z-10 top-1/4 -left-4 w-24 h-24 bg-agile-red/20 dark:bg-agile-red-dark/20 rounded-full blur-2xl"></div>
                <div className="absolute -z-10 bottom-1/4 -right-4 w-32 h-32 bg-agile-blue/20 dark:bg-agile-blue-dark/20 rounded-full blur-2xl"></div>
                <Image
                  src="/project-overview-dashboard.png"
                  width={800}
                  height={600}
                  alt="Our Approach"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
