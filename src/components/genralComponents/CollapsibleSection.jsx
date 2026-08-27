import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export const CollapsibleSection = ({
  badge,
  BadgeIcon,
  prefix,
  postfix,
  description,
  defaultOpen = false,
  hashId,
  children,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  useEffect(() => {
    if (!hashId) return undefined;

    const openIfMatch = (id) => {
      if (id === hashId) setIsOpen(true);
    };

    const syncFromHash = () => {
      openIfMatch(window.location.hash.replace("#", ""));
    };

    const onOpenSection = (event) => {
      openIfMatch(event?.detail?.id);
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    window.addEventListener("open-section", onOpenSection);
    return () => {
      window.removeEventListener("hashchange", syncFromHash);
      window.removeEventListener("open-section", onOpenSection);
    };
  }, [hashId]);

  return (
    <div
      className={`section-block w-full bg-primaryDark rounded-2xl overflow-hidden ${className}`}
    >
      <button
        type="button"
        className="section-toggle w-full flex items-start justify-between gap-3 text-left"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <div className="min-w-0 flex-1">
          {badge && BadgeIcon ? (
            <div className="mb-3">
              <span className="section-badge">
                <BadgeIcon className="text-secondary" />
                {badge}
              </span>
            </div>
          ) : null}
          <h2 className="section-heading">
            <span className="font-medium tracking-tight text-ink">{prefix}</span>{" "}
            <span className="text-secondary font-bold tracking-tight">
              {postfix}
            </span>
          </h2>
          {description ? (
            <p className="section-desc">{description}</p>
          ) : null}
        </div>
        <span
          className={`mt-1 shrink-0 w-9 h-9 rounded-full border border-night-black flex items-center justify-center text-secondary transition-transform duration-300 ${
            isOpen ? "rotate-180 bg-secondary/10" : "rotate-0"
          }`}
        >
          <FaChevronDown className="text-sm" />
        </span>
      </button>

      <div className={`resume-collapse ${isOpen ? "is-open" : ""}`}>
        <div className="resume-collapse-inner">
          <div className="section-body">{children}</div>
        </div>
      </div>
    </div>
  );
};
