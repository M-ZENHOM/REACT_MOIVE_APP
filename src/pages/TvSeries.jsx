import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeHeading from "../Components/HomeHeading";
import MovieCard from "../Components/MovieCard";
import { fetchTvOnAir } from "../RTK/slices/moiveSlice";
import { CardContainer } from "../Styles/CardStyle";
import MoivePagination from "../Components/MoivePagination";
import CardSkelaton from "../Components/CardSkelaton";
import { Wrapper } from "../Styles/IndexStyle";

const TvSeries = () => {
  const dispatch = useDispatch();
  const [pageNum, setPageNum] = useState(1);
  const { TvSeries, loading } = useSelector((state) => state.moives);
  useEffect(() => {
    dispatch(fetchTvOnAir(pageNum));
  }, [dispatch, pageNum]);
  return (
    <Wrapper>
      <HomeHeading txt="TvSeries" btn="" />
      {loading && <CardSkelaton />}
      <CardContainer>
        {TvSeries.map((moive) => (
          <MovieCard key={moive.id} {...moive} />
        ))}
      </CardContainer>
      <MoivePagination setPageNum={setPageNum} />
    </Wrapper>
  );
};

export default TvSeries;
