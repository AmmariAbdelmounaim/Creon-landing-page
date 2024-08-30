import { useEffect, useRef } from "react"

export default function FooterVideo({
  setIsLoaded,
}: {
  setIsLoaded: (v: boolean) => void
}) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current;
  
    const handleLoadedData = () => {
      setIsLoaded(true);
    };
  
    if (video) {
      if (video.readyState >= 2) { // 2 is HAVE_CURRENT_DATA
        handleLoadedData();
      } else {
        video.addEventListener('loadeddata', handleLoadedData);
      }
    }
  
    return () => {
      if (video) {
        video.removeEventListener('loadeddata', handleLoadedData);
      }
    };
  }, [setIsLoaded]);

  return (
    <div className="absolute bottom-0 left-0 h-[60.625rem] w-full ">
      <div className="relative h-full w-full">
        {/* Dark shape */}
        <div className="absolute left-0 top-0 h-full w-full ">
          <div className="relative h-full w-full">
            {/* first dark shape */}
            <div className="absolute left-0 top-0 z-40 h-full w-full bg-gradient-to-b from-black" />
            {/* second dark shape */}
            <div className="absolute bottom-0 left-0 z-40 h-full w-full bg-gradient-to-t from-black" />
          </div>
        </div>
        {/* Gradient */}
        <div className="absolute left-0 top-0 z-40 bg-gradient-to-b from-purple to-blue"></div>
        <video
          ref={videoRef}
          id="footerVideo"
          className=" h-full w-full object-cover"
          muted
          loop
          autoPlay
          preload="auto"
        >
          <source src="/videos/roadmap-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}
