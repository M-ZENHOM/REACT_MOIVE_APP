import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import styled from "styled-components";

const SwiperCon = styled(Swiper)`
  width: 100%;
  height: 600px;
  position: relative;
`;
const Postar = styled.div`
  width: 100%;
  height: 600px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #0000004c;
  }
`;
const TxtCon = styled.div`
  position: absolute;
  bottom: 50px;
  left: 80px;
  z-index: 2;
  @media (max-width: 640px) {
    left: 50px;
  }
`;
const Txt = styled.p`
  width: 700px;
  color: #fff;

  @media (max-width: 640px) {
    width: auto;
    font-size: 14px;
  }
`;
const TxtTitle = styled.h1`
  color: #fff;
  font-weight: bold;
  font-size: 40px;
`;

export const Slider = ({ moives }) => {
  return (
    <SwiperCon
      navigation={true}
      modules={[Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="mySwiper"
    >
      {moives?.map((movie) => (
        <SwiperSlide key={movie.id}>
          <Postar
            style={{
              backgroundImage: `url(${process.env.REACT_APP_BG_IMG}${movie.backdrop_path})`,
            }}
          ></Postar>
          <TxtCon>
            <TxtTitle>{movie.title}</TxtTitle>
            <Txt>{movie.overview}</Txt>
          </TxtCon>
        </SwiperSlide>
      ))}
    </SwiperCon>
  );
};
