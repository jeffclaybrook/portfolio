"use client"

import { usePathname } from "next/navigation"
import { socials } from "@/lib/data"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"
import { Menu } from "./Icons"
import { NavbarSheetButton } from "./NavbarButton"
import Link from "next/link"

type LinkProps = {
 links: Array<{
  label: string
  href: string
 }>
}

type NavbarMobileProps = {
 links: LinkProps
}

export function NavbarMobile(props: NavbarMobileProps) {
 const pathname = usePathname()

 return (
  <Sheet>
   <div className="flex items-center justify-between absolute w-full p-3">
    <Link href={"/"} className="text-lg text-slate-300 uppercase">
     Jeffrey <strong className="text-slate-50">Claybrook</strong>
    </Link>
    <SheetTrigger asChild>
     <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label="Toggle menu"
      className="text-slate-50 size-10 rounded-full cursor-pointer"
     >
      <Menu className="size-6" />
     </Button>
    </SheetTrigger>
   </div>
   <SheetContent side="left" className="px-3 py-4">
    <SheetHeader className="flex flex-row items-center justify-between space-y-0 p-0">
     <Link href={"/"} className="text-lg text-slate-900 uppercase">
      Jeffrey <strong className="text-slate-600">Claybrook</strong>
     </Link>
    </SheetHeader>
    <div className="flex flex-col h-full">
     <div role="nav" className="flex flex-col gap-2 w-full mb-auto">
      {props.links.links.map((link, i) => (
       <Link
        key={i}
        href={link.href}
        aria-label={`${link.label} page`}
       >
        <NavbarSheetButton
         variant={pathname === link.href ? "secondary" : "ghost"}
         className="w-full"
        >
         {link.label}
        </NavbarSheetButton>
       </Link>
      ))}
     </div>
     <ul className="flex items-center justify-around mt-auto mb-2">
      {socials.map((social, i) => (
       <li key={i}>
        <Tooltip>
         <TooltipTrigger>
          <Button
           type="button"
           variant="ghost"
           size="icon"
           asChild
           className="size-10 rounded-full text-[#475569] cursor-pointer"
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
    </div>
   </SheetContent>
  </Sheet>
 )
}