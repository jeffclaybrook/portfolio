import { NewTab } from "./icons"

type ProjectProps = {
 title: string
 href: string
 image: string
}

export default function Project({ title, href, image }: ProjectProps) {
 return (
  <a
   href={href}
   target="_blank"
   rel="noreferrer"
   aria-label={`Link to ${title}`}
   style={{ background: `url(${image}) no-repeat center center / cover` }}
   className="rounded-lg overflow-hidden hover:rounded-3xl duration-300"
  >
   <div className="flex flex-col items-center justify-center py-24 bg-[#2b3440b3] text-slate-200">
    <h3 className="text-2xl tracking-wide mb-3">{title}</h3>
    <NewTab className="size-6" />
   </div>
  </a>
 )
}