import Link from "next/link"
import Artboards from "@/components/artboards"
import Card from "@/components/card"
import Form from "@/components/form"
import Header from "@/components/header"
import Main from "@/components/main"
import Project from "@/components/project"
import Section from "@/components/section"
import Testimonial from "@/components/testimonial"
import Typewriter from "@/components/typewriter"
import ChevronRight from "@/components/icons/ChevronRight"
import Resume from "@/components/icons/Resume"
import Github from "@/components/icons/Github"
import { about, projects, skills, testimonials } from "@/lib/data"

export default function Home() {
 return (
  <>
   <Header image="/images/hero-1.webp">
    <h1 className="text-4xl lg:text-5xl font-light text-[#cbd5e1] mb-2">Hi, my name is <strong className="font-bold text-[#f8fafc]">Jeff</strong></h1>
    <p className="text-2xl lg:text-2xl mb-4 text-[#cbd5e1]">and I&apos;m a <Typewriter /></p>
    <div className="flex items-center gap-4">
     <a
      href="https://jeffclaybrook.s3.amazonaws.com/resume.min.pdf"
      target="_blank"
      rel="noreferrer"
      className="btn btn-primary"
     >
      <Resume />
      My Resume
     </a>
     <a
      href="https://github.com/jeffclaybrook"
      target="_blank"
      rel="noreferrer"
      className="btn"
     >
      <Github />
      My GitHub
     </a>
    </div>
   </Header>
   <Main>
    <Section title="About" subtitle="A little bit about me">
     <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3.5">
      {about.map((about, i) => (
       <Card
        key={i}
        title={about.title}
        icon={about.icon}
       />
      ))}
     </div>
     <div className="flex justify-center mt-16">
      <Link href="/about" className="btn btn-outline btn-primary mx-auto font-normal">
       More About Me
       <ChevronRight />
      </Link>
     </div>
    </Section>
    <Testimonial
     quote={testimonials[0].quote}
     name={testimonials[0].name}
     title={testimonials[0].title}
     image={testimonials[0].image}
    />
    <Section title="Skills" subtitle="I&apos;m a Jeff of all trades">
     <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
      {skills.map((skill, i) => (
       <Card
        key={i}
        title={skill.title}
        icon={skill.icon}
       />
      ))}
     </div>
     <div className="flex justify-center mt-16">
      <Link href="/skills" className="btn btn-outline btn-primary mx-auto font-normal">
       More Skills
       <ChevronRight />
      </Link>
     </div>
    </Section>
    <Testimonial
     quote={testimonials[1].quote}
     name={testimonials[1].name}
     title={testimonials[1].title}
     image={testimonials[1].image}
    />
    <Section title="Projects" subtitle="A few sample projects you can demo">
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
      <Link href="/projects" className="btn btn-outline btn-primary mx-auto font-normal">
       More Projects
       <ChevronRight />
      </Link>
     </div>
    </Section>
    <Testimonial
     quote={testimonials[2].quote}
     name={testimonials[2].name}
     title={testimonials[2].title}
     image={testimonials[2].image}
    />
    <Section title="Artboards" subtitle="Getting the most out of every pixel">
     <Artboards />
     <div className="flex justify-center mt-16">
      <Link href="/artboards" className="btn btn-outline btn-primary mx-auto font-normal">
       More Artboards
       <ChevronRight />
      </Link>
     </div>
    </Section>
    <Testimonial
     quote={testimonials[3].quote}
     name={testimonials[3].name}
     title={testimonials[3].title}
     image={testimonials[3].image}
    />
    <Section title="Contact" subtitle="Let&apos;s get in touch!">
     <Form />
    </Section>
   </Main>   
  </>
 )
}