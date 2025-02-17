"use client"

import clsx from "clsx"

import LandItem from "@/app/components/LandItem"

interface LandListProps {
  landData: Record<string, any>[] | null
  onChangeLand: (land: string) => void
}

const LandList: React.FC<LandListProps> = (props) => {
  const { landData, onChangeLand } = props

  if (!landData) return null

  return (
    <div>
      <h3 className={clsx(
        "text-black font-bold text-base mb-4 md:mb-5 md:text-xl"
      )}>You may be interested in</h3>
      <div className={clsx(
        "grid gap-x-3 gap-y-3",
        "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6",
      )}>
        {
          landData.map(land => (
            <LandItem
              key={land.id}
              id={land.id}
              name={land.name}
              imgURL={land.bookingThumbnail}
              totalExplore={land.totalExplore}
              onClick={() => {
                window.scrollTo({ behavior: 'smooth', top: 0, left: 0 })
                setTimeout(() => {
                  onChangeLand(land.sitecode)
                }, 250)
              }}
            />
          ))
        }
      </div>
    </div>
  )
}

export default LandList