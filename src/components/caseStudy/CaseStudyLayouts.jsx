import React from "react";
import { ProjectHerosSection, Stepper, Technologies } from "./components";
import { ContentBlock } from "./components/ContentBlock";
import { ProjectFaqs } from "./components/ProjectFaqs";
import { CaseStudyBackButton } from "./components/CaseStudyBackButton";

const VisitButton = ({ link }) => {
  if (!link || !String(link).trim()) return null;
  return (
    <div className="case-visit-wrap">
      <a href={link} target="_blank" rel="noreferrer">
        <button type="button" className="case-visit-btn">
          Visit project
        </button>
      </a>
    </div>
  );
};

export const ClassicCaseStudy = ({ project, slugName }) => {
  return (
    <div className="case-body">
      <CaseStudyBackButton />
      <div className="case-hero-wrap">
        <ProjectHerosSection data={project} />
      </div>
      <Stepper projectName={slugName} title="Project description" />
      <Technologies data={project?.technologies} />
      <VisitButton link={project?.projectLink} />
    </div>
  );
};

export const ShowcaseCaseStudy = ({ project, slugName }) => {
  return (
    <div className="case-body">
      <CaseStudyBackButton />
      <div className="case-hero-wrap">
        <ProjectHerosSection data={project} />
      </div>

      <ContentBlock
        eyebrow="Challenge"
        title="Problem"
        block={project?.problem}
      />
      <ContentBlock
        eyebrow="Approach"
        title="Solution"
        block={project?.solution}
      />

      {project?.description ? (
        <Stepper projectName={slugName} title="Overview" />
      ) : null}

      <Technologies data={project?.technologies} />
      <ProjectFaqs faqs={project?.faqs} />
      <VisitButton link={project?.projectLink} />
    </div>
  );
};
