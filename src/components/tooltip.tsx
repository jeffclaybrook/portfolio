import { ReactNode } from "react"

type TooltipProps = {
 label: string
 children: ReactNode
}

export default function Tooltip({ label, children }: TooltipProps) {
 return (
  <div className="relative group inline-block">
   {children}
   <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:flex px-3 py-1.5 bg-white text-slate-800 text-sm rounded-md shadow-md z-10 whitespace-nowrap">{label}</div>
  </div>
 )
}