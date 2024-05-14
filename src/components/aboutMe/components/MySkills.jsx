import React, { useState } from "react";
import { Heading, TransparentButton } from "../../genralComponents";
import { ContectMe } from "./ContectMe";
import { useData } from "../../../DataContext";

export const MySkills = () => {
  const { data } = useData();

  const [displayedSkills, setDisplayedSkills] = useState(10);

  // Handler for displaying more projects
  const handleMoreSkills = () => {
    setDisplayedSkills(data?.skills?.length);
  };
  // Handler for displaying fewer projects
  const handleLessSkills = () => {
    setDisplayedSkills(10);
  };

  return (
    <div className="xl:p-8 lg:p-8 md:p-8 sm:p-0 xs:p-0 xss:p-0">
      <div className="w-full flex flex-col justify-start items-start mb-5">
        <Heading prefix={"About"} postfix={"Me"} />
        {/* <p className="text-primary text-sm leading-7 tracking-wider">
          Hi, my name is{" "}
          <strong className="text-white text-sm">Brown Reddick </strong>and I
          began using WordPress when first began. spent most of my waking hours
          for the last ten years designing, programming and operating WordPress
          sites go beyond with exclusive designer
        </p> */}
        <p className="text-primary text-md leading-7 tracking-wider">
          {data?.about}
        </p>
      </div>

      <div className="w-full flex gap-4 items-start xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-wrap">
        {data?.skills?.slice(0, displayedSkills).map((i) => (
          <TransparentButton
            text={i?.title?.skillName}
            rating={`${i?.ratings}%`}
          />
        ))}
        {/* <TransparentButton text={"Bootstrap"} rating={"98%"} />
        <TransparentButton text={"TailwindCss"} rating={"98%"} /> */}
      </div>
      {data?.skills?.length > 3 && (
        <div className="w-full flex justify-center items-center">
          {displayedSkills < data?.skills?.length ? (
            <button
              className="py-2 px-4 bg-transparent rounded-full text-sm text-[#069c7aff] hover:text-white hover:bg-[#069c7aff]"
              style={{border: "1px dashed #069c7aff"}}
              onClick={handleMoreSkills}
            >
              More Skills
            </button>
          ) : (
            <button
              className="py-2 px-4 bg-transparent rounded-full text-sm text-[#069c7aff] hover:text-white hover:bg-[#069c7aff]"
              style={{border: "1px dashed #069c7aff"}}
              onClick={handleLessSkills}
            >
              Less Skills
            </button>
          )}
        </div>
      )}
      <div className="mb-6">
        <ContectMe />
      </div>
    </div>
  );
};
