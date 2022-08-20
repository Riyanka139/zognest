import { useMediaQuery } from "@mui/material";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "../pages/Home";
import Service from "../pages/Service";

const AppRoutes = () => {
  const location = useLocation()
  const isSmallerThan1000 = useMediaQuery("(max-width: 1000px)");


  console.log(location.pathname !== "/" || (location.pathname === "/" && isSmallerThan1000), "nav");
  return (
    <>
      {(location.pathname !== "/" || (location.pathname === "/" && isSmallerThan1000)) && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
      <Route path="/work" element={<Work />} /> */}
        <Route path="/service" element={<Service />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
