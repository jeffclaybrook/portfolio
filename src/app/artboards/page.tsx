import { ArtboardCarousel } from "@/components/ArtboardCarousel"
import { BackButton } from "@/components/BackButton"
import { Header } from "@/components/Header"
import { Main } from "@/components/Main"
import { Section } from "@/components/Section"

export default function Artboards() {
 return (
  <>
   <Header image="https://d2mx7vld70uuck.cloudfront.net/hero-5.webp">
    <h1 className="text-4xl lg:text-5xl font-light mb-2">Artboards</h1>
    <p className="text-2xl">Getting the most out of every pixel</p>
   </Header>
   <Main>
    <Section id="artboards" titleAlt="Artboards">
     <ArtboardCarousel />
     <BackButton />
    </Section>
   </Main>
  </>
 )
}