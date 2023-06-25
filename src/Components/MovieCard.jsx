import { Card, Postar, Title, Vote } from "../Styles/CardStyle";

const MovieCard = ({ title, vote_average, id, poster_path }) => {
  return (
    <Card to={`/moive/${id}`} key={id}>
      <Title>{title}</Title>
      <Vote
        voteColor={
          vote_average < 6
            ? "red"
            : vote_average >= 8
            ? "green"
            : vote_average > 6
            ? "#ffa502"
            : ""
        }
      >
        ⭐ {Math.round(vote_average * 10) / 10}
      </Vote>
      <Postar
        src={
          poster_path
            ? `${process.env.REACT_APP_POSTAR_IMG}${poster_path}`
            : process.env.REACT_APP_UNAVAILABLE_IMG
        }
        alt="Moive Poster"
      />
    </Card>
  );
};

export default MovieCard;
