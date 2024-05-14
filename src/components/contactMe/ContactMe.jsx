import React from "react";
import { ButtonWithIcon, Heading } from "../genralComponents";
import { IoMailOutline } from "react-icons/io5";
import { ContactForm } from "./components";
export const ContactMe = () => {
  return (
    <div className="w-full flex justify-start items-start flex-col px-16 py-5">
      <ButtonWithIcon Icon={IoMailOutline} text={"Contact"} />
      <Heading
        prefix={"Contact"}
        postfix={"Me"}
        description={
          "Contact me today to learn more about how my full-stack development services can benefit your business."
        }
      />
      <ContactForm />
    </div>
  );
};
