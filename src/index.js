import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Trending from "./pages/Trending";
import { Root } from "./Root";
import { ErrorPage } from "./pages/ErrorPage";
import { Provider } from "react-redux";
import { store } from "./RTK/store";
import { Home } from "./pages/Home";
import { Moive } from "./pages/Moive";
import TvSeries from "./pages/TvSeries";
import AllMoives from "./pages/AllMoives";
import SearchMovies from "./pages/SearchMovies";
import Index from "./pages/Index";

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
        element: <Index />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "trending",
        element: <Trending />,
      },
      {
        path: "moive/:id",
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
        path: "search",
        element: <SearchMovies />,
      },
    ],
  },
]);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
