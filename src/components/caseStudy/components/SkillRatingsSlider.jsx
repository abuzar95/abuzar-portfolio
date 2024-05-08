import React, { useState, useEffect, useRef } from "react";
import { useInViewport } from "react-in-viewport";

export const SkillRatingsSlider = ({ icon, skillName, skillValue }) => {
  const [value, setValue] = useState(skillValue);
  const sliderRef = useRef(null);
  const { inViewport } = useInViewport(sliderRef);

  useEffect(() => {
    if (inViewport) {
      // Set the value to 70 after 1 second when the slider is in the viewport
      setTimeout(() => {
        setValue(skillValue);
      }, 100);
    }
  }, [inViewport]);

  const fillStyle = {
    width: `${value}%`,
    transition: "width 1s ease-in-out",
  };

  return (
    <div className="w-full flex justify-center items-center gap-5">
      {/* <div className="w-[5%] flex flex-col justify-start items-start gap-5">
        <img src={icon} alt={icon} />
      </div> */}
      <div className="w-[95%] flex flex-col justify-start items-start gap-2">
        <h2 className="text-white text-[18px] capitalize">{skillName}</h2>
        <div
          ref={sliderRef}
          className="relative w-full h-3 bg-transparent rounded-full border border-night-black"
        >
          <div
            className="absolute rounded-full w-full top-[1px] left-0 h-2 bg-secondary"
            style={fillStyle}
          />
          {[...Array(100)].map((_, index) => (
            <div
              key={index}
              className="absolute w-[1px] h-2"
              style={{ left: `${index}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
