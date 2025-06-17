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

      {/* Our Leadership - Redesigned with silhouettes in separate rows */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 dark:opacity-20 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern-enhanced"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="Our Leadership Team"
            subtitle="Visionary leaders driving transformation from behind the scenes"
            color="blue"
          />

          <div className="space-y-20">
            {/* Leader 1 - The Architect */}
            <Reveal delay={100}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Silhouette */}
                <div className="relative">
                  <div className="w-80 h-80 mx-auto relative">
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-agile-blue/20 to-agile-red/20 dark:from-agile-blue-dark/30 dark:to-agile-red-dark/30 rounded-full blur-3xl"></div>

                    {/* Silhouette */}
                    <div className="relative w-full h-full bg-gradient-to-b from-gray-800 to-black dark:from-gray-600 dark:to-gray-800 rounded-full flex items-end justify-center overflow-hidden">
                      {/* Person silhouette shape */}
                      <div
                        className="w-32 h-64 bg-black dark:bg-gray-900 relative"
                        style={{
                          clipPath:
                            "polygon(30% 0%, 70% 0%, 85% 15%, 85% 35%, 75% 45%, 85% 55%, 85% 100%, 15% 100%, 15% 55%, 25% 45%, 15% 35%, 15% 15%)",
                        }}
                      >
                        {/* Subtle inner glow */}
                        <div className="absolute inset-0 bg-gradient-to-t from-agile-blue/10 to-transparent"></div>
                      </div>
                    </div>

                    {/* Floating elements */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-agile-blue rounded-full animate-pulse"></div>
                    <div className="absolute bottom-8 left-8 w-2 h-2 bg-agile-red rounded-full animate-pulse delay-1000"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-4xl font-bold mb-2 text-gradient-blue">The Architect</h3>
                    <p className="text-xl text-agile-blue dark:text-agile-blue-dark font-semibold">
                      Chief Strategy Officer
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-gradient-to-br from-agile-blue/10 to-transparent dark:from-agile-blue-dark/20 rounded-lg border border-agile-blue/20 dark:border-agile-blue-dark/30">
                      <div className="text-3xl font-bold text-agile-blue dark:text-agile-blue-dark">20+</div>
                      <div className="text-sm text-agile-gray dark:text-gray-300">Years Experience</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-agile-green/10 to-transparent dark:from-agile-green-dark/20 rounded-lg border border-agile-green/20 dark:border-agile-green-dark/30">
                      <div className="text-3xl font-bold text-agile-green dark:text-agile-green-dark">500+</div>
                      <div className="text-sm text-agile-gray dark:text-gray-300">Projects Led</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 dark:text-white">Background Story</h4>
                    <p className="text-agile-gray dark:text-gray-300 leading-relaxed">
                      A former Fortune 500 executive who orchestrated digital transformations across three continents.
                      After witnessing the collapse of traditional project management in the digital age, they dedicated
                      their expertise to revolutionizing how organizations approach complex initiatives. Their identity
                      remains confidential due to ongoing consulting relationships with global enterprises.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 dark:text-white">Core Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Strategic Planning", "Digital Transformation", "Change Management", "Executive Coaching"].map(
                        (skill, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-gradient-to-r from-agile-blue/10 to-agile-blue/5 dark:from-agile-blue-dark/20 dark:to-agile-blue-dark/10 text-agile-blue dark:text-agile-blue-dark text-sm font-medium rounded-full border border-agile-blue/30 dark:border-agile-blue-dark/40"
                          >
                            {skill}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Leader 2 - The Catalyst */}
            <Reveal delay={300}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content - Left side for second leader */}
                <div className="space-y-6 lg:order-1">
                  <div>
                    <h3 className="text-4xl font-bold mb-2 text-gradient-green">The Catalyst</h3>
                    <p className="text-xl text-agile-green dark:text-agile-green-dark font-semibold">
                      Head of Innovation
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-gradient-to-br from-agile-green/10 to-transparent dark:from-agile-green-dark/20 rounded-lg border border-agile-green/20 dark:border-agile-green-dark/30">
                      <div className="text-3xl font-bold text-agile-green dark:text-agile-green-dark">15+</div>
                      <div className="text-sm text-agile-gray dark:text-gray-300">Years Experience</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-agile-red/10 to-transparent dark:from-agile-red-dark/20 rounded-lg border border-agile-red/20 dark:border-agile-red-dark/30">
                      <div className="text-3xl font-bold text-agile-red dark:text-agile-red-dark">300+</div>
                      <div className="text-sm text-agile-gray dark:text-gray-300">Transformations</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 dark:text-white">Background Story</h4>
                    <p className="text-agile-gray dark:text-gray-300 leading-relaxed">
                      A renowned methodology pioneer who developed frameworks now used by leading tech companies
                      worldwide. Having worked in stealth mode for government agencies and unicorn startups, they bring
                      unparalleled insights into scaling agile practices. Their anonymity protects proprietary
                      methodologies and maintains neutrality across competitive industries.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 dark:text-white">Core Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Agile Methodologies", "Team Dynamics", "Process Innovation", "Leadership Development"].map(
                        (skill, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-gradient-to-r from-agile-green/10 to-agile-green/5 dark:from-agile-green-dark/20 dark:to-agile-green-dark/10 text-agile-green dark:text-agile-green-dark text-sm font-medium rounded-full border border-agile-green/30 dark:border-agile-green-dark/40"
                          >
                            {skill}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                </div>

                {/* Silhouette - Right side for second leader */}
                <div className="relative lg:order-2">
                  <div className="w-80 h-80 mx-auto relative">
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-agile-green/20 to-agile-red/20 dark:from-agile-green-dark/30 dark:to-agile-red-dark/30 rounded-full blur-3xl"></div>

                    {/* Silhouette */}
                    <div className="relative w-full h-full bg-gradient-to-b from-gray-800 to-black dark:from-gray-600 dark:to-gray-800 rounded-full flex items-end justify-center overflow-hidden">
                      {/* Person silhouette shape - slightly different */}
                      <div
                        className="w-36 h-64 bg-black dark:bg-gray-900 relative"
                        style={{
                          clipPath:
                            "polygon(25% 0%, 75% 0%, 90% 20%, 90% 40%, 80% 50%, 90% 60%, 90% 100%, 10% 100%, 10% 60%, 20% 50%, 10% 40%, 10% 20%)",
                        }}
                      >
                        {/* Subtle inner glow */}
                        <div className="absolute inset-0 bg-gradient-to-t from-agile-green/10 to-transparent"></div>
                      </div>
                    </div>

                    {/* Floating elements */}
                    <div className="absolute top-8 left-4 w-3 h-3 bg-agile-green rounded-full animate-pulse delay-500"></div>
                    <div className="absolute bottom-4 right-8 w-2 h-2 bg-agile-red rounded-full animate-pulse delay-1500"></div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Disclaimer */}
          <Reveal delay={500}>
            <div className="mt-16 text-center">
              <div className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl border border-gray-200 dark:border-gray-600">
                <p className="text-agile-gray dark:text-gray-300 leading-relaxed">
                  <span className="font-semibold text-agile-blue dark:text-agile-blue-dark">
                    Confidential Leadership:
                  </span>{" "}
                  Our leadership team operates with discretion to maintain objectivity and protect client
                  confidentiality. Their combined expertise spans decades of transformational success across industries
                  and continents, bringing unparalleled insights to every engagement.
                </p>
              </div>
            </div>
          </Reveal>
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
