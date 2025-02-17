import clsx from "clsx"
import { ReactNode } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

import { WhoComing, WhoComingProps } from "@/components/booking/who-coming"

interface WhoComingPropsSelect extends WhoComingProps {
  label?: ReactNode
  placeholder?: ReactNode
}

const WhoComingSelect: React.FC<WhoComingPropsSelect> = (props) => {
  const { label, placeholder, participants, onParticipantChange } = props

  const displayText = () => {
    if (!participants || !participants.length) return ''

    return participants.reduce((textDisplay, item, idx) => {
      if (idx < participants.length - 1) return textDisplay += `${item.count} ${item.type}, `
      return textDisplay += `${item.count} ${item.type}`
    }, '')
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div
          className={clsx(
            "bg-[#F8F8F8] rounded-lg min-h-[60px]",
          )}
        >
          {label && (
            <div
              className="pt-[10px] text-xs font-medium text-[#adacb0] px-3"
            >{label}</div>
          )}
          <div
            className="mb-[10px] w-full px-3 font-medium text-base line-clamp-1"
          >{displayText() || placeholder}</div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="p-4 w-[calc(100vw_-_32px)]">
        <WhoComing
          participants={participants}
          onParticipantChange={onParticipantChange}
        />
      </PopoverContent>
    </Popover>
  )
}

export default WhoComingSelect