"use client"

import { AnimatePresence, motion } from "framer-motion"
import { bio } from "@/lib/data"
import Image from "next/image"

export function Bio() {
 return (
  <AnimatePresence>
   <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ ease: "easeInOut", duration: 1 }}
    className="flex flex-col lg:flex-row gap-10 mb-10"
   >
    <div className="flex items-start justify-center">
     <Image
      src="https://d2mx7vld70uuck.cloudfront.net/headshot.webp"
      alt="Jeff Claybrook headshot"
      width={250}
      height={250}
      className="rounded-full border-2 border-slate-100"
     />
    </div>
    <div className="flex-1">
     {bio.map((bio, i) => (
      <p key={i} className="text-md tracking-wide mb-4">{bio.text}</p>
     ))}
    </div>
   </motion.div>
  </AnimatePresence>
 )
}