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
          "Here are words from happy clients: their testimonials reflect the quality of my work, customer satisfaction, and the positive impact my services have had on their businesses and projects."
        }
      />
      <RatingCarousal />
    </div>
  );
};
