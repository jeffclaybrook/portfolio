import ArtboardsCarousel from "@/components/artboards-carousel"
import BackButton from "@/components/back-button"
import Header from "@/components/header"
import Main from "@/components/main"
import Section from "@/components/section"

export default function Artboards() {
 return (
  <>
   <Header image="https://d2mx7vld70uuck.cloudfront.net/hero-5.webp">
    <h1 className="text-4xl lg:text-5xl font-light mb-2">Artboards</h1>
    <p className="text-2xl">Getting the most out of every pixel</p>
   </Header>
   <Main>
    <Section titleAlt="Artboards" id="artboards">
     <ArtboardsCarousel />
     <BackButton  />
    </Section>
   </Main>
  </>
 )
}