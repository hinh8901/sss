import { formatNumber } from "@/utils"

export type PriceBlockProps = {
  displayPrice: number | string
  originalPrice?: number | null
  discountPer?: number | null
}

const PriceBlock: React.FC<PriceBlockProps> = (props) => {
  const { displayPrice, originalPrice, discountPer } = props

  return (
    <div className="flex flex-col">
      <p className="text-[#7F7D83] font-normal text-xs">Start from</p>
      <div className="flex items-center gap-1 flex-wrap">
        <p className="text-black font-semibold text-base lg:text-xl">
          {typeof displayPrice === 'string' ? displayPrice : `₫ ${formatNumber(displayPrice)}`}
        </p>
        {!!discountPer && (
          <span
            className="text-[#F53535] text-[10px] font-medium bg-[#FEEBEB] rounded px-1 py-[2px]">
            -{discountPer}%
          </span>
        )}
      </div>
      {!!originalPrice && (
        <p className="text-[#7F7D83] text-xs">
          <del className="mr-[2px]">₫</del>
          <del>{formatNumber(originalPrice)}</del>
        </p>
      )}
    </div>
  )
}

export default PriceBlock