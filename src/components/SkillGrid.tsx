"use client"

import { AnimatePresence, motion } from "framer-motion"
import { skills } from "@/lib/data"
import { ContentCard } from "./ContentCard"

export function SkillGrid() {
 return (
  <AnimatePresence>
   <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 100 }}
    transition={{ ease: "easeInOut", duration: 1 }}
    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5"
   >
    {skills.map((skill, i) => (
     <ContentCard
      key={i}
      title={skill.title}
      icon={<skill.Icon />}
     />
    ))}
   </motion.div>
  </AnimatePresence>
 )
}