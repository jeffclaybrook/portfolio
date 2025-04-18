import AboutGrid from "@/components/about-grid"
import BackButton from "@/components/back-button"
import Bio from "@/components/bio"
import Header from "@/components/header"
import Main from "@/components/main"
import Section from "@/components/section"

export default function About() {
 return (
  <>
   <Header image="https://d2mx7vld70uuck.cloudfront.net/hero-2.webp">
    <h1 className="text-4xl lg:text-5xl font-light mb-2">About</h1>
    <p className="text-2xl">A little bit about me and what I bring to the party</p>
   </Header>
   <Main>
    <Section titleAlt="About" id="about">
     <Bio />
     <AboutGrid />
     <BackButton />
    </Section>
   </Main>
  </>
 )
}