import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./Root";
import { ErrorPage } from "./pages/ErrorPage";
import { Home } from "./pages/Home";
import { Moive } from "./pages/Moive";
import TvSeries from "./pages/TvSeries";
import AllMoives from "./pages/AllMoives";
import SearchMovies from "./pages/SearchMovies";

const container = document.getElementById("root");
const root = createRoot(container);
const ParamHandler = ({ params }) => {
  if (isNaN(params.id)) {
    throw new Response("Bad Request", {
      statusText: "Please make sure to insert correct moive id",
      status: 400,
    });
  }
  return params;
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "/:mediaType/:id",
        element: <Moive />,
        loader: ParamHandler,
      },
      {
        path: "tvseries",
        element: <TvSeries />,
      },
      {
        path: "allmovies",
        element: <AllMoives />,
      },
      {
        path: "/search/:query",
        element: <SearchMovies />,
      },
    ],
  },
]);
root.render(<RouterProvider router={router} />);
