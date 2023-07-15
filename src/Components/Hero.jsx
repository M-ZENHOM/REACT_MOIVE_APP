import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Hero = () => {
  const { data, isLoading } = useFetch(
    `/trending/movie/day?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
  );
  return (
    <>
      {!isLoading ? (
        <>
          {data?.results.slice(2, 3).map((movie) => (
            <div
              key={movie.id}
              className="hero h-[60vh]"
              style={{
                backgroundImage: `${`url(${process.env.REACT_APP_BG_IMG}${movie.backdrop_path})`}`,
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg">
                  <h1 className="mb-5 text-4xl font-bold">{movie.title}</h1>
                  <p className="mb-5">{movie.overview}</p>
                  <Link to={`/movie/${movie.id}`} className="btn btn-primary">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="hero h-[60vh]" />
      )}
    </>
  );
};

export default Hero;
