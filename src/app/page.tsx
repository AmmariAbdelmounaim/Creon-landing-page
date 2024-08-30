"use client"

import { useEffect, useState } from "react"
import ComingSoonSection from "@/components/ComingSoon"
import CreonPassSection from "@/components/CreonPass"
import Footer from "@/components/Footer"
import FooterVideo from "@/components/Footer/FooterVideo"
import HeroSection from "@/components/Hero"
import LastSection from "@/components/LastSection"
import OurMissionSection from "@/components/OurMission"
import ProfitingSection from "@/components/Profiting"
import DesktopOnlyMessage from "@/components/DesktopOnlyMessage"

export default function Home() {
  const [isLoaded0, setIsLoaded0] = useState<boolean>(false)
  const [isLoaded1, setIsLoaded1] = useState<boolean>(false)
  const [isLoaded2, setIsLoaded2] = useState<boolean>(false)
  const [isDesktop, setIsDesktop] = useState<boolean>(true)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1700)
    }

    handleResize() // Check initial screen size
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const showLoading = !isLoaded0 || !isLoaded1 || !isLoaded2

  return (
    <main className="relative">
      {isDesktop ? (
        <>
          {showLoading ? (
            <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black text-white">
              <div className="flex items-center justify-center space-x-2">
                <div className="h-5 w-5 animate-bounce rounded-full bg-purple-secondary [animation-delay:-0.3s]"></div>
                <div className="h-5 w-5 animate-bounce rounded-full bg-purple-secondary [animation-delay:-0.13s]"></div>
                <div className="h-5 w-5 animate-bounce rounded-full bg-purple-secondary"></div>
              </div>
            </div>
          ) : null}
          <HeroSection setIsLoaded={setIsLoaded0} />
          <CreonPassSection setIsLoaded={setIsLoaded1} />
          <ProfitingSection />
          <OurMissionSection />
          <ComingSoonSection />
          <LastSection />
          <Footer />
          <FooterVideo setIsLoaded={setIsLoaded2} />
        </>
      ) : (
        <DesktopOnlyMessage />
      )}
    </main>
  )
}