"use client"

import { motion } from "framer-motion"
import { projects } from "@/lib/data"
import Project from "./project"

export default function ProjectsGrid() {
 return (
  <motion.div
   initial={{ y: 20, opacity: 0 }}
   whileInView={{ y: 0, opacity: 1 }}
   transition={{ ease: "easeInOut", duration: 1 }}
   className="grid lg:grid-cols-3 md:grid-cols-2 gap-3.5"
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
 )
}