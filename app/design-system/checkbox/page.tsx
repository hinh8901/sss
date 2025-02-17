import { Checkbox } from "@/components/ui/checkbox"

export default function CheckboxDemo() {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-8">Checkbox Variants</h2>

      {/* Square Checkboxes - Primary */}
      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Square - Primary</h3>
          <div className="flex items-center gap-8">
            <div className="flex items-center space-x-2">
              <Checkbox id="square-default" />
              <label
                htmlFor="square-default"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Default
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="square-checked" checked />
              <label
                htmlFor="square-checked"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Checked
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="square-indeterminate" aria-checked="mixed" />
              <label
                htmlFor="square-indeterminate"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Indeterminate
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="square-disabled" disabled />
              <label
                htmlFor="square-disabled"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Disabled
              </label>
            </div>
          </div>
        </div>

        {/* Square Checkboxes - Secondary */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Square - Secondary</h3>
          <div className="flex items-center gap-8">
            <div className="flex items-center space-x-2">
              <Checkbox id="square-secondary-default" variant="secondary" />
              <label
                htmlFor="square-secondary-default"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Default
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="square-secondary-checked" variant="secondary" checked />
              <label
                htmlFor="square-secondary-checked"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Checked
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="square-secondary-indeterminate" variant="secondary" aria-checked="mixed" />
              <label
                htmlFor="square-secondary-indeterminate"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Indeterminate
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="square-secondary-disabled" variant="secondary" disabled />
              <label
                htmlFor="square-secondary-disabled"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Disabled
              </label>
            </div>
          </div>
        </div>

        {/* Round Checkboxes - Primary */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Round - Primary</h3>
          <div className="flex items-center gap-8">
            <div className="flex items-center space-x-2">
              <Checkbox id="round-default" shape="round" />
              <label
                htmlFor="round-default"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Default
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="round-checked" shape="round" checked />
              <label
                htmlFor="round-checked"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Checked
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="round-indeterminate" shape="round" aria-checked="mixed" />
              <label
                htmlFor="round-indeterminate"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Indeterminate
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="round-disabled" shape="round" disabled />
              <label
                htmlFor="round-disabled"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Disabled
              </label>
            </div>
          </div>
        </div>

        {/* Round Checkboxes - Secondary */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Round - Secondary</h3>
          <div className="flex items-center gap-8">
            <div className="flex items-center space-x-2">
              <Checkbox id="round-secondary-default" shape="round" variant="secondary" />
              <label
                htmlFor="round-secondary-default"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Default
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="round-secondary-checked" shape="round" variant="secondary" checked />
              <label
                htmlFor="round-secondary-checked"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Checked
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="round-secondary-indeterminate" shape="round" variant="secondary" aria-checked="mixed" />
              <label
                htmlFor="round-secondary-indeterminate"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Indeterminate
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="round-secondary-disabled" shape="round" variant="secondary" disabled />
              <label
                htmlFor="round-secondary-disabled"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Disabled
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

