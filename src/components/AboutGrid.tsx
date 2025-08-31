"use client"

import { AnimatePresence, motion } from "framer-motion"
import { about } from "@/lib/data"
import { ContentCard } from "./ContentCard"

export function AboutGrid() {
 return (
  <AnimatePresence>
   <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ ease: "easeInOut", duration: 1 }}
    className="grid md:grid-cols-2 lg:grid-cols-3 gap-3.5"
   >
    {about.map((about, i) => (
     <ContentCard
      key={i}
      title={about.title}
      subtitle={about.subtitle}
      icon={<about.Icon />}
     />
    ))}
   </motion.div>
  </AnimatePresence>
 )
}