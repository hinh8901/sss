"use client"

import type * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"
import { cn } from "@/lib/utils"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-4 bg-white rounded-2xl shadow-lg", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-6",
        caption: "relative flex items-center justify-center",
        caption_label: "text-base font-medium",
        nav: "flex items-center gap-1",
        nav_button: cn(
          "inline-flex items-center justify-center rounded-full p-1.5 opacity-75 hover:opacity-100 hover:bg-transparent",
        ),
        nav_button_previous: "absolute left-1.5",
        nav_button_next: "absolute right-1.5",
        table: "w-full border-collapse",
        head_row: "flex w-full",
        head_cell: "w-10 h-10 flex items-center justify-center text-sm font-light text-[#adacb0]",
        row: "flex w-full",
        cell: "w-10 h-10 flex items-center justify-center p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          "w-10 h-10 p-0 font-normal aria-selected:opacity-100 hover:bg-[#fff5f0] rounded-full transition-colors",
        ),
        day_range_end: "day-range-end",
        day_selected: "bg-[#FF6B34] text-white hover:bg-[#FF6B34] hover:text-white focus:bg-[#FF6B34] focus:text-white",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "text-[#adacb0] opacity-50",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }

