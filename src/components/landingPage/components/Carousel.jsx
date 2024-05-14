import React from "react";
import { SiExpress } from "react-icons/si";
import { FaAngular, FaCss3Alt, FaHtml5, FaJsSquare, FaNodeJs, FaPhp, FaPython, FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";
import { DiDotnet, DiJqueryLogo, DiMysql, DiRedis } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { TbApi, TbBrandGraphql, TbBrandNextjs, TbBrandPrisma, TbBrandRedux, TbBrandTypescript, TbLetterM } from "react-icons/tb";
import { IoIosCloudOutline } from "react-icons/io";
import { DiPostgresql } from "react-icons/di";
import { IoLogoElectron, IoLogoFirebase } from "react-icons/io5";
import { FaStripe } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { DiDjango } from "react-icons/di";

const LOGOS = [
  <FaHtml5  className="text-slate-400 text-3xl" />,
  <FaCss3Alt  className="text-slate-400 text-3xl" />,
  <FaJsSquare  className="text-slate-400 text-3xl" />,
  <FaReact  className="text-slate-400 text-3xl" />,
  <FaNodeJs  className="text-slate-400 text-3xl" />,
  <FaPython  className="text-slate-400 text-3xl" />,
  <FaPhp  className="text-slate-400 text-3xl" />,
  <FaReact  className="text-slate-400 text-3xl" />,
  <FaAngular  className="text-slate-400 text-3xl" />,
  <FaVuejs  className="text-slate-400 text-3xl" />,
  <FaJava  className="text-slate-400 text-3xl" />,
  <FaAws  className="text-slate-400 text-3xl" />,
  <FaStripe  className="text-slate-400 text-3xl" />,
  // da
  <DiDotnet  className="text-slate-400 text-3xl" />,
  <DiMongodb  className="text-slate-400 text-3xl" />,
  <DiDjango  className="text-slate-400 text-3xl" />,

  <DiMysql  className="text-slate-400 text-3xl" />,
  <DiPostgresql  className="text-slate-400 text-3xl" />,
  <DiRedis  className="text-slate-400 text-3xl" />,
  <DiJqueryLogo  className="text-slate-400 text-3xl" />,
  // tb
  <TbApi  className="text-slate-400 text-3xl" />,
  <TbBrandNextjs  className="text-slate-400 text-3xl" />,
  <TbBrandPrisma  className="text-slate-400 text-3xl" />,
  <TbBrandGraphql  className="text-slate-400 text-3xl" />,
  <TbBrandRedux  className="text-slate-400 text-3xl" />,
  <TbBrandTypescript  className="text-slate-400 text-3xl" />,
  <TbLetterM  className="text-slate-400 text-3xl" />,
  // io
  <IoIosCloudOutline  className="text-slate-400 text-3xl" />,
  <IoLogoElectron  className="text-slate-400 text-3xl" />,
  <IoLogoFirebase  className="text-slate-400 text-3xl" />,
  // si
  <SiNestjs  className="text-slate-400 text-3xl" />,
  <SiExpress  className="text-slate-400 text-3xl" />,
];

export const Carousel = () => {
  return (
    <div className="relative m-auto w-full  overflow-hidden  before:absolute before:left-0 before:top-0  before:h-full before:w-[100px]  before:content-[''] after:absolute after:right-0 after:top-0  after:h-full after:w-[100px] after:-scale-x-100  after:content-['']">
      <div className="animate-infinite-slider flex w-[calc(250px*10)]">
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex min-w-[100px] items-center justify-center"
            key={index}
          >
            {" "}
            {logo}
          </div>
        ))}
        {LOGOS.map((logo, index) => (
          <div
            // className="slide flex min-w-[100px] items-center justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
};
