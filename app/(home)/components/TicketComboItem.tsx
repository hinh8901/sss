import Image from "next/image"
import clsx from "clsx"

import BookedNumber from "@/app/components/BookedNumber"
import PriceBlock from "@/app/components/PriceBlock"
import { Button } from "@/components/ui/button"
import { TicketCarousel } from "@/app/components/StyledCarousel"
import { isNil } from "@/utils"
import Skeleton from "@/app/components/Skeleton"

export type TicketComboItemProps = {
  imgURL: string | null | undefined;
  name: string;
  bookingNumber: number;
  minPrice: number | string | null;
  salePrice: number | string | null;
  listedPrice: number | null;
  discountPer?: number;
  childTickets?: Record<string, any>[] | null;
}

export const TicketComboItemSkeleton: React.FC = () => {
  return (
    <div
      className={clsx(
        "rounded-lg",
      )}>
      <div className={
        clsx(
          "h-72",
          "flex items-start justify-between",
          "lg:flex-row-reverse lg:justify-end",
          "gap-x-3 lg:gap-x-6",
        )
      }>
        <Skeleton className="h-full" />
      </div>
    </div>
  )
}

const TicketComboItem: React.FC<TicketComboItemProps> = (props) => {
  const {
    imgURL,
    name,
    bookingNumber,
    minPrice,
    salePrice,
    listedPrice,
    discountPer,
    childTickets
  } = props

  const displayPrice = (() => {
    if (!isNil(salePrice) && !isNaN(+salePrice)) return +salePrice
    if (!isNil(minPrice) && !isNaN(+minPrice)) return +minPrice
    return 'N/A'
  })()

  const originalPrice = (() => {
    if (
      isNil(listedPrice) ||
      isNil(displayPrice) ||
      displayPrice === 'N/A' ||
      displayPrice >= listedPrice
    )
      return null
    return listedPrice
  })()

  const childsTicketData = childTickets?.map(child => ({
    id: child?.id,
    restaurant: child?.restaurant?.name ?? child?.name,
    usedArea2: child?.usedArea2Object?.label,
    price: child?.price ?? child?.originalPrice ?? null,
  }))

  return (
    <div
      className={clsx(
        "bg-[#E93F211A] rounded-lg",
        "p-4",
      )}>
      <div className={
        clsx(
          "flex items-start justify-between",
          "lg:flex-row-reverse lg:justify-end",
          "gap-x-3 lg:gap-x-6",
        )
      }>
        <div className="w-full lg:h-48 flex flex-col justify-between">
          <div>
            <h4
              className={clsx(
                "text-black font-semibold",
                "text-sm lg:text-base",
                "line-clamp-5 sm:line-clamp-4"
              )}
            >{name}</h4>
            <div className="mt-1">
              <BookedNumber number={bookingNumber} />
            </div>
          </div>
          <div className="hidden flex-wrap gap-y-3 items-end justify-between lg:flex">
            <PriceBlock
              displayPrice={displayPrice}
              originalPrice={originalPrice}
              discountPer={discountPer}
            />
            <Button className="py-2 px-10 font-normal text-sm h-[38px] lg:min-w-[146px]">Book Now</Button>
          </div>
        </div>
        <div className={
          clsx(
            "aspect-square shrink-0 rounded-md overflow-hidden bg-[#C9C9CC]",
            "w-[128px] lg:w-48"
          )
        }>
          {
            imgURL &&
            <Image
              className="h-full w-full object-cover"
              src={imgURL}
              alt={name}
              width={278}
              height={278}
            />
          }
        </div>
      </div>
      <div className="my-4"><TicketCarousel items={childsTicketData ?? []} /></div>
      <div className="flex flex-wrap gap-y-3 items-end justify-between lg:hidden">
        <PriceBlock
          displayPrice={displayPrice}
          originalPrice={originalPrice}
          discountPer={discountPer}
        />
        <Button className="py-2 px-10 font-normal text-sm h-[38px]">Book</Button>
      </div>
    </div>
  )
}

export default TicketComboItem