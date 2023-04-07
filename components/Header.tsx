import Link from "next/link";
import Image from "next/image";
import DarkModeButton from "./DarkModeButton";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header
      className="flex items-center justify-between space-x-2 
    font-bold px-10 py-5"
    >
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            src="/images/temp-logo.png"
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
      </div>

      <div className="flex items-center space-x-6">
        <Link
          href="https://www.tomasvivaldi.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="gap-3 px-4 py-3 text-sm md:text-base bg-[--primary1] text-[#FFF] hover:bg-[--primary1-dark1] transition-all duration-[350ms] ease-out flex items-center rounded-lg text-center"
        >
          Back to Main Website
          <ArrowUturnLeftIcon className="h-6 w-6 text-white" />
        </Link>
        <DarkModeButton />
      </div>
    </header>
  );
};

export default Header;
