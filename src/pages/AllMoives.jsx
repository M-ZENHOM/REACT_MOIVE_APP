import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeHeading from "../Components/HomeHeading";
import MovieCard from "../Components/MovieCard";
import MoivePagination from "../Components/MoivePagination";
import { fetchMoives } from "../RTK/slices/moiveSlice";
import { CardContainer } from "../Styles/CardStyle";

const AllMoives = () => {
  const [pageNum, setPageNum] = useState(1);
  const dispatch = useDispatch();
  const Moives = useSelector((state) => state.moives.moives);
  useEffect(() => {
    dispatch(fetchMoives(pageNum));
  }, [dispatch, pageNum]);
  return (
    <>
      <HomeHeading txt="Moives" btn="" />
      <CardContainer>
        {Moives?.map((moive) => (
          <MovieCard key={moive.id} {...moive} />
        ))}
      </CardContainer>
      <MoivePagination setPageNum={setPageNum} />
    </>
  );
};

export default AllMoives;
