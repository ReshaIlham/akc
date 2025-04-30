"use client"

import type React from "react"

import { useState } from "react"
import { Users, Briefcase, Award, Layers, LineChart, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal-animation"

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
  color: "red" | "green" | "blue"
}

export function InteractiveFeatures() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features: Feature[] = [
    {
      icon: <Users size={48} />,
      title: "Expert Team",
      description:
        "Our certified project management professionals bring years of experience across various industries, delivering exceptional results for clients of all sizes.",
      color: "blue",
    },
    {
      icon: <Briefcase size={48} />,
      title: "Proven Methodology",
      description:
        "We implement tried-and-tested project management methodologies tailored to your specific needs, ensuring consistent and reliable outcomes.",
      color: "red",
    },
    {
      icon: <Award size={48} />,
      title: "Measurable Results",
      description:
        "Our approach focuses on delivering measurable improvements in project outcomes, with clear KPIs and performance tracking.",
      color: "green",
    },
    {
      icon: <Layers size={48} />,
      title: "Scalable Solutions",
      description:
        "Whether you're a startup or an enterprise, our solutions scale with your organization's needs and growth trajectory.",
      color: "blue",
    },
    {
      icon: <LineChart size={48} />,
      title: "Data-Driven Insights",
      description:
        "We leverage data analytics to provide actionable insights that drive continuous improvement in your project management processes.",
      color: "red",
    },
    {
      icon: <Zap size={48} />,
      title: "Rapid Implementation",
      description:
        "Our efficient implementation process ensures quick time-to-value, minimizing disruption while maximizing impact.",
      color: "green",
    },
  ]

  const getColorClasses = (color: string, isActive: boolean) => {
    const baseClasses = "transition-all duration-300"
    if (isActive) {
      return {
        bg: `bg-agile-${color}`,
        text: "text-white",
        border: `border-agile-${color}`,
      }
    }
    return {
      bg: "bg-white dark:bg-gray-800",
      text: `text-agile-${color} dark:text-agile-${color}-dark`,
      border: `border-gray-200 dark:border-gray-700 hover:border-agile-${color} dark:hover:border-agile-${color}-dark`,
    }
  }

  return (
    <section className="py-16 md:py-24 overflow-hidden relative">
      {/* Add a more visible pattern background for dark mode */}
      <div className="absolute inset-0 dark:opacity-20 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern-enhanced"></div>
      </div>

      <div className="container relative z-10">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient-blue">Why Choose Agilenesia</h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Feature navigation */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {features.map((feature, index) => {
              const isActive = activeFeature === index
              const colors = getColorClasses(feature.color, isActive)

              return (
                <Reveal key={index} delay={index * 100}>
                  <button
                    className={cn(
                      "text-left p-4 rounded-xl border-2 transition-all duration-300",
                      colors.bg,
                      colors.text,
                      colors.border,
                      "hover:shadow-lg",
                      isActive && "shadow-xl",
                    )}
                    onClick={() => setActiveFeature(index)}
                  >
                    <div className="flex items-center">
                      <div
                        className={cn(
                          "mr-3 transition-all duration-300",
                          isActive ? "text-white" : `text-agile-${feature.color} dark:text-agile-${feature.color}-dark`,
                        )}
                      >
                        {feature.icon}
                      </div>
                      <h3 className="font-bold text-xl">{feature.title}</h3>
                    </div>
                  </button>
                </Reveal>
              )
            })}
          </div>

          {/* Feature detail */}
          <div className="lg:col-span-8 flex items-center">
            <Reveal>
              <div
                className={cn(
                  "p-8 rounded-2xl shadow-2xl transition-all duration-500 transform",
                  `bg-agile-${features[activeFeature].color}/10 dark:bg-agile-${features[activeFeature].color}-dark/20`,
                  "border border-gray-200 dark:border-gray-700",
                  "h-full flex flex-col justify-center",
                )}
              >
                <div
                  className={cn(
                    "mx-auto mb-6 p-4 rounded-full",
                    `text-agile-${features[activeFeature].color} dark:text-agile-${features[activeFeature].color}-dark`,
                    `bg-agile-${features[activeFeature].color}/10 dark:bg-agile-${features[activeFeature].color}-dark/20`,
                  )}
                >
                  {features[activeFeature].icon}
                </div>
                <h3
                  className={cn(
                    "text-3xl font-bold mb-4 text-center",
                    `text-agile-${features[activeFeature].color} dark:text-agile-${features[activeFeature].color}-dark`,
                  )}
                >
                  {features[activeFeature].title}
                </h3>
                <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-6">
                  {features[activeFeature].description}
                </p>
                <div className="text-center">
                  <Button variant={features[activeFeature].color as any} className="group">
                    Learn More
                    <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
