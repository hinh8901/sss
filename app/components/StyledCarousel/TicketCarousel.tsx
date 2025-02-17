"use client"

import { ReactNode, useEffect, useState } from "react"
import clsx from "clsx"
import Image from "next/image"
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel"

import ArrowRight from '@/public/icons/arrow-right.svg'
import { formatNumber } from "@/utils"

interface CarouselButtonProps {
  children: ReactNode
  onClick: () => void
  action?: 'next' | 'prev'
  hide?: boolean
}

const CarouselButton: React.FC<CarouselButtonProps> = (props) => {
  const { action = 'prev', children, onClick, hide } = props
  return (
    <div className={clsx(
      "bg-[#FCEBE8] absolute h-full top-0 duration-300",
      {
        "pl-3 right-0": action === 'next',
        "pr-3 left-0": action === 'prev',
        "opacity-0": hide,
      }
    )}>
      <button
        className={clsx(
          "rounded-sm bg-white flex items-center px-1 h-full",
        )}
        onClick={onClick}
      >{children}</button>
    </div>
  )
}

export interface TicketCarouselProps {
  items: { id: number; restaurant: string; usedArea2: string; price: number | string | null }[]
}

const TicketCarousel: React.FC<TicketCarouselProps> = (props) => {
  const { items } = props
  const [api, setApi] = useState<CarouselApi>()
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const onNextItem = () => {
    api?.scrollNext?.()
  }

  const onPrevItem = () => {
    api?.scrollPrev?.()
  }

  useEffect(() => {
    if (!api) return

    const onUpdateScrollState = () => {
      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }

    onUpdateScrollState()
    api.on("scroll", onUpdateScrollState)
    api.on("resize", onUpdateScrollState)

    return () => {
      api.off("scroll", onUpdateScrollState)
      api.off("resize", onUpdateScrollState)
    }
  }, [api])

  if (!items?.length) return null

  return (
    <div className="relative w-full">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {
            items?.map((item, idx) => (
              <CarouselItem
                key={item?.id}
                className={
                  clsx(
                    "basis-auto flex-none w-auto",
                    "max-w-[calc(100%_-_80px)]",
                  )
                }
              >
                <div className={clsx(
                  "bg-white rounded-md",
                  "p-2",
                  "h-full"
                )}>
                  <p className="text-[#11170D] text-xs break-words">{item.restaurant}</p>
                  <p className="text-[#7F7D83] text-xs break-words">{item.usedArea2}</p>
                  <p className="text-[#11170D] text-sm font-semibold break-words">
                    {typeof item.price === 'number' ? `₫${formatNumber(item.price)}` : 'Free'}
                  </p>
                </div>
              </CarouselItem>
            ))
          }
        </CarouselContent>
      </Carousel>
      <CarouselButton
        onClick={onPrevItem}
        action="prev"
        hide={!canScrollPrev}
      >
        <Image className="rotate-180" src={ArrowRight} alt="prev-carousel-item" />
      </CarouselButton>
      <CarouselButton
        onClick={onNextItem}
        action="next"
        hide={!canScrollNext}
      >
        <Image src={ArrowRight} alt="next-carousel-item" />
      </CarouselButton>
    </div>
  )
}

export default TicketCarousel
