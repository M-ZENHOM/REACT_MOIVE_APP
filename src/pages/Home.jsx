import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeHeading from "../Components/HomeHeading";
import MovieCard from "../Components/MovieCard";
import { Slider } from "../Components/Slider";
import {
  fetchMoives,
  fetchTopRated,
  fetchTrendingMoives,
  fetchTvOnAir,
} from "../RTK/slices/moiveSlice";
import { CardContainer } from "../Styles/CardStyle";

export const Home = () => {
  const dispatch = useDispatch();
  const { moives, TvSeries, TopRated } = useSelector((state) => state.moives);
  const defaultPage = 1;
  const filterTvSeries = TvSeries?.slice(0, 6);
  const filterTopRated = TopRated?.slice(0, 6);
  const filterMovies = moives?.slice(0, 6);
  useEffect(() => {
    dispatch(fetchMoives(defaultPage));
    dispatch(fetchTrendingMoives());
    dispatch(fetchTvOnAir());
    dispatch(fetchTopRated());
  }, [dispatch, defaultPage]);
  return (
    <>
      <Slider moives={moives} />
      <HomeHeading txt="MOVIES ON AIR  ⮞" btn="View more »" where="allmovies" />
      <CardContainer>
        {filterMovies.map((moive) => (
          <MovieCard key={moive.id} {...moive} />
        ))}
      </CardContainer>
      <HomeHeading
        txt="TV SERIES ON AIR  ⮞"
        btn="View more »"
        where="tvseries"
      />
      <CardContainer>
        {filterTvSeries.map((moive) => (
          <MovieCard key={moive.id} {...moive} />
        ))}
      </CardContainer>
      <HomeHeading
        txt="TOP RATED ON AIR  ⮞"
        btn="View more »"
        where="allmovies"
      />
      <CardContainer>
        {filterTopRated.map((moive) => (
          <MovieCard key={moive.id} {...moive} />
        ))}
      </CardContainer>
    </>
  );
};
