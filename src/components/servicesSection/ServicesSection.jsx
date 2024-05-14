import React, { useState } from "react";
import { ServiceCard } from "./components";
import { ButtonWithIcon, Heading } from "../genralComponents";
import { FaShoppingBag } from "react-icons/fa";
import { useData } from "../../DataContext";

export const ServicesSection = () => {
  const [displayedServices, setDisplayedServices] = useState(4);
  const { data } = useData();
  const handleMoreServices = () => {
    setDisplayedServices(data?.services?.length);
  };
  // Handler for displaying fewer projects
  const handleLessServices = () => {
    setDisplayedServices(4);
  };
  return (
    <div className="w-full flex justify-start items-start flex-col xl:px-16 lg:px-16 md:px-16 sm:px-5 xs:px-5 xss:px-5 py-4">
      <ButtonWithIcon Icon={FaShoppingBag} text={"Services"} />
      <Heading prefix={"My"} postfix={"Services"} />
      <p className="text-md text-primary leading-6 mb-5">
      I can craft both the user-friendly fronts and the brainy backs of websites and apps, ensuring a seamless and engaging user experience. You bring the idea, I'll build it to life.

      </p>
      <div className="w-full flex flex-col justify-start  items-start md:flex-row flex-wrap gap-5">
        {data?.services?.slice(0, displayedServices).map((obj, index) => (
          <div className="w-full flex  lg:w-[48%] justify-start items-start">
            <ServiceCard
              title={obj?.name}
              description={obj?.description}
              index={index + 1}
            />
          </div>
        ))}
      </div>
      {data?.services?.length > 4 && (
        <div className="w-full flex justify-center items-center py-4">
          {displayedServices < data?.services?.length ? (
            <button
              className="py-4 px-7 bg-secondary rounded-full"
              onClick={handleMoreServices}
            >
              More Services
            </button>
          ) : (
            <button
              className="py-4 px-7 bg-secondary rounded-full"
              onClick={handleLessServices}
            >
              Less Services
            </button>
          )}
        </div>
      )}
    </div>
  );
};
