import React from "react";
import HomeHeading from "../Components/HomeHeading";
import MovieCard from "../Components/MovieCard";
import { CardContainer } from "../Styles/CardStyle";

const SimilarMoives = ({ similarMoives }) => {
  return (
    <>
      <HomeHeading txt="You May Also Like" btn="" />
      <CardContainer>
        {similarMoives.map((moive) => (
          <MovieCard key={moive.id} {...moive} />
        ))}
      </CardContainer>
    </>
  );
};

export default SimilarMoives;
