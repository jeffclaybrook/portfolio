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
   >
    <Link href={href} aria-label={label}>
     {label}
     <ChevronRight className="size-6" />
    </Link>
   </Button>
  </div>
 )
}