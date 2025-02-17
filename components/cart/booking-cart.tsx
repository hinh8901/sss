"use client"

import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BookingCartItem } from "./booking-cart-item"
import { useState } from "react"

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

export function BookingCart() {
  const [items] = useState<CartItem[]>([
    {
      id: "1",
      location: "Phú Quốc",
      name: "Kiss of the Sea",
      time: "20:30 - 21:30",
      date: "02/01/2025",
      section: "Khán đài A",
      image: "/placeholder.svg?height=80&width=80",
      price: 570000,
      originalPrice: 600000,
      discount: 5,
      adults: 2,
      children: 1,
    },
    {
      id: "2",
      location: "Phú Quốc",
      name: "Entrance Ticket",
      time: "",
      date: "",
      image: "/placeholder.svg?height=80&width=80",
      price: 25000,
      adults: 2,
      children: 1,
      description:
        "To get in the Cable Station, you need to go through entrance gate. Ticket cost ₫10,000 for adult; ₫5,000 for children; ₫10,000 for senior.",
    },
  ])

  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({})

  const handleItemCheck = (itemId: string, isChecked: boolean) => {
    setCheckedItems((prev) => ({ ...prev, [itemId]: isChecked }))
  }

  const handleLocationCheck = (location: string, isChecked: boolean) => {
    const newCheckedItems = { ...checkedItems }
    items.forEach((item) => {
      if (item.location === location) {
        newCheckedItems[item.id] = isChecked
      }
    })
    setCheckedItems(newCheckedItems)
  }

  const totalPrice = items.reduce((sum, item) => {
    return checkedItems[item.id] ? sum + item.price : sum
  }, 0)

  const checkedItemsCount = Object.values(checkedItems).filter(Boolean).length

  return (
    <div className="flex flex-col h-full w-full max-w-[420px] bg-white">
      {/* Header */}
      <div className="flex items-center gap-2 p-4 border-b">
        <Button variant="ghost" size="icon" className="h-6 w-6">
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-lg font-medium">Giỏ hàng</h1>
      </div>

      {/* Cart Items */}
      <ScrollArea className="flex-1">
        <div className="p-4">
          {items.map((item, index) => (
            <BookingCartItem
              key={item.id}
              item={item}
              isChecked={checkedItems[item.id] || false}
              onItemCheck={handleItemCheck}
              onLocationCheck={handleLocationCheck}
            />
          ))}
        </div>
      </ScrollArea>

      {/* Footer */}
      <div className="border-t p-4 space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-sm text-black mb-1">Total price</div>
            <div className="text-2xl font-bold">₫{totalPrice.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">{checkedItemsCount} item selected</div>
          </div>
          <Button className="px-8 bg-[#ff6b34] hover:bg-[#ff6b34]/90 text-white rounded-full">Checkout</Button>
        </div>
      </div>
    </div>
  )
}

