"use client"

import { Button } from "@/components/ui/button"
import { BookingOption } from "@/components/booking/booking-option"
import { useState } from "react"

export default function BookingDemo() {
  const [openNew, setOpenNew] = useState(false)
  const [openUpdate, setOpenUpdate] = useState(false)

  return (
    <div className="container mx-auto p-8 space-y-8">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Booking Demo</h1>
        <div className="flex gap-4">
          <Button onClick={() => setOpenNew(true)}>New Booking</Button>
          <Button variant="outline" onClick={() => setOpenUpdate(true)}>
            Update Booking
          </Button>
        </div>
      </div>

      <BookingOption
        mode="new"
        title="Kiss of the Sea"
        open={openNew}
        onOpenChange={setOpenNew}
        onSubmit={(data) => {
          console.log("New booking:", data)
          setOpenNew(false)
        }}
      />

      <BookingOption
        mode="update"
        title="Update Booking"
        open={openUpdate}
        onOpenChange={setOpenUpdate}
        onSubmit={(data) => {
          console.log("Update booking:", data)
          setOpenUpdate(false)
        }}
        defaultValues={{
          date: new Date(),
          customerType: "everyone",
          ticketType: "regular",
          participants: {
            adult: 2,
            children: 1,
            senior: 0,
          },
        }}
      />
    </div>
  )
}

