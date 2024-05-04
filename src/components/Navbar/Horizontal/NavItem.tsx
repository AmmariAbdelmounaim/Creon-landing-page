import Link from "next/link";
import { LinkHTMLAttributes } from "react";
import { Badge } from "./Badge";

export interface NavItemProps  {
  text: string;
  withBadge: boolean;
}

export default function NavItem({ text, withBadge }: NavItemProps) {
  return (
    <Link href={"#"} className="font-satoshi flex gap-1 capitalize font-bold text-white text-sm hover:text-blue transition-all ">
      <span>{text}</span>
      {withBadge ? <Badge variant={"link"}/>: null}
    </Link>
  );
}
