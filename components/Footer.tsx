import React from "react";

const Footer = () => {
  return (
    <footer className="pt-8 ">
      <hr className="border-gray-400 lg:my-8 w-[90%] mx-auto " />
      <span className="block text-md text-center text-xs text-gray-500 my-6 lg:text-md">
        &copy; {new Date().getFullYear()}{" "}
        <a href="/" className="hover:underline">
          Tomas Vivaldi, All Rights Reserved.
        </a>
      </span>
    </footer>
  );
};

export default Footer;
