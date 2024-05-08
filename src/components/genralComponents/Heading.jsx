import React from "react";

export const Heading = ({ prefix, postfix, description }) => {
  return (
    <div className=" w-full flex justify-start items-start flex-col">
      <h1 className="lg:text-[50px] text-white text-[2.5rem]">
        <span
          style={{ fontFamily: "unset", fontWeight: "lighter" }}
          className="font-extralight"
        >
          {prefix}
        </span>{" "}
        <span className="text-secondary font-bold">{postfix}</span>
      </h1>
      <p className="text-lg text-primary leading-6 mb-5 ">{description}</p>
    </div>
  );
};
