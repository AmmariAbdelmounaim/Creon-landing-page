import LeftSection from "./LeftSection"
import RightSection from "./RightSection"

export default function CreonPassSection() {
  return (
    <div className="absolute top-full flex h-screen items-center gap-[2.5rem] pl-60">
      {/* Left */}
      <LeftSection />
      {/* Right */}
      <RightSection />
    </div>
  )
}
