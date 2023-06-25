import { useEffect, useTransition } from "react";
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
import styled from "styled-components";
import CardSkelaton from "../Components/CardSkelaton";

export const Home = () => {
  const dispatch = useDispatch();
  const { moives, TvSeries, TopRated, loading } = useSelector(
    (state) => state.moives
  );
  const [isPending, startTransition] = useTransition();
  const defaultPage = 1;
  useEffect(() => {
    startTransition(() => {
      dispatch(fetchMoives(defaultPage));
      dispatch(fetchTrendingMoives());
      dispatch(fetchTvOnAir());
      dispatch(fetchTopRated());
    });
  }, [dispatch, defaultPage]);

  return (
    <>
      <Slider moives={moives} />
      {loading && <CardSkelaton />}
      <Wrapper>
        <HomeHeading
          txt="MOVIES ON AIR  ⮞"
          btn="View more »"
          where="allmovies"
        />
        <CardContainer>
          {moives?.slice(0, 6).map((moive) => (
            <MovieCard key={moive.id} {...moive} />
          ))}
        </CardContainer>
        <HomeHeading
          txt="TV SERIES ON AIR  ⮞"
          btn="View more »"
          where="tvseries"
        />
        <CardContainer>
          {TvSeries?.slice(0, 6).map((moive) => (
            <MovieCard key={moive.id} {...moive} />
          ))}
        </CardContainer>
        <HomeHeading
          txt="TOP RATED ON AIR  ⮞"
          btn="View more »"
          where="allmovies"
        />
        <CardContainer>
          {TopRated?.slice(0, 6).map((moive) => (
            <MovieCard key={moive.id} {...moive} />
          ))}
        </CardContainer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 1360px;
  margin: 0 auto;
`;
