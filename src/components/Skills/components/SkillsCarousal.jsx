import React, { useEffect, useState } from "react";
import { Doughnut } from "../../charts";
import { useData } from "../../../DataContext";
import { softwareHouseTechnologies } from "../../../assets/icons/Icons";

export const SkillsCarousal = ({ direction, parentClick }) => {
  const [slidePosition, setSlidePosition] = useState(0);

  const handleSlide = (direction) => {
    const newSlidePosition =
      direction === "left" ? slidePosition - 240 : slidePosition + 240;

    setSlidePosition(Math.min(Math.max(newSlidePosition, 0), 900));
  };

  useEffect(() => {
    if (direction) {
      handleSlide(direction);
      parentClick("");
    }
  }, [direction, parentClick]);
  const { data } = useData();
  return (
    <div className="carousel w-full overflow-hidden relative ease-in-out duration-300">
      <div
        className="carousel-container flex w-full justify-around"
        style={{
          transform: `translateX(-${slidePosition}px)`,
          transition: "ease-in-out 1s",
        }}
      >
        {data?.skills?.map((skill) => {
          // Find the technology object that matches the skill name
          const matchedTechnology = softwareHouseTechnologies.find(
            (tech) =>
              tech.name.toLowerCase() === skill?.title?.skillName.toLowerCase()
          );

          return (
            <div
              key={skill?.id}
              id="slide1"
              className="carousel-item relative flex flex-col"
            >
              {matchedTechnology && ( // Check if a matching technology is found
                <>
                  <div className="flex justify-center mb-2">
                    {matchedTechnology.icon &&
                      React.cloneElement(matchedTechnology.icon, {
                        // Clone the icon element and pass props
                        style: { height: "50px", width: "50px", color: "#5c5c5c" }, // Set height and width
                      })}{" "}
                    {/* Render the icon */}
                  </div>
                  <Doughnut
                    cutout={"99"}
                    width={"180"}
                    height={"180"}
                    fontSize={"28"}
                    skillRate={skill?.ratings}
                    skillName={skill?.title?.skillName}
                  />
                </>
              )}
            </div>
          );
        })}
      </div>

      <div className="  flex lg:hidden  justify-center gap-5 items-center w-full  absolute bottom-0">
        <button
          onClick={() => handleSlide("left")}
          className="btn btn-circle bg-transparent  border-secondary "
        >
          ❮
        </button>
        <button
          onClick={() => handleSlide("right")}
          className="btn btn-circle bg-transparent  border-secondary "
        >
          ❯
        </button>
      </div>
    </div>
  );
};
