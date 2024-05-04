import Image from "next/image"
import CreonPassVid from "../../../../public/images/CreopPassVid.png"

export default function VideoWithGradient() {
  return (
    <div className="absolute right-0 top-0 size-[50.5rem] flex-1 ">
      <div className="relative size-full">
        {/* Gradient */}
        <div className="from-4.29%  to-95.71% to-blue-44 absolute left-0 top-0 z-40 h-full w-full from-purple mix-blend-soft-light bg-gradient-[175deg]"></div>
        {/* Video */}
        <Image
          src={CreonPassVid}
          className="absolute left-0 top-0 size-[50rem]"
          alt="fake image"
        />
      </div>
    </div>
  )
}
