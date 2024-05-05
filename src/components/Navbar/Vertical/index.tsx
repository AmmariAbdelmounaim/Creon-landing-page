"use client"

import { Dispatch, SetStateAction } from "react"
import CrossIcon from "@/assets/CrossIcon.svg"
import { navItems } from "@/constants/navItems"

import { cn } from "@/lib/utils"
import LogosFooter from "@/components/Footer/LogosFooter"

import NavItem from "../Horizontal/NavItem"

interface NavbarVerticalProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function NavbarVertical({
  isOpen,
  setIsOpen,
}: NavbarVerticalProps) {
  return (
    <div
      className={cn(
        "absolute right-0 top-0 z-50 h-screen min-w-[13rem] bg-black pl-[1.88rem] transition-transform sm:hidden",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      {/* Buttons */}
      <div className="mb-[1.88rem] mt-[1.25rem] flex  gap-[0.94rem] pr-[0.94rem]">
        <button className="rounded-md border-[2px] border-white px-[1.44rem] pb-[0.69rem] pt-[0.56rem] font-satoshi text-sm font-bold capitalize text-white transition-colors ease-linear hover:border-blue hover:bg-blue">
          Connect
        </button>
        <button
          className="rounded-md border-[2px] border-white p-[0.81rem] font-satoshi text-sm font-bold capitalize text-white transition-colors ease-linear hover:border-blue hover:bg-blue"
          onClick={() => {
            setIsOpen(false)
          }}
        >
          <CrossIcon className="size-[0.75rem]" />
        </button>
      </div>
      {/* Divider */}
      <div className="mb-4 h-[1px] w-full bg-grey-line" />
      {/* Links */}
      {navItems.map((item, index) => {
        const { text, withBadge } = item
        return (
          <div key={index}>
            <NavItem text={text} withBadge={withBadge} />
            <div className="my-[1rem] h-[1px] w-full bg-grey-line" />
          </div>
        )
      })}
      {/* socials */}
      <div className="absolute bottom-[1.87rem] left-[1.88rem]">
        <LogosFooter />
      </div>
    </div>
  )
}
