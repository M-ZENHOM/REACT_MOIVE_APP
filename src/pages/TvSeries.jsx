import { useState } from "react";
import useFetch from "../hooks/useFetch";
import Wrapper from "../Components/Wrapper";
import MovieCard from "../Components/MovieCard";
import CardSkelaton from "../Components/CardSkelaton";
import Pagination from "../Components/Pagination";

const TvSeries = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useFetch(
    `/discover/tv?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&page=${page}`
  );
  return (
    <Wrapper className="py-10">
      {!isLoading ? (
        <>
          <div className="flex items-center justify-between px-4">
            <h2 className="text-2xl my-8">
              {data?.total_results === 0
                ? "No Movies founded!"
                : `Found ${data?.total_results} Tv Shows`}
            </h2>
            <Pagination page={page} setPage={setPage} data={data} />
          </div>
          <div className="grid grid-cols-fluid gap-5 px-4">
            {data?.results.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="text-2xl my-8">
            <progress className="progress w-56" value="80" max="100" />
          </h2>
          <div className="grid grid-cols-fluid gap-5">
            <CardSkelaton />
          </div>
        </>
      )}
    </Wrapper>
  );
};

export default TvSeries;
