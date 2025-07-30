"use client"

import type React from "react"
import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  // Scroll to top when pathname changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <html lang="en">
      <head>
        <title>McMaster PCOS Society - McMaster University</title>
        <meta
          name="description"
          content="Supporting and empowering individuals with PCOS through community, education, and advocacy."
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
