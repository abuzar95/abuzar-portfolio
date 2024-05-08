import React from "react";
import { Heading } from "../../genralComponents";
import { ExperienceList } from "./ExperienceList";

export const WorkExperience = ({ data, prefix, postfix }) => {
  return (
    <div className="xl:px5 lg:px-8 md:px-5 sm:px-0 xs:px-0 xss:px-0 py-2 rounded-2xl 2xl:p-13">
      <Heading prefix={prefix} postfix={postfix} />
      <p className="text-md text-primary leading-6 mb-5">
      I design products that are more than pretty. I make them shippable and usable, tempor non mollit dolor et do aute
      </p>
      <ExperienceList />
    </div>
  );
};
