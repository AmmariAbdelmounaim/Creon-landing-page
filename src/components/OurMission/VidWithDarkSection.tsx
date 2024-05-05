import Image from "next/image"
import CreonVectorLogo from "@/assets/CreonVectorLogo.svg"

import OurMissionImg from "../../../public/images/OurMissionImg.png"
import DarkShape from "./DarkShape"

export default function VidWithDarkSection() {
  return (
    <div className="relative  h-[31.375rem] w-[52.25rem]">
      <div className="absolute left-0 top-0 h-[31.375rem] w-[52.25rem] ">
        {/* Dark shape */}
        <DarkShape />
        <Image
          src={OurMissionImg}
          className="absolute left-0 top-0"
          alt="image of our mission"
        />
      </div>
      {/* Double Logo */}
      <CreonVectorLogo className="absolute left-[22.75rem] top-[11.1rem]  h-[9.25rem] w-[7rem]" />
      <CreonVectorLogo className="absolute left-[22.75rem] top-[11.1rem]  h-[9.25rem] w-[7rem]" />
    </div>
  )
}
