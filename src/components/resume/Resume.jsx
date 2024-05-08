import React from "react";
import { useData } from "../../DataContext";
import { WorkExperience } from "./components/WorkExperiance";
import { Education } from "./components/Education";
import { ButtonWithIcon } from "../genralComponents";
import { IoNewspaperOutline } from "react-icons/io5";
export const Resume = () => {
  const { data } = useData();
  return (
    <div className="xl:px-8 lg:px-8 md:px-8 sm:px-5 xs:px-5 xss:px-5 py-5">
      <ButtonWithIcon Icon={IoNewspaperOutline} text={"Resume"} />
      <WorkExperience
        data={data?.experience}
        prefix={"Work"}
        postfix={"Experience"}
      />
      <Education data={data?.education} prefix={"My"} postfix={"Education"} />
    </div>
  );
};
