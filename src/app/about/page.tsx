import { AboutGrid } from "@/components/AboutGrid"
import { BackButton } from "@/components/BackButton"
import { Bio } from "@/components/Bio"
import { Header } from "@/components/Header"
import { Main } from "@/components/Main"
import { Section } from "@/components/Section"

export default function About() {
 return (
  <>
   <Header image="https://d2mx7vld70uuck.cloudfront.net/hero-2.webp">
    <h1 className="text-4xl lg:text-5xl font-light mb-2">About</h1>
    <p className="text-2xl">A little bit about me and what I bring to the party</p>
   </Header>
   <Main>
    <Section id="about" titleAlt="About">
     <Bio />
     <AboutGrid />
     <BackButton />
    </Section>
   </Main>
  </>
 )
}