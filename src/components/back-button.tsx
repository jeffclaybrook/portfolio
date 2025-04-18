import Link from "next/link"
import { ChevronLeft } from "./icons"

export default function BackButton() {
 return (
  <div className="flex justify-center mt-16">
   <Link
    href={"/"}
    aria-label="Back home"
    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 border border-slate-500 text-slate-500 bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8"
   >
    <ChevronLeft />
    Back Home
   </Link>
  </div>
 )
}