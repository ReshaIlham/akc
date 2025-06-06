"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Menu, X, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { logout, getCurrentUser } from "@/lib/auth"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function AdminNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const user = getCurrentUser()

  const handleLogout = () => {
    logout()
    router.push("/admin/login")
  }

  const navLinks = [
    { href: "/admin", label: "Dashboard" },
    { href: "/admin/users", label: "Users" },
    { href: "/admin/clients", label: "Clients" },
    { href: "/admin/projects", label: "Projects" },
    { href: "/admin/products", label: "Products" },
    { href: "/admin/demo-requests", label: "Demo Requests" },
    { href: "/admin/testimonials", label: "Testimonials" },
    { href: "/admin/content", label: "Content" },
  ]

  return (
    <header className="bg-white dark:bg-agile-dark shadow-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="container flex items-center justify-between py-4">
        <Link href="/admin" className="flex items-center space-x-3">
          <Image
            src="/agilenesia-logo.png"
            alt="Agilenesia"
            width={180}
            height={50}
            className="h-10 w-auto dark:brightness-0 dark:invert transition-all duration-300"
            priority
          />
          <span className="text-sm bg-agile-blue/10 text-agile-blue dark:bg-agile-blue-dark/10 dark:text-agile-blue-dark px-2 py-1 rounded-full">
            Admin
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-all duration-300 relative group text-agile-dark dark:text-white hover:text-agile-blue dark:hover:text-agile-blue-dark",
                pathname === link.href ? "text-agile-blue dark:text-agile-blue-dark" : "",
              )}
            >
              <span>{link.label}</span>
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
          <ThemeToggle />

          {user ? (
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-agile-blue text-white flex items-center justify-center text-sm font-medium">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-agile-dark dark:text-white">{user.name}</div>
                <button
                  onClick={handleLogout}
                  className="text-xs text-agile-gray dark:text-gray-400 hover:text-agile-red dark:hover:text-agile-red-dark transition-colors"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <Link href="/admin/login">
              <Button variant="blue" size="sm">
                Login
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <button
            className="p-2 text-agile-dark dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-agile-dark">
          <div className="container py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "text-agile-blue dark:text-agile-blue-dark"
                    : "text-agile-gray dark:text-gray-300 hover:text-agile-blue dark:hover:text-agile-blue-dark",
                )}
                onClick={() => setIsOpen(false)}
              >
                <span>{link.label}</span>
              </Link>
            ))}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              {user ? (
                <div>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-agile-blue text-white flex items-center justify-center text-sm font-medium">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-agile-dark dark:text-white">{user.name}</div>
                      <div className="text-xs text-agile-gray dark:text-gray-400">{user.email}</div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleLogout}
                    className="w-full text-agile-red dark:text-agile-red-dark hover:bg-agile-red/10 dark:hover:bg-agile-red-dark/10"
                  >
                    <LogOut size={16} className="mr-2" />
                    Logout
                  </Button>
                </div>
              ) : (
                <Link href="/admin/login">
                  <Button variant="blue" size="sm" className="w-full">
                    Login
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
