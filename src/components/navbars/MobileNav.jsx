import React, { useState } from "react";
import { logo } from "../../assets/img";

export const MobileNav = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
  };
  return (
    <div
      style={{
        background: "rgba(61, 58, 58, 0.74)",
        WebkitBackdropFilter: "blur(12px)", // Use Webkit prefix for Webkit properties
        backdropFilter: "blur(12px)",
      }}
      className=" w-full from-black to-white "
    >
      <div className=" w-full py-2 flex justify-start items-center">
        {/* <div className="w-full navbar-start">User</div> */}
        <div className="w-full flex justify-start items-center">
          <img style={{ height: "48px" }} src={logo} alt="" />
        </div>
        <div className="w-full navbar-end flex justify-start items-center">
          <div className="w-full flex justify-end items-center dropdown relative">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-4 z-[1] p-2 shadow bg-primaryDark rounded-box w-52 absolute right-5 top-7 min-h-screen flex justify-start items-start gap-4 "
            >
              <li>
                <a
                  href="#home"
                  onClick={() => handleLinkClick("home")}
                  className={activeLink === "home" ? "text-secondary" : ""}
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  onClick={() => handleLinkClick("about")}
                  className={activeLink === "about" ? "text-secondary" : ""}
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#service"
                  onClick={() => handleLinkClick("service")}
                  className={activeLink === "service" ? "text-secondary" : ""}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={() => handleLinkClick("skills")}
                  className={activeLink === "skills" ? "text-secondary" : ""}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#resume"
                  onClick={() => handleLinkClick("resume")}
                  className={activeLink === "resume" ? "text-secondary" : ""}
                >
                  Resume
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  onClick={() => handleLinkClick("projects")}
                  className={activeLink === "projects" ? "text-secondary" : ""}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#testimonial"
                  onClick={() => handleLinkClick("testimonial")}
                  className={
                    activeLink === "testimonial" ? "text-secondary" : ""
                  }
                >
                  Testimonials
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  onClick={() => handleLinkClick("contact")}
                  className={activeLink === "contact" ? "text-secondary" : ""}
                >
                  Contact me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
