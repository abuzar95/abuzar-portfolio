import React from "react";
import { NumberWithSubHead } from "./NumberWithSubHead";
const contactData = [
  {
    key: "6",
    value: "Years Of Experience",
  },
  {
    key: "12",
    value: "Handled Projects",
  },
  {
    key: "5",
    value: "Open Source Libraries",
  },
  {
    key: "18",
    value: "Awards Won",
  },
];
export const AwardsRow = () => {
  return (
    <div
      className="w-full flex  justify-between items-start gap-4 mb-6 xl:px-8 lg:px-8 md:px-8 sm:px-0 xs:px-0 xss:px-0"
      style={{ display: "flex", flexWrap: "wrap" }}
    >
      {contactData.map((data, index) => (
        <div key={index}>
          <NumberWithSubHead number={data?.key} subHead={data?.value} />
        </div>
      ))}
    </div>
  );
};
