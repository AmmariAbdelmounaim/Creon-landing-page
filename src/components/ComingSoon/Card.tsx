import { ReactNode } from "react"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"

import ComingSoonImg from "../../../public/images/ComingSoonImg.png"
import { Badge } from "../Navbar/Horizontal/Badge"

export interface CardProps {
  title: string
  description: string
  image: StaticImport
  content: string
}

export default function Card({
  title,
  description,
  image,
  content,
}: CardProps) {
  return (
    <div className="group relative h-[41.2rem] w-[28.3rem] rounded-md bg-grey-line/60">
      {/* Badge */}
      <Badge variant={"card"}>coming soon</Badge>
      {/* Title */}
      <h2 className="absolute left-[1.88rem] top-[1.87rem] font-monumentextended text-lg uppercase text-white ">
        {title}
      </h2>
      {/* Description */}
      <h3 className="absolute left-[1.88rem] top-[5.69rem] inline-block bg-gradient-to-r from-blue to-purple bg-clip-text font-satoshi text-md font-bold text-transparent">
        {description}
      </h3>
      {/* Image */}
      <div className="absolute left-0 top-[11.19rem] h-[14.625rem] w-[26.4375rem] rounded-r-md">
        <div className="relative size-full rounded-r-md">
          {/* Gradient */}
          <div className="absolute left-0 top-0 z-40 size-full rounded-r-md bg-gradient-to-t from-blue to-purple mix-blend-color" />
          {/* Image */}
          <div className="absolute left-0 top-0 z-30 size-full overflow-hidden rounded-r-md">
            <Image
              src={image}
              alt="coming soon image 1"
              className="h-full rounded-r-md object-cover transition duration-300 group-hover:scale-110 group-hover:object-cover "
            />
          </div>
        </div>
      </div>
      {/* Content */}
      <p className="text-small absolute left-[1.88rem] top-[27.56rem] max-w-[24.56rem] font-satoshi text-white ">
        {content}
      </p>
    </div>
  )
}
