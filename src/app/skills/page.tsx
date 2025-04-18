import BackButton from "@/components/back-button"
import Header from "@/components/header"
import Main from "@/components/main"
import Section from "@/components/section"
import SkillsGrid from "@/components/skills-grid"

export default function Skills() {
 return (
  <>
   <Header image="https://d2mx7vld70uuck.cloudfront.net/hero-3.webp">
    <h1 className="text-4xl lg:text-5xl font-light mb-2">Skills</h1>
    <p className="text-2xl">I&apos;m a <s>Jack</s> Jeff of all trades</p>
   </Header>
   <Main>
    <Section titleAlt="Skills" id="skills">
     <SkillsGrid />
     <BackButton />
    </Section>
   </Main>
  </>
 )
}