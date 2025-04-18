import AboutGrid from "@/components/about-grid"
import ArtboardsCarousel from "@/components/artboards-carousel"
import Faqs from "@/components/faqs"
import Form from "@/components/form"
import ForwardButton from "@/components/forward-button"
import Header from "@/components/header"
import Main from "@/components/main"
import ProjectsGrid from "@/components/projects-grid"
import Section from "@/components/section"
import SkillsGrid from "@/components/skills-grid"
import Testimonial from "@/components/testimonial"
import Typewriter from "@/components/typewriter"
import { GithubAlt, Resume } from "@/components/icons"
import { testimonials } from "@/lib/data"

export default function Home() {
 return (
  <>
   <Header image="https://d2mx7vld70uuck.cloudfront.net/hero-1.webp">
    <h1 className="text-4xl lg:text-5xl font-light mb-2">
     Hi, my name is <strong className="text-slate-50 font-bold">Jeff</strong>
    </h1>
    <p className="text-2xl mb-4">
     and I&apos;m a <strong className="text-slate-50 font-bold">
      <Typewriter />
     </strong>
    </p>
    <div className="flex gap-4">
     <a
      href="https://jeffclaybrook.s3.us-east-1.amazonaws.com/Resume.pdf"
      target="_blank"
      rel="noreferrer"
      aria-label="My Resume"
      className="inline-flex items-center justify-center lg:gap-2 gap-1.5 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-slate-700 hover:bg-slate-900/90 h-12 rounded-md lg:px-8 px-6"
     >
      <Resume />
      My Resume
     </a>
     <a
      href="https://github.com/jeffclaybrook"
      target="_blank"
      rel="noreferrer"
      aria-label="My GitHub"
      className="inline-flex items-center justify-center lg:gap-2 gap-1.5 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-slate-50 text-slate-700 hover:bg-slate-200 h-12 rounded-md lg:px-8 px-6"
     >
      <GithubAlt />
      My GitHub
     </a>
    </div>
   </Header>
   <Main>
    <Section title="About" id="about" subtitle="A little bit about me and what I bring to the party">
     <AboutGrid />
     <ForwardButton label="More About Me" href={"/about"} />
    </Section>
    <Testimonial
     name={testimonials[0].name}
     title={testimonials[0].title}
     quote={testimonials[0].quote}
     image={testimonials[0].image}
    />
    <Section title="Skills" id="skills" subtitle="I'm a Jeff of all trades">
     <SkillsGrid />
     <ForwardButton label="More Skills" href={"/skills"} />
    </Section>
    <Testimonial
     name={testimonials[1].name}
     title={testimonials[1].title}
     quote={testimonials[1].quote}
     image={testimonials[1].image}
    />
    <Section title="Projects" id="projects" subtitle="A few sample projects you can demo">
     <ProjectsGrid />
     <ForwardButton label="More Projects" href={"/projects"} />
    </Section>
    <Testimonial
     name={testimonials[2].name}
     title={testimonials[2].title}
     quote={testimonials[2].quote}
     image={testimonials[2].image}
    />
    <Section title="Artboards" id="artboards" subtitle="Getting the most out of every pixel">
     <ArtboardsCarousel />
     <ForwardButton label="More Artboards" href={"/artboards"} />
    </Section>
    <Testimonial
     name={testimonials[3].name}
     title={testimonials[3].title}
     quote={testimonials[3].quote}
     image={testimonials[3].image}
    />
    <Section title="FAQs" id="faqs" subtitle="Frequently asked questions">
     <Faqs />
    </Section>
    <Testimonial
     name={testimonials[4].name}
     title={testimonials[4].title}
     quote={testimonials[4].quote}
     image={testimonials[4].image}
    />
    <Section title="Contact" id="contact" subtitle="Let's get in touch!">
     <Form />
    </Section>
   </Main>
  </>
 )
}