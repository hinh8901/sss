"use client"

import { useRef } from "react"
import { useState } from "react"
import type * as React from "react"
import { Minus, Plus } from "lucide-react"
import { cn } from "@/lib/utils"

interface QuantityPickerProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  onValueChange: (value: number) => void
  min?: number
  max?: number
  step?: number
  variant?: "primary" | "secondary"
  disabled?: boolean
}

export function QuantityPicker({
  value,
  onValueChange,
  min = 0,
  max = 99,
  step = 1,
  variant = "primary",
  disabled = false,
  className,
  ...props
}: QuantityPickerProps) {
  const [showSlider, setShowSlider] = useState(false)
  const [sliderValue, setSliderValue] = useState(value)
  const longPressTimerRef = useRef<NodeJS.Timeout | null>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  const increment = () => {
    if (disabled) return
    const newValue = Math.min(value + step, max)
    onValueChange(newValue)
  }

  const decrement = () => {
    if (disabled) return
    const newValue = Math.max(value - step, min)
    onValueChange(newValue)
  }

  const handleLongPressStart = () => {
    if (disabled) return
    longPressTimerRef.current = setTimeout(() => {
      setShowSlider(true)
    }, 1000)
  }

  const handleLongPressEnd = () => {
    if (longPressTimerRef.current) {
      clearTimeout(longPressTimerRef.current)
    }
  }

  const handleSliderChange = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return

    const rect = sliderRef.current.getBoundingClientRect()
    const height = rect.height
    const y = e.type.startsWith("touch")
      ? (e as React.TouchEvent<HTMLDivElement>).touches[0].clientY - rect.top
      : (e as React.MouseEvent<HTMLDivElement>).nativeEvent.offsetY
    const percentage = 1 - y / height
    const newValue = Math.round(percentage * (max - min) + min)
    setSliderValue(newValue)
    onValueChange(newValue)
  }

  const buttonStyles = cn(
    "flex h-8 w-8 items-center justify-center rounded-full transition-colors",
    "hover:bg-opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-50",
    {
      "bg-[#FF6B34] text-white": variant === "primary",
      "bg-[#ff6b34] text-white": variant === "secondary",
      "bg-[#ececed] text-muted-foreground": disabled,
    },
  )

  return (
    <div className={cn("flex items-center gap-3 relative", className)} {...props}>
      <button
        type="button"
        onClick={decrement}
        disabled={disabled || value <= min}
        className={buttonStyles}
        aria-label="Decrease quantity"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="min-w-[24px] text-center text-base font-medium">{value}</span>
      <button
        type="button"
        onClick={increment}
        onMouseDown={handleLongPressStart}
        onMouseUp={handleLongPressEnd}
        onMouseLeave={handleLongPressEnd}
        onTouchStart={handleLongPressStart}
        onTouchEnd={handleLongPressEnd}
        disabled={disabled || value >= max}
        className={buttonStyles}
        aria-label="Increase quantity"
      >
        <Plus className="h-4 w-4" />
      </button>
      {showSlider && (
        <div
          ref={sliderRef}
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-2 h-32 bg-gray-200 rounded-full mb-2"
          onMouseDown={handleSliderChange}
          onMouseMove={(e) => e.buttons === 1 && handleSliderChange(e)}
          onTouchStart={handleSliderChange}
          onTouchMove={handleSliderChange}
        >
          <div
            className={cn("w-full rounded-full absolute bottom-0", {
              "bg-[#FF6B34]": variant === "primary",
              "bg-[#ff6b34]": variant === "secondary",
            })}
            style={{ height: `${((sliderValue - min) / (max - min)) * 100}%` }}
          />
          <div
            className={cn("w-4 h-4 rounded-full absolute left-1/2 transform -translate-x-1/2", {
              "bg-[#FF6B34]": variant === "primary",
              "bg-[#ff6b34]": variant === "secondary",
            })}
            style={{ bottom: `calc(${((sliderValue - min) / (max - min)) * 100}% - 8px)` }}
          />
        </div>
      )}
    </div>
  )
}

