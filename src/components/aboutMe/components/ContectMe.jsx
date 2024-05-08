import React from "react";
import { useData } from "../../../DataContext";

export const ContectMe = () => {
  const { data } = useData();
  const getLink = (links) => {
    const a =
      links &&
      links?.filter((i) => i.title === "github" || i.title === "Github");
    return a?.[0]?.url;
  };

  return (
    <div className="w-full flex flex-wrap justify-between items-start gap-4 xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col xss:flex-col">
      <ul className="grid mt-4 mb-10 text-sm lg:mt-6 md:grid-cols-2 gap-x-8 gap-y-3 w-full">
        <li className="flex items-center">
          <span className="flex-[0_0_6rem] text-primary font-bold">
            Phone No
          </span>
          <span className="flex-[0_0_2rem]">:</span>
          <span className="text-white">+(92){data?.phoneNo}</span>
        </li>

        <li className="flex items-center">
          <span className="flex-[0_0_6rem] text-primary font-bold">Email</span>
          <span className="flex-[0_0_2rem]">:</span>
          <span className="text-white break-all overflow-hidden">{data?.email}</span>
        </li>

        <li className="flex items-center">
          <span className="flex-[0_0_6rem] text-primary font-bold">Github</span>
          <span className="flex-[0_0_2rem]">:</span>
          <span className="text-white">{getLink(data?.links)}</span>
        </li>

        <li className="flex items-center">
          <span className="flex-[0_0_6rem] text-primary font-bold">Skype</span>
          <span className="flex-[0_0_2rem]">:</span>
          <span className="text-white">{data?.skype}</span>
        </li>

        <li className="flex items-center">
          <span className="flex-[0_0_6rem] text-primary font-bold">
            Language
          </span>
          <span className="flex-[0_0_2rem]">:</span>
          <div className="w-full md:w-[100%] flex flex-wrap">
            {data?.languages?.map((i, index) => (
              <span
                key={i}
                className="w-auto mr-2 text-md text-white capitalize"
              >
                {`${i}${index !== data.languages.length - 1 ? "," : "."}`}
              </span>
            ))}
          </div>
        </li>
      </ul>
    </div>
  );
};
