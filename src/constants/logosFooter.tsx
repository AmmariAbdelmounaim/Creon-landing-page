import DiscordLogo from "@/assets/Discord.svg"
import TelegramLogo from "@/assets/Telegram.svg"
import TwitterLogo from "@/assets/Twitter.svg"

import { LogoProps } from "@/components/Footer/Logo"

export const logosFooter: LogoProps[] = [
  {
    logo: <TelegramLogo className="z-40 size-4 group-hover:cursor-pointer" />,
  },
  {
    logo: <DiscordLogo className="z-40 size-4 group-hover:cursor-pointer" />,
  },
  {
    logo: <TwitterLogo className="z-40 size-4 group-hover:cursor-pointer" />,
  },
]
