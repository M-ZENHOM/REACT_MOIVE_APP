import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 400px;
  left: 55%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    flex-direction: column;
    top: 450px;
  }
`;

const TextContainer = styled.div`
  margin-left: 50px;
  @media (max-width: 640px) {
    margin: 0;
  }
`;

const MoivePostar = styled.img`
  width: 300px;
  @media (max-width: 767px) {
    width: 300px;
    height: 150px;
    border-radius: 20px;
  }
`;

const Overview = styled.p`
  width: 700px;
  color: #fff;
  @media (max-width: 1200px) {
    width: 400px;
    font-size: 14px;
  }
  @media (max-width: 900px) {
    width: 300px;
    font-size: 12px;
  }
`;
const Txt = styled.p`
  color: #b9b4b4;
  font-size: 16px;
  font-weight: bold;
`;
const TxtCon = styled.span`
  display: flex;
  color: #fff;
  @media (max-width: 640px) {
    display: block;
  }
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  height: 500px;
  padding-top: 100px;
  @media (max-width: 767px) {
    height: 800px;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #0000004c;
  }
`;
const Title = styled.h2`
  color: #fff;
  margin-bottom: 10px;
`;
const Genres = styled.span`
  color: #fff;
`;

const MoiveDetails = ({ singalMoive }) => {
  const filterStudio = singalMoive?.production_companies?.slice(0, 3);
  return (
    <>
      <Header
        style={{
          backgroundImage: `url( https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${singalMoive.backdrop_path})`,
        }}
      ></Header>
      <Container>
        <MoivePostar
          src={
            singalMoive.poster_path
              ? `https://image.tmdb.org/t/p/w300${singalMoive.poster_path}`
              : "https://www.movienewz.com/img/films/poster-holder.jpg"
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
