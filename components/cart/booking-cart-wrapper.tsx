"use client"

import { useState } from "react"
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { BookingCart } from "./booking-cart"
import { useMediaQuery } from "@/hooks/use-media-query"

export function BookingCartWrapper() {
  const [open, setOpen] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 1024px)")

  if (isDesktop) {
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#e92127] text-xs text-white">
              3
            </span>
          </Button>
        </DrawerTrigger>
        <DrawerContent side="right" className="h-full w-[420px] p-0 fixed top-0 right-0 bottom-0 border-l shadow-xl">
          <BookingCart />
        </DrawerContent>
      </Drawer>
    )
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#e92127] text-xs text-white">
            3
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="h-full w-full max-w-full p-0 m-0">
        <BookingCart />
      </DialogContent>
    </Dialog>
  )
}

