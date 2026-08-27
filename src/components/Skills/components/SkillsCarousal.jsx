import React from "react";
import { softwareHouseTechnologies } from "../../../assets/icons/Icons";
import { useData } from "../../../DataContext";
import { HiOutlineSparkles } from "react-icons/hi";

const resolveIcon = (skillName = "") => {
  const matched = softwareHouseTechnologies.find(
    (tech) => tech.name.toLowerCase() === skillName.toLowerCase()
  );
  return matched?.icon || null;
};

export const SkillsCarousal = () => {
  const { data } = useData();
  const skills = data?.skills || [];

  if (!skills.length) {
    return (
      <p className="text-primary text-sm">Skills will appear here once added.</p>
    );
  }

  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {skills.map((skill, index) => {
        const name = skill?.title?.skillName || "Skill";
        const icon = resolveIcon(name);
        return (
          <div
            key={skill?.title?._id || `${name}-${index}`}
            className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-night-black bg-[#1d1e1f] px-4 py-5 hover:border-secondary hover:-translate-y-1 transition-all duration-300"
          >
            <div className="text-primary group-hover:text-secondary transition-colors">
              {icon
                ? React.cloneElement(icon, {
                    style: { height: "42px", width: "42px" },
                  })
                : (
                    <HiOutlineSparkles size={42} />
                  )}
            </div>
            <p className="text-ink text-sm text-center font-medium leading-snug">
              {name}
            </p>
          </div>
        );
      })}
    </div>
  );
};
