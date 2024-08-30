"use client"

import { Fragment, useEffect, useState } from "react"

import ComingSoonSection from "@/components/ComingSoon"
import CreonPassSection from "@/components/CreonPass"
import Footer from "@/components/Footer"
import FooterVideo from "@/components/Footer/FooterVideo"
import HeroSection from "@/components/Hero"
import LastSection from "@/components/LastSection"
import OurMissionSection from "@/components/OurMission"
import ProfitingSection from "@/components/Profiting"

export default function Home() {
  const [isLoaded0, setIsLoaded0] = useState<boolean>(false)
  const [isLoaded1, setIsLoaded1] = useState<boolean>(false)
  const [isLoaded2, setIsLoaded2] = useState<boolean>(false)
  useEffect(() => {
    console.log("isLoaded0", isLoaded0)
    console.log("isLoaded1", isLoaded1)
    console.log("isLoaded2", isLoaded2)
  }, [isLoaded0, isLoaded1, isLoaded2])

  return (
    <main className="relative">
      {(!isLoaded0 || !isLoaded1 || isLoaded2) && (
        <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black text-white">
          Loading ...
        </div>
      )}

      <HeroSection setIsLoaded={setIsLoaded0} />
      <CreonPassSection setIsLoaded={setIsLoaded1} />
      <ProfitingSection />
      <OurMissionSection />
      <ComingSoonSection />
      <LastSection />
      <Footer />
      <FooterVideo setIsLoaded={setIsLoaded2} />
    </main>
  )
}
