import Logo from "@/assets/Logo.svg"
import { navItems } from "@/constants/navItems"

import ConnectButton from "./ConnectButton"
import NavItem from "./NavItem"

export default function NavbarHorizontal() {
  return (
    <div className="absolute top-0 left-0 z-50 w-full">
      <nav className="flex justify-between items-center mx-[3.13rem] mt-[1.87rem]">
        <Logo className="w-[8.75rem] h-[2.4375rem]" />
        <div className="flex gap-[3.63rem]">
          <ul className="gap-10 flex items-center">
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
      </nav>
    </div>
  )
}
