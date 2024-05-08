import React from "react";

export const ContactIcons = ({ Icon, title, sub }) => {
  return (
    <div className="w-full flex justify-start items-center">
      <div className="w-[20%] flex justify-start items-center">
        <Icon className="text-secondary text-[50px]" />
      </div>
      <div className="w-[70%] flex flex-col justify-start items-start gap-2">
        <h4 className="text-white font-medium mb-1">{title}</h4>
        <p className="font-light text-sm text-primary">{sub}</p>
      </div>
    </div>
  );
};
