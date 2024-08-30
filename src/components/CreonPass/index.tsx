import { Dispatch, SetStateAction } from "react"
import LeftSection from "./LeftSection"
import RightSection from "./RightSection"

export default function CreonPassSection({setIsLoaded}:{setIsLoaded:Dispatch<SetStateAction<boolean>>}) {
  return (
    <div className="flex h-screen items-center gap-[2.5rem] pl-60">
      <LeftSection />
      <RightSection setIsLoaded={setIsLoaded} />
    </div>
  )
}
