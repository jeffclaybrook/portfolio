import { BackButton } from "@/components/BackButton"
import { Header } from "@/components/Header"
import { Main } from "@/components/Main"
import { Section } from "@/components/Section"
import { SkillGrid } from "@/components/SkillGrid"

export default function Skills() {
 return (
  <>
   <Header image="https://d2mx7vld70uuck.cloudfront.net/hero-3.webp">
    <h1 className="text-4xl lg:text-5xl font-light mb-2">Skills</h1>
    <p className="text-2xl">I&apos;m a <s>Jack</s> Jeff of all trades</p>
   </Header>
   <Main>
    <Section id="skills" titleAlt="Skills">
     <SkillGrid />
     <BackButton />
    </Section>
   </Main>
  </>
 )
}