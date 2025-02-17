import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function SwitchDemo() {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-8">Switch Variants</h2>

      <div className="space-y-8">
        {/* Basic States */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Basic States</h3>
          <div className="flex flex-col gap-4">
            <div className="flex items-center space-x-2">
              <Switch id="airplane-mode" />
              <Label htmlFor="airplane-mode">Unchecked</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="airplane-mode-checked" defaultChecked />
              <Label htmlFor="airplane-mode-checked">Checked</Label>
            </div>
          </div>
        </div>

        {/* Disabled States */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Disabled States</h3>
          <div className="flex flex-col gap-4">
            <div className="flex items-center space-x-2">
              <Switch id="disabled" disabled />
              <Label htmlFor="disabled">Disabled Unchecked</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="disabled-checked" disabled defaultChecked />
              <Label htmlFor="disabled-checked">Disabled Checked</Label>
            </div>
          </div>
        </div>

        {/* Example Usage */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Example Usage</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch id="notifications" />
              <Label htmlFor="notifications">Enable notifications</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="email-notifications" />
              <Label htmlFor="email-notifications">Email notifications</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="marketing-emails" />
              <Label htmlFor="marketing-emails">Marketing emails</Label>
            </div>
          </div>
        </div>

        {/* Form Example */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Form Example</h3>
          <div className="w-full max-w-sm space-y-4 rounded-lg border p-4">
            <div className="space-y-2">
              <h4 className="font-medium">Notification Preferences</h4>
              <p className="text-sm text-muted-foreground">Configure how you receive notifications.</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="push">Push notifications</Label>
                <Switch id="push" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="email">Email notifications</Label>
                <Switch id="email" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="sms">SMS notifications</Label>
                <Switch id="sms" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

