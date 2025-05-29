"use client"

import { Reveal } from "@/components/reveal-animation"

export function MovingClients() {
  // Data client logos - bisa diganti dengan logo asli nanti
  const clients = [
    { id: 1, name: "TechCorp Global", logo: "TechCorp" },
    { id: 2, name: "InnovateCo", logo: "InnovateCo" },
    { id: 3, name: "FinSolutions Inc.", logo: "FinSolutions" },
    { id: 4, name: "MediCare Solutions", logo: "MediCare" },
    { id: 5, name: "RetailPlus Chain", logo: "RetailPlus" },
    { id: 6, name: "Global Manufacturing", logo: "GlobalMfg" },
    { id: 7, name: "Energy Solutions", logo: "EnergySol" },
    { id: 8, name: "Digital Innovations", logo: "DigitalInn" },
  ]

  return (
    <Reveal>
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll-left">
          {/* First set of clients */}
          {clients.map((client) => (
            <div
              key={`first-${client.id}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center h-20 w-40 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-agile-gray dark:text-gray-300 font-semibold text-center px-4">{client.logo}</div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {clients.map((client) => (
            <div
              key={`second-${client.id}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center h-20 w-40 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-agile-gray dark:text-gray-300 font-semibold text-center px-4">{client.logo}</div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  )
}
