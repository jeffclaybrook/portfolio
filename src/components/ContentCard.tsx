import { JSX } from "react"

type ContentCardProps = {
 title: string
 subtitle?: string
 icon: JSX.Element
}

export function ContentCard({
 title,
 subtitle,
 icon
}: ContentCardProps) {
 return (
  <div className="flex flex-col items-center justify-center gap-3.5 text-center bg-slate-50 shadow-xs rounded-lg py-6 px-3.5">
   <span className="flex items-center justify-center h-14 w-14 rounded-md p-3.5 text-[#465e8a] bg-blue-100">{icon}</span>
   <h4 className="text-xl tracking-wide text-slate-950 whitespace-nowrap">{title}</h4>
   {subtitle && <p className="text-slate-950 tracking-wide">{subtitle}</p>}
  </div>
 )
}