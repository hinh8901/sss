"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { Loader2, ArrowRight } from "lucide-react"
import { Label } from "@/components/ui/label"

export function FormDialog() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Show Form Dialog</Button>
      </DialogTrigger>
      <DialogContent variant="form" closePosition="left">
        <DialogHeader showClose>
          <DialogTitle>Request to issue invoices to business</DialogTitle>
        </DialogHeader>
        <form className="space-y-6 p-6 pt-0">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="inline-flex">
                Company's name
                <span className="text-[#f53535] ml-0.5">*</span>
              </Label>
              <Input placeholder="Enter your company's name" />
            </div>

            <div className="space-y-2">
              <Label className="inline-flex">
                Tax Code
                <span className="text-[#f53535] ml-0.5">*</span>
              </Label>
              <Input placeholder="Enter your tax code" />
            </div>

            <div className="space-y-2">
              <Label className="inline-flex">
                Email to receive
                <span className="text-[#f53535] ml-0.5">*</span>
              </Label>
              <Input placeholder="Enter your company email" type="email" />
            </div>

            <div className="space-y-2">
              <Label>Company address</Label>
              <Input placeholder="Enter your company address" />
            </div>

            <div className="space-y-2">
              <Label>Company address branch</Label>
              <Input placeholder="Enter your company address branch" />
            </div>
          </div>

          <div className="space-y-4 text-sm text-[#696960]">
            <p>
              Please make sure to enter all information fields completely and accurately. In case the information
              entered is incorrect, we will automatically issue an invoice for the 'Customer without invoice' category.
            </p>
            <p>
              After the information has been submitted, if you need to make any changes, please contact our Customer
              Service department at 1900 1000
            </p>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#ff6b34] hover:bg-[#ff6b34]/90 text-white"
            onClick={(e) => {
              e.preventDefault()
              setOpen(false)
            }}
          >
            Save infomation
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default function DialogDemo() {
  const [openToast, setOpenToast] = useState(false)
  const [openTimer, setOpenTimer] = useState(false)
  const [openFilter, setOpenFilter] = useState(false)
  const [loading, setLoading] = useState(false)
  const [categories, setCategories] = useState({
    stay: true,
    play: false,
    dine: false,
    enjoy: false,
    tour: true,
    golf: true,
    see: false,
  })

  const handleAction = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setOpenToast(false)
    }, 2000)
  }

  return (
    <div className="container mx-auto p-8 space-y-8">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Dialog Variants</h1>
        <div className="flex flex-wrap gap-4">
          <Button onClick={() => setOpenToast(true)}>Show Toast Dialog</Button>
          <Button onClick={() => setOpenTimer(true)}>Show Timer Dialog</Button>
          <Button onClick={() => setOpenFilter(true)}>Show Filter Dialog</Button>
          <FormDialog />
        </div>
      </div>

      {/* Toast Dialog */}
      <Dialog open={openToast} onOpenChange={setOpenToast}>
        <DialogContent variant="toast">
          <DialogHeader showIcon>
            <DialogTitle>Your toast is meh</DialogTitle>
            <DialogDescription>
              In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="p-6 pt-0 gap-3">
            <Button className="bg-[#aee67f] hover:bg-[#aee67f]/90 text-black" onClick={handleAction} disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Action
            </Button>
            <Button variant="ghost">Secondary</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Timer Dialog */}
      <Dialog open={openTimer} onOpenChange={setOpenTimer}>
        <DialogContent variant="toast">
          <DialogHeader>
            <DialogTitle>Your toast is meh</DialogTitle>
            <DialogDescription>
              In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form.
            </DialogDescription>
            <div className="text-[#f53535] mt-4">
              Your booking is summited! Please complete the payment within <span className="font-semibold">08:45</span>
            </div>
          </DialogHeader>
          <DialogFooter className="p-6 pt-0 gap-3">
            <Button
              className="bg-[#aee67f] hover:bg-[#aee67f]/90 text-black w-full sm:w-auto"
              onClick={handleAction}
              disabled={loading}
            >
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Button
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="w-full sm:w-auto" onClick={handleAction} disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Button
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Filter Dialog */}
      <Dialog open={openFilter} onOpenChange={setOpenFilter}>
        <DialogContent variant="filter">
          <DialogHeader className="border-b">
            <DialogTitle>Filter by Categories</DialogTitle>
          </DialogHeader>
          <div className="p-6 space-y-6">
            <div className="space-y-4">
              {Object.entries(categories).map(([key, checked]) => (
                <div key={key} className="flex items-center justify-between">
                  <span className="text-lg capitalize">{key}</span>
                  <Checkbox
                    checked={checked}
                    onCheckedChange={(checked) => setCategories((prev) => ({ ...prev, [key]: !!checked }))}
                  />
                </div>
              ))}
            </div>
          </div>
          <DialogFooter className="p-6 pt-0 border-t gap-3">
            <Button
              variant="outline"
              className="border-[#f53535] text-[#f53535] hover:bg-[#f53535]/10 w-full sm:w-auto"
              onClick={() =>
                setCategories({
                  stay: false,
                  play: false,
                  dine: false,
                  enjoy: false,
                  tour: false,
                  golf: false,
                  see: false,
                })
              }
            >
              Reset All
            </Button>
            <Button
              className="bg-[#aee67f] hover:bg-[#aee67f]/90 text-black w-full sm:w-auto"
              onClick={() => setOpenFilter(false)}
            >
              Apply
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

