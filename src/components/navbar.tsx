"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Close, Menu } from "./icons"
import Link from "next/link"

type Link = {
 label: string
 href: string
}

const links: Link[] = [
 { label: "Home", href: "/" },
 { label: "About", href: "/about" },
 { label: "Skills", href: "/skills" },
 { label: "Projects", href: "/projects" },
 { label: "Artboards", href: "/artboards" },
 { label: "Contact", href: "/contact" }
]

const containerVariants = {
 hidden: {
  opacity: 0,
  y: 20
 },
 visible: {
  opacity: 1,
  y: 0,
  transition: {
   duration: 1,
   ease: "easeInOut"
  }
 }
}

export default function Navbar() {
 const [sidebarOpen, setSidebarOpen] = useState(false)

 const pathname = usePathname()

 return (
  <nav>
   <motion.div
    initial="hidden"
    animate="visible"
    variants={containerVariants}
    className="flex items-center justify-between absolute w-full z-30 py-6 lg:pl-6 pl-4 pr-4 lg:pr-6"
   >
    <div className="flex-1">
     <Link href={"/"} aria-label="Jeffrey Claybrook" className="uppercase text-lg text-slate-200">
      Jeffrey <strong className="text-slate-50">Claybrook</strong>
     </Link>
    </div>
    <div className="flex-none hidden lg:block">
     <ul className="flex items-center gap-6">
      {links.map((link, i) => (
       <li key={i}>
        <Link
         href={link.href}
         aria-label={link.label}
         className={cn(
          "text-slate-200 text-lg rounded-none focus:text-slate-50 bg-transparent focus:bg-transparent hover:bg-transparent hover:text-slate-50 active:bg-transparent p-2",
          pathname === link.href && "border-b text-slate-50"
         )}
        >
         {link.label}
        </Link>
       </li>
      ))}
     </ul>
    </div>
    <button
     onClick={() => setSidebarOpen(!sidebarOpen)}
     aria-label="Toggle sidebar"
     className="flex lg:hidden text-slate-200 p-2 rounded-full hover:bg-slate-100 hover:text-slate-900 transition cursor-pointer"
    >
     <Menu />
    </button>
   </motion.div>
   <div
    className={cn(
     "fixed top-0 left-0 h-screen w-3/4 bg-white shadow-lg transform transition-transform duration-300 z-40 lg:hidden flex flex-col",
     sidebarOpen ? "translate-x-0" : "-translate-x-full"
    )}
   >
    <div className="flex items-center justify-between py-4 pl-6 pr-4">
     <Link
      href={"/"}
      aria-label="Jeffrey Claybrook"
      className="uppercase text-lg text-slate-900"
     >
      Jeffrey <strong className="text-slate-600">Claybrook</strong>
     </Link>
     <button
      onClick={() => setSidebarOpen(false)}
      aria-label="Close sidebar"
      className="text-slate-900 p-2 rounded-full hover:bg-slate-100 transition cursor-pointer"
     >
      <Close />
     </button>
    </div>
    <ul className="flex flex-col gap-1 mt-1 px-2 mb-auto">
     {links.map((link, i) => (
      <li key={i}>
       <Link
        href={link.href}
        aria-label={link.label}
        onClick={() => setSidebarOpen(false)}
        className={cn(
         "inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-slate-100 h-10 px-4 py-2 justify-start gap-2 w-full",
         pathname === link.href ? "bg-slate-100" : "bg-white"
        )}
       >
        {link.label}
       </Link>
      </li>
     ))}
    </ul>
   </div>
   {sidebarOpen && (
    <div
     onClick={() => setSidebarOpen(false)}
     className="fixed inset-0 bg-black opacity-60 z-30 lg:hidden"
    />
   )}
  </nav>
 )
}