import { BackButton } from "@/components/BackButton"
import { Header } from "@/components/Header"
import { Main } from "@/components/Main"
import { ProjectGrid } from "@/components/ProjectGrid"
import { Section } from "@/components/Section"

export default function Projects() {
 return (
  <>
   <Header image="https://d2mx7vld70uuck.cloudfront.net/hero-4.webp">
    <h1 className="text-4xl lg:text-5xl font-light mb-2">Projects</h1>
    <p className="text-2xl">A few sample projects you can demo</p>
   </Header>
   <Main>
    <Section id="projects" titleAlt="Projects">
     <ProjectGrid />
     <BackButton />
    </Section>
   </Main>
  </>
 )
}