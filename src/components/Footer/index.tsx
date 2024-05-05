import Niftables from "@/assets/Niftables.svg"

import LogosFooter from "./LogosFooter"

export default function Footer() {
  return (
    <div className=" flex  items-center justify-between px-[15rem] pb-[2.56rem] pt-[1.37rem]">
      <div className="z-50 flex items-center gap-[5.63rem]">
        <p className=" font-satoshi text-[1rem] leading-[1.3rem] text-white">
          © Creon 2023. All rights reserved.
        </p>
        {/* Logos */}
        <LogosFooter />
      </div>
      <div className="z-50 flex items-center justify-center gap-1">
        <p className="font-satoshi text-[1rem] leading-[1.3rem] text-white">
          Powered by
        </p>
        <Niftables className="mt-[5px] h-[1.125rem] w-[6.3125rem]" />
      </div>
    </div>
  )
}
