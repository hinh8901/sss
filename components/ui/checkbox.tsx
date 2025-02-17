"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check, Minus } from "lucide-react"

import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
    variant?: "primary" | "secondary"
    shape?: "square" | "round"
  }
>(({ className, variant = "primary", shape = "square", ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-5 w-5 shrink-0 border-2 border-[#F1F1F1] ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      // Shape variants
      shape === "square" ? "rounded-[4px]" : "rounded-full",
      // Color variants for unchecked state
      "data-[state=unchecked]:bg-white hover:data-[state=unchecked]:bg-[#F8F8F8]",
      // Color variants for checked state
      variant === "primary"
        ? "data-[state=checked]:bg-[#aee67f] data-[state=checked]:border-[#aee67f]"
        : "data-[state=checked]:bg-[#ff6b34] data-[state=checked]:border-[#ff6b34]",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-white")}>
      {props["aria-checked"] === "mixed" ? <Minus className="h-3.5 w-3.5" /> : <Check className="h-3.5 w-3.5" />}
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }

