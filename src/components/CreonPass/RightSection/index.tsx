import { Dispatch, SetStateAction } from "react"
import DarkShape from "./DarkShape"
import VideoWithGradient from "./VideoWithGradient"

export default function RightSection({setIsLoaded}:{setIsLoaded:Dispatch<SetStateAction<boolean>>}) {
  return (
    <div className="relative h-[50.5rem] w-[53rem] flex-grow overflow-hidden">
      <DarkShape />
      <VideoWithGradient setIsLoaded={setIsLoaded} />
    </div>
  )
}
