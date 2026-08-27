import React from "react";

export const Heading = ({ prefix, postfix, description }) => {
  return (
    <div className=" w-full flex justify-start items-start flex-col">
      <h1 className="lg:text-[50px] text-ink text-[2.5rem] font-display leading-tight">
        <span className="font-medium tracking-tight">{prefix}</span>{" "}
        <span className="text-secondary font-bold tracking-tight">{postfix}</span>
      </h1>
      {description ? (
        <p className="text-lg text-read leading-7 mb-5 max-w-2xl">{description}</p>
      ) : null}
    </div>
  );
};
