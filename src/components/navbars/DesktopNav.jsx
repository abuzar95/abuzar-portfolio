import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdHomeRepairService } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import { GrWorkshop } from "react-icons/gr";
import { MdMessage } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa6";
import { logo } from "../../assets/img";
import { useLocation, useNavigate } from "react-router-dom";
import { readProjectFilters } from "../caseStudy/components/CaseStudyBackButton";

const navLinks = [
  { Icon: <IoHomeOutline />, tooltip: "Home", id: "home" },
  { Icon: <GrWorkshop />, tooltip: "Projects", id: "projects" },
  { Icon: <MdHomeRepairService />, tooltip: "Service", id: "service" },
  { Icon: <IoDocumentText />, tooltip: "Resume", id: "resume" },
  { Icon: <MdMessage />, tooltip: "Testimonial", id: "testimonial" },
  { Icon: <FaEnvelope />, tooltip: "Contact", id: "contact" },
];

const caseStudyLinks = [{ Icon: <IoHomeOutline />, tooltip: "Home", id: "/" }];

export const DesktopNav = () => {
  const [activeLink, setActiveLink] = useState(null);
  const location = useLocation();
  const currentLocation = location.pathname.split("/")[1];
  const navigate = useNavigate();

  const goHomeFromCaseStudy = () => {
    const filters = readProjectFilters() || {};
    navigate("/", {
      state: {
        restoreProjects: true,
        query: filters.query || "",
        activeTag: filters.activeTag || "",
        visibleCount: filters.visibleCount || 6,
      },
    });
    setTimeout(() => {
      window.dispatchEvent(
        new CustomEvent("open-section", { detail: { id: "projects" } })
      );
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  const handleButtonClick = (sectionId) => {
    window.dispatchEvent(
      new CustomEvent("open-section", { detail: { id: sectionId } })
    );
    const section = document.getElementById(sectionId);
    if (section) {
      requestAnimationFrame(() => {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      setActiveLink(sectionId);
    }
  };

  return (
    <div
      className="w-full flex justify-center flex-col items-center gap-3 p-2 rounded-full bg-primaryDark"
      style={{ border: "1px solid #3b3b3b" }}
    >
      <div
        className="btn btn-circle hover:rounded-full border text-ink justify-center items-center relative border-night-black bg-primaryDark"
        style={{ border: "1px solid #3b3b3b" }}
      >
        <div className="w-full flex justify-center items-center">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 items-center h-full justify-between">
        {currentLocation !== "case-study"
          ? navLinks.map((link) => (
              <div
                key={link.id}
                onClick={() => handleButtonClick(link.id)}
                title={link.tooltip}
                aria-label={link.tooltip}
                className={`hover:bg-canvas hover:text-secondary p-1 rounded-full cursor-pointer ${
                  activeLink === link.id
                    ? "bg-canvas text-secondary"
                    : "text-mute"
                }`}
              >
                <button type="button" className="text-xl p-2">
                  {link.Icon}
                </button>
              </div>
            ))
          : caseStudyLinks.map((link) => (
              <div
                key={link.id}
                onClick={goHomeFromCaseStudy}
                title="Back to projects"
                aria-label="Back to projects"
                className={`hover:bg-canvas hover:text-secondary p-1 rounded-full cursor-pointer ${
                  activeLink === link.id
                    ? "bg-canvas text-secondary"
                    : "text-mute"
                }`}
              >
                <button type="button" className="text-xl p-2">
                  {link.Icon}
                </button>
              </div>
            ))}
      </div>
    </div>
  );
};
