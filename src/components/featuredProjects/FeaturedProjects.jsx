import React, { useEffect, useMemo, useState } from "react";
import { ProjectCard } from "./components";
import { FiSearch, FiX } from "react-icons/fi";
import { useData } from "../../DataContext";
import { useLocation } from "react-router-dom";
import {
  readProjectFilters,
  writeProjectFilters,
} from "../caseStudy/components/CaseStudyBackButton";

const getProjectTags = (project) => {
  const fromTech =
    project?.technologies
      ?.map((t) => t?.name?.skillName)
      ?.filter(Boolean) || [];
  const fromStack = String(project?.techStack || "")
    .split(/[,|/]+/)
    .map((s) => s.trim())
    .filter(Boolean);
  return [...new Set([...fromTech, ...fromStack].map((t) => t.trim()))];
};

const PAGE_SIZE = 6;

const getInitialFilters = (locationState) => {
  if (locationState?.restoreProjects) {
    return {
      query: locationState.query || "",
      activeTag: locationState.activeTag || "",
      visibleCount: locationState.visibleCount || PAGE_SIZE,
    };
  }
  const stored = readProjectFilters();
  if (stored) {
    return {
      query: stored.query || "",
      activeTag: stored.activeTag || "",
      visibleCount: stored.visibleCount || PAGE_SIZE,
    };
  }
  return { query: "", activeTag: "", visibleCount: PAGE_SIZE };
};

export const FeaturedProjects = ({ compact = false }) => {
  const { data } = useData();
  const location = useLocation();
  const initial = getInitialFilters(location.state);

  const [query, setQuery] = useState(initial.query);
  const [activeTag, setActiveTag] = useState(initial.activeTag);
  const [visibleCount, setVisibleCount] = useState(initial.visibleCount);

  const projects = useMemo(() => data?.projects ?? [], [data?.projects]);

  // Persist filters whenever they change (so case study can restore)
  useEffect(() => {
    writeProjectFilters({ query, activeTag, visibleCount });
  }, [query, activeTag, visibleCount]);

  // Restore + open projects when returning from case study
  useEffect(() => {
    if (!location.state?.restoreProjects) return undefined;

    setQuery(location.state.query || "");
    setActiveTag(location.state.activeTag || "");
    setVisibleCount(location.state.visibleCount || PAGE_SIZE);

    window.dispatchEvent(
      new CustomEvent("open-section", { detail: { id: "projects" } })
    );
    const t = setTimeout(() => {
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);

    // Clear navigation state so refresh doesn't re-trigger scroll
    window.history.replaceState({}, document.title);

    return () => clearTimeout(t);
  }, [location.state]);

  const allTags = useMemo(() => {
    const tags = new Set();
    projects.forEach((project) => {
      getProjectTags(project).forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort((a, b) => a.localeCompare(b));
  }, [projects]);

  const relevantTags = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q && !activeTag) return [];

    if (!q && activeTag) {
      return allTags.filter(
        (tag) => tag.toLowerCase() === activeTag.toLowerCase()
      );
    }

    return allTags.filter((tag) => tag.toLowerCase().includes(q)).slice(0, 12);
  }, [allTags, query, activeTag]);

  const filteredProjects = useMemo(() => {
    const q = query.trim().toLowerCase();
    const tag = activeTag.trim().toLowerCase();

    return projects.filter((project) => {
      const name = String(project?.projectName || "").toLowerCase();
      const tags = getProjectTags(project).map((t) => t.toLowerCase());
      const stack = String(project?.techStack || "").toLowerCase();

      const matchesQuery =
        !q ||
        name.includes(q) ||
        stack.includes(q) ||
        tags.some((t) => t.includes(q));

      const matchesTag = !tag || tags.some((t) => t === tag);

      return matchesQuery && matchesTag;
    });
  }, [projects, query, activeTag]);

  const visibleProjects = useMemo(
    () => filteredProjects.slice(0, visibleCount),
    [filteredProjects, visibleCount]
  );

  const clearFilters = () => {
    setQuery("");
    setActiveTag("");
    setVisibleCount(PAGE_SIZE);
  };

  const onQueryChange = (value) => {
    setQuery(value);
    setVisibleCount(PAGE_SIZE);
    if (!value.trim()) setActiveTag("");
  };

  const hasFilters = Boolean(query.trim() || activeTag);
  const hasMore = visibleCount < filteredProjects.length;

  const filterState = { query, activeTag, visibleCount };

  return (
    <div
      className={`w-full flex justify-start items-start flex-col ${
        compact
          ? "px-3 sm:px-4 py-2"
          : "xl:p-12 lg:p-12 md:p-12 sm:p-5 xs:p-5 xss:p-5 border-night-black bg-primaryDark rounded-xl"
      }`}
    >
      <div className="w-full flex justify-start items-start flex-col">
        {!compact && (
          <>
            <p className="text-secondary text-sm uppercase tracking-[0.16em] mb-2">
              Portfolio
            </p>
            <h2 className="text-ink text-3xl font-display font-semibold mb-2">
              Featured Projects
            </h2>
            <p className="text-primary text-sm mb-5">
              Search by project name or skill tag to find the right work fast.
            </p>
          </>
        )}

        <div className="w-full mb-5 projects-search">
          <div className="projects-search-box">
            <FiSearch className="projects-search-icon" />
            <input
              type="search"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Type to search name or skill…"
              className="projects-search-input"
              aria-label="Search projects"
            />
            {hasFilters && (
              <button
                type="button"
                className="projects-search-clear"
                onClick={clearFilters}
                aria-label="Clear filters"
              >
                <FiX />
              </button>
            )}
          </div>

          {relevantTags.length > 0 && (
            <div className="projects-tag-row" aria-label="Matching skill tags">
              {relevantTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  className={`projects-tag ${
                    activeTag.toLowerCase() === tag.toLowerCase()
                      ? "is-active"
                      : ""
                  }`}
                  onClick={() => {
                    setActiveTag((prev) =>
                      prev.toLowerCase() === tag.toLowerCase() ? "" : tag
                    );
                    setVisibleCount(PAGE_SIZE);
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}

          <p className="text-sm text-primary mt-3">
            Showing {Math.min(visibleCount, filteredProjects.length)} of{" "}
            {filteredProjects.length} match
            {filteredProjects.length === 1 ? "" : "es"}
            {projects.length !== filteredProjects.length
              ? ` (${projects.length} total)`
              : ""}
            {activeTag ? ` · ${activeTag}` : ""}
          </p>
        </div>

        <div className="projects-grid w-full mb-4">
          {visibleProjects.length > 0 ? (
            visibleProjects.map((project, index) => (
              <ProjectCard
                key={project?._id || `${project?.projectName}-${index}`}
                heroImage={project?.hero}
                projectName={project?.projectName}
                tags={getProjectTags(project)}
                compact
                filterState={filterState}
              />
            ))
          ) : (
            <div className="col-span-full w-full py-10 text-center border border-dashed border-night-black rounded-2xl">
              <p className="text-ink mb-2">No projects match your search.</p>
              <button
                type="button"
                className="text-secondary underline text-sm"
                onClick={clearFilters}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>

        {hasMore && (
          <div className="w-full flex justify-center mt-2 mb-2">
            <button
              type="button"
              className="projects-load-more"
              onClick={() => setVisibleCount((n) => n + PAGE_SIZE)}
            >
              Show more projects
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
