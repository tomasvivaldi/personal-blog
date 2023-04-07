"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  lightBackground: string;
  darkBackground: string;
};

const BlurredBg = ({ lightBackground, darkBackground }: Props) => {
  const [mount, setMount] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div className="md:mr-5 mt-1">
      {currentTheme === "dark" ? (
        <div className="-z-50 absolute blur-[100px] h-full w-full">
          <Image
            className="lg:object-center rounded-lg"
            src={darkBackground}
            alt="Section background"
            fill
            priority
          />
        </div>
      ) : (
        <div className="-z-50 absolute blur-3xl h-full w-full">
          <Image
            className="lg:object-center rounded-lg"
            src={lightBackground}
            alt="Section background"
            fill
            priority
          />
        </div>
      )}
    </div>
  );
};

export default BlurredBg;
