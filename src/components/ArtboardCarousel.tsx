"use client"

import { useMediaQuery } from "usehooks-ts"
import { AnimatePresence, motion } from "framer-motion"
import { desktopArtboards, mobileArtboards } from "@/lib/data"
import { Card } from "./ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import Image from "next/image"

export function ArtboardCarousel() {
 const isDesktop = useMediaQuery("(min-width: 1024px)", {
  initializeWithValue: false
 })

 return (
  <AnimatePresence>
   <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 100 }}
    transition={{ ease: "easeInOut", duration: 1 }}
   >
    <Tabs defaultValue="desktop">
     <TabsList className="grid grid-cols-2 w-full mb-4">
      <TabsTrigger value="desktop" className="cursor-pointer">Desktop</TabsTrigger>
      <TabsTrigger value="mobile" className="cursor-pointer">Mobile</TabsTrigger>
     </TabsList>
     <TabsContent value="desktop">
      <Carousel>
       <CarouselContent>
        {desktopArtboards.map((artboard, i) => (
         <CarouselItem key={i}>
          <Card className="p-4">
           <Image
            src={artboard.image}
            alt={artboard.alt}
            width={1024}
            height={600}
            className="w-full mx-auto rounded-md"
           />
          </Card>
         </CarouselItem>
        ))}
       </CarouselContent>
       {isDesktop && (
        <>
         <CarouselPrevious />
         <CarouselNext />
        </>
       )}
      </Carousel>
     </TabsContent>
     <TabsContent value="mobile">
      <Carousel>
       <CarouselContent>
        {mobileArtboards.map((artboard, i) => (
         <CarouselItem key={i}>
          <Card className="p-4">
           <Image
            src={artboard.image}
            alt={artboard.alt}
            width={338}
            height={600}
            className="mx-auto rounded-md"
           />
          </Card>
         </CarouselItem>
        ))}
       </CarouselContent>
       {isDesktop && (
        <>
         <CarouselPrevious />
         <CarouselNext />
        </>
       )}
      </Carousel>
     </TabsContent>
    </Tabs>
   </motion.div>
  </AnimatePresence>
 )
}