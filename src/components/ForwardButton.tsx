import { Button } from "./ui/button"
import { ChevronRight } from "./Icons"
import Link from "next/link"

type ForwardButtonProps = {
 label: string
 href: string
}

export function ForwardButton({
 label,
 href
}: ForwardButtonProps) {
 return (
  <div className="flex justify-center mt-16">
   <Button
    type="button"
    variant="outline"
    size="lg"
    asChild
    className="h-12 border border-slate-500 text-slate-500 bg-white cursor-pointer shadow-none hover:bg-slate-100 hover:text-slate-500 text-sm transition-colors px-8 has-[>svg]:px-8"
   >
    <Link href={href} aria-label={label}>
     {label}
     <ChevronRight className="size-6" />
    </Link>
   </Button>
  </div>
 )
}