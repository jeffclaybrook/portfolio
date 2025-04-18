import Link from "next/link"
import { ChevronRight } from "./icons"

type ForwardButtonProps = {
 label: string
 href: string
}

export default function ForwardButton({ label, href }: ForwardButtonProps) {
 return (
  <div className="flex justify-center mt-16">
   <Link
    href={href}
    aria-label={label}
    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-slate-500 text-slate-500 bg-white hover:bg-slate-100 hover:text-accent-foreground h-11 rounded-md px-8"
   >
    {label}
    <ChevronRight />
   </Link>
  </div>
 )
}