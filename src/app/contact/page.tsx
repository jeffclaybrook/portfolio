import { ContactForm } from "@/components/ContactForm"
import { Header } from "@/components/Header"
import { Main } from "@/components/Main"
import { Section } from "@/components/Section"

export default function Contact() {
 return (
  <>
   <Header image="https://d2mx7vld70uuck.cloudfront.net/hero-1.webp">
    <h1 className="text-4xl lg:text-5xl font-light mb-2">Contact</h1>
    <p className="text-2xl">Fill out the form below to get in touch</p>
   </Header>
   <Main>
    <Section id="contact" titleAlt="Let's get in touch!">
     <ContactForm />
    </Section>
   </Main>
  </>
 )
}