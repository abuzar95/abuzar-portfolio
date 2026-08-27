import React, { useState } from "react";
import { EducationList } from "./EducationList";
import { FaChevronDown } from "react-icons/fa";

export const Education = ({ prefix, postfix, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="py-2 mt-1 border-t border-night-black">
      <button
        type="button"
        className="w-full flex items-center justify-between gap-3 text-left group pt-3"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <h3 className="nested-section-heading">
          <span className="font-medium text-ink">{prefix}</span>{" "}
          <span className="text-secondary font-bold">{postfix}</span>
        </h3>
        <span
          className={`shrink-0 w-8 h-8 rounded-full border border-night-black flex items-center justify-center text-secondary transition-transform duration-300 ${
            isOpen ? "rotate-180 bg-secondary/10" : "rotate-0"
          }`}
        >
          <FaChevronDown className="text-xs" />
        </span>
      </button>

      <div
        className={`resume-collapse ${isOpen ? "is-open" : ""}`}
        aria-hidden={!isOpen}
      >
        <div className="resume-collapse-inner">
          <p className="text-base text-read leading-7 mb-4 mt-2">
            Academic background that supports delivery.
          </p>
          <EducationList />
        </div>
      </div>
    </div>
  );
};
