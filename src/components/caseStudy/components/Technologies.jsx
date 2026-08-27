import React from "react";
import { softwareHouseTechnologies } from "../../../assets/icons/Icons";
import { HiOutlineSparkles } from "react-icons/hi";

export const Technologies = ({ data }) => {
  const items =
    data
      ?.filter((item) => item?.name?.skillName)
      ?.map((item) => item.name.skillName) || [];

  if (!items.length) return null;

  return (
    <section className="case-block">
      <header className="case-block-head">
        <p className="case-eyebrow">Stack</p>
        <h3 className="case-block-title">
          <span className="case-block-title-accent">Technologies</span>
        </h3>
      </header>
      <div className="case-tech-grid">
        {items.map((skillName, index) => {
          const matched = softwareHouseTechnologies.find(
            (tech) => tech.name.toLowerCase() === skillName.toLowerCase()
          );
          const icon = matched?.icon;
          return (
            <div key={`${skillName}-${index}`} className="case-tech-card">
              <span className="case-tech-icon">
                {icon
                  ? React.cloneElement(icon, {
                      style: { height: "22px", width: "22px" },
                    })
                  : (
                      <HiOutlineSparkles size={22} />
                    )}
              </span>
              <span className="case-tech-name">{skillName}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};
