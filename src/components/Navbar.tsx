"use client"

import { useMediaQuery } from "usehooks-ts"
import { NavbarDesktop } from "./NavbarDesktop"
import { NavbarMobile } from "./NavbarMobile"

type LinkProps = {
 links: Array<{
  label: string
  href: string
 }>
}

const links: LinkProps = {
 links: [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Artboards", href: "/artboards" },
  { label: "Contact", href: "/contact" }
 ]
}

export function Navbar() {
 const isMobile = useMediaQuery("(max-width: 1024px)", {
  initializeWithValue: false
 })

 if (isMobile) {
  return (
   <NavbarMobile links={links} />
  )
 }

 return (
  <NavbarDesktop links={links} />
 )
}