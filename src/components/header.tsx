import { ReactNode } from "react"

type HeaderProps = {
 image: string
 children: ReactNode
}

const Header = ({ image, children }: HeaderProps) => {
 return (
  <header
   className="hero min-h-screen text-white"
   style={{ backgroundImage: `url(${image})`}}
  >
   <div className="hero-overlay bg-opacity-60" />
   <div className="flex flex-col max-w-6xl w-full p-4">
    {children}
   </div>
  </header>
 )
}

export default Header