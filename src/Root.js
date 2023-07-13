import React from "react";
import { Outlet } from "react-router-dom";
import AppNavbar from "./Components/AppNavbar";
import Footer from "./Components/Footer";
import "./Styles/index.css";
import ScrollToTop from "./lib/ScrollToTop";

export const Root = () => {
  return (
    <>
      <AppNavbar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
};
