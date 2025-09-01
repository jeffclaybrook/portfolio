import { Button } from "./ui/button"
import { ChevronLeft } from "./Icons"
import Link from "next/link"

export function BackButton() {
 return (
  <div className="flex justify-center mt-16">
   <Button
    type="button"
    variant="outline"
    size="lg"
    asChild
   >
    <Link href={"/"} aria-label="Back home">
     <ChevronLeft className="size-6" />
     Back Home
    </Link>
   </Button>
  </div>
 )
}