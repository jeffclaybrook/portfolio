"use client"

import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import Link from "next/link"

type LinkProps = {
 links: Array<{
  label: string
  href: string
 }>
}

type NavbarDesktopProps = {
 links: LinkProps
}

export function NavbarDesktop(props: NavbarDesktopProps) {
 const pathname = usePathname()

 return (
  <nav className="flex items-center justify-between absolute w-full py-4 px-8">
   <div className="flex-1">
    <Link href={"/"} className="uppercase text-lg text-slate-300">
     Jeffrey <strong className="text-slate-50">Claybrook</strong>
    </Link>
   </div>
   <div className="flex-none hidden lg:block">
    <ul className="flex items-center gap-6">
     {props.links.links.map((link, i) => (
      <li key={i}>
       <Button
        type="button"
        variant="link"
        asChild
        className={cn(pathname === link.href && "border-b text-slate-50")}
       >
        <Link href={link.href} aria-label={`Link to ${link.label}`}>{link.label}</Link>
       </Button>
      </li>
     ))}
    </ul>
   </div>
  </nav>
 )
}