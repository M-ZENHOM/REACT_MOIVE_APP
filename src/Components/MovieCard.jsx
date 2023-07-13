import Img from "./LazyLoadImage";
import { formatDate } from "../lib/utils";
import { Link } from "react-router-dom";

const MovieCard = ({
  name,
  title,
  vote_average,
  id,
  poster_path,
  release_date,
  first_air_date,
}) => {
  const voteNum = Math.round(vote_average * 10) / 10;
  const mediaType = release_date ? "movie" : "tv";
  return (
    <Link
      to={`/${mediaType}/${id}`}
      key={id}
      className="card  w-full max-w-[300px] h-full max-h-[550px]  bg-base-100 shadow-xl"
    >
      <figure>
        <Img
          className="w-[300px] h-[350px]"
          src={
            poster_path
              ? `${process.env.REACT_APP_POSTAR_IMG}${poster_path}`
              : process.env.REACT_APP_UNAVAILABLE_IMG
          }
          alt="Shoes"
        />
      </figure>
      <div className="card-body h-[200px]">
        <h2 className="card-title">{title || name}</h2>
        <div className="flex items-center justify-between">
          <h2>{formatDate(first_air_date || release_date)}</h2>
          <div
            className={`radial-progress  mb-5 ${
              voteNum < 4
                ? "text-red-500"
                : voteNum < 7
                ? "text-orange-500"
                : "text-green-500"
            } `}
            style={{
              "--value": `${Math.round(vote_average * 10)}`,
              "--size": "3rem",
            }}
          >
            {voteNum}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
