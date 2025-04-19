import Link from "next/link"
import Tooltip from "./tooltip"
import { socials } from "@/lib/data"

export default function Footer() {
 return (
  <footer className="flex flex-col items-center py-16 bg-slate-50">
   <Link href={"/"} aria-label="Jeffrey Claybrook" className="text-2xl uppercase mb-8 text-slate-900">
    Jeffrey <strong className="text-slate-600">Claybrook</strong>
   </Link>
   <ul className="flex items-center justify-center gap-4 mb-8">
    {socials.map((social, i) => (
     <li key={i}>
      <Tooltip label={social.label}>
       <a
        href={social.href}
        target="_blank"
        rel="noreferrer"
        aria-label={`Link to Jeff Claybrook's ${social.label}`}
        className="flex items-center justify-center p-3 text-[#475569] rounded-full hover:bg-slate-100"
       >
        <social.icon />
        <span className="sr-only">{social.label}</span>
       </a>
      </Tooltip>
     </li>
    ))}
   </ul>
   <p className="text-sm text-center">&copy;2025 Jeffrey Claybrook. All rights reserved.</p>
  </footer>
 )
}