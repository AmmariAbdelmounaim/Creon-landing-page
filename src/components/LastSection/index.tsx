import { lastSectionItems } from "@/constants/lastSectionItems"

import Footer from "../Footer"
import CardHorizontal from "./CardHorizontal"

export default function LastSection() {
  return (
    <div className="flex min-h-screen w-full flex-col  gap-5 px-60 py-20">
      {lastSectionItems.map((item, index) => {
        const { title, content, image } = item
        return (
          <CardHorizontal
            key={index}
            title={title}
            content={content}
            image={image}
          />
        )
      })}
    </div>
  )
}
