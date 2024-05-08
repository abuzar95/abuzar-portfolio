import React from "react";
import { ProfileParaSection } from "./components";
import { ButtonWithIcon } from "..";
import { IoHomeOutline } from "react-icons/io5";

export const Introduce = () => {
  return (
    <div id="intro" className=" w-full  flex justify-start items-start flex-col p-5 border-night-black bg-primaryDark rounded-xl">
      <div className="w-full flex justify-start items-start flex-col ">
        <ButtonWithIcon Icon={IoHomeOutline} text={"Introduce"} />
        <div className="w-full">
          <ProfileParaSection />
        </div>
      </div>
    </div>
  );
};
