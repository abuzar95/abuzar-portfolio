import React, { useEffect } from "react";
import { BackgroundImage, MobileNav } from "./components";
import { Routes, Route, useLocation } from "react-router-dom";
import { useData } from "./DataContext";
import { GeneralLayout } from "./themes/GenralLayout";

function BootCoverCleanup() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes("case-study")) {
      document.getElementById("boot-cover")?.remove();
    }
  }, [location.pathname]);
  return null;
}

function App() {
  const { data, setData } = useData();
  const url = process.env.REACT_APP_URL;
  const id = process.env.REACT_APP_ID;
  useEffect(() => {
    const getPortfolio = async () => {
      try {
        const res = await fetch(`${url}/developer/${id}`, { method: "GET" });
        const dev = await res.json();
        setData(dev.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (id) {
      getPortfolio();
    }
  }, [id, setData, url]);
  return (
    <div className="w-full min-h-screen bg-canvas">
      <BootCoverCleanup />
      <div className="w-full xl:hidden flex bg-transparent min-h-[70px] fixed top-0 z-50">
        <MobileNav />
      </div>
      <BackgroundImage />
      <Routes>
        <Route
          path="/"
          element={<GeneralLayout projectData={data?.projects} />}
        />
        <Route
          path="/case-study/:name"
          element={<GeneralLayout projectData={data?.projects} />}
        />
      </Routes>
    </div>
  );
}

export default App;
