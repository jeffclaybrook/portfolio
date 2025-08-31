"use client"

import { useTypewriter } from "react-simple-typewriter"

const words = [
 "product manager.",
 "frontend developer.",
 "UX/UI designer.",
 "content creator.",
 "QA & debugger.",
 "technical writer."
]

export function Typewriter() {
 const [text] = useTypewriter({
  words: words,
  loop: 0,
  typeSpeed: 125,
  deleteSpeed: 50,
  delaySpeed: 2050
 })

 return (
  <strong className="text-slate-50 font-bold">{text}</strong>
 )
}