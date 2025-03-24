import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-white rounded-md p-2">
                <Image
                  src="/images/logo_big_transparent.png"
                  alt="Agilenesia Kreasi Cerdas Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Empowering organizations through agile methodologies and innovative project management solutions.
            </p>
            {/* These social media links point to "#" which is a placeholder */}
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-blue-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-blue-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  Agile Training
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  Project Management
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  Consulting Services
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  Leadership Development
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 shrink-0 text-blue-400 mt-0.5" />
                <span>
                  Gedung Artha Graha, Jl. Jenderal Sudirman No.52-53, RT.5/RW.3, Senayan, Kebayoran Baru, South Jakarta
                  City, Jakarta 12190
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 shrink-0 text-blue-400" />
                <span>(021) 31141268</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 shrink-0 text-blue-400" />
                <span>info@agilenesia.co.id</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Agilenesia Kreasi Cerdas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

