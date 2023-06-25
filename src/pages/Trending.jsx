import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../Components/MovieCard";
import { CardContainer } from "../Styles/CardStyle";
import HomeHeading from "../Components/HomeHeading";
import CardSkelaton from "../Components/CardSkelaton";
import { Wrapper } from "../Styles/IndexStyle";
import { fetchTrendingMoives } from "../store/slices/moiveSlice";
const Trending = () => {
  const dispatch = useDispatch();
  const { trendingMoives, loading } = useSelector((state) => state.moives);
  useEffect(() => {
    dispatch(fetchTrendingMoives());
  }, [dispatch]);
  return (
    <Wrapper>
      <HomeHeading txt="TRENDING" btn="" />
      {loading && <CardSkelaton />}
      <CardContainer>
        {trendingMoives?.map((moive) => (
          <MovieCard key={moive.id} {...moive} />
        ))}
      </CardContainer>
    </Wrapper>
  );
};

export default Trending;
