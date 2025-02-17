import { cn } from "@/lib/utils"
import type { HTMLAttributes } from "react"

// Base text component
interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  as?: "p" | "span" | "div"
  variant?: "tiny" | "small" | "regular" | "large"
  weight?: "extralight" | "light" | "regular" | "medium" | "semibold" | "extrabold" | "black"
}

export function Text({ as: Component = "p", variant = "regular", weight = "regular", className, ...props }: TextProps) {
  return (
    <Component
      className={cn(
        // Size variants
        {
          "text-[10px]": variant === "tiny",
          "text-xs": variant === "small", // 12px
          "text-sm": variant === "regular", // 14px
          "text-base": variant === "large", // 16px
        },
        // Font weights
        {
          "font-extralight": weight === "extralight",
          "font-light": weight === "light",
          "font-normal": weight === "regular",
          "font-medium": weight === "medium",
          "font-semibold": weight === "semibold",
          "font-extrabold": weight === "extrabold",
          "font-black": weight === "black",
        },
        className,
      )}
      {...props}
    />
  )
}

// Heading components
interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  weight?: "extralight" | "light" | "regular" | "medium" | "semibold" | "extrabold" | "black"
}

export function Display({ className, weight = "regular", ...props }: HeadingProps) {
  return (
    <h1
      className={cn(
        "text-[70px] leading-tight tracking-tight",
        {
          "font-extralight": weight === "extralight",
          "font-light": weight === "light",
          "font-normal": weight === "regular",
          "font-medium": weight === "medium",
          "font-semibold": weight === "semibold",
          "font-extrabold": weight === "extrabold",
          "font-black": weight === "black",
        },
        className,
      )}
      {...props}
    />
  )
}

export function H1({ className, weight = "regular", ...props }: HeadingProps) {
  return (
    <h1
      className={cn(
        "text-[60px] leading-tight tracking-tight",
        {
          "font-extralight": weight === "extralight",
          "font-light": weight === "light",
          "font-normal": weight === "regular",
          "font-medium": weight === "medium",
          "font-semibold": weight === "semibold",
          "font-extrabold": weight === "extrabold",
          "font-black": weight === "black",
        },
        className,
      )}
      {...props}
    />
  )
}

export function H2({ className, weight = "regular", ...props }: HeadingProps) {
  return (
    <h2
      className={cn(
        "text-[48px] leading-tight tracking-tight",
        {
          "font-extralight": weight === "extralight",
          "font-light": weight === "light",
          "font-normal": weight === "regular",
          "font-medium": weight === "medium",
          "font-semibold": weight === "semibold",
          "font-extrabold": weight === "extrabold",
          "font-black": weight === "black",
        },
        className,
      )}
      {...props}
    />
  )
}

export function H3({ className, weight = "regular", ...props }: HeadingProps) {
  return (
    <h3
      className={cn(
        "text-[32px] leading-tight tracking-tight",
        {
          "font-extralight": weight === "extralight",
          "font-light": weight === "light",
          "font-normal": weight === "regular",
          "font-medium": weight === "medium",
          "font-semibold": weight === "semibold",
          "font-extrabold": weight === "extrabold",
          "font-black": weight === "black",
        },
        className,
      )}
      {...props}
    />
  )
}

export function H4({ className, weight = "regular", ...props }: HeadingProps) {
  return (
    <h4
      className={cn(
        "text-[32px] leading-tight tracking-tight",
        {
          "font-extralight": weight === "extralight",
          "font-light": weight === "light",
          "font-normal": weight === "regular",
          "font-medium": weight === "medium",
          "font-semibold": weight === "semibold",
          "font-extrabold": weight === "extrabold",
          "font-black": weight === "black",
        },
        className,
      )}
      {...props}
    />
  )
}

export function H5({ className, weight = "regular", ...props }: HeadingProps) {
  return (
    <h5
      className={cn(
        "text-[24px] leading-tight tracking-tight",
        {
          "font-extralight": weight === "extralight",
          "font-light": weight === "light",
          "font-normal": weight === "regular",
          "font-medium": weight === "medium",
          "font-semibold": weight === "semibold",
          "font-extrabold": weight === "extrabold",
          "font-black": weight === "black",
        },
        className,
      )}
      {...props}
    />
  )
}

export function H6({ className, weight = "regular", ...props }: HeadingProps) {
  return (
    <h6
      className={cn(
        "text-[20px] leading-tight tracking-tight",
        {
          "font-extralight": weight === "extralight",
          "font-light": weight === "light",
          "font-normal": weight === "regular",
          "font-medium": weight === "medium",
          "font-semibold": weight === "semibold",
          "font-extrabold": weight === "extrabold",
          "font-black": weight === "black",
        },
        className,
      )}
      {...props}
    />
  )
}

