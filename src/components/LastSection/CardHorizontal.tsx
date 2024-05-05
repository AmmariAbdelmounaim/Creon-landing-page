import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"

export interface CardHorizontalProps {
  title: string
  content: string
  image: StaticImport
}

export default function CardHorizontal({
  title,
  content,
  image,
}: CardHorizontalProps) {
  return (
    <div className="z-50 flex w-full items-center gap-10 rounded-md bg-grey-line/60 pl-10">
      {/* Content */}
      <div className="flex flex-col gap-[0.94rem]">
        <h2 className="font-monumentextended text-lg uppercase text-white">
          {title}
        </h2>
        <p className="text-small font-satoshi text-white ">{content}</p>
      </div>
      {/* Image with gradient */}
      <div className="relative min-h-[18.875rem] min-w-[28.3125rem]">
        {/* Gradient */}
        <div className="from-4.29% to-95.05% absolute left-0 top-0 h-full w-full from-blue to-purple mix-blend-overlay bg-gradient-[175deg]" />
        {/* Image */}
        <Image
          src={image}
          className="h-[18.875rem] w-[28.3125rem] object-cover"
          alt="last section image"
        />
      </div>
    </div>
  )
}
