const Banner = () => {
  return (
    <div
      className="flex flex-col justify-between  px-10 py-5 mb-10
          lg:flex-row lg:space-x-5 bg-[--primary1-dark1] dark:bg-[--primary1-dark2] text-white"
    >
      <div className="">
        <h1 className="text-4xl font-bold">
          Welcome to Tomas Vivaldi's Tech Hub
        </h1>
        <h2 className="max-w-[90%] mt-5 md:mt-8 font-semibold text-lg md:text-xl">
          Embrace the Future of{" "}
          <span className="underline underline-offset-2 decoration-1 decoration-white">
            Tech
          </span>{" "}
          <span className="underline underline-offset-2 decoration-1 decoration-white">
            Programming
          </span>{" "}
          And{" "}
          <span className="underline underline-offset-2 decoration-1 decoration-white">
            Design
          </span>{" "}
        </h2>
      </div>
      <div className="flex flex-col items-start cont w-fit">
        <p
          className=" md:mt-2 py-2 mt-6 font-bold min-w-[365px]
      "
        >
          🤝 Need my services or want to
          <span className="underline underline-offset-2 decoration-1 decoration-white">
            {" "}
            collaborate
          </span>{" "}
          ? 🤝
        </p>
        <p>
          Don't hesitate to{" "}
          <a
            href="mailto:contact@tomasvivaldi.com"
            className="hover:underline hover:underline-offset-4 hover:decoration-[--primary1]  hover:decoration-3
             font-extrabold"
          >
            Contact Me
          </a>
          !
        </p>
      </div>
    </div>
  );
};

export default Banner;
