import React from "react";
import { Heading } from "../../genralComponents";
import { useData } from "../../../DataContext";

export const MySkills = () => {
  const { data } = useData();

  return (
    <div className="xl:p-8 lg:p-8 md:p-8 sm:p-0 xs:p-0 xss:p-0">
      <div className="w-full flex flex-col justify-start items-start mb-2">
        <Heading prefix={"About"} postfix={"Me"} />
        <p className="text-primary text-md leading-7 tracking-wider">
          {data?.about}
        </p>
        {data?.languages?.length > 0 && (
          <div className="mt-6 w-full">
            <p className="text-ink text-sm font-semibold mb-2">Languages</p>
            <p className="text-primary text-md capitalize">
              {data.languages.join(", ")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
