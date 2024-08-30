
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import NavbarHorizontal from "../Navbar/Horizontal"
import NavbarVertical from "../Navbar/Vertical"
import BorderGradientText from "./BorderGradientText"

export default function HeroSection({setIsLoaded}:{setIsLoaded:Dispatch<SetStateAction<boolean>>}) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  
  useEffect(() => {
    const video = document.getElementById("landingVideo") as HTMLVideoElement
      if(video.readyState === 4 ) {
        setIsLoaded(true);
      }
  }, [setIsLoaded]);

  return (
    <div className="relative min-h-screen">
      {/* navs */}
      <NavbarHorizontal isOpen={isOpen} setIsOpen={setIsOpen} />
      <NavbarVertical isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={cn(
          "absolute left-0 top-0 z-30 h-screen w-full",
          isOpen && "blur-md"
        )}
      >
        <div className="relative h-full w-full">
          {/* Gradient */}
          <div className="from-4% via-47% absolute left-0 top-0 z-40 h-full w-full from-purple via-blue to-black to-80% mix-blend-soft-light bg-gradient-[175deg]" />
          {/* Video */}
          <video
            id="landingVideo"
            className="absolute z-30 h-full w-full object-cover"
            muted
            loop
            autoPlay
            preload="none"
          >
            <source src="/videos/main-background-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Text */}
          <div className="absolute top-[34.69rem] z-40 gap-10 px-60">
            <h1 className="mb-10 w-full font-monumentextended text-xl uppercase text-white">
              The world&apos;s first platform for Tokenizing AI blockchain projects
            </h1>
            <BorderGradientText />
          </div>
        </div>
      </div>
    </div>
  )
}
