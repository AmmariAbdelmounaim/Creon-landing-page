import { HTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "flex items-center rounded-full px-2 text-xs uppercase font-bold ",
  {
    variants: {
      variant: {
        link: " -translate-y-1/4 leading-[0rem] bg-black text-purple ",
        card: "bg-white text-black py-0.5 absolute right-[1.88rem] top-0 translate-y-[-50%]",
      },
    },
    defaultVariants: {
      variant: "link",
    },
  }
)

export interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {variant === "card" ? "coming soon" : "soon"}
    </div>
  )
}

export { Badge, badgeVariants }
