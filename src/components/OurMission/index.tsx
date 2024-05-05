import { accordionItems } from "@/constants/accordionItems"

import Accordion from "@/components/OurMission/Accordion"

import VidWithDarkSection from "./VidWithDarkSection"

export default function OurMissionSection() {
  return (
    <div className="flex min-h-screen w-full justify-between px-60">
      {/* Left section with text and video */}
      <div>
        {/* Text */}
        <h1 className="w-[43.6875rem] font-monumentextended text-lg uppercase text-white">
          Our vision is to support the innovation of AI blockchain projects
          <span className="from-blue to-purple bg-clip-text   text-transparent bg-gradient-[90deg]">
            {" "}
            while prioritizing communities and democratizing profits
          </span>
        </h1>
        {/* vid */}
        <VidWithDarkSection />
      </div>
      {/* Right section for accordion */}
      {/* Accordion */}
      <div className=" z-40 flex flex-col gap-[1.87rem]">
        {accordionItems.map((item, index) => {
          const { icon, text, title } = item
          return <Accordion key={index} icon={icon} text={text} title={title} />
        })}
      </div>
    </div>
  )
}
