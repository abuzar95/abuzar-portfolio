import React from "react";
import { useData } from "../../../DataContext";

export const ExperienceList = () => {
  const {data} = useData();
 
  return (
    <div className="">
      <ul className="space-y-5 md:space-y-11 relative md:before:content-[''] md:before:absolute lg:before:left-64 lg:before:border-r lg:before:border-[#3b3b3b] lg:dark:before:border-night-black md:before:h-[calc(100%_-1.5rem)] md:before:top-1/2 md:before:-translate-y-1/2">
        {data?.experience?.map((obj, index) => (
          <li
            key={index}
            className="p-5 border  rounded-xl relative md:flex max-md:space-y-2 border-[$] dark:border-night-black md:border-0 md:p-0 md:rounded-none"
          >
            <div className="flex items-center justify-between mb-5 md:w-60 md:block md:mb-0 relative">
              <h6 className="text-sm font-medium text-white text-opacity-60 md:text-base md:text-opacity-100">
                {obj?.company}
              </h6>
              <p className="text-[13px] md:text-sm text-primary">{`${obj?.timeSpan?.startYear} - ${obj?.timeSpan?.endYear}`}</p>
              {/* Dot positioned on the top of the right border */}
              <div
                className="before-dot hidden  lg:block"
                style={{
                  position: "absolute",
                  right: "-12.5%",
                  top: "5%",
                  transform: "translateY(-50%)",
                  width: "1.7rem",
                  height: "1.7rem",
                  borderRadius: "50%",
                  zIndex: "1",
                  background: "#424344",
                  opacity: "0.5", // Set opacity for the larger circle
                }}
              >
                {/* Inner circle */}
                <div
                  className="bg-secondary"
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "0.7rem",
                    height: "0.7rem",
                    borderRadius: "50%",
                    backgroundColor: "#00BC91",
                    zIndex: "2", // Ensure the smaller circle is above the larger circle
                  }}
                ></div>
              </div>
            </div>
            <div className="md:flex-1 lg:pl-12">
              <h4 className="text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-white mb-2.5">
                {obj?.role}
              </h4>
              <p className="text-sm text-primary leading-5">
                {obj?.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
