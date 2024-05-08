import React from "react";
import gal1 from "../../../assets/img/article1.png";
export const ProjectHerosSection = ({data , img}) => { 
  const baseURL = process.env.REACT_APP_URL;
  
  return (
    <div className="w-full flex justify-start items-center flex-col">
      <div className="w-full  rounded-2xl mb-7 ">
        <div
          className="w-full min-h-[300px] flex justify-center items-start overflow-hidden  rounded-2xl"
          style={{
            backgroundImage:  `url(${baseURL}/file/${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
      <div className="w-full flex justify-between items-start">
        <div className="w-full flex justify-between items-start flex-col">
          <h2 className="text-white text-[18px] ">Client:</h2>
          <p className="text-primary text-sm">{data?.clientName}</p>
        </div>
        <div className="w-full flex justify-start items-start flex-col">
          <h2 className="text-white text-[18px] ">Services:</h2>
          <p className="text-primary text-sm">{data?.techStack}</p>
        </div>
        <div className="w-full flex justify-end items-start flex-col">
          <h2 className="text-white text-[18px] ">Duration:</h2>
          <p className="text-primary text-sm">{data?.duration}</p>
        </div>
      </div>
    </div>
  );
};
