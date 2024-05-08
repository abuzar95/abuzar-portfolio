import React from "react";
import { RatingCarousal } from "./components";
import { ButtonWithIcon, Heading } from "../genralComponents";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

export const Testimonial = () => {
  return (
    <div className="w-full flex justify-start items-start flex-col xl:px-16 lg:px-16 md:px-16 sm:px-5 xs:px-5 xss:px-5 py-5">
      <ButtonWithIcon Icon={IoChatboxEllipsesOutline} text={"Testimonial"} />
      <Heading
        prefix={"What"}
        postfix={"People Say"}
        description={
          "I design products that are more than pretty. I make them shippable and usable, tempor non mollit dolor et do aute"
        }
      />
      <RatingCarousal />
    </div>
  );
};
