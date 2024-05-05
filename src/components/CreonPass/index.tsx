import LeftSection from "./LeftSection"
import RightSection from "./RightSection"

export default function CreonPassSection() {
  return (
    <div className="flex h-screen items-center gap-[2.5rem] pl-60">
      <LeftSection />
      <RightSection />
    </div>
  )
}
