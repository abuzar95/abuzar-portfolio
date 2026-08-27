import React from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const FILTERS_KEY = "portfolio-projects-filters";

export const readProjectFilters = () => {
  try {
    const raw = sessionStorage.getItem(FILTERS_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (_) {
    return null;
  }
};

export const writeProjectFilters = (filters) => {
  try {
    sessionStorage.setItem(FILTERS_KEY, JSON.stringify(filters || {}));
  } catch (_) {
    /* ignore */
  }
};

export const CaseStudyBackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    const filters = readProjectFilters() || {};
    navigate("/", {
      state: {
        restoreProjects: true,
        query: filters.query || "",
        activeTag: filters.activeTag || "",
        visibleCount: filters.visibleCount || 6,
      },
    });
    // Open projects section after navigation
    setTimeout(() => {
      window.dispatchEvent(
        new CustomEvent("open-section", { detail: { id: "projects" } })
      );
      const section = document.getElementById("projects");
      section?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  return (
    <button type="button" className="case-back-btn" onClick={goBack}>
      <FiArrowLeft />
      Back to projects
    </button>
  );
};
