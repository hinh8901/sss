import Image from 'next/image'
import clsx from 'clsx'

import CartIcon from '@/public/icons/add-to-card-succesfull.svg'
import { formatNumber } from '@/utils'

export type BookedNumberProps = {
  number: number
}

const BookedNumber: React.FC<BookedNumberProps> = (props) => {
  const { number } = props

  return (
    <div className="flex items-center gap-x-1">
      <Image src={CartIcon} alt="cart-icon" />
      <p className={clsx(
        "text-[#ADACB0] font-normal text-xs",
      )}>{formatNumber(number)} booked</p>
    </div>
  )
}

export default BookedNumber