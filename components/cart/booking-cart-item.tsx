"use client"

import { MapPin } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { useState, useEffect } from "react"
import { BookingCartItemDetail } from "./booking-cart-item-detail"

interface CartItem {
  id: string
  location: string
  name: string
  time: string
  date: string
  section?: string
  image: string
  price: number
  originalPrice?: number
  discount?: number
  adults: number
  children: number
  description?: string
}

interface BookingCartItemProps {
  item: CartItem
  isChecked: boolean
  onItemCheck: (itemId: string, isChecked: boolean) => void
  onLocationCheck: (location: string, isChecked: boolean) => void
  disabled?: boolean
}

export function BookingCartItem({
  item,
  isChecked,
  onItemCheck,
  onLocationCheck,
  disabled = false,
}: BookingCartItemProps) {
  const [isLocationChecked, setIsLocationChecked] = useState(false)

  useEffect(() => {
    setIsLocationChecked(isChecked)
  }, [isChecked])

  const handleLocationCheck = (checked: boolean) => {
    if (!disabled) {
      setIsLocationChecked(checked)
      onLocationCheck(item.location, checked)
    }
  }

  const handleItemCheck = (checked: boolean) => {
    if (!disabled) {
      onItemCheck(item.id, checked)
    }
  }

  return (
    <div className={`mb-8 last:mb-0 ${disabled ? "opacity-80" : ""}`}>
      {/* Location Header */}
      <div className="flex items-center gap-3 pb-4 border-b border-[#F1F1F1]">
        <Checkbox
          id={`location-${item.id}`}
          className={`h-5 w-5 ${
            disabled
              ? "border-[#ECECED] text-[#ECECED]"
              : "border-[#F1F1F1] data-[state=checked]:bg-[#ff6b34] data-[state=checked]:text-white"
          }`}
          checked={isLocationChecked}
          onCheckedChange={handleLocationCheck}
          disabled={disabled}
        />
        <MapPin className={`h-5 w-5 ${disabled ? "text-[#ECECED]" : "text-[#666666]"}`} />
        <label
          htmlFor={`location-${item.id}`}
          className={`text-sm font-medium leading-none ${
            disabled ? "text-[#ECECED]" : "peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          }`}
        >
          {item.location}
        </label>
      </div>

      <BookingCartItemDetail item={item} isChecked={isChecked} onItemCheck={handleItemCheck} />
    </div>
  )
}

