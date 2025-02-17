"use client"

import { Input } from "@/components/ui/input"

export default function InputDemo() {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-8">Input Variants</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {/* Default Input */}
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Default</p>
          <Input placeholder="Input" />
        </div>

        {/* Disabled Input */}
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Disabled</p>
          <Input placeholder="Input" disabled />
        </div>

        {/* Success Input */}
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Success</p>
          <Input placeholder="Input" variant="success" />
        </div>

        {/* Error Input */}
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Error</p>
          <Input placeholder="Input" variant="error" />
        </div>

        {/* Disabled Error Input */}
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Disabled Error</p>
          <Input placeholder="Input" variant="error" disabled />
        </div>

        {/* Disabled Success Input */}
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Disabled Success</p>
          <Input placeholder="Input" variant="success" disabled />
        </div>
      </div>

      {/* Example Usage */}
      <div className="space-y-8 max-w-md">
        <h3 className="text-lg font-semibold">Example Usage</h3>

        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="username" className="text-sm font-medium">
              Username
            </label>
            <Input id="username" placeholder="Enter your username" />
          </div>

          <div className="space-y-2">
            <label htmlFor="email-error" className="text-sm font-medium">
              Email (Error)
            </label>
            <Input id="email-error" type="email" placeholder="Enter your email" variant="error" />
            <p className="text-sm text-[#ff0000]">Please enter a valid email address</p>
          </div>

          <div className="space-y-2">
            <label htmlFor="password-success" className="text-sm font-medium">
              Password (Success)
            </label>
            <Input id="password-success" type="password" placeholder="Enter your password" variant="success" />
            <p className="text-sm text-[#82ac5f]">Password strength: Strong</p>
          </div>

          <div className="space-y-2">
            <label htmlFor="disabled" className="text-sm font-medium">
              Disabled Input
            </label>
            <Input id="disabled" placeholder="This input is disabled" disabled />
          </div>
        </div>
      </div>
    </div>
  )
}

