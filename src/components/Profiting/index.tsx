export default function ProfitingSection() {
  return (
    <div className="flex min-h-screen w-full flex-col justify-center px-60">
      {/* Title */}
      <h1 className="text-left font-monumentextended text-xl uppercase text-white">
        Profiting Through
      </h1>
      <h2 className=" from-blue to-purple bg-clip-text text-right font-monumentextended text-lg uppercase text-transparent bg-gradient-[90deg]">
        AI Innovation & Decentralization
      </h2>
      {/* Content */}
      <div className=" mt-[5.19rem] flex w-full justify-between">
        <div className="w-[52rem]">
          <div className="relative w-[52rem]">
            <div className="absolute left-0 top-0 z-40 h-full w-full from-purple to-blue-44 mix-blend-soft-light bg-gradient-[175deg]"></div>
            <video className="h-auto w-full" muted loop autoPlay preload="auto">
              <source src="/videos/creon-logo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="ml-10 h-auto w-[0.625rem] bg-grey-line" />

        <div className="flex h-auto flex-col justify-center gap-[1.75rem] px-[1.94rem]">
          <h3 className="font-satoshi text-md font-bold text-white">
            The dynamic community driven business model of the future.
          </h3>
          <p className="font-satoshi text-sm text-white">
            At Creon, we blend the power of AI tools with the dynamic crypto and
            NFT markets, utilizing an innovative business model to drive
            profitability. This approach empowers our community, as our NFT and
            token holders directly benefit from the growth and prosperity of the
            Creon network, creating a win-win scenario for both our community
            and for the projects we launch.
          </p>
        </div>

        <div className="h-auto w-[0.625rem] bg-grey-line" />
      </div>
    </div>
  )
}
