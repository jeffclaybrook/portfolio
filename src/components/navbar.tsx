"use client"

import Link from "next/link"
import Menu from "./icons/Menu"
import { FC } from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { socials } from "@/lib/data"

const NavItems = () => {
 const pathname = usePathname()

 const activeItem = (pathname: string, nav: string) => {
  return pathname.includes(nav)
 }

 return [
  { label: "Home", href: "/", active: pathname === "/" },
  { label: "About", href: "/about", active: activeItem(pathname, "/about") },
  { label: "Skills", href: "/skills", active: activeItem(pathname, "/skills") },
  { label: "Projects", href: "/projects", active: activeItem(pathname, "/projects") },
  { label: "Artboards", href: "/artboards", active: activeItem(pathname, "/artboards") },
  { label: "Contact", href: "/contact", active: activeItem(pathname, "/contact") }
 ]
}

const NavbarItem: FC<{
 label: string
 href: string
 active: boolean
}> = ({
 label,
 href,
 active
}) => {
 return (
  <Link
   href={href}
   className={cn(
    "text-[#cbd5e1] text-lg rounded-none focus:text-[#f8fafc] bg-none px-2",
    active && "border-b text-[#f8fafc]"
   )}
  >
   {label}
  </Link>
 )
}

const Navbar = () => {
 const navItems = NavItems()

 return (
  <nav className="drawer">
   <input
    type="checkbox"
    id="drawer"
    className="drawer-toggle"
   />
   <div className="drawer-content flex flex-col">
    <div className="w-full navbar absolute">
     <div className="flex-1 px-2 mx-2">
      <Link href={"/"} className="uppercase text-lg text-[#cbd5e1]">
       Jeffrey <strong className="text-[#f8fafc]">Claybrook</strong>
      </Link>
     </div>
     <div className="flex-none lg:hidden">
      <label
       htmlFor="drawer"
       aria-label="Open drawer"
       className="btn btn-square btn-ghost"
      >
       <Menu className="text-[#f8fafc]" />
      </label>
     </div>
     <div className="flex-none hidden lg:block">
      <ul className="menu menu-horizontal gap-4">
       {navItems.map((item, i)  => (
        <li key={i}>
         <NavbarItem
          label={item.label}
          href={item.href}
          active={item.active}
         />
        </li>
       ))}
      </ul>
     </div>
    </div>
   </div>
   <div className="drawer-side">
    <label
     htmlFor="drawer"
     aria-label="Close drawer"
     className="drawer-overlay"
    />
    <ul className="menu p-4 w-80 min-h-full bg-[#f8fafc]">
     {navItems.map((item, i) => (
      <li key={i}>
       <Link href={item.href} className="text-lg">{item.label}</Link>
      </li>
     ))}
    </ul>
    <ul className="menu menu-horizontal gap-4 mt-auto">
     {socials.map((social, i) => (
      <li key={i}>
       <a
        href={social.href}
        target="_blank"
        rel="noreferrer"
        className="btn btn-ghost"
       >
        {social.icon}
       </a>
      </li>
     ))}
    </ul>
   </div>
  </nav>
 )
}

export default Navbar