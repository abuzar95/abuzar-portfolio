import React, { useState } from "react";
import { ProjectCard } from "./components";
import { ButtonWithIcon, Heading } from "../genralComponents";
import { ImStatsBars2 } from "react-icons/im";
import { useData } from "../../DataContext";

export const FeaturedProjects = () => {
  const { data } = useData();
  const baseUrl = process.env.REACT_APP_URL;

  // State to manage the number of projects to display
  const [displayedProjects, setDisplayedProjects] = useState(3);

  // Handler for displaying more projects
  const handleMoreProjects = () => {
    setDisplayedProjects(data?.projects?.length);
  };
  // Handler for displaying fewer projects
  const handleLessProjects = () => {
    setDisplayedProjects(3);
  };

  return (
    <div className="w-full flex justify-start items-start flex-col xl:p-12 lg:p-12 md:p-12 sm:p-5 xs:p-5 xss:p-5 border-night-black bg-primaryDark rounded-xl">
      <div className="w-full flex justify-start items-start flex-col">
        <ButtonWithIcon Icon={ImStatsBars2} text={"Portfolio"} />
        <Heading
          prefix={"Featured"}
          postfix={"Projects"}
          description={
            "Here are words from happy clients: their testimonials reflect the quality of my work, customer satisfaction, and the positive impact my services have had on their businesses and projects."
          }
        />
        <div className="w-full mb-4">
          {/* Mapping only for the first 'displayedProjects' */}
          {data?.projects?.slice(0, displayedProjects).map((project, index) => (
            <>
              <ProjectCard
                key={index}
                heroImage={project?.hero}
                data={project?.gallery}
                projectName={project?.projectName}
                id={index}
              />
            </>
          ))}
        </div>
        {data?.projects?.length > 3 && (
          <div className="w-full flex justify-center items-center">
            {displayedProjects < data?.projects?.length ? (
              <button
                className="py-4 px-7 bg-secondary rounded-full"
                onClick={handleMoreProjects}
              >
                More Projects
              </button>
            ) : (
              <button
                className="py-4 px-7 bg-secondary rounded-full"
                onClick={handleLessProjects}
              >
                Less Projects
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
