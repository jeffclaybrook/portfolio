"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { AnimatePresence, motion } from "framer-motion"
import { toast } from "sonner"
import { Button } from "./ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

const contactFormSchema = z.object({
 name: z.string().min(1, { message: "Please enter your name" }),
 email: z.email().min(1, { message: "Please enter your email address" }),
 message: z.string().min(1, { message: "Please enter your message" })
})

export function ContactForm() {
 const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

 const form = useForm<z.infer<typeof contactFormSchema>>({
  resolver: zodResolver(contactFormSchema),
  defaultValues: {
   name: "",
   email: "",
   message: ""
  }
 })

 const onSubmit = async (data: z.infer<typeof contactFormSchema>) => {
  setIsSubmitting(true)

  try {
   const res = await fetch("https://formspree.io/f/xannldop", {
    method: "POST",
    headers: {
     "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
   })

   if (res.ok) {
    toast.success("Message sent! I'll get back to your shortly.")
    form.reset()
   }
  } catch (error) {
   console.error(error)
   toast.error("Uh-oh! Looks like there was an error submitting the form.")
  } finally {
   setIsSubmitting(false)
  }
 }

 return (
  <Form {...form}>
   <AnimatePresence>
    <motion.form
     initial={{ y: 20, opacity: 0 }}
     whileInView={{ y: 0, opacity: 100 }}
     transition={{ ease: "easeInOut", duration: 1 }}
     onSubmit={form.handleSubmit(onSubmit)}
     className="space-y-4 max-w-lg mx-auto"
    >
     <FormField
      control={form.control}
      name="name"
      render={({ field }) => (
       <FormItem>
        <FormLabel>Name</FormLabel>
        <FormControl>
         <Input
          type="text"
          placeholder="Your name"
          required
          className="h-12 focus-visible:ring-[1px]"
          {...field}
         />
        </FormControl>
        <FormMessage />
       </FormItem>
      )}
     />
     <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
       <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
         <Input
          type="email"
          placeholder="Your email"
          required
          className="h-12 focus-visible:ring-[1px]"
          {...field}
         />
        </FormControl>
        <FormMessage />
       </FormItem>
      )}
     />
     <FormField
      control={form.control}
      name="message"
      render={({ field }) => (
       <FormItem>
        <FormLabel>Message</FormLabel>
        <FormControl>
         <Textarea
          placeholder="Message"
          rows={6}
          required
          className="min-h-28 focus-visible:ring-[1px] resize-none"
          {...field}
         />
        </FormControl>
        <FormMessage />
       </FormItem>
      )}
     />
     <Button
      type="submit"
      disabled={isSubmitting}
      className="bg-slate-700 hover:bg-slate-900/90 text-slate-200 transition-colors h-12 px-8 cursor-pointer"
     >
      {isSubmitting ? "Sending..." : "Send Message"}
     </Button>
    </motion.form>
   </AnimatePresence>
  </Form>
 )
}