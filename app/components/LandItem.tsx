"use client"

import clsx from "clsx"
import Image from "next/image"

export interface LandItemProps {
  id: number
  name: string
  imgURL: string
  totalExplore: number
  onClick?: (id: number) => void
}

const LandItem: React.FC<LandItemProps> = (props) => {
  const { id, name, imgURL, onClick, totalExplore } = props

  return (
    <div className="relative rounded-lg bg-[#C9C9CC]">
      {
        imgURL && <Image src={imgURL} alt={name} fill className="absolute z-1 rounded-lg object-cover" />
      }
      <div
        onClick={() => onClick?.(id)}
        className={clsx(
          "relative z-2",
          "cursor-pointer flex flex-col justify-end p-3 aspect-square",
        )}
      >
        <p className="text-white font-semibold text-base">{name}</p>
        <span className="text-white text-sm">{totalExplore}+ activities and destinations</span>
      </div>
    </div>
  )
}

export default LandItem