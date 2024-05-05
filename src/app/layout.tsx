import type { Metadata } from "next"
import localFont from "next/font/local"

import "@/styles/globals.css"

import { cn } from "@/lib/utils"

// Local-Fonts
const monument_extended = localFont({
  src: "../styles/fonts/monument-extended/MonumentExtended-Regular.woff2",
  variable: "--font-monument-extended",
})
const satoshi = localFont({
  src: [
    {
      path: "../styles/fonts/satoshi/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../styles/fonts/satoshi/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
})

export const metadata: Metadata = {
  title: "Niftables Challenge",
  description: "Niftables Coding Challenge",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn(
        `scrollbar-thumb-purple scrollbar-thin scrollbar-track-black min-h-screen  bg-black ${satoshi.variable} ${monument_extended.variable}`
      )}
    >
      <body>{children}</body>
    </html>
  )
}
