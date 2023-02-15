import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeHeading from "../Components/HomeHeading";
import MovieCard from "../Components/MovieCard";
import { fetchTvOnAir } from "../RTK/slices/moiveSlice";
import { CardContainer } from "../Styles/CardStyle";
import MoivePagination from "../Components/MoivePagination";

const TvSeries = () => {
  const dispatch = useDispatch();
  const [pageNum, setPageNum] = useState(1);
  const TvSeries = useSelector((state) => state.moives.TvSeries);
  useEffect(() => {
    dispatch(fetchTvOnAir(pageNum));
  }, [dispatch, pageNum]);
  return (
    <>
      <HomeHeading txt="TvSeries" btn="" />
      <CardContainer>
        {TvSeries.map((moive) => (
          <MovieCard key={moive.id} {...moive} />
        ))}
      </CardContainer>
      <MoivePagination setPageNum={setPageNum} />
    </>
  );
};

export default TvSeries;
