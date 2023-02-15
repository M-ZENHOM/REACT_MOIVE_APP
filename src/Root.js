import React from "react";
import { Outlet } from "react-router-dom";
import AppNavbar from "./Components/AppNavbar";
import Copyrights from "./Components/Copyrights";
import Footer from "./Components/Footer";
import GlobalStyles from "./GlobalStyles";
import "bootstrap/dist/css/bootstrap.min.css";

export const Root = () => {
  return (
    <>
      <GlobalStyles />
      <AppNavbar />
      <Outlet />
      <Footer />
      <Copyrights />
    </>
  );
};
