"use client"

import { useState, ChangeEvent, FormEvent } from "react"
import { motion } from "framer-motion"

export default function Form() {
 const [formData, setFormData] = useState({ name: "", email: "", message: "" })
 const [errors, setErrors] = useState<{ [key: string]: string }>({})
 const [isSubmitting, setIsSubmitting] = useState(false)

 const validate = () => {
  const newErrors: { [key: string]: string } = {}

  if (!formData.name) newErrors.name = "Name is required"
  if (!formData.email) newErrors.email = "Email is required"
  else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
  if (!formData.message) newErrors.message = "Message is required"

  return newErrors
 }

 const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setFormData({ ...formData, [e.target.name]: e.target.value })
  setErrors({ ...errors, [e.target.name]: "" })
 }

 const handleSubmit = async (e: FormEvent) => {
  e.preventDefault()
  
  const validationErrors = validate()

  if (Object.keys(validationErrors).length > 0) {
   setErrors(validationErrors)
   return
  }

  setIsSubmitting(true)

  try {
   const res = await fetch("https://formspree.io/f/xannldop", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData)
   })

   if (res.ok) {
    setFormData({ name: "", email: "", message: "" })
   } else {
    const data = await res.json()
    console.log(data)
   }
  } catch (error) {
   console.log(error)
  } finally {
   setIsSubmitting(false)
  }
 }

 return (
  <motion.form
   initial={{ y: 20, opacity: 0 }}
   whileInView={{ y: 0, opacity: 1 }}
   transition={{ ease: "easeInOut", duration: 1 }}
   onSubmit={handleSubmit}
   className="space-y-4 max-w-lg mx-auto"
  >
   <div className="flex flex-col gap-2">
    <label htmlFor="name">Name</label>
    <input
     id="name"
     name="name"
     type="text"
     value={formData.name}
     onChange={handleChange}
     placeholder="Your name"
     className="flex h-12 w-full rounded-md border border-[#e2e8f0] bg-white px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
    />
    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
   </div>
   <div className="flex flex-col gap-2">
    <label htmlFor="email">Email</label>
    <input
     id="email"
     name="email"
     type="email"
     value={formData.email}
     onChange={handleChange}
     placeholder="you@example.com"
     className="flex h-12 w-full rounded-md border border-[#e2e8f0] bg-white px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
    />
    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
   </div>
   <div className="flex flex-col gap-2">
    <label htmlFor="message">Message</label>
    <textarea
     id="message"
     name="message"
     value={formData.message}
     onChange={handleChange}
     placeholder="Message"
     rows={7}
     className="flex w-full rounded-md border border-[#e2e8f0] bg-white px-3 py-2 ring-offset-background file:border-0 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
    />
    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
   </div>
   <button
    type="submit"
    disabled={isSubmitting}
    className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-slate-700 text-slate-200 hover:bg-slate-900/90 h-12 rounded-md px-8 cursor-pointer"
   >
    {isSubmitting ? "Sending..." : "Send Message"}
   </button>
  </motion.form>
 )
}