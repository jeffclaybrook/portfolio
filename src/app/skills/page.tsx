import Link from "next/link"
import Card from "@/components/card"
import Header from "@/components/header"
import Main from "@/components/main"
import Section from "@/components/section"
import ChevronLeft from "@/components/icons/ChevronLeft"
import { skills } from "@/lib/data"

export default function Page() {
 return (
  <>
   <Header image="/images/hero-3.webp">
   <h1 className="text-4xl lg:text-5xl font-light text-[#f8fafc] mb-2">Skills</h1>
   <p className="text-2xl lg:text-2xl mb-4 text-[#cbd5e1]">I&apos;m a <s>Jack</s> Jeff of all trades</p>
   </Header>
   <Main>
    <Section>
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