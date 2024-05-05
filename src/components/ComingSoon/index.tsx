import { comingSoonItems } from "@/constants/comingSoonItems"

import Card from "./Card"

export default function ComingSoonSection() {
  return (
    <div className="flex min-h-screen w-full items-center justify-between px-60">
      {comingSoonItems.map((item, index) => {
        const { title, content, image, description } = item
        return (
          <Card
            key={index}
            title={title}
            description={description}
            image={image}
            content={content}
          />
        )
      })}
    </div>
  )
}
