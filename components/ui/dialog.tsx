"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X, Info } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const dialogVariants = cva("fixed inset-0 z-50 flex items-start justify-center sm:items-center", {
  variants: {
    variant: {
      default: "p-4 sm:p-6",
      toast: "p-4",
      filter: "p-0",
      form: "p-0",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

const dialogContentVariants = cva("relative w-full rounded-2xl bg-white shadow-lg duration-200", {
  variants: {
    variant: {
      default: "sm:max-w-lg",
      toast: "max-w-md",
      filter: "h-full sm:h-auto sm:max-w-md",
      form: "h-full sm:h-auto sm:max-w-xl",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

interface DialogContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof dialogVariants> {
  showClose?: boolean
  showIcon?: boolean
  closePosition?: "left" | "right"
}

const DialogContent = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Content>, DialogContentProps>(
  ({ className, children, variant, showClose = true, showIcon, closePosition = "right", ...props }, ref) => (
    <DialogPortal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
      <div className={dialogVariants({ variant })}>
        <DialogPrimitive.Content
          ref={ref}
          className={cn(
            dialogContentVariants({ variant }),
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-top-[2%] data-[state=open]:slide-in-from-top-[2%]",
            className,
          )}
          {...props}
        >
          {children}
          {showClose && closePosition === "right" && (
            <DialogClose className="absolute right-4 top-4 rounded-full p-2 opacity-70 hover:opacity-100">
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </DialogClose>
          )}
        </DialogPrimitive.Content>
      </div>
    </DialogPortal>
  ),
)
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  showIcon,
  showClose,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  showIcon?: boolean
  showClose?: boolean
}) => (
  <div className={cn("flex items-center gap-3 p-6", className)} {...props}>
    {showClose && (
      <DialogClose className="rounded-full p-2 opacity-70 hover:opacity-100">
        <X className="h-5 w-5" />
      </DialogClose>
    )}
    {showIcon && <Info className="h-6 w-6 flex-shrink-0" />}
    <div className="space-y-1.5">{props.children}</div>
  </div>
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title ref={ref} className={cn("text-lg font-semibold leading-none", className)} {...props} />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description ref={ref} className={cn("text-sm text-[#696960]", className)} {...props} />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}

