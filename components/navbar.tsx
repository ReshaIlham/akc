"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isHeroSection, setIsHeroSection] = useState(true)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  // After mounting, we can safely show the theme toggle
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past hero section (approximately 100px)
      const isInHeroSection = window.scrollY < 100
      setIsHeroSection(isInHeroSection)

      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Initial check
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/products", label: "Products" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ]

  // Determine text color based on scroll position and hero section
  const textColorClass = scrolled
    ? "text-agile-dark dark:text-white"
    : isHeroSection
      ? "text-white"
      : "text-agile-dark dark:text-white"

  // Determine logo color based on scroll position and hero section
  const logoColorClass = scrolled
    ? "text-agile-dark dark:text-white"
    : isHeroSection
      ? "text-white"
      : "text-agile-dark dark:text-white"

  // Determine hover color based on scroll position and hero section
  const hoverColorClass = scrolled
    ? "hover:text-agile-blue dark:hover:text-agile-blue-dark"
    : isHeroSection
      ? "hover:text-agile-blue-dark"
      : "hover:text-agile-blue dark:hover:text-agile-blue-dark"

  // Determine active link color
  const activeLinkClass = scrolled
    ? "text-agile-blue dark:text-agile-blue-dark"
    : isHeroSection
      ? "text-agile-blue-dark"
      : "text-agile-blue dark:text-agile-blue-dark"

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/90 dark:bg-agile-dark/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5",
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className={cn("text-2xl font-extrabold", logoColorClass)}>
            Agile<span className="text-agile-blue dark:text-agile-blue-dark">nesia</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-all duration-300 relative group",
                pathname === link.href ? activeLinkClass : `${textColorClass} ${hoverColorClass}`,
              )}
            >
              {link.label}
              <span
                className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-agile-blue dark:bg-agile-blue-dark transition-all duration-300 group-hover:w-full",
                  pathname === link.href ? "w-full" : "",
                )}
              ></span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          {/* Theme toggle button */}
          {mounted && (
            <Button
              onClick={toggleTheme}
              variant="ghost"
              size="icon"
              className={cn(
                "rounded-full w-10 h-10 flex items-center justify-center",
                textColorClass,
                "hover:bg-gray-100 dark:hover:bg-gray-800",
              )}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 transition-all duration-300" />
              ) : (
                <Moon className="h-5 w-5 transition-all duration-300" />
              )}
            </Button>
          )}
          <Button variant={isHeroSection && !scrolled ? "white" : "blue"}>Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Mobile theme toggle */}
          {mounted && (
            <Button
              onClick={toggleTheme}
              variant="ghost"
              size="icon"
              className={cn(
                "rounded-full w-10 h-10 flex items-center justify-center",
                textColorClass,
                "hover:bg-gray-100 dark:hover:bg-gray-800",
              )}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 transition-all duration-300" />
              ) : (
                <Moon className="h-5 w-5 transition-all duration-300" />
              )}
            </Button>
          )}
          <button className={cn("p-2", textColorClass)} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-agile-dark shadow-lg animate-fade-in">
          <div className="container py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "text-agile-blue dark:text-agile-blue-dark"
                    : "text-agile-dark dark:text-white hover:text-agile-blue dark:hover:text-agile-blue-dark",
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              className="w-full bg-agile-blue hover:bg-agile-blue/90 text-white dark:bg-agile-blue-dark dark:hover:bg-agile-blue-dark/90 dark:text-white"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
