import React from "react";
import { EducationList } from "./EducationList";
import { Heading } from "../../genralComponents";

export const Education = ({ data, prefix, postfix }) => {
  return (
    <div className="xl:px5 lg:px-8 md:px-5 sm:px-0 xs:px-0 xss:px-0 py-8 md:p-8 rounded-2xl  lg:p-10 2xl:p-13">
      <Heading prefix={prefix} postfix={postfix} />
      <p className="text-md text-primary leading-6 mb-5">
        Education is an investment in knowledge, providing the expertise needed
        for success. My academic background supports my ability to deliver
        impactful results.
      </p>
      <EducationList />
    </div>
  );
};
