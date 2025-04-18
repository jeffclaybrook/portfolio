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

export default function Typewriter() {
 const [text] = useTypewriter({
  words: words,
  loop: 0,
  typeSpeed: 125,
  deleteSpeed: 50,
  delaySpeed: 2050
 })

 return text
}