import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MoiveCast from "../MoiveThings/MoiveCast";
import MoiveDetails from "../MoiveThings/MoiveDetails";
import SimilarMoives from "../MoiveThings/SimilarMoives";
import {
  fetchMoivebyID,
  fetchMoiveCast,
  fetchSimilarMoives,
} from "../RTK/slices/moiveSlice";

export const Moive = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singalMoive, similarMoives, moiveCast } = useSelector(
    (state) => state.moives
  );
  useEffect(() => {
    dispatch(fetchMoivebyID(id));
    dispatch(fetchSimilarMoives(id));
    dispatch(fetchMoiveCast(id));
  }, [dispatch, id]);
  return (
    <>
      <MoiveDetails singalMoive={singalMoive} />
      <MoiveCast moiveCast={moiveCast} />
      <SimilarMoives similarMoives={similarMoives} />
    </>
  );
};
