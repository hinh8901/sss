import clsx from "clsx"

import TicketComboItem from "./TicketComboItem"

interface BestDealComboProps {
  bestComboSellerData: Record<string, any>[] | null
}

const BestDealCombo: React.FC<BestDealComboProps> = (props) => {
  const { bestComboSellerData } = props

  if (!bestComboSellerData) return null

  return (
    <div>
      <h3 className={clsx(
        "text-black font-bold text-base mb-4 md:mb-5 md:text-xl"
      )}>Grab the Best Deal with a Combo!</h3>
      <div className={clsx(
        "grid",
        "grid-cols-1 md:grid-cols-2",
        "gap-4 lg:gap-6"
      )}>
        {
          bestComboSellerData.map((item: any) => (
            <TicketComboItem
              key={item?.id}
              name={item?.name}
              imgURL={item?.image?.original}
              bookingNumber={item?.bookedCount}
              minPrice={item?.minPrice}
              salePrice={item?.salePrice}
              listedPrice={item?.displayPrice}
              discountPer={item?.salePercent}
              childTickets={item?.childs}
            />
          ))
        }
      </div>
    </div>
  )
}

export default BestDealCombo