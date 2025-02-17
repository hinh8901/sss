"use client"

import { useState } from "react"
import { QuantityPicker } from "@/components/ui/quantity-picker"

export default function QuantityPickerDemo() {
  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(1)
  const [value3, setValue3] = useState(5)
  const [value4, setValue4] = useState(0)
  const [value5, setValue5] = useState(1)
  const [value6, setValue6] = useState(5)

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-8">Quantity Picker</h2>

      <div className="space-y-8">
        {/* Primary Variant */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Primary Variant</h3>
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-8">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Default (min: 0)</p>
                <QuantityPicker value={value1} onValueChange={setValue1} />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">With value</p>
                <QuantityPicker value={value2} onValueChange={setValue2} />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Max reached</p>
                <QuantityPicker value={value3} onValueChange={setValue3} max={5} />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Disabled</p>
                <QuantityPicker value={0} onValueChange={() => {}} disabled />
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Variant */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Secondary Variant</h3>
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-8">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Default (min: 0)</p>
                <QuantityPicker variant="secondary" value={value4} onValueChange={setValue4} />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">With value</p>
                <QuantityPicker variant="secondary" value={value5} onValueChange={setValue5} />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Max reached</p>
                <QuantityPicker variant="secondary" value={value6} onValueChange={setValue6} max={5} />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Disabled</p>
                <QuantityPicker variant="secondary" value={0} onValueChange={() => {}} disabled />
              </div>
            </div>
          </div>
        </div>

        {/* Example Usage */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Example Usage</h3>
          <div className="w-full max-w-sm space-y-4 rounded-lg border p-4">
            <div className="space-y-2">
              <h4 className="font-medium">Product Options</h4>
              <p className="text-sm text-muted-foreground">Select the quantity for each option.</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Adults</span>
                <QuantityPicker value={value1} onValueChange={setValue1} max={10} />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Children</span>
                <QuantityPicker variant="secondary" value={value4} onValueChange={setValue4} max={10} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

