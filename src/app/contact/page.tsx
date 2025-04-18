import Form from "@/components/form"
import Header from "@/components/header"
import Main from "@/components/main"
import Section from "@/components/section"

export default function Contact() {
 return (
  <>
   <Header image="https://d2mx7vld70uuck.cloudfront.net/hero-1.webp">
    <h1 className="text-4xl lg:text-5xl font-light mb-2">Contact</h1>
    <p className="text-2xl">Fill out the form below to get in touch</p>
   </Header>
   <Main>
    <Section titleAlt="Let's get in touch!" id="contact">
     <Form />
    </Section>
   </Main>
  </>
 )
}