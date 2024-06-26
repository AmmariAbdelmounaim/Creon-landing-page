import React from "react"

export default function FooterVideo() {
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
          className=" h-full w-full object-cover"
          muted
          loop
          autoPlay
          preload="none"
        >
          <source src="/videos/roadmap-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}
