import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { CursorGlow } from "@/components/cursor-glow"
import { PageTransition } from "@/components/page-transition"
import { WhatsappButton } from "@/components/whatsapp-button"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Agilenesia - Project Management Services",
  description:
    "Agilenesia provides project management services, coaching, consulting, education, training, and solutions.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.className} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange={false}>
          <div className="noise-bg"></div>
          <div className="grid-bg"></div>
          <CursorGlow />
          <PageTransition>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1 pt-20">{children}</main>
              <Footer />
            </div>
          </PageTransition>
          <WhatsappButton />
        </ThemeProvider>
      </body>
    </html>
  )
}
