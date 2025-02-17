"use client"

import React, { ReactNode, useEffect, useState } from "react"
import { format } from "date-fns"
import clsx from "clsx"

import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface CustomDatePickerProps {
  label?: ReactNode
  placeholder?: ReactNode
  value?: Date
  onChange?: (value?: Date) => void
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = (props) => {
  const { label, placeholder, value, onChange } = props

  const [selected, setSelected] = useState(value)
  const [isOpenPopup, setIsOpenPopup] = useState(false)

  const onValueChange = (value?: Date) => {
    onChange?.(value)
    setSelected(value)
    setIsOpenPopup(false)
  }

  useEffect(() => {
    setSelected(value)
  }, [value])

  return (
    <Popover open={isOpenPopup} onOpenChange={setIsOpenPopup}>
      <PopoverTrigger asChild>
        <div
          className={clsx(
            "bg-[#F8F8F8] rounded-lg",
          )}
        >
          {label && (
            <div
              className="pt-[10px] text-xs font-medium text-[#adacb0] px-3"
            >{label}</div>
          )}
          <div
            className="h-[34px] w-full px-3 font-medium text-base"
          >{selected ? format(selected, 'dd MMM yyyy') : placeholder}</div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={selected}
          onSelect={onValueChange}
        />
      </PopoverContent>
    </Popover>
  )
}

export default CustomDatePicker