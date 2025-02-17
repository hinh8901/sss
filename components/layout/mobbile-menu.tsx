"use client"

import { X, Globe, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Drawer, DrawerClose, DrawerContent, DrawerHeader } from "@/components/ui/drawer"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface MobileMenuProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function MobileMenu({ open, onOpenChange }: MobileMenuProps) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="h-[100dvh]">
        <DrawerHeader className="border-b px-4 py-4">
          <div className="flex items-center justify-between">
            <Select defaultValue="en">
              <SelectTrigger className="w-[280px] bg-transparent text-black border-0 rounded-full">
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  <SelectValue placeholder="Select Language" />
                </div>
                <ChevronDown className="h-4 w-4 opacity-50" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="vi">Tiếng Việt</SelectItem>
                <SelectItem value="zh">中文</SelectItem>
              </SelectContent>
            </Select>
            <DrawerClose asChild>
              <Button variant="destructive-text" size="xs" className="h-8 w-8">
                <X className="h-5 w-5" />
              </Button>
            </DrawerClose>
          </div>
        </DrawerHeader>
        <div className="flex h-full flex-col justify-between p-4">
          <div className="space-y-6">
            <Link href="/login" className="block text-[#FF5722] hover:opacity-70">
              Đăng nhập
            </Link>
            <Link href="/bookings" className="block hover:opacity-70">
              My bookings
            </Link>
            <Link href="/terms" className="block hover:opacity-70">
              Chính sách và điều khoản
            </Link>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium">Get Sun Paradise App</h3>
            <div className="flex flex-col gap-3">
              <Link href="#" className="block w-fit">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SPL_App__5BOfficial_5D-jAjYVfeMDacqrx8OhE0rDzNSIQo9uQ.png"
                  alt="Download on Mac App Store"
                  width={200}
                  height={60}
                  className="h-[46px] w-auto"
                />
              </Link>
              <Link href="#" className="block w-fit">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SPL_App__5BOfficial_5D-jAjYVfeMDacqrx8OhE0rDzNSIQo9uQ.png"
                  alt="Get it on Google Play"
                  width={200}
                  height={60}
                  className="h-[46px] w-auto"
                />
              </Link>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}