"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import Image from "next/image"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isHeroSection, setIsHeroSection] = useState(true)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  const isProductDetailPage = pathname.startsWith("/products/") && pathname !== "/products"
  const isProjectDetailPage = pathname.startsWith("/projects/") && pathname !== "/projects"
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const isInHeroSection = window.scrollY < 100
      setIsHeroSection(isInHeroSection)

      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
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
    {
      label: "Our Channel",
      children: [
        { href: "https://agilenesia.id/", label: "Agilenesia.id", external: true },
        { href: "https://www.youtube.com/@agilenesiatv2011", label: "Agilenesia TV", external: true }, // Changed label here
      ],
    },
  ]

  const textColorClass = scrolled
    ? "text-agile-dark dark:text-white"
    : isProductDetailPage || isProjectDetailPage
      ? "text-agile-dark dark:text-white"
      : isHeroSection
        ? "text-white"
        : "text-agile-dark dark:text-white"

  const hoverColorClass = scrolled
    ? "hover:text-agile-blue dark:hover:text-agile-blue-dark"
    : isProductDetailPage || isProjectDetailPage
      ? "hover:text-agile-blue dark:hover:text-agile-blue-dark"
      : isHeroSection
        ? "hover:text-agile-blue-dark"
        : "hover:text-agile-blue dark:hover:text-agile-blue-dark"

  const activeLinkClass = scrolled
    ? "text-agile-blue dark:text-agile-blue-dark"
    : isProductDetailPage || isProjectDetailPage
      ? "text-agile-blue dark:text-agile-blue-dark"
      : isHeroSection
        ? "text-agile-blue-dark"
        : "text-agile-blue dark:text-agile-blue-dark"

  // Determine logo filter based on scroll position, hero section, and theme
  const logoFilterClass = () => {
    // Always show white logo in dark mode
    if (theme === "dark") return "brightness-0 invert"

    // In light mode, determine based on scroll and section
    if (scrolled) {
      return ""
    } else {
      if (isProductDetailPage || isProjectDetailPage) {
        return ""
      } else {
        return isHeroSection ? "brightness-0 invert" : ""
      }
    }
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 dark:bg-agile-dark/90 backdrop-blur-md shadow-md py-3"
          : isProductDetailPage || isProjectDetailPage
            ? "bg-white/70 dark:bg-agile-dark/70 backdrop-blur-sm py-5"
            : "bg-transparent py-5",
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/agilenesia-logo.png"
            alt="Agilenesia"
            width={180}
            height={50}
            className={cn("h-10 w-auto transition-all duration-300", logoFilterClass())}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            if (link.children) {
              return (
                <DropdownMenu key={link.label}>
                  <DropdownMenuTrigger
                    className={cn(
                      "text-sm font-medium transition-all duration-300 relative group cursor-pointer",
                      textColorClass,
                      hoverColorClass,
                    )}
                  >
                    {link.label}
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 w-0 h-0.5 bg-agile-blue dark:bg-agile-blue-dark transition-all duration-300 group-hover:w-full",
                      )}
                    ></span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white dark:bg-agile-dark shadow-lg">
                    {link.children.map((child) => (
                      <DropdownMenuItem key={child.label}>
                        <Link
                          href={child.href}
                          target={child.external ? "_blank" : "_self"}
                          rel={child.external ? "noopener noreferrer" : undefined}
                          className={cn(
                            "block w-full text-left px-2 py-1 text-sm font-medium transition-colors",
                            "text-agile-dark dark:text-white hover:text-agile-blue dark:hover:text-agile-blue-dark",
                          )}
                        >
                          {child.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )
            } else {
              return (
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
              )
            }
          })}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
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
          <Link href="/contact">
            <Button variant={isHeroSection && !scrolled ? "white" : "blue"}>Get Started</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
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
            {navLinks.map((link) => {
              if (link.children) {
                return (
                  <div key={link.label}>
                    <span className="text-sm font-medium text-agile-dark dark:text-white mb-2 block">{link.label}</span>
                    <div className="pl-4 flex flex-col space-y-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          target={child.external ? "_blank" : "_self"}
                          rel={child.external ? "noopener noreferrer" : undefined}
                          className={cn(
                            "text-sm font-medium transition-colors",
                            "text-agile-dark dark:text-white hover:text-agile-blue dark:hover:text-agile-blue-dark",
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              } else {
                return (
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
                )
              }
            })}
            <Link href="/contact">
              <Button
                className="w-full bg-agile-blue hover:bg-agile-blue/90 text-white dark:bg-agile-blue-dark dark:hover:bg-agile-blue-dark/90 dark:text-white"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
