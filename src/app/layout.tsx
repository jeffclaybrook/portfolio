import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import { ReactNode } from "react"
import { GoogleAnalytics } from "@next/third-parties/google"
import { Toaster } from "sonner"
import { Footer } from "@/components/Footer"
import { Navbar } from "@/components/Navbar"
import "./globals.css"

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Jeff Claybrook Portfolio",
  description: "Created using NextJS, TailwindCSS, CloudFront, S3, shadcn/ui, and framer motion"
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <link rel="preload" href="https://d2mx7vld70uuck.cloudfront.net/hero-1.webp" as="image" />
      <body className={`${plus_jakarta_sans.className} antialiased`}>
        <GoogleAnalytics gaId="G-623J8MSMLL" />
        <Navbar />
        {children}
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  )
}