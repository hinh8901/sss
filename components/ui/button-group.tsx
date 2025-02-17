import * as React from "react"
import { cn } from "@/lib/utils"
import type { ButtonProps } from "./button"

interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: ButtonProps["variant"]
  size?: ButtonProps["size"]
  disabled?: boolean
  fullWidth?: boolean
}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, variant = "primary", size = "md", disabled = false, fullWidth = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex rounded-full",
          {
            "w-full": fullWidth,
            // Border styles for outline variants
            "border-2": variant?.includes("outline"),
            "border-[#FF6B34]": variant?.includes("primary") && variant?.includes("outline"),
            "border-[#f53535]": variant?.includes("secondary") && variant?.includes("outline"),
            "border-[#ececed]": disabled && variant?.includes("outline"),
          },
          className,
        )}
        {...props}
      >
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) return null

          return React.cloneElement(child as React.ReactElement<ButtonProps>, {
            variant,
            size,
            disabled,
            className: cn(
              "rounded-none first:rounded-l-full last:rounded-r-full relative",
              // Remove border for outline variant as it's handled by the container
              variant?.includes("outline") && "border-0",
              // Add divider styles
              index !== 0 &&
                cn("before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-1/2", {
                  "before:border-l before:border-black/10": variant?.includes("primary"),
                  "before:border-l before:border-white/10": variant?.includes("secondary"),
                  "before:border-l before:border-[#FF6B34]": variant?.includes("primary-outline"),
                  "before:border-l before:border-[#f53535]": variant?.includes("secondary-outline"),
                  "before:border-l before:border-[#ececed]": disabled,
                }),
            ),
          })
        })}
      </div>
    )
  },
)
ButtonGroup.displayName = "ButtonGroup"

export { ButtonGroup }

