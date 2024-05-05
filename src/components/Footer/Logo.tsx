import { ReactNode } from "react"
import Ellipse from "@/assets/Ellipse.svg"

export interface LogoProps {
  logo: ReactNode
}

export default function Logo({ logo }: LogoProps) {
  return (
    <div className="group relative size-[2.125rem]">
      <Ellipse className="absolute left-0 top-0 z-30 size-full fill-transparent stroke-white transition-all duration-200 ease-linear group-hover:cursor-pointer group-hover:fill-blue group-hover:stroke-blue " />
      <div className="z-40 flex size-full items-center justify-center">
        {logo}
      </div>
    </div>
  )
}
