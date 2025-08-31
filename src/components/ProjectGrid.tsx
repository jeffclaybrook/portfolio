"use client"

import { AnimatePresence, motion } from "framer-motion"
import { projects } from "@/lib/data"
import { Project } from "./Project"

export function ProjectGrid() {
 return (
  <AnimatePresence>
   <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 100 }}
    transition={{ ease: "easeInOut", duration: 1 }}
    className="grid md:grid-cols-2 lg:grid-cols-3 gap-3.5"
   >
    {projects.map((project, i) => (
     <Project
      key={i}
      title={project.title}
      href={project.href}
      image={project.image}
     />
    ))}
   </motion.div>
  </AnimatePresence>
 )
}