import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { Features } from "./Features";
import { Carousel } from "./Carousel";
import { HeroMedia } from "./HeroMedia";
import { useData } from "../../../DataContext";

export const ProfileParaSection = () => {
  const { data } = useData();
  const [ctaHover, setCtaHover] = useState(false);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="w-full xl:p-8 lg:p-8 md:p-8 sm:p-0 xs:p-0 xss:p-0"
      id="home"
    >
      <div className="w-full flex flex-col lg:flex-row justify-between items-stretch gap-8 mb-8">
        <div className="w-full lg:w-[54%] flex justify-start items-start flex-col hero-animate">
          <p className="text-secondary text-sm uppercase tracking-[0.2em] mb-3">
            Introduce
          </p>
          <h1 className="text-ink text-3xl md:text-5xl font-bold leading-tight mb-3">
            {data?.name ? (
              <>
                Hi, I&apos;m{" "}
                <span className="text-secondary hero-name-glow">
                  {data.name}
                </span>
              </>
            ) : (
              "Welcome"
            )}
          </h1>

          {data?.intro && (
            <p className="text-read text-base md:text-lg leading-7 mb-4 max-w-2xl prose-read">
              {data.intro}
            </p>
          )}

          {data?.about && (
            <div className="w-full max-w-2xl mb-6">
              <h2 className="text-ink text-xl md:text-2xl font-semibold mb-3">
                About Me
              </h2>
              <p className="text-read text-base md:text-[1.05rem] leading-7 tracking-wide">
                {data.about}
              </p>
            </div>
          )}

          <div className="flex flex-wrap gap-3 mb-7">
            <Features text="Available for Work" />
            {data?.availability && <Features text={data.availability} />}
          </div>

          <div className="w-full flex flex-wrap gap-3 items-center">
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              onMouseEnter={() => setCtaHover(true)}
              onMouseLeave={() => setCtaHover(false)}
              className={`flex justify-start items-center px-7 py-4 bg-secondary text-white gap-3 uppercase rounded-full transition-transform duration-300 ${
                ctaHover
                  ? "scale-105 shadow-[0_0_24px_rgba(6,156,122,0.45)]"
                  : ""
              }`}
            >
              <IoIosSend />
              Hire me
            </button>
            <button
              type="button"
              onClick={() => scrollTo("projects")}
              className="flex justify-start items-center px-7 py-4 border border-secondary text-secondary gap-3 uppercase rounded-full hover:bg-secondary hover:text-white transition-colors duration-300"
            >
              View projects
            </button>
          </div>
        </div>

        <div className="w-full lg:w-[46%] flex items-center">
          <HeroMedia videoUrl={data?.introVideo} name={data?.name} />
        </div>
      </div>

      <div className="relative w-full flex mb-2 items-center">
        <div className="hidden md:flex flex-col justify-start items-start w-[17%] border-l-2 border-l-secondary pl-2">
          <p className="text-sm text-primary">Trusted</p>
          <p className="text-sm text-primary">Technologies</p>
        </div>
        <div className="w-full md:w-[83%]">
          <Carousel />
        </div>
      </div>
    </div>
  );
};
