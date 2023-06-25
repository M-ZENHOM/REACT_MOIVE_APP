import React from "react";
import { Outlet } from "react-router-dom";
import AppNavbar from "./Components/AppNavbar";
import Copyrights from "./Components/Copyrights";
import Footer from "./Components/Footer";
import GlobalStyles from "./GlobalStyles";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "./utils/scrollTop";

export const Root = () => {
  return (
    <>
      <ScrollToTop />
      <GlobalStyles />
      <AppNavbar />
      <Outlet />
      <Footer />
      <Copyrights />
    </>
  );
};
