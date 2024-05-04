import Image from "next/image"

import HeroImage from "../../../public/images/HeroImg.png"
import BorderGradientText from "./BorderGradientText"

export default function HeroSection() {
  return (
    <div className="absolute left-0 top-0 z-40 h-screen w-full">
      <div className="relative h-full w-full">
        {/* Gradient */}
        <div className="from-4.29% via-47.39% to-95.05% absolute left-0 top-0 z-40 h-full w-full from-purple via-blue to-black mix-blend-soft-light bg-gradient-[175deg]" />
        {/* Text */}
        <Image
          src={HeroImage}
          alt="HeroImg"
          className="absolute z-30 h-full w-full"
        />
        {/* Video */}
        <div className=" absolute top-[34.69rem] z-40  gap-10 px-60">
          <h1 className="mb-10 w-full font-monumentextended text-xl uppercase text-white">
            The world&apos;s first platform for Tokenizing AI blockchain
            projects
          </h1>
          <BorderGradientText />
        </div>
      </div>
    </div>
  )
}
