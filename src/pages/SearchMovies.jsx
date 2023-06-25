import { useSelector } from "react-redux";
import HomeHeading from "../Components/HomeHeading";
import MovieCard from "../Components/MovieCard";
import { CardContainer } from "../Styles/CardStyle";

const SearchMovies = () => {
  const { SearchMoives, loading } = useSelector((state) => state.moives);

  return (
    <>
      <HomeHeading txt="Your search moive is here" btn="" />
      {loading && <h2>Loading...</h2>}
      <CardContainer>
        {SearchMoives?.map((moive) => (
          <MovieCard key={moive.id} {...moive} />
        ))}
      </CardContainer>
    </>
  );
};

export default SearchMovies;
