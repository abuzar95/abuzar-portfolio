import React, { useState } from "react";
import { SkillsCarousal } from "./components";
import { ButtonWithIcon, Heading } from "../genralComponents";
import { FaGraduationCap } from "react-icons/fa";

export const Skills = () => {
  const [direction, setDirection] = useState("");

  const handleClick = (direction) => {
    setDirection(direction);
  };

  return (
    <div className="w-full flex justify-start items-start flex-col xl:px-16 lg:px-16 md:px-16 sm:px-5 xs:px-5 xss:px-5 py-5 relative">
      <ButtonWithIcon Icon={FaGraduationCap} text={"Skills"} />
      <Heading prefix={"My"} postfix={"Advantages"} />
      <p className="text-md text-primary leading-6 mb-5">
      Unleashing my potential for your success: A showcase of skills and results.
      </p>
      <div className=" absolute w-[50%] right-0">
        <div className="absolute hidden lg:flex  justify-end pr-3 gap-8 items-center w-full top-16">
          <button
            onClick={() => handleClick("left")}
            className="btn btn-circle bg-transparent  border-night-black"
          >
            ❮
          </button>
          <button
            onClick={() => handleClick("right")}
            className="btn btn-circle bg-transparent  border-night-black"
          >
            ❯
          </button>
        </div>
      </div>
      
      <SkillsCarousal direction={direction} parentClick={handleClick} />
    </div>
  );
};
