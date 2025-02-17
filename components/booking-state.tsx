"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export function BookingState() {
  const [destination, setDestination] = useState("phu-quoc")
  const [date, setDate] = useState("2025-01-01")
  const [guests, setGuests] = useState("2-1")
  const [isFlexible, setIsFlexible] = useState(false)

  return (
    <div className="w-full sm:max-w-[579px] mx-auto bg-[#ffffff] rounded-t-xl sm:rounded-xl shadow-lg">
      <div className="p-6 space-y-6">
        <div className="space-y-4 sm:space-y-6">
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            {/* Destination Select */}
            <div className="w-full sm:w-1/3 space-y-1.5">
              <Label className="text-sm font-medium text-[#adacb0]">Where to?</Label>
              <Select value={destination} onValueChange={setDestination}>
                <SelectTrigger className="h-auto w-full rounded-lg bg-[#f8f8f8] px-3 py-2">
                  <SelectValue placeholder="Select destination" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="phu-quoc">Phu Quoc</SelectItem>
                  <SelectItem value="da-nang">Da Nang</SelectItem>
                  <SelectItem value="nha-trang">Nha Trang</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Date Select */}
            <div className="w-full sm:w-1/3 space-y-1.5">
              <Label className="text-sm font-medium text-[#adacb0]">When's your trip?</Label>
              <Select value={date} onValueChange={setDate}>
                <SelectTrigger className="h-auto w-full rounded-lg bg-[#f8f8f8] px-3 py-2">
                  <SelectValue placeholder="Select date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2025-01-01">01 Jan 2025</SelectItem>
                  <SelectItem value="2025-01-02">02 Jan 2025</SelectItem>
                  <SelectItem value="2025-01-03">03 Jan 2025</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Guests Select */}
            <div className="w-full sm:w-1/3 space-y-1.5">
              <Label className="text-sm font-medium text-[#adacb0]">Who's coming?</Label>
              <Select value={guests} onValueChange={setGuests}>
                <SelectTrigger className="h-auto w-full rounded-lg bg-[#f8f8f8] px-3 py-2">
                  <SelectValue placeholder="Select guests" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2-1">2 adults, 1 children</SelectItem>
                  <SelectItem value="2-2">2 adults, 2 children</SelectItem>
                  <SelectItem value="3-1">3 adults, 1 children</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="flexible"
                checked={isFlexible}
                onCheckedChange={(checked) => setIsFlexible(checked as boolean)}
                className="h-5 w-5 rounded-md border-transparent bg-[#f8f8f8] text-[#aee67f] data-[state=checked]:bg-[#aee67f] data-[state=checked]:text-white"
              />
              <Label
                htmlFor="flexible"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Show me flexible options
              </Label>
            </div>
            <Button className="w-full sm:w-auto bg-[#aee67f] text-black hover:bg-[#aee67f]/90">View tickets</Button>
          </div>
        </div>
      </div>
    </div>
  )
}