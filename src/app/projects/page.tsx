import BackButton from "@/components/back-button"
import Header from "@/components/header"
import Main from "@/components/main"
import ProjectsGrid from "@/components/projects-grid"
import Section from "@/components/section"

export default function Projects() {
 return (
  <>
   <Header image="https://d2mx7vld70uuck.cloudfront.net/hero-4.webp">
    <h1 className="text-4xl lg:text-5xl font-light mb-2">Projects</h1>
    <p className="text-2xl">A few sample projects you can demo</p>
   </Header>
   <Main>
    <Section titleAlt="Projects" id="projects">
     <ProjectsGrid />
     <BackButton />
    </Section>
   </Main>
  </>
 )
}