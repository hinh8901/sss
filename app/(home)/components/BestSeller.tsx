import clsx from "clsx"

import TicketItem, { TicketItemSkeleton } from "./TicketItem"

interface BestSellerProps {
  bestSellerData: Record<string, any>[] | null
  isLoading: boolean
}

const BestSeller: React.FC<BestSellerProps> = (props) => {
  const { bestSellerData, isLoading } = props

  if (!isLoading && (!bestSellerData || !bestSellerData.length)) return null

  return (
    <div>
      <h3 className={clsx(
        "text-black font-bold text-base mb-4 md:mb-5 md:text-xl"
      )}>Best seller</h3>
      <div className={clsx(
        "grid",
        "grid-cols-2 gap-4 gap-x-4 gap-y-6",
        "sm:grid-cols-3 md:gap-x-6 md:gap-y-9",
        "xl:grid-cols-4",
      )}>
        {isLoading ? (
          <>
            <TicketItemSkeleton />
            <TicketItemSkeleton />
            <TicketItemSkeleton />
            <TicketItemSkeleton />
            <TicketItemSkeleton />
            <TicketItemSkeleton />
            <TicketItemSkeleton />
            <TicketItemSkeleton />
          </>
        ) :
          bestSellerData?.map((item: any) => (
            <TicketItem
              key={item?.id}
              name={item?.name}
              imgURL={item?.image?.original}
              bookedCount={item?.bookedCount}
              listedPrice={item?.displayPrice}
              salePrice={item?.salePrice}
              minPrice={item?.minPrice}
              discountPer={item?.salePercent}
            />
          ))
        }
      </div>
    </div>
  )
}

export default BestSeller