"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Globe, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { BookingCartWrapper } from "@/components/cart/booking-cart-wrapper";
import logoPng from "@/public/logo-main-16_5.png";

export function Header() {
  return (
    <header className="w-full border-b">
      <div className="max-w-layout flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={logoPng}
            alt="Sunworld - The World of Wow"
            width={103}
            height={45}
            priority
          />
        </Link>

        {/* Center Content - Desktop Only */}
        <div className="hidden flex-1 items-center justify-center lg:flex">
          {/* Add navigation items here */}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          {/* Desktop View */}
          <div className="hidden lg:flex items-center space-x-4">
            <BookingCartWrapper />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="destructive-text" size="xs">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Tiếng Việt</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="destructive" className="rounded-full">
              Sign in
            </Button>
          </div>

          {/* Mobile View */}
          <div className="flex lg:hidden items-center space-x-4">
            <BookingCartWrapper />

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="destructive-text" size="xs">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Tiếng Việt</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu */}
            <Drawer direction="right">
              <DrawerTrigger asChild>
                <Button variant="destructive-text" size="xs">
                  <Menu className="h-5 w-5" />
                </Button>
              </DrawerTrigger>
              <DrawerContent  className="h-full w-[300px]">
                <div className="flex flex-col h-full">
                  <div className="p-4 space-y-4 flex-1">
                    <Button variant="secondary" size="lg" className="w-full">
                      Sign in
                    </Button>
                    <Button
                      className="w-full bg-[#e92127] text-white hover:bg-[#e92127]/90"
                      size="lg"
                    >
                      Get the App
                    </Button>
                  </div>
                  <DrawerClose asChild>
                    <Button className="m-4" variant="secondary-outline">
                      Close
                    </Button>
                  </DrawerClose>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;