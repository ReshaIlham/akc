import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react" // Removed social media icons
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-agile-dark text-white dark:bg-gray-900">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Image
                src="/agilenesia-logo.png"
                alt="Agilenesia"
                width={180}
                height={50}
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Empowering organizations through effective project management solutions, coaching, and training.
            </p>
            {/* Removed social media icons section */}
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Channel</h3> {/* Changed heading to "Our Channel" */}
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://agilenesia.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Agilenesia.id
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.youtube.com/@agilenesiatv2011"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Youtube
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-agile-red" />
                <span className="text-gray-300">
                  123 Project Street, Suite 100
                  <br />
                  Jakarta, Indonesia 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-agile-green" />
                <Link href="tel:+6281234567890" className="text-gray-300 hover:text-white transition-colors">
                  +62 812 3456 7890
                </Link>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-agile-blue" />
                <Link href="mailto:info@agilenesia.com" className="text-gray-300 hover:text-white transition-colors">
                  info@agilenesia.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Agilenesia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
