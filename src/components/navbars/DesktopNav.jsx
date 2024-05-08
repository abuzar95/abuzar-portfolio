import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { MdHomeRepairService } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { GrWorkshop } from "react-icons/gr";
import { MdMessage } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa6";
import { logo } from "../../assets/img";

const navLinks = [
  { Icon: <IoHomeOutline />, tooltip: "Home", id: "home" },
  { Icon: <FaRegUser />, tooltip: "About", id: "about" },
  { Icon: <MdHomeRepairService />, tooltip: "Service", id: "service" },
  { Icon: <FaGraduationCap />, tooltip: "Skills", id: "skills" },
  { Icon: <IoDocumentText />, tooltip: "Resume", id: "resume" },
  { Icon: <GrWorkshop />, tooltip: "Projects", id: "projects" },
  { Icon: <MdMessage />, tooltip: "Testimonial", id: "testimonial" },
  { Icon: <FaEnvelope />, tooltip: "Contact", id: "contact" },
];

export const DesktopNav = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleButtonClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveLink(sectionId);
    }
  };

  return (
    <div
      className="w-full flex justify-center flex-col items-center gap-3 p-2 rounded-full"
      style={{ border: "1px solid  #333" }}
    >
      <div
        className="btn btn-circle hover:rounded-full border text-white justify-center items-center relative border-night-black"
        style={{ border: "1px solid #333" }}
      >
        <div className="w-full flex justify-center items-center">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 items-center h-full justify-between">
        {navLinks.map((link) => (
          <div
            key={link.id}
            onClick={() => handleButtonClick(link.id)}
            className={`hover:bg-primaryDark hover:text-secondary p-1 rounded-full cursor-pointer ${
              activeLink === link.id ? "bg-primaryDark text-secondary" : ""
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
