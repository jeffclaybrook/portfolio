import Link from "next/link"
import { socials } from "@/lib/data"

const Footer = () => {
 return (
  <footer className="footer footer-center p-10 bg-light-blue text-base-content rounded">
   <Link href={"/"} className="flex text-2xl uppercase">
    Jeffrey <strong>Claybrook</strong>
   </Link>
   <div className="grid grid-flow-col gap-4">
    {socials.map((item, i) => (
     <a
      href={item.href}
      key={i}
      aria-label={item.label}
      className="btn btn-circle btn-ghost btn-outline hover:text-white"
     >
      {item.icon}
     </a>
    ))}
   </div>
   <div>
    <p className="text-sm">© 2024 Jeffrey Claybrook</p>
   </div>
  </footer>
 )
}

export default Footer