import React from "react";
import { SkillsCarousal } from "./components";
import { ButtonWithIcon, Heading } from "../genralComponents";
import { FaGraduationCap } from "react-icons/fa";

export const Skills = () => {
  return (
    <div className="w-full flex justify-start items-start flex-col xl:px-16 lg:px-16 md:px-16 sm:px-5 xs:px-5 xss:px-5 py-5 relative">
      <ButtonWithIcon Icon={FaGraduationCap} text={"Skills"} />
      <Heading prefix={"My"} postfix={"Skills"} />
      <p className="text-md text-primary leading-6 mb-6">
        Tools and technologies I use to design, build, and ship products.
      </p>
      <SkillsCarousal />
    </div>
  );
};
