import React from "react";
import { ButtonWithIcon, Heading } from "../genralComponents";
import { IoMailOutline } from "react-icons/io5";
import { ContactForm } from "./components";

export const ContactMe = () => {
  return (
    <div className="w-full flex justify-start items-start flex-col px-5 sm:px-8 md:px-10 lg:px-12 py-5 mb-10 xl:mb-4">
      <ButtonWithIcon Icon={IoMailOutline} text={"Contact"} />
      <Heading
        prefix={"Contact"}
        postfix={"Me"}
        description={
          "Send a message and I’ll get back to you as soon as I can."
        }
      />
      <ContactForm />
    </div>
  );
};
