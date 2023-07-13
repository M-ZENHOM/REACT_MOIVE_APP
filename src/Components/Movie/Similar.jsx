import React from "react";
import MovieCard from "../MovieCard";
import useFetch from "../../hooks/useFetch";
import CardSkelaton from "../CardSkelaton";

const Similar = ({ id, mediaType }) => {
  const { data, isLoading } = useFetch(
    `/${mediaType}/${id}/similar?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
  );
  return (
    <>
      <h2 className="font-bold text-3xl px-4 mb-5">Similar Movies</h2>
      {!isLoading ? (
        <div className="grid grid-cols-fluid gap-12 mx-auto place-content-center place-items-center py-5">
          {data.results?.slice(0, 4).map((movie) => (
            <MovieCard key={movie?.id} {...movie} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-fluid gap-12 mx-auto place-content-center place-items-center py-5">
          <CardSkelaton />
        </div>
      )}
    </>
  );
};

export default Similar;
