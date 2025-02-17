import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function RadioDemo() {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-8">Radio Button Variants</h2>

      {/* Primary Radio Buttons */}
      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Primary</h3>
          <RadioGroup defaultValue="default">
            <div className="flex items-center gap-8">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" id="primary-default" />
                <Label htmlFor="primary-default">Default</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="checked" id="primary-checked" checked />
                <Label htmlFor="primary-checked">Selected</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="disabled" id="primary-disabled" disabled />
                <Label htmlFor="primary-disabled">Disabled</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="disabled-checked" id="primary-disabled-checked" disabled checked />
                <Label htmlFor="primary-disabled-checked">Disabled Selected</Label>
              </div>
            </div>
          </RadioGroup>
        </div>

        {/* Secondary Radio Buttons */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Secondary</h3>
          <RadioGroup defaultValue="default">
            <div className="flex items-center gap-8">
              <div className="flex items-center space-x-2">
                <RadioGroupItem variant="secondary" value="default" id="secondary-default" />
                <Label htmlFor="secondary-default">Default</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem variant="secondary" value="checked" id="secondary-checked" checked />
                <Label htmlFor="secondary-checked">Selected</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem variant="secondary" value="disabled" id="secondary-disabled" disabled />
                <Label htmlFor="secondary-disabled">Disabled</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  variant="secondary"
                  value="disabled-checked"
                  id="secondary-disabled-checked"
                  disabled
                  checked
                />
                <Label htmlFor="secondary-disabled-checked">Disabled Selected</Label>
              </div>
            </div>
          </RadioGroup>
        </div>

        {/* Example Usage */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Example Usage</h3>
          <RadioGroup defaultValue="comfortable">
            <div className="grid gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" id="example-default" />
                <Label htmlFor="example-default">Default view</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="comfortable" id="example-comfortable" />
                <Label htmlFor="example-comfortable">Comfortable view</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="compact" id="example-compact" />
                <Label htmlFor="example-compact">Compact view</Label>
              </div>
            </div>
          </RadioGroup>
        </div>

        {/* Example Usage - Secondary */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Example Usage - Secondary</h3>
          <RadioGroup defaultValue="card">
            <div className="grid gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem variant="secondary" value="card" id="payment-card" />
                <Label htmlFor="payment-card">Card Payment</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem variant="secondary" value="paypal" id="payment-paypal" />
                <Label htmlFor="payment-paypal">PayPal</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem variant="secondary" value="apple" id="payment-apple" />
                <Label htmlFor="payment-apple">Apple Pay</Label>
              </div>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  )
}

