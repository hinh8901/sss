"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { BookingOption } from "@/components/booking/booking-option"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface BookingData {
  date?: Date
  customerType: "everyone" | "out-of-province" | "intra-province"
  ticketType: "regular" | "vip"
  participants: {
    adult: number
    children: number
    senior: number
  }
}

export default function BookingOptionDemo() {
  const [openNew, setOpenNew] = useState(false)
  const [openUpdate, setOpenUpdate] = useState(false)
  const [openCustom, setOpenCustom] = useState(false)

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-8">Booking Option</h2>

      {/* Basic Examples */}
      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Basic Usage</CardTitle>
            <CardDescription>
              The BookingOption component supports two modes: new booking and update existing booking.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => setOpenNew(true)}>New Booking</Button>
              <Button variant="outline" onClick={() => setOpenUpdate(true)}>
                Update Booking
              </Button>
            </div>

            <BookingOption
              mode="new"
              title="Kiss of the Sea"
              open={openNew}
              onOpenChange={setOpenNew}
              onSubmit={(data) => {
                console.log("New booking:", data)
                setOpenNew(false)
              }}
            />

            <BookingOption
              mode="update"
              title="Update Booking"
              open={openUpdate}
              onOpenChange={setOpenUpdate}
              onSubmit={(data) => {
                console.log("Update booking:", data)
                setOpenUpdate(false)
              }}
              defaultValues={{
                date: new Date(),
                customerType: "everyone",
                ticketType: "regular",
                participants: {
                  adult: 2,
                  children: 1,
                  senior: 0,
                },
              }}
            />
          </CardContent>
        </Card>

        {/* With Custom Configuration */}
        <Card>
          <CardHeader>
            <CardTitle>Custom Configuration</CardTitle>
            <CardDescription>Example with pre-filled values and custom configuration.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button onClick={() => setOpenCustom(true)}>Open Custom Booking</Button>

            <BookingOption
              mode="new"
              title="Premium Experience"
              open={openCustom}
              onOpenChange={setOpenCustom}
              onSubmit={(data) => {
                console.log("Custom booking:", data)
                setOpenCustom(false)
              }}
              defaultValues={{
                customerType: "out-of-province",
                ticketType: "vip",
                participants: {
                  adult: 1,
                  children: 0,
                  senior: 0,
                },
              }}
            />
          </CardContent>
        </Card>

        {/* Props Documentation */}
        <Card>
          <CardHeader>
            <CardTitle>Props</CardTitle>
            <CardDescription>Available properties for the BookingOption component.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border rounded-lg">
                <table className="min-w-full divide-y">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-medium">Prop</th>
                      <th className="px-4 py-2 text-left text-sm font-medium">Type</th>
                      <th className="px-4 py-2 text-left text-sm font-medium">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="px-4 py-2 text-sm font-mono">mode</td>
                      <td className="px-4 py-2 text-sm font-mono">"new" | "update"</td>
                      <td className="px-4 py-2 text-sm">Determines the booking mode and button layout.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm font-mono">title</td>
                      <td className="px-4 py-2 text-sm font-mono">string</td>
                      <td className="px-4 py-2 text-sm">The title displayed in the dialog header.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm font-mono">open</td>
                      <td className="px-4 py-2 text-sm font-mono">boolean</td>
                      <td className="px-4 py-2 text-sm">Controls the visibility of the dialog.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm font-mono">onOpenChange</td>
                      
                      <td className="px-4 py-2 text-sm">Callback when the dialog open state changes.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm font-mono">onSubmit</td>
                     
                      <td className="px-4 py-2 text-sm">Callback when the form is submitted.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm font-mono">defaultValues</td>
                      <td className="px-4 py-2 text-sm font-mono">Partial&lt;BookingData&gt;</td>
                      <td className="px-4 py-2 text-sm">Optional initial values for the form.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">BookingData Type</h3>
                <pre className="p-4 rounded-lg bg-muted font-mono text-sm">
                  {`interface BookingData {
  date?: Date
  customerType: "everyone" | "out-of-province" | "intra-province"
  ticketType: "regular" | "vip"
  participants: {
    adult: number
    children: number
    senior: number
  }
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Usage Example */}
        <Card>
          <CardHeader>
            <CardTitle>Usage Example</CardTitle>
            <CardDescription>Example code for implementing the BookingOption component.</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="p-4 rounded-lg bg-muted font-mono text-sm whitespace-pre-wrap">
              {`import { BookingOption } from "@/components/booking/booking-option"

export default function MyComponent() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        Book Now
      </Button>

      <BookingOption
        mode="new"
        title="Kiss of the Sea"
        open={open}
        onOpenChange={setOpen}
        onSubmit={(data) => {
          console.log("Booking data:", data)
          setOpen(false)
        }}
        defaultValues={{
          customerType: "everyone",
          ticketType: "regular",
          participants: {
            adult: 1,
            children: 0,
            senior: 0,
          },
        }}
      />
    </>
  )
}`}
            </pre>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

