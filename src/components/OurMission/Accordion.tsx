"use client"

import { ReactNode, useEffect, useRef, useState } from "react"
import ChevronDown from "@/assets/ChevronDown.svg"
import GradientDash from "@/assets/GradientDash.svg"
import Pentagone from "@/assets/Pentagone.svg"

import { cn } from "@/lib/utils"

export interface AccordionProps {
  icon: ReactNode
  title: string
  text: string
}

export default function Accordion({ icon, title, text }: AccordionProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [height, setHeight] = useState<string>("0px")
  const [opacity, setOpacity] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        setOpacity(1)
        setHeight(`${contentRef.current.scrollHeight}px`)
      } else {
        setOpacity(0)
        setHeight("1.87rem")
      }
    }
  }, [isOpen])

  return (
    <div className={cn(" flex max-w-[34.5rem] flex-col ")}>
      <div
        className="group flex min-w-full gap-[1.87rem] hover:cursor-pointer"
        onClick={toggleAccordion}
      >
        {/* Icon */}
        <div className="relative  h-[7.125rem] w-[6.25rem] group-hover:cursor-pointer">
          {icon}
          <Pentagone
            className={cn(
              "absolute bottom-0 left-0 right-0 top-0 z-30 m-auto h-[3.875rem] w-[3.5rem] fill-white/10 transition-all duration-300",
              isOpen && "fill-grey-line/100"
            )}
          />
          <Pentagone
            className={cn(
              "absolute bottom-0 left-0 right-0 top-0 z-20 m-auto h-[4.75rem]  w-[4.25rem] fill-grey-line transition-all duration-300 ",
              isOpen && "fill-white"
            )}
          />
          <GradientDash
            className={cn(
              "absolute left-0 right-0 mx-auto h-[7.125rem] w-[6.25rem]"
            )}
          />
        </div>
        {/* title + chevron */}
        <div className=" flex items-center gap-[1.25rem]">
          <h3 className="w-[22.875rem] cursor-pointer text-md font-medium text-white transition-colors duration-300 group-hover:text-blue">
            {title}
          </h3>
          <ChevronDown
            className={cn(
              "size-4 stroke-white transition-transform duration-300 group-hover:cursor-pointer group-hover:stroke-blue",
              isOpen && "-scale-y-100"
            )}
          />
        </div>
      </div>
      {/* Text underneathe */}
      <div
        ref={contentRef}
        className={cn(
          `overflow-hidden pl-[8.13rem] transition-all duration-500 ease-in-out`
        )}
        style={{ maxHeight: height, opacity: opacity }}
      >
        <p className=" mb-[1.87rem] font-satoshi text-sm text-white ">{text}</p>
      </div>
      {/* Divider */}
      <div className={cn(" h-[1px] w-full bg-grey-line")} />
    </div>
  )
}
