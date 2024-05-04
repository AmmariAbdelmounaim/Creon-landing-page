import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"


const badgeVariants = cva(
  "inline-flex items-center rounded-full  px-1 py-0.5 text-xs uppercase font-bold ",
  {
    variants: {
      variant: {
        link: "align-top bg-black text-purple ",
        card:
          "bg-white text-black",
      },
    },
    defaultVariants: {
      variant: "link",
    },
  }
)

export interface BadgeProps
  extends 
    VariantProps<typeof badgeVariants> {}

function Badge({ variant }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }))}  >
    {variant === "card" ? "coming soon":"soon"}
  </div>
}

export { Badge, badgeVariants }
