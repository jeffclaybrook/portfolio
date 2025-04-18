"use client"

import { useEffect, useState } from "react"
import { useSwipeable } from "react-swipeable"
import { ChevronLeft, ChevronRight } from "./icons"
import Image from "next/image"

type ImageProps = {
 image: string
 alt: string
 width: number
 height: number
}

type CarouselProps = {
 images: ImageProps[]
}

export default function Carousel({ images }: CarouselProps) {
 const [currentImage, setCurrentImage] = useState(0)

 useEffect(() => {
  setCurrentImage(0)
 }, [images])

 const prev = () => setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
 const next = () => setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))

 const handlers = useSwipeable({
  onSwipedLeft: () => next(),
  onSwipedRight: () => prev(),
  trackMouse: true
 })

 return (
  <div className="relative w-full overflow-hidden rounded-lg p-4 border border-[#e2e8f0]" {...handlers}>
   <div className="relative h-[650px]">
    {images.map((image, i) => (
     <Image
      key={i}
      src={image.image}
      alt={image.alt}
      width={image.width}
      height={image.height}
      className={`absolute left-1/2 h-full object-cover transition-opacity duration-500 rounded-md -translate-x-[50%] ${
       i === currentImage ? "opacity-100" : "opacity-0"
      }`}
     />
    ))}
   </div>
   <button
    onClick={prev}
    aria-label="Previous slide"
    className="hidden md:flex items-center justify-center absolute top-1/2 left-2 bg-slate-50 hover:bg-slate-100 rounded-full w-10 h-10 shadow-md cursor-pointer"
   >
    <ChevronLeft />
   </button>
   <button
    onClick={next}
    aria-label="Next slide"
    className="hidden md:flex items-center justify-center absolute top-1/2 right-2 bg-slate-50 hover:bg-slate-100 rounded-full w-10 h-10 shadow-md cursor-pointer"
   >
    <ChevronRight />
   </button>
  </div>
 )
}