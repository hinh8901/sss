"use client"

import * as React from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { PickAvailabilityDay } from "./pick-availability-day"
import { WhoComing } from "./who-coming"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface BookingOptionProps {
  mode: "new" | "update"
  title: string
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit: (data: BookingData) => void
  defaultValues?: Partial<BookingData>
}

interface BookingData {
  date: Date
  customerType: "everyone" | "out-of-province" | "intra-province"
  ticketType: "regular" | "vip"
  participants: {
    adult: number
    children: number
    senior: number
  }
}

export function BookingOption({ mode, title, open, onOpenChange, onSubmit, defaultValues }: BookingOptionProps) {
  const [date, setDate] = React.useState<Date | undefined>(defaultValues?.date)
  const [customerType, setCustomerType] = React.useState<BookingData["customerType"]>(
    defaultValues?.customerType || "everyone",
  )
  const [ticketType, setTicketType] = React.useState<BookingData["ticketType"]>(defaultValues?.ticketType || "regular")
  const [participants, setParticipants] = React.useState({
    adult: defaultValues?.participants?.adult || 0,
    children: defaultValues?.participants?.children || 0,
    senior: defaultValues?.participants?.senior || 0,
  })

  const handleParticipantChange = (type: keyof typeof participants, count: number) => {
    setParticipants((prev) => ({ ...prev, [type]: count }))
  }

  const totalPrice = React.useMemo(() => {
    const prices = {
      adult: 570000,
      children: 285000,
      senior: 285000,
    }
    return Object.entries(participants).reduce(
      (total, [type, count]) => total + prices[type as keyof typeof prices] * count,
      0,
    )
  }, [participants])

  const handleSubmit = () => {
    if (!date) return
    onSubmit({
      date,
      customerType,
      ticketType,
      participants,
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full max-w-[600px] p-0 flex flex-col">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center gap-3 border-b bg-white p-6">
          <button onClick={() => onOpenChange(false)} className="text-[#11170d] hover:opacity-70">
            <X className="h-5 w-5" />
          </button>
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>

        {/* Content */}
        <div className="flex-grow flex flex-col justify-between p-6">
          <div className="space-y-8">
            {/* Section 1: Availability */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Check availability</h3>
              <PickAvailabilityDay selectedDate={date} onDateChange={setDate} className="w-full" />
            </div>

            {/* Section 2: Customer Type */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Customer Type</h3>
              <RadioGroup
                value={customerType}
                onValueChange={(value) => setCustomerType(value as BookingData["customerType"])}
                className="flex flex-wrap gap-3"
              >
                <div className="flex-1">
                  <RadioGroupItem value="everyone" id="everyone" className="peer hidden" aria-label="For everyone" />
                  <Label
                    htmlFor="everyone"
                    className="flex h-12 cursor-pointer items-center justify-center rounded-full border-2 border-[#ececed] text-sm peer-aria-checked:border-[#ff6b34] peer-aria-checked:text-[#ff6b34]"
                  >
                    For everyone
                  </Label>
                </div>
                <div className="flex-1">
                  <RadioGroupItem
                    value="out-of-province"
                    id="out-of-province"
                    className="peer hidden"
                    aria-label="Out-of-province"
                  />
                  <Label
                    htmlFor="out-of-province"
                    className="flex h-12 cursor-pointer items-center justify-center rounded-full border-2 border-[#ececed] text-sm peer-aria-checked:border-[#ff6b34] peer-aria-checked:text-[#ff6b34]"
                  >
                    Out-of-province
                  </Label>
                </div>
                <div className="flex-1">
                  <RadioGroupItem
                    value="intra-province"
                    id="intra-province"
                    className="peer hidden"
                    aria-label="Intra-province"
                  />
                  <Label
                    htmlFor="intra-province"
                    className="flex h-12 cursor-pointer items-center justify-center rounded-full border-2 border-[#ececed] text-sm peer-aria-checked:border-[#ff6b34] peer-aria-checked:text-[#ff6b34]"
                  >
                    Intra-province
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Section 3: Ticket Type */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Ticket Type</h3>
              <RadioGroup
                value={ticketType}
                onValueChange={(value) => setTicketType(value as BookingData["ticketType"])}
                className="flex gap-3"
              >
                <div className="flex-1">
                  <RadioGroupItem value="regular" id="regular" className="peer hidden" aria-label="Regular" />
                  <Label
                    htmlFor="regular"
                    className="flex h-12 cursor-pointer items-center justify-center rounded-full border-2 border-[#ececed] text-sm peer-aria-checked:border-[#ff6b34] peer-aria-checked:text-[#ff6b34]"
                  >
                    Regular
                  </Label>
                </div>
                <div className="flex-1">
                  <RadioGroupItem value="vip" id="vip" className="peer hidden" aria-label="VIP" />
                  <Label
                    htmlFor="vip"
                    className="flex h-12 cursor-pointer items-center justify-center rounded-full border-2 border-[#ececed] text-sm peer-aria-checked:border-[#ff6b34] peer-aria-checked:text-[#ff6b34]"
                  >
                    VIP
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Section 4: Who's Coming */}
            <WhoComing
              participants={[
                {
                  type: "adult",
                  count: participants.adult,
                  price: 570000,
                  description: "140cm height above",
                },
                {
                  type: "children",
                  count: participants.children,
                  price: 285000,
                  description: "140cm or below",
                },
                {
                  type: "senior",
                  count: participants.senior,
                  price: 285000,
                  description: "60 years old or older",
                },
              ]}
              onParticipantChange={handleParticipantChange}
              className="w-full"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 space-y-4 border-t bg-white p-6">
          <div className="flex items-center gap-2 text-sm text-[#adacb0] mb-4">
            <span className="inline-block h-1 w-1 rounded-full bg-current" />
            Minimum 2 tickets required per booking.
          </div>
          <div>
            <div className="mb-1 text-lg font-medium">Total price</div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold">₫{totalPrice.toLocaleString()}</span>
              {totalPrice > 0 && (
                <>
                  <span className="text-sm text-[#adacb0] line-through">₫{(totalPrice * 1.05).toLocaleString()}</span>
                  <span className="text-sm text-[#f53535]">-5%</span>
                </>
              )}
            </div>
          </div>

          <Button
            className="w-full bg-[#ff6b34] text-white hover:bg-[#ff6b34]/90"
            onClick={handleSubmit}
            disabled={!date || Object.values(participants).reduce((a, b) => a + b, 0) === 0}
          >
            {mode === "update" ? "Update" : "Book now"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

