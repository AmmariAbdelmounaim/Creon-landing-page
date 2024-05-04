import Link from "next/link"

export default function LeftSection() {
  return (
    <div className="flex w-[43.75rem]  flex-shrink-0 flex-col items-start">
      <h1 className=" font-monumentextended text-xl uppercase text-white">
        Creon Pass NFT
      </h1>
      <div className="mb-[1.94rem] mt-[1.87rem] h-[0.0625rem] w-[43.75rem] bg-grey-line"></div>
      <h3 className="from-blue to-purple bg-clip-text font-satoshi text-md font-bold text-transparent bg-gradient-[90deg]">
        The Creon NFT pass unlocks access to AI projects, the Creon launchpad,
        and a ticket to generate passive income through AI-driven tools
      </h3>
      {/* Creon pass content */}
      <div className="mb-[4.5rem] mt-[2.5rem] flex flex-col items-start gap-[0.62rem]">
        <p className="rounded-md border border-grey-line px-[1.12rem] pb-[1rem] pt-[0.75rem] font-satoshi text-sm text-white">
          Pre-launch investment opportunities for upcoming AI projects
        </p>
        <p className="rounded-md border border-grey-line px-[1.12rem] pb-[1rem] pt-[0.75rem] font-satoshi text-sm text-white">
          Free and early access to Creon built AI projects
        </p>
        <p className="rounded-md border border-grey-line px-[1.12rem] pb-[1rem] pt-[0.75rem] font-satoshi text-sm text-white">
          Higher allocation limits on the Creon AI Launchpad
        </p>
        <p className="rounded-md border border-grey-line px-[1.12rem] pb-[1rem] pt-[0.75rem] font-satoshi text-sm text-white">
          Revenue share distribution from Creon built AI projects
        </p>
      </div>

      {/* Creon pass button */}
      <Link
        href={"#"}
        className="group relative  inline-flex h-[3.375rem] w-[28.3125rem] items-center justify-center overflow-hidden rounded-md from-blue to-purple pb-5 pt-4 font-satoshi  text-sm font-bold capitalize text-white transition duration-300 ease-in-out bg-gradient-[90deg] hover:to-blue"
      >
        <span className="absolute flex h-full w-full transform items-center  justify-center transition-all duration-300 ease-linear group-hover:-translate-y-full">
          buy creon pass
        </span>
        <span className="invisible relative ">buy creon pass</span>
        <span className="absolute inset-0 flex h-full w-full translate-y-full items-center  justify-center duration-300  ease-linear group-hover:translate-y-0">
          buy creon pass
        </span>
      </Link>
    </div>
  )
}
