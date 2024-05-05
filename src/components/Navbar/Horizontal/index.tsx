"use client"

import { Dispatch, SetStateAction, useState } from "react"
import BurgerMenu from "@/assets/BurgerMenu.svg"
import Logo from "@/assets/Logo.svg"
import { navItems } from "@/constants/navItems"

import ConnectButton from "./ConnectButton"
import NavItem from "./NavItem"

interface NavbarHorizontalProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function NavbarHorizontal({
  isOpen,
  setIsOpen,
}: NavbarHorizontalProps) {
  return (
    <div className="absolute left-0 top-0 z-40 w-full">
      <nav className="mx-[3.13rem] mt-[1.87rem] flex items-center justify-between">
        <Logo className="h-[2.4375rem] w-[8.75rem]" />
        <div className="hidden sm:flex sm:gap-[3.63rem]">
          <ul className="flex items-center gap-10">
            {navItems.map((item, index) => {
              const { text, withBadge } = item
              return (
                <li key={index}>
                  <NavItem text={text} withBadge={withBadge} />
                </li>
              )
            })}
          </ul>
          <ConnectButton />
        </div>
        <button
          className="group block rounded-md border-[2px] border-white p-[0.6rem] font-satoshi text-sm font-bold capitalize text-white transition-colors duration-300 ease-linear hover:bg-white sm:hidden"
          onClick={() => {
            setIsOpen(true)
          }}
        >
          <BurgerMenu className="size-[1rem] fill-white group-hover:fill-black" />
        </button>
      </nav>
    </div>
  )
}
