import React from "react";
import { useNavigate } from "react-router-dom";
import { writeProjectFilters } from "../../caseStudy/components/CaseStudyBackButton";

export const ProjectCard = ({
  projectName,
  heroImage,
  tags = [],
  compact = false,
  filterState,
}) => {
  const navigate = useNavigate();
  const baseURL = process.env.REACT_APP_URL;

  const addHyphen = (str) => {
    return str.trim().replace(/\s+/g, "-");
  };

  const openCaseStudy = () => {
    if (filterState) writeProjectFilters(filterState);
    navigate(`/case-study/${addHyphen(projectName)}`, {
      state: { fromProjects: true, ...(filterState || {}) },
    });
  };

  if (compact) {
    return (
      <article
        className="project-card-compact group"
        onClick={openCaseStudy}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openCaseStudy();
          }
        }}
        role="button"
        tabIndex={0}
      >
        <div
          className="project-card-compact-media"
          style={
            heroImage
              ? {
                  backgroundImage: `url(${baseURL}/file/${heroImage})`,
                }
              : undefined
          }
        >
          {!heroImage && (
            <span className="project-card-compact-fallback">
              {(projectName || "?").charAt(0)}
            </span>
          )}
          <div className="project-card-compact-overlay">
            <span>View case study</span>
          </div>
        </div>
        <div className="project-card-compact-body">
          <h3 className="project-card-compact-title">{projectName}</h3>
          {tags.length > 0 && (
            <div className="project-card-compact-tags">
              {tags.slice(0, 4).map((tag) => (
                <span key={tag} className="project-card-tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    );
  }

  return (
    <div className="w-full flex flex-col justify-center items-center gap-3">
      {heroImage && (
        <div className="w-full p-4 border border-night-black rounded-2xl relative group">
          <div
            className="w-full min-h-[300px] flex justify-center items-start overflow-hidden rounded-2xl cursor-pointer"
            style={{
              backgroundImage: `url(${baseURL}/file/${heroImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            onClick={openCaseStudy}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                openCaseStudy();
              }
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
              <p className="text-7xl capitalize ">
                <span
                  className="text-transparent"
                  style={{ WebkitTextStroke: "2px white" }}
                >
                  {projectName}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-1">
        <h3 className="text-ink text-lg font-semibold font-display">
          {projectName}
        </h3>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 6).map((tag) => (
              <span key={tag} className="project-card-tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
