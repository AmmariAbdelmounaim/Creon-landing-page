import { ReactNode } from "react"
import Ellipse from "@/assets/Ellipse.svg"
import { logosFooter } from "@/constants/logosFooter"

import Logo from "./Logo"

export default function LogosFooter() {
  return (
    <div className="flex gap-[0.63rem]">
      {logosFooter.map((item, index) => {
        const { logo } = item
        return <Logo key={index} logo={logo} />
      })}
    </div>
  )
}
