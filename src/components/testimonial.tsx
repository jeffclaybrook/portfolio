"use client"

import { motion } from "framer-motion"
import { Testimonial as TestimonialProps } from "@/lib/data"

export default function Testimonial({ name, title, quote, image }: TestimonialProps) {
 return (
  <motion.article
   initial={{ y: 20, opacity: 0 }}
   whileInView={{ y: 0, opacity: 1 }}
   transition={{ ease: "easeInOut", duration: 1 }}
   style={{ background: `url(${image}) no-repeat center center / cover` }}
   className="flex items-center max-w-6xl w-full mx-auto rounded-3xl overflow-hidden"
  >
   <div className="flex flex-col justify-center bg-[#2b3440b3] text-slate-100 p-6 lg:px-10 min-h-[260px]">
    <h3 className="text-2xl tracking-wide mb-3.5">{quote}</h3>
    <h4 className="text-lg tracking-wide mb-1">{name}</h4>
    <h5 className="tracking-wide font-medium">-{title}</h5>
   </div>
  </motion.article>
 )
}