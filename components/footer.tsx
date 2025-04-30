import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/40">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold">Agilenesia</span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              Empowering organizations through effective project management solutions.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium">Services</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-foreground">
                  Coaching & Consulting
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-foreground">
                  Education & Training
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-foreground">
                  Project Management Solutions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-foreground">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-muted-foreground">Jakarta, Indonesia</li>
              <li>
                <a href="mailto:info@agilenesia.com" className="text-muted-foreground hover:text-foreground">
                  info@agilenesia.com
                </a>
              </li>
              <li>
                <a href="tel:+6281234567890" className="text-muted-foreground hover:text-foreground">
                  +62 812 3456 7890
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-muted-foreground/20 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Agilenesia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
