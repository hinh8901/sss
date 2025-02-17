import type { Metadata } from "next"
import { Be_Vietnam_Pro } from "next/font/google"
import "./globals.css"
import { BaseLayout } from "@/components/layout/base-layout"
import type React from "react";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { getTranslation } from "@/services/app-service";
import TranslationProvider from "@/components/providers/TranslationProvider";
import "./globals.css";
import { QueryProvider } from "@/components/providers/QueryProvider";


const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  variable: "--font-be-vietnam-pro",
})

export const metadata: Metadata = {
  title: "Sun World",
  description: "The World of Wow",
    generator: 'v0.dev'
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const translationData = await getTranslation()

  return (
    <html lang="en">
      <body className={`${beVietnamPro.variable} font-sans`}>
      <QueryProvider>
      <TranslationProvider data={translationData}>
        <BaseLayout>{children}</BaseLayout>
      </TranslationProvider>
      </QueryProvider>
      </body>
    </html>
  )
}

import './globals.css'