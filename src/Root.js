import React from "react";
import { Outlet } from "react-router-dom";
import AppNavbar from "./Components/AppNavbar";
import { Analytics } from "@vercel/analytics/react";
import Footer from "./Components/Footer";
import "./Styles/index.css";
import ScrollToTop from "./lib/ScrollToTop";

export const Root = () => {
  return (
    <>
      <AppNavbar />
      <ScrollToTop />
      <Outlet />
      <Analytics />
      <Footer />
    </>
  );
};
