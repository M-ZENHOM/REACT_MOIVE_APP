import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrendingMoives } from "../RTK/slices/moiveSlice";
import MovieCard from "../Components/MovieCard";
import { CardContainer } from "../Styles/CardStyle";
import HomeHeading from "../Components/HomeHeading";
const Trending = () => {
  const dispatch = useDispatch();
  const Moives = useSelector((state) => state.moives.trendingMoives);
  useEffect(() => {
    dispatch(fetchTrendingMoives());
  }, [dispatch]);
  return (
    <>
      <HomeHeading txt="TRENDING" btn="" />
      <CardContainer>
        {Moives?.map((moive) => (
          <MovieCard key={moive.id} {...moive} />
        ))}
      </CardContainer>
    </>
  );
};

export default Trending;
