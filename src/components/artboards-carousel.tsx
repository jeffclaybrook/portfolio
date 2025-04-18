"use client"

import { useState } from "react"
import { desktopArtboards, mobileArtboards } from "@/lib/data"
import Carousel from "./carousel"

export default function ArtboardsCarousel() {
 const [activeTab, setActiveTab] = useState<"desktop" | "mobile">("desktop")

 return (
  <div className="w-full">
   <div className="h-10 items-center justify-center rounded-md bg-[#f1f5f9] p-1 text-muted-foreground grid grid-cols-2 w-full mb-4">
    {["desktop", "mobile"].map((tab) => (
     <button
      key={tab}
      onClick={() => setActiveTab(tab as "desktop" | "mobile")}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer ${
       activeTab === tab && "bg-white text-foreground shadow-sm"
      }`}
     >
      {tab.charAt(0).toUpperCase() + tab.slice(1)}
     </button>
    ))}
   </div>
   <div className="mt-4">
    {activeTab === "desktop" && <Carousel images={desktopArtboards} />}
    {activeTab === "mobile" && <Carousel images={mobileArtboards} />}
   </div>
  </div>
 )
}