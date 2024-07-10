import { ReactNode } from "react"

type SectionProps = {
 title?: string
 subtitle?: string
 children: ReactNode
}

const Section = ({ title, subtitle, children }: SectionProps) => {
 return (
  <section className="block py-24 max-w-[1200px] mx-auto">
   {title && <h2 className="text-4xl lg:text-5xl text-center text-dark-blue tracking-wide mb-2">{title}</h2>}
   {subtitle && <h3 className="text-xl lg:text-2xl text-center text-black tracking-wide mb-12">{subtitle}</h3>}
   {children}
  </section>
 )
}

export default Section