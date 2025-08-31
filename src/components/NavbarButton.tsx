import { ButtonHTMLAttributes } from "react"
import { type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "./ui/button"
import { SheetClose } from "./ui/sheet"

interface NavbarButtonProps
 extends ButtonHTMLAttributes<HTMLButtonElement>,
 VariantProps<typeof buttonVariants> {
  asChild?: boolean
 }

export function NavbarButton({
 className,
 children,
 ...props
}: NavbarButtonProps) {
 return (
  <Button
   type="button"
   variant="ghost"
   className={cn("justify-start gap-2 cursor-pointer", className)}
   {...props}
  >
   <span>{children}</span>
  </Button>
 )
}

export function NavbarSheetButton(props: NavbarButtonProps) {
 return (
  <SheetClose asChild>
   <NavbarButton {...props} />
  </SheetClose>
 )
}