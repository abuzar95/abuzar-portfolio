import React, { useEffect } from "react";
import { BackgroundImage, MobileNav } from "./components";
import { Routes, Route, useLocation } from "react-router-dom";
import { CustomCursor } from "./themes/CustomCursor";
import { useData } from "./DataContext";
import { GeneralLayout } from "./themes/GenralLayout";
import { FcDataConfiguration } from "react-icons/fc";
function App() {
  const { data, setData } = useData();
  const location = useLocation();
  // const id = location.pathname.split("/").pop();
  const url = process.env.REACT_APP_URL;
  const id = process.env.REACT_APP_ID;
  useEffect(() => {
    const getPortfolio = async () => {
      try {
        const res = await fetch(`${url}/developer/${id}`, { method: "GET" });
        const dev = await res.json();
        setData(dev.data);
        console.log(data.projects, "lllllllllll");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (id) {
      getPortfolio();
    }
  }, [id]);
  return (
    <div className="w-full h-screen bg-primaryLight dark:bg-[#191923]">
      <div className="w-full xl:hidden lg:flex 2lg:flex 3md:flex flex bg-transparent min-h-[70px] fixed top-0 z-50">
        <MobileNav />
      </div>
      {/* <CustomCursor /> */}
      <BackgroundImage />
      <Routes>
        <Route
          path="/"
          element={<GeneralLayout projectData={data?.projects} />}
        />
        <Route
          path="/case-study/:id"
          element={<GeneralLayout projectData={data?.projects} />}
        />
      </Routes>
    </div>
  );
}

export default App;
