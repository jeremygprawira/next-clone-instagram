import Link from "next/link";
import { Instagram } from "lucide-react";
import { LuInstagram } from "react-icons/lu";
import { buttonVariants } from "./ui/button";

function Logo() {
  return (
    <Link
      href={"/dashboard"}
      className={buttonVariants({
        className:
          "hidden md:flex sideLink !mb-10 lg:hover:bg-transparent lg:!p-10",
        variant: "ghost",
        size: "lg",
      })}
    >
      <LuInstagram className="w-6 h-6 shrink-0 lg:hidden text-white" />
      <p className={`font-semibold text-xl hidden lg:block`}>Instagram</p>
    </Link>
  );
}

export default Logo;
