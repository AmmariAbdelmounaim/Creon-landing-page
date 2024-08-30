
import { Dispatch, SetStateAction, useEffect } from "react"

export default function VideoWithGradient({setIsLoaded}:{setIsLoaded:Dispatch<SetStateAction<boolean>>}) {
  useEffect(() => {
    const video = document.getElementById('videWithGradient');

    if (video) {
      video.onloadeddata = () => {
        setIsLoaded(true);
      };
    }
  }, [setIsLoaded]);

  return (
    <div className="absolute right-0 top-0 size-[50.5rem] flex-1 ">
      <div className="relative size-full">
        {/* Gradient */}
        <div className="from-4.29%  to-95.71% absolute left-0 top-0 z-40 h-full w-full from-purple to-blue-44 mix-blend-soft-light bg-gradient-[175deg]"></div>
        {/* Video */}
        <video
          id="videWithGradient"
          className="absolute left-0 top-0 size-[50rem]"
          muted
          loop
          autoPlay
          preload="none"
        >
          <source src="/videos/nft-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}
