import { socials } from "@/lib/data"
import { Button } from "./ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"
import Link from "next/link"

export function Footer() {
 return (
  <footer className="flex flex-col items-center py-16 bg-slate-50">
   <Link href={"/"} className="text-2xl text-slate-900 uppercase mb-8">
    Jeffrey <strong className="text-slate-600">Claybrook</strong>
   </Link>
   <ul className="flex items-center justify-center gap-4 mb-8">
    {socials.map((social, i) => (
     <li key={i}>
      <Tooltip>
       <TooltipTrigger>
        <Button
         type="button"
         variant="ghost"
         size="icon"
         asChild
         className="text-[#475569] size-10 rounded-full"
        >
         <a
          href={social.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Link to Jeff Claybrook's ${social.label} page`}
         >
          <social.Icon className="size-6" />
          <span className="sr-only">{social.label}</span>
         </a>
        </Button>
       </TooltipTrigger>
       <TooltipContent>
        <p>{social.label}</p>
       </TooltipContent>
      </Tooltip>
     </li>
    ))}
   </ul>
   <p className="text-xs text-center mb-2">Built using NextJS, TailwindCSS, and shadcn/ui</p>
   <p className="text-xs text-center">&copy; 2025 Jeffrey Claybrook. All rights reserved.</p>
  </footer>
 )
}