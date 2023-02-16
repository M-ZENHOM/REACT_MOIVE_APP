import {
  Container,
  Genres,
  Header,
  MoivePostar,
  Overview,
  TextContainer,
  Title,
  Txt,
  TxtCon,
} from "../Styles/MovieDetails";

const MoiveDetails = ({ singalMoive }) => {
  const filterStudio = singalMoive?.production_companies?.slice(0, 3);
  return (
    <>
      <Header
        style={{
          backgroundImage: `url( ${process.env.REACT_APP_BG_IMG}${singalMoive.backdrop_path})`,
        }}
      />
      <Container>
        <MoivePostar
          src={
            singalMoive.poster_path
              ? `${process.env.REACT_APP_POSTAR_IMG_TWO}${singalMoive.poster_path}`
              : `${process.env.REACT_APP_UNAVAILABLE_IMG}`
          }
        />
        <TextContainer>
          <Title>{singalMoive.title}</Title>
          {singalMoive.genres?.map((gen, i) => (
            <Genres key={gen.id}>
              {i > 0 && ",  "}
              {gen.name}
            </Genres>
          ))}
          <Txt>{singalMoive.tagline}</Txt>
          <Overview>{singalMoive.overview}</Overview>
          <TxtCon>
            <Txt>DURATION:</Txt>
            {singalMoive.runtime}min
          </TxtCon>
          <TxtCon>
            <Txt> STUDIO:</Txt>
            {filterStudio?.map((mo, i) => {
              return (
                <span key={mo.id}>
                  {i > 0 && ", "}
                  {mo.name}
                </span>
              );
            })}
          </TxtCon>
          <TxtCon>
            <Txt>RELEASE DATE:</Txt>
            {singalMoive.release_date}
          </TxtCon>
          <TxtCon>
            <Txt>STATUS:</Txt>
            {singalMoive.status}
          </TxtCon>
        </TextContainer>
      </Container>
    </>
  );
};

export default MoiveDetails;
