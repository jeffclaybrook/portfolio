import { ReactNode } from "react"

type HeaderProps = {
 image: string
 children: ReactNode
}

export default function Header({ image, children }: HeaderProps) {
 return (
  <header className="flex items-center" style={{ background: `url(${image}) no-repeat center center / cover`}}>
   <div className="flex items-center justify-center bg-[#2b3440b3] text-slate-200 lg:px-6 px-4 w-full min-h-screen">
    <div className="flex flex-col max-w-6xl w-full mx-auto">{children}</div>
   </div>
  </header>
 )
}