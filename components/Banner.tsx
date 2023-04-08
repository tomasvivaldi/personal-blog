const Banner = () => {
  return (
    <div
      className="flex flex-col justify-between px-5 sm:px-10 py-5 mb-10 rounded-xl
          lg:flex-row lg:space-x-5 bg-[--primary1-dark1] dark:bg-[--primary1-dark2] text-white"
    >
      <div className="">
        <h1 className="text-xl sm:text-4xl font-bold">
          Welcome to Tomas Vivaldi's Tech Hub
        </h1>
        <h2 className="max-w-[90%] mt-2 sm:mt-5 md:mt-8 font-semibold text-sm sm:text-lg md:text-xl">
          Embrace the Future of <span className="font-bold">Tech</span>
          {", "}
          <span className="font-bold">Programming</span> And{" "}
          <span className="font-bold">Design</span>{" "}
        </h2>
      </div>
      <div className=" flex-col items-start cont w-fit hidden sm:flex">
        <p
          className=" md:mt-2 py-2 mt-6 font-bold 
      "
        >
          Need my services or want to
          <span className=""> collaborate</span> ?
        </p>

        <a
          href="mailto:contact@tomasvivaldi.com"
          className="hover:underline hover:underline-offset-4 hover:decoration-[--primary1]  hover:decoration-3
             font-extrabold underline underline-offset-2 decoration-1 decoration-white"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Banner;
