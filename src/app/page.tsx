import { testimonials } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { AboutGrid } from "@/components/AboutGrid"
import { ArtboardCarousel } from "@/components/ArtboardCarousel"
import { ContactForm } from "@/components/ContactForm"
import { Faqs } from "@/components/Faqs"
import { ForwardButton } from "@/components/ForwardButton"
import { Header } from "@/components/Header"
import { Main } from "@/components/Main"
import { ProjectGrid } from "@/components/ProjectGrid"
import { Section } from "@/components/Section"
import { SkillGrid } from "@/components/SkillGrid"
import { Testimonial } from "@/components/Testimonial"
import { GithubAlt, Resume } from "@/components/Icons"
import { Typewriter } from "@/components/Typewriter"

export default function Home() {
 return (
  <>
   <Header image="https://d2mx7vld70uuck.cloudfront.net/hero-1.webp">
    <h1 className="text-4xl lg:text-5xl font-light mb-2">
     Hi, my name is <strong className="text-slate-50 font-bold">Jeff</strong>
    </h1>
    <p className="text-2xl mb-4">
     and I&apos;m a <Typewriter />
    </p>
    <div className="flex gap-4">
     <Button
      type="button"
      size="lg"
      asChild
     >
      <a
       href={"https://jeffclaybrook.s3.us-east-1.amazonaws.com/Resume.pdf"}
       target="_blank"
       rel="noreferrer"
       aria-label="My Resume"
      >
       <Resume className="size-6" />
       My Resume
      </a>
     </Button>
     <Button
      type="button"
      variant="secondary"
      size="lg"
      asChild
     >
      <a
       href={"https://github.com/jeffclaybrook"}
       target="_blank"
       rel="noreferrer"
       aria-label="My GitHub"
      >
       <GithubAlt className="size-6" />
       My GitHub
      </a>
     </Button>
    </div>
   </Header>
   <Main>
    <Section
     id="about"
     title="About"
     subtitle="A little bit about me and what I bring to the party"
    >
     <AboutGrid />
     <ForwardButton
      href={"/about"}
      label="More About Me"
     />
    </Section>
    <Testimonial
     name={testimonials[0].name}
     title={testimonials[0].title}
     quote={testimonials[0].quote}
     image={testimonials[0].image}
    />
    <Section
     id="skills"
     title="Skills"
     subtitle="I'm a Jeff of all trades"
    >
     <SkillGrid />
     <ForwardButton
      href={"/skills"}
      label="More Skills"
     />
    </Section>
    <Testimonial
     name={testimonials[1].name}
     title={testimonials[1].title}
     quote={testimonials[1].quote}
     image={testimonials[1].image}
    />
    <Section
     id="projects"
     title="Projects"
     subtitle="A few sample projects you can demo"
    >
     <ProjectGrid />
     <ForwardButton
      href={"/projects"}
      label="More Projects"
     />
    </Section>
    <Testimonial
     name={testimonials[2].name}
     title={testimonials[2].title}
     quote={testimonials[2].quote}
     image={testimonials[2].image}
    />
    <Section
     id="artboards"
     title="Artboards"
     subtitle="Getting the most out of every pixel"
    >
     <ArtboardCarousel />
     <ForwardButton
      href={"/artboards"}
      label="More Artboards"
     />
    </Section>
    <Testimonial
     name={testimonials[3].name}
     title={testimonials[3].title}
     quote={testimonials[3].quote}
     image={testimonials[3].image}
    />
    <Section
     id="faqs"
     title="FAQs"
     subtitle="Frequently asked questions"
    >
     <Faqs />
    </Section>
    <Testimonial
     name={testimonials[4].name}
     title={testimonials[4].title}
     quote={testimonials[4].quote}
     image={testimonials[4].image}
    />
    <Section
     id="contact"
     title="Contact"
     subtitle="Let's get in touch!"
    >
     <ContactForm />
    </Section>
   </Main>
  </>
 )
}