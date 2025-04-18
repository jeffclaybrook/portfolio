"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "./icons"
import { faqs } from "@/lib/data"

export default function Faqs() {
 const [openItem, setOpenItem] = useState<string | null>(null)

 const toggleItem = (value: string) => {
  setOpenItem(prev => (prev === value ? null : value))
 }

 return (
  <div className="w-full">
   {faqs.map((faq) => (
    <div
     key={faq.value}
     className="border-b border-[#e2e8f0] py-4 cursor-pointer"
     onClick={() => toggleItem(faq.value)}
    >
     <div className="flex items-center justify-between">
      <h3 className="font-medium">{faq.question}</h3>
      <span>{openItem === faq.value ? <ChevronUp /> : <ChevronDown />}</span>
     </div>
     {openItem === faq.value && (
      <p className="mt-2 text-sm">{faq.response}</p>
     )}
    </div>
   ))}
  </div>
 )
}