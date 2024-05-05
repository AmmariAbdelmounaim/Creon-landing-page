export default function DarkShape() {
  return (
    <div className="relative z-20 h-full w-full bg-transparent">
      {/* left */}
      <div className="absolute left-0 top-0 h-full w-[17.625rem] bg-gradient-to-r from-black  " />
      {/* bottom */}
      <div className="absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-black" />
      {/* right 176 */}
      <div className="absolute right-0 top-0 h-full w-[17.625rem] bg-gradient-to-l from-black " />
    </div>
  )
}
