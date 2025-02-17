"use client"

import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ChevronDown } from "lucide-react"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { useState } from "react"
import { Battery } from "lucide-react"

export default function DesignSystem() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="container mx-auto p-8 space-y-12">
      <section>
        <h2 className="text-2xl font-bold mb-6">Buttons & Variants</h2>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button className="rounded-sm">Small Radius</Button>
            <Button className="rounded-md">Medium Radius</Button>
            <Button className="rounded-lg">Large Radius</Button>
            <Button className="rounded-full">Full Radius</Button>
          </div>

          {/* New Icon-only button section */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-muted-foreground">Icon Only Buttons</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="icon" size="icon">
                <Battery className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="container mx-auto p-8 space-y-8">
          <div className="space-y-4 max-w-md">
            <h2 className="text-2xl font-bold mb-6">Button Variants</h2>

            {/* Large Buttons */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-muted-foreground">Large Size</h3>
              <Button size="lg" className="w-full">
                Book now
              </Button>
              <Button variant="ghost" size="lg" className="w-full">
                Add to cart
              </Button>
            </div>

            {/* Default Size Buttons */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-muted-foreground">Default Size</h3>
              <Button className="w-full">View tickets</Button>
              <Button variant="secondary" className="w-full">
                Sign in
              </Button>
            </div>

            {/* Individual Buttons */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-muted-foreground">Individual Examples</h3>
              <div className="flex flex-wrap gap-4">
                <Button>View tickets</Button>
                <Button variant="secondary">Sign in</Button>
                <Button variant="ghost">Add to cart</Button>
                <Button size="lg">Book now</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Typography</h2>
        <div className="space-y-4">
          <div>
            <span className="text-sm text-ui-muted">3XL - 3rem (48px)</span>
            <p className="text-3xl">The quick brown fox jumps over the lazy dog</p>
          </div>
          <div>
            <span className="text-sm text-ui-muted">2XL - 2rem (32px)</span>
            <p className="text-2xl">The quick brown fox jumps over the lazy dog</p>
          </div>
          <div>
            <span className="text-sm text-ui-muted">XL - 1.5rem (24px)</span>
            <p className="text-xl">The quick brown fox jumps over the lazy dog</p>
          </div>
          <div>
            <span className="text-sm text-ui-muted">LG - 1.125rem (18px)</span>
            <p className="text-lg">The quick brown fox jumps over the lazy dog</p>
          </div>
          <div>
            <span className="text-sm text-ui-muted">Base - 1rem (16px)</span>
            <p className="text-base">The quick brown fox jumps over the lazy dog</p>
          </div>
          <div>
            <span className="text-sm text-ui-muted">SM - 0.875rem (14px)</span>
            <p className="text-sm">The quick brown fox jumps over the lazy dog</p>
          </div>
          <div>
            <span className="text-sm text-ui-muted">XS - 0.75rem (12px)</span>
            <p className="text-xs">The quick brown fox jumps over the lazy dog</p>
          </div>
        </div>
      </section>
    </div>
  )
}

