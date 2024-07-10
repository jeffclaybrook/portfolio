import Link from "next/link"
import Card from "@/components/card"
import Header from "@/components/header"
import Main from "@/components/main"
import Section from "@/components/section"
import ChevronLeft from "@/components/icons/ChevronLeft"
import { about } from "@/lib/data"

export default function Page() {
 return (
  <>
   <Header image="/images/hero-2.webp">
   <h1 className="text-4xl lg:text-5xl font-light text-[#cbd5e1] mb-2">About</h1>
   <p className="text-2xl lg:text-2xl mb-4 text-[#cbd5e1]">A little bit about me and the things I dabble in</p>
   </Header>
   <Main>
    <Section>
     <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3.5">
      {about.map((about, i) => (
       <Card
        key={i}
        title={about.title}
        subtitle={about.subtitle}
        icon={about.icon}
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