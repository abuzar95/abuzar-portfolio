import React, { useState } from "react";
import { SiAffinitydesigner } from "react-icons/si";
export const ServiceCard = ({ title, index, description }) => {
  // const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <div className="w-full  lg:h-[335px] xl:h-[335px] 2xl:h-[335px] 3xl:h-[335px] h-auto justify-start items-start flex-col p-4 cursor-pointer group border rounded-xl overflow-hidden border-night-black ">
      <div className="w-full flex justify-between items-center  mb-3">
        <h1 className="text-5xl font-extrabold transition duration-300 md:text-6xl lg:text-7xl text-greyBlack opacity-30 group-hover:opacity-100">
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "1px #fff" }}
          >
            0{index}
          </span>
        </h1>
        <SiAffinitydesigner className="text-2xl text-secondary group-hover:rotate-45 transition ease-in-out delay-100" />
      </div>
      <div>
        <h1 className="text-white text-2xl mb-3">{title}</h1>
        <p className="text-md text-primary leading-6">
          {description}
          {/* {showFullDescription
            ? description
            : description.substring(0, 180)}
          {!showFullDescription && description.length > 200 && (
            <button
              className="text-success underline text-sm ml-1 focus:outline-none"
              onClick={() => setShowFullDescription(true)}
            >
              Show More
            </button>
          )} */}
        </p>
      </div>
    </div>
  );
};
