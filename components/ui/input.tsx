import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "success" | "error"
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant = "default", ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-full px-6 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#adacb0]",
          // Base styles
          "border-2 bg-white",
          // Focus styles
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          // Variant styles
          {
            // Default variant
            "border-[#c9c9cc] focus:border-[#000000] focus-visible:ring-[#000000]": variant === "default",
            // Success variant
            "border-[#82ac5f] focus:border-[#82ac5f] focus-visible:ring-[#82ac5f]": variant === "success",
            // Error variant
            "border-[#ff0000] focus:border-[#ff0000] focus-visible:ring-[#ff0000]": variant === "error",
          },
          // Disabled state
          "disabled:border-[#ececed] disabled:bg-[#f8f8f8] disabled:text-[#adacb0] disabled:cursor-not-allowed",
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = "Input"

export { Input }

