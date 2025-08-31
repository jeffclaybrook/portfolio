"use client"

import { ReactNode } from "react"
import { AnimatePresence, motion } from "framer-motion"

type SectionProps = {
 title?: string
 subtitle?: string
 titleAlt?: string
 id: string
 children: ReactNode
}

export function Section({
 title,
 subtitle,
 titleAlt,
 id,
 children
}: SectionProps) {
 return (
  <AnimatePresence>
   <motion.section
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ ease: "easeInOut", duration: 1 }}
    id={id}
    className="py-24 max-w-6xl w-full mx-auto"
   >
    {title && <h2 className="text-4xl lg:text-5xl text-center text-slate-500 tracking-wide mb-2">{title}</h2>}
    {titleAlt && <h2 className="text-4xl lg:text-5xl text-center text-slate-500 tracking-wide mb-12">{titleAlt}</h2>}
    {subtitle && <h3 className="text-xl lg:text-2xl text-center text-slate-800 tracking-wide mb-12">{subtitle}</h3>}
    {children}
   </motion.section>
  </AnimatePresence>
 )
}