import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

// Local-Fonts
const monument_extended = localFont({
  src: "./fonts/monument-extended/PPMonumentExtended-Black.otf",
  variable: "--font-monument-extended",
});
const satoshi = localFont({
  src: [
    {
      path: "./fonts/satoshi/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/satoshi/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "Niftables Challenge",
  description: "Niftables Coding Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${monument_extended.variable} ${satoshi.variable} `}
    >
      <body>{children}</body>
    </html>
  );
}
