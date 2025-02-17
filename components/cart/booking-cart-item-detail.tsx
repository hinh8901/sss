import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Trash2 } from "lucide-react"

interface CartItem {
  id: string
  name: string
  time: string
  date: string
  section?: string
  image: string
  price: number
  originalPrice?: number
  discount?: number
  adults: number
  children: number
  description?: string
}

interface BookingCartItemDetailProps {
  item: CartItem
  isChecked: boolean
  onItemCheck: (checked: boolean) => void
}

export function BookingCartItemDetail({ item, isChecked, onItemCheck }: BookingCartItemDetailProps) {
  return (
    <div className="flex gap-4 mt-4">
      <Checkbox
        id={`item-${item.id}`}
        className="h-5 w-5 border-[#F1F1F1] data-[state=checked]:bg-[#ff6b34] data-[state=checked]:text-white mt-1"
        checked={isChecked}
        onCheckedChange={onItemCheck}
      />
      <div className="flex gap-4 flex-1">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          width={80}
          height={80}
          className="rounded-lg object-cover"
        />
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start gap-2">
            <div>
              <h3 className="font-medium">{item.name}</h3>
              {item.time && (
                <p className="text-sm text-muted-foreground">
                  {item.time}, {item.section}
                </p>
              )}
              {item.date && <p className="text-sm text-muted-foreground">{item.date}</p>}
              {item.description && <p className="text-sm text-muted-foreground mt-1">{item.description}</p>}
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="inline-flex items-center rounded-sm bg-[#f8f8f8] px-2 py-0.5 text-xs font-medium">
              Adults x{item.adults}
            </span>
            <span className="inline-flex items-center rounded-sm bg-[#f8f8f8] px-2 py-0.5 text-xs font-medium">
              Children x{item.children}
            </span>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="font-bold">₫{item.price.toLocaleString()}</span>
            {item.originalPrice && (
              <>
                <span className="text-sm text-muted-foreground line-through">
                  ₫{item.originalPrice.toLocaleString()}
                </span>
                <span className="text-sm text-[#f53535]">-{item.discount}%</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

