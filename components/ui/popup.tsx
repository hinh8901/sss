"use client"

import * as React from "react"
import { X } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const popupVariants = cva("fixed inset-x-0 bottom-0 z-50 flex items-center justify-between p-4 border-t shadow-lg", {
  variants: {
    variant: {
      default: "bg-background border-border",
      success: "bg-[#E7F6E7] border-[#82AC5F] text-[#2C5E2E]",
      warning: "bg-[#FFF5E6] border-[#FFA500] text-[#996300]",
      error: "bg-[#FFEBEE] border-[#F53535] text-[#C62828]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface PopupProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof popupVariants> {
  open?: boolean
  onClose?: () => void
  closeButton?: boolean
}

const Popup = React.forwardRef<HTMLDivElement, PopupProps>(
  ({ className, variant, open = true, onClose, closeButton = true, children, ...props }, ref) => {
    if (!open) return null

    return (
      <div className={cn(popupVariants({ variant }), className)} ref={ref} {...props}>
        <div className="flex items-center space-x-4">
          {closeButton && (
            <button
              onClick={onClose}
              className="text-current hover:text-current/80 transition-colors"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          )}
          <div className="flex-1">{children}</div>
        </div>
      </div>
    )
  },
)
Popup.displayName = "Popup"

export { Popup, popupVariants }

