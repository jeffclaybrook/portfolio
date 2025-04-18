"use client"

import { motion } from "framer-motion"
import { skills } from "@/lib/data"
import Card from "./card"

export default function SkillsGrid() {
 return (
  <motion.div
   initial={{ y: 20, opacity: 0 }}
   whileInView={{ y: 0, opacity: 1 }}
   transition={{ ease: "easeInOut", duration: 1 }}
   className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-3.5"
  >
   {skills.map((skill, i) => (
    <Card
     key={i}
     title={skill.title}
     icon={<skill.icon />}
    />
   ))}
  </motion.div>
 )
}