import Link from "next/link"

import HeroSection from "@/components/Hero"
import NavbarHorizontal from "@/components/Navbar/Horizontal"
import CreonPassSection from "@/components/CreonPass"
export default function Home() {
  return (
    <main className="relative min-h-screen">
      <NavbarHorizontal />
      <HeroSection />
      <CreonPassSection />
    </main>
  )
}
