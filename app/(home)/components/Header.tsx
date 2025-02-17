import { useId } from "react"
import Image from "next/image"
import clsx from "clsx"
import { useController } from "react-hook-form"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

import CustomSelect from "@/app/components/CustomSelect"
import CustomDatePicker from "@/app/components/CustomDatePicker"
import WhoComingSelect from "./WhoComingSelect"
import { Participant } from "@/components/booking/who-coming"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  landData: Record<string, any>[] | null
  onChangeLand: (land: string) => void
}

const Header: React.FC<HeaderProps> = (props) => {
  const { landData, onChangeLand } = props
  const flexibleCheckboxId = useId()

  const {
    field: {
      value: siteCode
    }
  } = useController({
    name: 'sitecode'
  })

  const {
    field: {
      value: dateValue,
      onChange: onChangeDate
    }
  } = useController({
    name: 'date'
  })

  const {
    field: {
      value: flexiableValue,
      onChange: onChangeFlexiableValue,
    }
  } = useController({
    name: 'flexiableDate'
  })

  const {
    field: {
      value: memberData,
      onChange: onChangeDateMemberData,
    }
  } = useController({
    name: 'members'
  })

  const participants: Participant[] = memberData?.map((item: any) => ({
    type: item?.label,
    count: item?.amount,
  }))

  const onChangeParticipant = (type: string, count: number) => {
    onChangeDateMemberData(memberData?.map((member: any) => {
      if (member.label === type) return { ...member, amount: count }
      return member
    }))
  }

  const getLandOptions = () => {
    if (!landData) return []
    return landData.map(land => ({
      label: land?.name,
      value: land?.sitecode
    }))
  }

  const onViewTickets = () => {
    console.log('flow: ', siteCode, dateValue, flexiableValue, memberData)
  }

  return (
    <div className="-mt-8 -mx-4">
      <Carousel className="w-full">
        <CarouselContent>
          <CarouselItem>
            <div className={
              clsx(
                "w-full relative rounded-3xl overflow-hidden",
                "aspect-[1.5]"
              )
            }>
              <Image
                className="object-cover w-full"
                priority
                alt="img"
                fill
                src="https://media.vneconomy.vn/images/upload/2022/02/25/sun-world-ba-na-hills-10.jpg"
              />
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <div className="relative -mt-32">
        <h4 className="px-4 py-3 font-medium text-[32px] text-white">Find a journey</h4>

        <div className="bg-white p-4 rounded-t-3xl flex gap-y-3 flex-col">
          <CustomSelect
            label="Where to?"
            options={getLandOptions()}
            value={siteCode}
            onValueChange={onChangeLand}
          />
          <CustomDatePicker
            label="When your trip?"
            placeholder="Ngày tháng năm"
            value={dateValue}
            onChange={onChangeDate}
          />
          <WhoComingSelect
            label="Who's coming?"
            participants={participants ?? []}
            onParticipantChange={onChangeParticipant} />
          <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id={flexibleCheckboxId}
                variant="secondary"
                checked={!!+flexiableValue}
                onCheckedChange={value => {
                  onChangeFlexiableValue(value ? "1" : "0")
                }}
              />
              <label
                htmlFor={flexibleCheckboxId}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Show me flexible options
              </label>
            </div>
            <Button className="h-[38px] p-4" onClick={onViewTickets}>
              View tickets
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;