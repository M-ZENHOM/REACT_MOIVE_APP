import React from "react";
import MovieCard from "./MovieCard";
import useFetch from "../hooks/useFetch";
import CardSkelaton from "./CardSkelaton";
import { responsive } from "../config/site";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ResubleSection = ({ fetchQuery, title, tab, tabValue, tabTwoValue }) => {
  const [endpoint, setEndpoint] = React.useState(
    !tabValue ? "" : tabValue.toLowerCase()
  );
  const { data, isLoading } = useFetch(
    `${fetchQuery + endpoint}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
  );
  return (
    <div className="my-10">
      <div className="flex items-center justify-between p-1 my-5 text-3xl">
        <h2>{title}</h2>
        {tab === true && (
          <div className="tabs tabs-boxed">
            <button
              onClick={() => setEndpoint(tabValue.toLowerCase())}
              className={`tab ${
                endpoint === tabValue.toLowerCase() ? "tab-active" : ""
              }`}
            >
              {tabValue}
            </button>
            <button
              onClick={() => setEndpoint(tabTwoValue.toLowerCase())}
              className={`tab ${
                endpoint === tabTwoValue.toLowerCase() ? "tab-active" : ""
              }`}
            >
              {tabTwoValue}
            </button>
          </div>
        )}
      </div>
      {!isLoading ? (
        <Carousel responsive={responsive} keyBoardControl={true}>
          {data?.results.map((movie) => (
            <div
              key={movie.id}
              className="grid grid-cols-fluid gap-12 mx-auto place-content-center place-items-center py-5 "
            >
              <MovieCard key={movie.id} {...movie} />
            </div>
          ))}
        </Carousel>
      ) : (
        <div className="grid grid-cols-fluid gap-12 mx-auto place-content-center place-items-center ">
          <CardSkelaton />
        </div>
      )}
    </div>
  );
};

export default ResubleSection;
