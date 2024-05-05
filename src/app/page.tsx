"use client"

import ComingSoonSection from "@/components/ComingSoon"
import CreonPassSection from "@/components/CreonPass"
import Footer from "@/components/Footer"
import FooterVideo from "@/components/Footer/FooterVideo"
import HeroSection from "@/components/Hero"
import LastSection from "@/components/LastSection"
import OurMissionSection from "@/components/OurMission"
import ProfitingSection from "@/components/Profiting"

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <CreonPassSection />
      <ProfitingSection />
      <OurMissionSection />
      <ComingSoonSection />
      <LastSection />
      <Footer />
      <FooterVideo />
    </main>
  )
}
