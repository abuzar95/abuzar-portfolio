import React, { useEffect, useMemo, useRef, useState } from "react";
import { useData } from "../DataContext";

const ROLE_LINE = "AI Engineer & Full Stack Developer";

/**
 * In-memory only: resets on hard refresh / new tab load.
 * Survives React remounts during in-app navigation (e.g. case study → home).
 */
let assemblePlayedThisPageLoad = false;

const removeBootCover = () => {
  try {
    document.getElementById("boot-cover")?.remove();
  } catch (_) {
    /* ignore */
  }
};

const SECTION_GUIDES = [
  {
    id: "projects",
    label: "Projects",
    title: "Find the right work fast",
    body: "Open Projects, then search by name or skill (React, Node, RAG…). Tap a card to open the full case study.",
  },
  {
    id: "service",
    label: "Services & Skills",
    title: "What I build with",
    body: "Browse services I offer, then skim the skills ticker underneath to see the stack behind the work.",
  },
  {
    id: "resume",
    label: "Resume",
    title: "Experience & education",
    body: "Expand Work Experience and Education inside Resume to see roles, timelines, and academic background.",
  },
  {
    id: "testimonial",
    label: "Testimonials",
    title: "What clients say",
    body: "Open Testimonials for feedback on delivery, quality, and collaboration.",
  },
  {
    id: "contact",
    label: "Contact",
    title: "Let’s talk",
    body: "Use Contact Me—or email, phone, and platform links on the profile card—to reach out directly.",
  },
];

const TOTAL_BEATS = 8;

export const PortfolioAssembleIntro = () => {
  const { data } = useData();
  const baseURL = process.env.REACT_APP_URL;

  // Cover the UI on the very first paint of a full page load (before API returns)
  const [visible, setVisible] = useState(() => !assemblePlayedThisPageLoad);
  const [leaving, setLeaving] = useState(false);
  const [beat, setBeat] = useState(0);
  const [tourReady, setTourReady] = useState(false);
  const timersRef = useRef([]);
  const tourStartedRef = useRef(false);
  const finishRef = useRef(() => {});

  const introText =
    "Full Stack Developer and AI Engineer with hands-on experience building reliable web products, APIs, and intelligent systems—from idea to production.";

  const projects = useMemo(
    () => (data?.projects || []).filter((p) => p?.hero).slice(0, 3),
    [data?.projects]
  );

  const clearTimers = () => {
    timersRef.current.forEach((id) => clearTimeout(id));
    timersRef.current = [];
  };

  const finish = () => {
    clearTimers();
    assemblePlayedThisPageLoad = true;
    tourStartedRef.current = true;
    setLeaving(true);
    const id = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
      document.body.classList.remove("assemble-active");
    }, 450);
    timersRef.current.push(id);
  };

  finishRef.current = finish;

  // Lock page as soon as the cover is up (even while waiting for API)
  useEffect(() => {
    if (!visible) {
      removeBootCover();
      return undefined;
    }
    document.body.style.overflow = "hidden";
    document.body.classList.add("assemble-active");
    // HTML boot cover → React overlay (same color); drop the static one
    removeBootCover();
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("assemble-active");
    };
  }, [visible]);

  // Start the guided tour only after portfolio data is available
  useEffect(() => {
    if (!visible || leaving || !data?.name || tourStartedRef.current) {
      return undefined;
    }

    tourStartedRef.current = true;
    setTourReady(true);

    let reduced = false;
    try {
      reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch (_) {
      reduced = false;
    }

    if (reduced) {
      const id = setTimeout(() => finishRef.current(), 1200);
      timersRef.current.push(id);
      return () => clearTimers();
    }

    const schedule = [
      [0, 0],
      [7000, 1],
      [14000, 2],
      [22000, 3],
      [30000, 4],
      [38000, 5],
      [46000, 6],
      [53000, 7],
      [60000, null],
    ];

    schedule.forEach(([ms, nextBeat]) => {
      const id = setTimeout(() => {
        if (nextBeat === null) finishRef.current();
        else setBeat(nextBeat);
      }, ms);
      timersRef.current.push(id);
    });

    const onKey = (e) => {
      if (e.key === "Escape") finishRef.current();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      clearTimers();
      window.removeEventListener("keydown", onKey);
    };
  }, [visible, leaving, data?.name]);

  if (!visible) return null;

  const guideIndex = beat >= 3 ? beat - 3 : -1;
  const activeGuide =
    guideIndex >= 0 && guideIndex < SECTION_GUIDES.length
      ? SECTION_GUIDES[guideIndex]
      : null;

  return (
    <div
      className={`assemble-overlay ${leaving ? "is-leaving" : ""}`}
      role="dialog"
      aria-label="Portfolio introduction"
      aria-live="polite"
    >
      <button
        type="button"
        className="assemble-skip"
        onClick={finish}
        aria-label="Skip introduction"
      >
        Skip intro
      </button>

      <div className="assemble-stage assemble-stage-wide">
        {!tourReady || !data?.name ? (
          <div className="assemble-waiting">
            <div className="assemble-waiting-pulse" aria-hidden="true" />
            <p className="assemble-waiting-text">Preparing introduction…</p>
            <p className="assemble-skip-hint">
              Press Esc or tap Skip intro anytime
            </p>
          </div>
        ) : (
          <>
            <div className={`assemble-profile ${beat >= 0 ? "is-on" : ""}`}>
              {data?.avatar ? (
                <img
                  className="assemble-avatar is-on"
                  src={`${baseURL}/file/${data.avatar}`}
                  alt={data?.name || "Profile"}
                />
              ) : (
                <div
                  className="assemble-avatar is-on"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#1d1e1f",
                    color: "#069c7a",
                    fontSize: "2rem",
                    fontWeight: 700,
                  }}
                >
                  {(data?.name || "?").charAt(0)}
                </div>
              )}
              <h1 className="assemble-name is-on">{data?.name}</h1>
              <p className="assemble-role is-on">{ROLE_LINE}</p>
            </div>

            {beat === 1 && (
              <p className="assemble-intro is-on assemble-panel">{introText}</p>
            )}

            {beat === 2 && (
              <div className="assemble-block is-on assemble-panel">
                <span className="assemble-label">How to explore</span>
                <p className="assemble-guide-title">
                  Search &amp; open each section
                </p>
                <p className="assemble-guide-body">
                  After this intro, use the side/menu links or expand each block
                  on the page. Next, we’ll walk through Projects, Services,
                  Resume, Testimonials, and Contact—so you know exactly where to
                  look.
                </p>
              </div>
            )}

            {activeGuide && (
              <div className="assemble-block is-on assemble-panel">
                <span className="assemble-label">{activeGuide.label}</span>
                <p className="assemble-guide-title">{activeGuide.title}</p>
                <p className="assemble-guide-body">{activeGuide.body}</p>

                {activeGuide.id === "projects" && (
                  <div className="assemble-projects mt-3">
                    {(projects.length
                      ? projects
                      : [{ _id: "a" }, { _id: "b" }, { _id: "c" }]
                    ).map((project, index) => (
                      <div
                        key={project?._id || index}
                        className="assemble-project-thumb is-on"
                        style={
                          project?.hero
                            ? {
                                backgroundImage: `url(${baseURL}/file/${project.hero})`,
                              }
                            : undefined
                        }
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

            {beat === 0 && (
              <p className="assemble-intro is-on assemble-panel">
                Welcome—here’s a quick tour of how to learn more about my work.
              </p>
            )}

            <div className="assemble-footer">
              <div className="assemble-progress" aria-hidden="true">
                {Array.from({ length: TOTAL_BEATS }).map((_, i) => (
                  <span
                    key={i}
                    className={`assemble-dot ${beat >= i ? "is-active" : ""}`}
                  />
                ))}
              </div>
              <p className="assemble-skip-hint">
                Press Esc or tap Skip intro anytime
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
