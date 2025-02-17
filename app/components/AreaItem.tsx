"use client"

import clsx from "clsx"

export interface AreaItemProps {
  id: number
  name: string
  imgURL: string
  onClick?: (id: number) => void
}

const AreaItem: React.FC<AreaItemProps> = (props) => {
  const { id, name, onClick } = props

  return (
    <div
      onClick={() => onClick?.(id)}
      className={clsx(
        "cursor-pointer flex flex-col justify-end p-3 aspect-square rounded-lg bg-rose-200",
      )}
    >
      <p className="text-white font-semibold text-base">{name}</p>
      <span className="text-white text-sm">150+ activities and destinations</span>
    </div>
  )
}

export default AreaItem