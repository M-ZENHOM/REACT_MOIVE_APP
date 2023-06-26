import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeHeading from "../Components/HomeHeading";
import MovieCard from "../Components/MovieCard";
import MoivePagination from "../Components/MoivePagination";
import { CardContainer } from "../Styles/CardStyle";
import CardSkelaton from "../Components/CardSkelaton";
import { Wrapper } from "../Styles/IndexStyle";
import { fetchMoives } from "../store/slices/moiveSlice";
import ScrollToTop from "../utils/scrollTop";

const AllMoives = () => {
  const [pageNum, setPageNum] = useState(1);
  const dispatch = useDispatch();
  const { moives, loading } = useSelector((state) => state.moives);
  useEffect(() => {
    dispatch(fetchMoives(pageNum));
  }, [dispatch, pageNum]);

  return (
    <Wrapper>
      <ScrollToTop />
      <HomeHeading txt="Moives" btn="" />
      {loading && <CardSkelaton />}
      <CardContainer>
        {moives?.map((moive) => (
          <MovieCard key={moive.id} {...moive} />
        ))}
      </CardContainer>
      <MoivePagination setPageNum={setPageNum} pageNum={pageNum} />
    </Wrapper>
  );
};

export default AllMoives;
