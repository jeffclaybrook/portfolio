import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ReactNode } from "react"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jeffrey Claybrook",
  description: "Jeffrey Claybrook personal portfolio"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}