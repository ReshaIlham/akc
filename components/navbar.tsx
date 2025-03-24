"use client"

import type React from "react"

import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    // Add event listener only when menu is open
    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside)
    }

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isMenuOpen])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMenuOpen])

  const handleMenuToggle = (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent event from bubbling up
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6 bg-white z-50 relative">
      <Link href="/" className="flex items-center gap-2 mr-4">
        <Image
          src="/images/Logo_Big_Transparent.png"
          alt="Agilenesia Kreasi Cerdas Logo"
          width={120}
          height={40}
          className="h-8 w-auto"
        />
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
        <Button variant="ghost" size="icon" className="md:hidden z-50" onClick={handleMenuToggle}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </div>
      {isMenuOpen && (
        <div
          className="fixed inset-0 top-16 bg-white z-40 md:hidden overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <nav className="flex flex-col p-6 gap-6">
            <Link
              href="/"
              className="font-medium text-lg hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="font-medium text-lg hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="font-medium text-lg hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/products"
              className="font-medium text-lg hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Product
            </Link>
            <Link
              href="/contact"
              className="font-medium text-lg hover:text-blue-600 transition-colors"
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

