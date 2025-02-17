"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Loader2, Save, Trash2, X } from "lucide-react"

export default function FormControlsDemo() {
  const [isLoading, setIsLoading] = useState(false)
  const [formValid, setFormValid] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-8">Form Controls with Buttons</h2>

      <div className="grid gap-8">
        {/* Basic Form */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Form</CardTitle>
            <CardDescription>A simple form with basic button variants</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between gap-2">
              <Button type="button" variant="primary-ghost">
                Cancel
              </Button>
              <Button type="submit" leftIcon>
                Submit
              </Button>
            </CardFooter>
          </form>
        </Card>

        {/* Advanced Form */}
        <Card>
          <CardHeader>
            <CardTitle>Advanced Form</CardTitle>
            <CardDescription>Form with multiple button states and variants</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Personal Information</h3>
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input id="first-name" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input id="last-name" placeholder="Enter your last name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email-advanced">Email</Label>
                    <Input id="email-advanced" type="email" placeholder="Enter your email" />
                  </div>
                </div>
              </div>

              {/* Preferences */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Preferences</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Notification type</Label>
                    <RadioGroup defaultValue="email" className="flex gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="email" id="notification-email" />
                        <Label htmlFor="notification-email">Email</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sms" id="notification-sms" />
                        <Label htmlFor="notification-sms">SMS</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="push" id="notification-push" />
                        <Label htmlFor="notification-push">Push</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <Select>
                      <SelectTrigger id="language">
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                        <SelectItem value="de">German</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Terms */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" onCheckedChange={(checked) => setFormValid(checked as boolean)} />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the terms and conditions
                  </Label>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="flex gap-2">
                <Button type="button" variant="secondary" size="sm" leftIcon icon={Trash2}>
                  Delete
                </Button>
                <Button type="reset" variant="primary-ghost" size="sm" leftIcon icon={X}>
                  Reset
                </Button>
              </div>
              <div className="flex gap-2">
                <Button type="button" variant="primary-outline" size="sm">
                  Save Draft
                </Button>
                <Button
                  type="submit"
                  size="sm"
                  disabled={!formValid || isLoading}
                  leftIcon
                  icon={isLoading ? Loader2 : Save}
                >
                  {isLoading ? "Saving..." : "Save Changes"}
                </Button>
              </div>
            </CardFooter>
          </form>
        </Card>

        {/* Button Groups Example */}
        <Card>
          <CardHeader>
            <CardTitle>Button Groups</CardTitle>
            <CardDescription>Different button combinations for various actions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Primary Actions */}
            <div className="space-y-2">
              <Label>Primary Actions</Label>
              <div className="flex flex-wrap gap-2">
                <Button leftIcon>Create New</Button>
                <Button variant="primary-ghost" leftIcon>
                  Import
                </Button>
                <Button variant="primary-outline" leftIcon>
                  Export
                </Button>
              </div>
            </div>

            {/* Secondary Actions */}
            <div className="space-y-2">
              <Label>Secondary Actions</Label>
              <div className="flex flex-wrap gap-2">
                <Button variant="secondary" leftIcon>
                  Delete All
                </Button>
                <Button variant="secondary-ghost" leftIcon>
                  Archive
                </Button>
                <Button variant="secondary-outline" leftIcon>
                  Report
                </Button>
              </div>
            </div>

            {/* Size Variants */}
            <div className="space-y-2">
              <Label>Size Variants</Label>
              <div className="flex flex-wrap items-center gap-2">
                <Button size="lg" leftIcon>
                  Large
                </Button>
                <Button size="md" leftIcon>
                  Medium
                </Button>
                <Button size="sm" leftIcon>
                  Small
                </Button>
                <Button size="xs" leftIcon>
                  Extra Small
                </Button>
              </div>
            </div>

            {/* States */}
            <div className="space-y-2">
              <Label>States</Label>
              <div className="flex flex-wrap gap-2">
                <Button leftIcon>Default</Button>
                <Button leftIcon disabled>
                  Disabled
                </Button>
                <Button variant="secondary" leftIcon>
                  Active
                </Button>
                <Button variant="secondary" leftIcon disabled>
                  Disabled
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

