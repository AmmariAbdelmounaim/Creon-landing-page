import type { Metadata } from "next"
import localFont from "next/font/local"

import "@/styles/globals.css"

// Local-Fonts
const monument_extended = localFont({
  src: "../styles/fonts/monument-extended/PPMonumentExtended-Regular.otf",
  variable: "--font-monument-extended",
})
const satoshi = localFont({
  src: [
    {
      path: "../styles/fonts/satoshi/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../styles/fonts/satoshi/Satoshi-Bold.otf",
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
      className={`${satoshi.variable} ${monument_extended.variable}`}
    >
      <body className="bg-black">{children}</body>
    </html>
  )
}
