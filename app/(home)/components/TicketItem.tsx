import Image from "next/image"
import clsx from "clsx"

import { Button } from "@/components/ui/button"

import BookedNumber from "@/app/components/BookedNumber"
import PriceBlock from "@/app/components/PriceBlock"
import Skeleton from "@/app/components/Skeleton"
import { isNil } from "@/utils"

export const TicketItemSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <Skeleton className="aspect-square w-full" />
        <div className="flex flex-col mt-2">
          <Skeleton className="h-5 w-[70%]" />
          <Skeleton className="h-4 w-[35%] mt-1 mb-1" />
          <Skeleton className="h-4 w-[20%]" />
          <Skeleton className="h-4 w-[40%] mt-1" />
        </div>
      </div>
      <Skeleton className="h-[38px] mt-3" />
    </div>
  )
}

export type TicketItemProps = {
  imgURL: string | null | undefined;
  name: string;
  bookedCount: number;
  minPrice: number | string | null;
  salePrice: number | string | null;
  listedPrice: number | null;
  discountPer?: number;
}

const TicketItem: React.FC<TicketItemProps> = (props) => {
  const {
    imgURL,
    name,
    bookedCount,
    minPrice,
    salePrice,
    listedPrice,
    discountPer,
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

  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col">
        <div className="aspect-square w-full rounded-md overflow-hidden bg-[#C9C9CC]">
          {
            imgURL &&
            <Image
              priority
              className="h-full w-full object-cover "
              src={imgURL}
              alt={name}
              width={278}
              height={278}
            />
          }
        </div>
        <div className="flex flex-col mt-2">
          <div>
            <h4
              className={clsx(
                "text-black text-sm font-semibold lg:text-base",
                "line-clamp-2",
              )}
            >{name}</h4>
            <div className="mt-1 mb-1">
              <BookedNumber number={bookedCount} />
            </div>
            <PriceBlock
              displayPrice={displayPrice}
              originalPrice={originalPrice}
              discountPer={discountPer}
            />
          </div>
        </div>
      </div>
      <Button variant="primary-outline" className="h-[38px] font-normal mt-3">Book now</Button>
    </div>
  )
}

export default TicketItem