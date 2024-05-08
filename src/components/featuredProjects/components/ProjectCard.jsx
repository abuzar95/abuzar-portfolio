import React, { useEffect } from "react";
import gal1 from "../../../assets/img/portfolio-img1.png";
import gal2 from "../../../assets/img/portfolio-img2.png";
import gal3 from "../../../assets/img/portfolio-img3.png";
import gal4 from "../../../assets/img/portfolio-img4.png";
import { useNavigate } from "react-router-dom";

export const ProjectCard = ({ data, projectName, id, heroImage }) => {
  const navigate = useNavigate();
  const baseURL = process.env.REACT_APP_URL;
  console.log(id, "ggggggggg");

  return (
    <div className="w-full flex flex-col justify-center items-center gap-5">
      {heroImage && (
        <div className="w-full p-4 border border-night-black rounded-2xl relative group">
          <div
            className="w-full min-h-[300px] flex justify-center items-start overflow-hidden  rounded-2xl"
            style={{
              backgroundImage: `url(${baseURL}/file/${heroImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            onClick={() => navigate(`/case-study/${id}`)}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
              <p className="text-7xl capitalize ">
                <span
                  className="text-transparent"
                  style={{ WebkitTextStroke: "2px white" }}
                >
                  {projectName}
                </span>
              </p>
            </div>

            {/* <div className="absolute top-1 right-1 m-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div class="badge bg-primaryDark capitalize p-6">neutral</div>
          </div> */}
          </div>
        </div>
      )}

      <div className="w-full flex flex-col md:flex-row  justify-center items-center gap-3">
        {/* {data[1] && (
          <div className="w-full md:w-[50%]  p-4 border border-night-black rounded-2xl relative group">
            <div
              style={{
                backgroundImage: `url(${baseURL}/file/${data[1]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="w-full  min-h-[300px] flex justify-center items-start overflow-hidden  rounded-2xl "
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
                <p className="text-white text-center">{projectName}</p>
              </div>
            </div>
          </div>
        )} */}

        {/* {data[2] && (
          <div className="w-full md:w-[50%] p-4 border border-night-black rounded-2xl relative group">
            <div
              style={{
                backgroundImage: `url(${baseURL}/file/${data[2]})`,
              }}
              className="w-full min-h-[300px] flex justify-center items-start overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
                <p className="text-white text-center">{projectName}</p>
              </div>

              <div className="absolute top-1 right-1 m-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div class="badge bg-primaryDark capitalize p-6">neutral</div>
              </div>
            </div>
          </div>
        )} */}
      </div>
      {/* {data[3] && (
        <div className="w-full p-4 border border-night-black rounded-2xl relative group">
          <div
            className="w-full min-h-[300px] flex justify-center items-start overflow-hidden  rounded-2xl"
            style={{
              backgroundImage: `url(${baseURL}/file/${data[3]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
              <p className="text-white text-center">{projectName}</p>
            </div>

            <div className="absolute top-1 right-1 m-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div class="badge bg-primaryDark capitalize p-6">neutral</div>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};
