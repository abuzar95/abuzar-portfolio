import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useData } from "../../DataContext";
import {
  ClassicCaseStudy,
  ShowcaseCaseStudy,
} from "./CaseStudyLayouts";

export const CaseStudy = ({ projectData }) => {
  const url = process.env.REACT_APP_URL;
  const profileId = process.env.REACT_APP_ID;
  const { data, setData } = useData();
  const location = useLocation();
  const name = location.pathname.split("/")[2];
  const [newData, setNewData] = useState();

  const removeHyphen = (str = "") => str.replace(/-/g, " ");

  useEffect(() => {
    if (data === null || data === undefined) {
      const getPortfolio = async () => {
        try {
          const res = await fetch(`${url}/developer/${profileId}`, {
            method: "GET",
          });
          const dev = await res.json();
          setData(dev.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      if (profileId) {
        getPortfolio();
      }
    }

    const projects = data?.projects || projectData;
    const project =
      projects &&
      projects.find(
        (item) =>
          item?.projectName?.trim()?.toLowerCase() ===
          removeHyphen(name).toLowerCase()
      );
    setNewData(project);
  }, [data, name, profileId, projectData, setData, url]);

  const isShowcase = newData?.detailLayout === "showcase";
  const slugName = removeHyphen(name);
  const layoutLabel = isShowcase ? "Showcase" : "Classic";

  return (
    <article className="case-page">
      <header className="case-page-header">
        <p className="case-eyebrow">Project details · {layoutLabel}</p>
        <h1 className="case-page-title">
          {newData?.thumbNail || newData?.projectName || "Case study"}
        </h1>
        {newData?.techStack ? (
          <p className="case-page-lede">{newData.techStack}</p>
        ) : null}
      </header>

      {isShowcase ? (
        <ShowcaseCaseStudy project={newData} slugName={slugName} />
      ) : (
        <ClassicCaseStudy project={newData} slugName={slugName} />
      )}
    </article>
  );
};
