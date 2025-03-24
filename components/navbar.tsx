"use client"

import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
      <Link href="/" className="flex items-center gap-2 text-lg font-semibold sm:text-base mr-4">
        <span className="font-bold text-blue-600">Agilenesia</span>
        <span className="text-gray-500">Kreasi Cerdas</span>
      </Link>
      <nav className="hidden md:flex flex-row items-center gap-5 text-sm lg:gap-6 ml-auto">
        <Link href="/" className="font-medium hover:text-blue-600 transition-colors">
          Home
        </Link>
        <Link href="/about" className="font-medium hover:text-blue-600 transition-colors">
          About
        </Link>
        <Link href="/services" className="font-medium hover:text-blue-600 transition-colors">
          Services
        </Link>
        <Link href="/products" className="font-medium hover:text-blue-600 transition-colors">
          Product
        </Link>
        <Link href="/contact" className="font-medium hover:text-blue-600 transition-colors">
          Contact
        </Link>
      </nav>
      <div className="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4 md:hidden ml-auto">
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b z-50 md:hidden">
          <nav className="flex flex-col p-4 gap-4">
            <Link
              href="/"
              className="font-medium hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="font-medium hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="font-medium hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/products"
              className="font-medium hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Product
            </Link>
            <Link
              href="/contact"
              className="font-medium hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

