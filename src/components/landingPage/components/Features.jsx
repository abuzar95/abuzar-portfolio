import React from "react";
import { IoIosDoneAll } from "react-icons/io";
export const Features = ({text}) => {
  return (
    <div className="flex justify-start items-center gap-2 mr-4">
      <span>
        <IoIosDoneAll className="text-secondary text-lg" />
      </span>
      <p className="text-sm text-primary capitalize">{text}</p>
    </div>
  );
};
