import Link from "next/link"

export default function ConnectButton() {
  return (
    <Link href={"#"}>
      <button className="group relative inline-flex items-center  justify-center  overflow-hidden rounded-md border-[2px] border-white px-[1.88rem] pb-[0.81rem] pt-[0.69rem] font-satoshi text-sm font-bold capitalize text-white transition duration-300 ease-linear hover:border-blue hover:bg-blue">
        <span className="absolute flex h-full w-full transform items-center  justify-center transition-all duration-300 ease-linear group-hover:-translate-y-full">
          Connect
        </span>
        <span className="invisible relative ">Connect</span>
        <span className="absolute inset-0 flex h-full w-full translate-y-full items-center  justify-center duration-300  ease-linear group-hover:translate-y-0">
          Connect
        </span>
      </button>
    </Link>
  )
}
