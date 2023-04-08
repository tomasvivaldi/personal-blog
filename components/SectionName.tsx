import React from "react";

type Props = {
  section: string;
};

const SectionName = ({ section }: Props) => {
  return (
    <div className="group text-4xl px-4 sm:px-10">
      <span
        className="before:w-8 before:h-[3px] before:bg-red-800 before:block before:mb-2
            -mt-2 "
      >
        {section}
      </span>
    </div>
  );
};

export default SectionName;
