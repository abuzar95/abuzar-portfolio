import { useRef } from "react";
import {
  CaseStudy,
  DesktopNav,
  PortfolioAssembleIntro,
  ProfileIntroLeftSide,
} from "../components";
import { MobileContactBar } from "../components/MobileContactBar";
import { CenterContent } from "../pages";
import { useLocation } from "react-router-dom";

export const GeneralLayout = ({ projectData }) => {
  const location = useLocation();
  const isCaseStudy = location.pathname.includes("case-study");

  const centerDivRef = useRef(null);
  const handleSideScroll = (e) => {
    e.preventDefault();
    if (centerDivRef.current) {
      const scrollSpeedMultiplier = 4;
      centerDivRef.current.scrollTop += e.deltaY * scrollSpeedMultiplier;
    }
  };

  return (
    <div className="w-full gap-8 flex px-3 xl:px-5 lg:px-3 md:px-3 lg:flex-col 2lg:flex-col 3md:flex-col xl:flex-row flex-col justify-between items-start min-h-screen bg-canvas mt-20 xl:mt-0 pb-20 xl:pb-0">
      {!isCaseStudy ? <PortfolioAssembleIntro /> : null}

      <div className="w-full lg:mt-4 lg:w-[100%] 2lg:w-[100%] 3md:w-[100%] xl:w-[25%] justify-center items-start">
        <ProfileIntroLeftSide />
      </div>

      <div
        ref={centerDivRef}
        className="w-full h-full lg:w-[100%] 2lg:w-[100%] 3md:w-[100%] xl:w-[69%] xl:px-7 px-4 3xl:mr-[23%] flex justify-center z-20 items-start xl:h-screen xl:overflow-y-scroll bg-transparent 3xl:max-w-[900px]"
      >
        {isCaseStudy ? (
          <CaseStudy projectData={projectData} />
        ) : (
          <CenterContent />
        )}
      </div>

      <div
        className="lg:hidden 2lg:hidden 3md:hidden xl:flex hidden h-full lg:mt-4 justify-center items-start lg:max-w-sm"
        style={{ zIndex: 9999 }}
        onWheel={handleSideScroll}
      >
        <DesktopNav />
      </div>

      <MobileContactBar />

      <div
        id="toastContainer"
        className="absolute z-[10000] top-0 right-4 p-4 flex flex-col gap-2 items-end"
      />
    </div>
  );
};
