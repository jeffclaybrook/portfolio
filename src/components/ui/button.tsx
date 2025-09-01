import { ComponentProps } from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-slate-700 hover:bg-slate-900/90 text-slate-200 transition-colors h-12 px-6 lg:px-8 has-[>svg]:px-6 lg:has-[>svg]:px-8 cursor-pointer gap-1.5 lg:gap-2",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border border-slate-500 text-slate-500 bg-background cursor-pointer shadow-none hover:bg-slate-100 hover:text-slate-500 text-sm",
        secondary: "bg-slate-50 text-slate-700 hover:bg-slate-200 gap-1.5 lg:gap-2 h-12",
        ghost: "text-[#475569] hover:bg-accent hover:text-accent-foreground cursor-pointer",
        link: "text-slate-300 text-lg rounded-none focus:text-slate-50 bg-transparent focus:bg-transparent hover:bg-transparent hover:text-slate-50 active:bg-transparent"
      },
      size: {
        default: "h-9 px-2 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-12 rounded-md px-6 has-[>svg]:px-6 lg:px-8 lg:has-[>svg]:px-8",
        icon: "size-10 rounded-full"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }