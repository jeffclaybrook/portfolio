import Link from "next/link"
import Header from "@/components/header"
import Main from "@/components/main"
import Project from "@/components/project"
import Section from "@/components/section"
import ChevronLeft from "@/components/icons/ChevronLeft"
import { projects } from "@/lib/data"

export default function Page() {
 return (
  <>
   <Header image="/images/hero-4.webp">
   <h1 className="text-4xl lg:text-5xl font-light text-[#f8fafc] mb-2">Projects</h1>
   <p className="text-2xl lg:text-2xl mb-4 text-[#cbd5e1]">A few sample projects you can demo</p>
   </Header>
   <Main>
    <Section>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3.5">
      {projects.map((project, i) => (
       <Project
        key={i}
        title={project.title}
        href={project.href}
        image={project.image}
       />
      ))}
     </div>
     <div className="flex justify-center mt-16">
      <Link href="/" className="btn btn-outline btn-primary mx-auto font-normal">
       <ChevronLeft />
       Back Home
      </Link>
     </div>
    </Section>
   </Main>
  </>
 )
}