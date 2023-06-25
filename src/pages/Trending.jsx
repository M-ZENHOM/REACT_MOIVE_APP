import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrendingMoives } from "../RTK/slices/moiveSlice";
import MovieCard from "../Components/MovieCard";
import { CardContainer } from "../Styles/CardStyle";
import HomeHeading from "../Components/HomeHeading";
import CardSkelaton from "../Components/CardSkelaton";
const Trending = () => {
  const dispatch = useDispatch();
  const { trendingMoives, loading } = useSelector((state) => state.moives);
  useEffect(() => {
    dispatch(fetchTrendingMoives());
  }, [dispatch]);
  return (
    <>
      <HomeHeading txt="TRENDING" btn="" />
      {loading && <CardSkelaton />}
      <CardContainer>
        {trendingMoives?.map((moive) => (
          <MovieCard key={moive.id} {...moive} />
        ))}
      </CardContainer>
    </>
  );
};

export default Trending;
