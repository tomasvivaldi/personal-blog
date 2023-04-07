import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

const StudioNavbar = (props: any) => {
  return (
    <div>
      <>
        <div className="flex items-center justify-between p-3">
          <Link className="text-[--primary1-light] flex items-center" href="/">
            <ArrowUturnLeftIcon className="h-6 w-6 text-[--primary1-light] mr-2" />
            Back To Blog
          </Link>

          <div className="hidden md:flex p-3 rounded-lg justify-center items-center border-2 border-[--primary1] gap-2">
            <h1 className="text-sm font-bold text-white">
              Check out my Website
            </h1>
            <Link
              className="text-[--primary1] font-bold"
              href="https://www.tomasvivaldi.com/"
            >
              tomasvivaldi.com
            </Link>
          </div>
        </div>
        {props.renderDefault(props)}
      </>
    </div>
  );
};

export default StudioNavbar;
