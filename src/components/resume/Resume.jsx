import React from "react";
import { WorkExperience } from "./components/WorkExperiance";
import { Education } from "./components/Education";

export const Resume = () => {
  return (
    <div className="px-1 py-1">
      <WorkExperience
        prefix={"Work"}
        postfix={"Experience"}
        defaultOpen={false}
      />
      <Education prefix={"My"} postfix={"Education"} defaultOpen={false} />
    </div>
  );
};
