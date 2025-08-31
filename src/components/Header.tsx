import { ReactNode } from "react"

type HeaderProps = {
 image: string
 children: ReactNode
}

export function Header({
 image,
 children
}: HeaderProps) {
 return (
  <header className="flex items-center" style={{ background: `url(${image}) no-repeat center center / cover` }}>
   <div className="flex items-center justify-center text-slate-200 px-4 min-h-screen w-full bg-[#2b3440b3]">
    <div className="flex flex-col max-w-6xl w-full mx-auto">{children}</div>
   </div>
  </header>
 )
}