"use client"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { format, addDays } from "date-fns"
import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

interface PickAvailabilityDayProps {
  selectedDate: Date | undefined
  onDateChange: (date: Date | undefined) => void
  className?: string
}

export function PickAvailabilityDay({ selectedDate, onDateChange, className }: PickAvailabilityDayProps) {
  // Generate next 6 days
  const dates = Array.from({ length: 6 }, (_, i) => addDays(new Date(), i))
  const [calendarOpen, setCalendarOpen] = useState(false)

  return (
    <div className={cn("flex items-center gap-2 w-full", className)}>
      <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
        <PopoverTrigger asChild>
          <button className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF5F0] border-2 border-[#FF6B34] text-[#FF6B34] hover:bg-[#FFF5F0]/90">
            <CalendarIcon className="h-6 w-6" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={(date) => {
              onDateChange(date)
              setCalendarOpen(false)
            }}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      <div className="flex overflow-x-auto space-x-2 flex-grow">
        {dates.map((date, i) => (
          <button
            key={i}
            onClick={() => onDateChange(date)}
            className={cn(
              "inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0",
              selectedDate?.getDate() === date.getDate()
                ? "bg-[#ff6b34] text-white hover:bg-[#ff6b34]/90"
                : "bg-white text-[#ff6b34] hover:bg-white/90",
            )}
          >
            {format(date, "MMM d")}
          </button>
        ))}
      </div>
    </div>
  )
}

