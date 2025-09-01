"use client"

import { AnimatePresence, motion } from "framer-motion"
import { faqs } from "@/lib/data"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"

export function Faqs() {
 return (
  <AnimatePresence>
   <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 100 }}
    transition={{ ease: "easeInOut", duration: 1 }}
   >
    <Accordion type="single" collapsible>
     {faqs.map((faq, i) => (
      <AccordionItem key={i} value={faq.value}>
       <AccordionTrigger>{faq.question}</AccordionTrigger>
       <AccordionContent>{faq.response}</AccordionContent>
      </AccordionItem>
     ))}
    </Accordion>
   </motion.div>
  </AnimatePresence>
 )
}