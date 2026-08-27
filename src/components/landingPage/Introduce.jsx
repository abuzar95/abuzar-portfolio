import React from "react";
import { ProfileParaSection } from "./components";

export const Introduce = () => {
  return (
    <div
      id="intro"
      className="w-full flex justify-start items-start flex-col p-5 bg-primaryDark rounded-2xl"
    >
      <div className="w-full flex justify-start items-start flex-col">
        <div className="w-full">
          <ProfileParaSection />
        </div>
      </div>
    </div>
  );
};
