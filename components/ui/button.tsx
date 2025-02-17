import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Sparkle, ArrowRight, type LucideIcon } from "lucide-react"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Primary (Green) variants
        primary: "bg-primary text-white hover:opacity-90",
        "primary-ghost": "bg-muted text-primary hover:opacity-90",
        "primary-outline": "border-2 border-primary text-primary bg-transparent hover:opacity-90",
        "primary-text": "text-primary hover:opacity-90",

        // Secondary (Red) variants
        secondary: "bg-secondary text-white hover:opacity-90",
        "secondary-ghost": "bg-muted text-secondary hover:opacity-90",
        "secondary-outline": "border-2 border-secondary text-secondary bg-transparent hover:opacity-90",
        "secondary-text": "text-secondary hover:opacity-90",

        // Destructive (Red) variants
        destructive: "bg-destructive text-white hover:opacity-90",
        "destructive-ghost": "bg-muted text-destructive hover:opacity-90",
        "destructive-outline": "border-2 border-destructive text-destructive bg-transparent hover:opacity-90",
        "destructive-text": "text-destructive hover:opacity-90",

        // Disabled variants (used when disabled prop is true)
        disabled: "bg-[#ececed] text-[#adacb0]",
        "disabled-ghost": "bg-muted text-[#adacb0]",
        "disabled-outline": "border-2 border-[#ececed] text-[#adacb0] bg-transparent",
        "disabled-text": "text-[#adacb0]",
      },
      size: {
        xs: "h-6 px-3 text-xs",
        sm: "h-8 px-4",
        md: "h-10 px-5",
        lg: "h-12 px-6",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  leftIcon?: boolean
  rightIcon?: boolean
  icon?: LucideIcon
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, leftIcon, rightIcon, icon: Icon, children, disabled, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button"

    // Determine the actual variant based on disabled state
    const actualVariant = disabled
      ? variant?.startsWith("primary")
        ? "disabled"
        : variant?.startsWith("secondary")
          ? "disabled"
          : variant?.includes("ghost")
            ? "disabled-ghost"
            : variant?.includes("outline")
              ? "disabled-outline"
              : variant?.includes("text")
                ? "disabled-text"
                : "disabled"
      : variant

    return (
      <Comp
        className={cn(buttonVariants({ variant: actualVariant, size, className }))}
        ref={ref}
        disabled={disabled}
        {...props}
      >
        {leftIcon && <Sparkle className="h-4 w-4" />}
        {Icon && <Icon className="h-4 w-4" />}
        {children}
        {rightIcon && <ArrowRight className="h-4 w-4" />}
      </Comp>
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
