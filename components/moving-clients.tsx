"use client"

import Image from "next/image" // Import the Image component

export function MovingClients() {
  // Data client logos - now using placeholder image URLs
  const clients = [
    { id: 1, name: "TechCorp Global", logo: "/placeholder.svg?height=60&width=150&text=TechCorp" },
    { id: 2, name: "InnovateCo", logo: "/placeholder.svg?height=60&width=150&text=InnovateCo" },
    { id: 3, name: "FinSolutions Inc.", logo: "/placeholder.svg?height=60&width=150&text=FinSolutions" },
    { id: 4, name: "MediCare Solutions", logo: "/placeholder.svg?height=60&width=150&text=MediCare" },
    { id: 5, name: "RetailPlus Chain", logo: "/placeholder.svg?height=60&width=150&text=RetailPlus" },
    { id: 6, name: "Global Manufacturing", logo: "/placeholder.svg?height=60&width=150&text=GlobalMfg" },
    { id: 7, name: "Energy Solutions", logo: "/placeholder.svg?height=60&width=150&text=EnergySol" },
    { id: 8, name: "Digital Innovations", logo: "/placeholder.svg?height=60&width=150&text=DigitalInn" },
  ]

  return (
    <div className="relative overflow-hidden">
      <div className="flex animate-scroll-left">
        {/* First set of clients */}
        {clients.map((client) => (
          <div
            key={`first-${client.id}`}
            className="flex-shrink-0 mx-8 flex items-center justify-center h-20 w-40 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Changed from text to Image component */}
            <Image
              src={client.logo || "/placeholder.svg"}
              alt={client.name}
              width={150} // Set width to fit within w-40 (160px) container
              height={60} // Set height to fit within h-20 (80px) container
              className="object-contain h-full w-full grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100 dark:invert"
            />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {clients.map((client) => (
          <div
            key={`second-${client.id}`}
            className="flex-shrink-0 mx-8 flex items-center justify-center h-20 w-40 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Changed from text to Image component */}
            <Image
              src={client.logo || "/placeholder.svg"}
              alt={client.name}
              width={150}
              height={60}
              className="object-contain h-full w-full grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100 dark:invert"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
