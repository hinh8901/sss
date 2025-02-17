"use client"
import { QuantityPicker } from "@/components/ui/quantity-picker"
import { cn } from "@/lib/utils"

export interface Participant {
  type: string
  count: number
  price?: number
  description?: string
}

export interface WhoComingProps {
  participants: Participant[]
  onParticipantChange: (type: Participant["type"], count: number) => void
  className?: string
}

export function WhoComing({ participants, onParticipantChange, className }: WhoComingProps) {
  return (
    <div className={cn("space-y-6 w-full", className)}>
      {participants.map((participant) => (
        <div key={participant.type} className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-base font-medium capitalize">{participant.type}</h3>
            {participant.description && <p className="text-sm text-muted-foreground">{participant.description}</p>}
          </div>
          <div className="flex items-center gap-4">
            {participant.price && (
              <div className="text-right">
                <div className="font-medium">₫{participant.price.toLocaleString()}</div>
                {participant.type === "adult" && (
                  <div className="text-sm text-muted-foreground line-through">
                    ₫{(participant.price * 1.05).toLocaleString()}
                  </div>
                )}
              </div>
            )}
            <QuantityPicker
              value={participant.count}
              onValueChange={(value) => onParticipantChange(participant.type, value)}
              min={0}
              max={99}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

