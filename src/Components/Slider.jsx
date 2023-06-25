import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import { Link } from "react-router-dom";
import {
  Postar,
  SliderBtn,
  SwiperCon,
  Txt,
  TxtCon,
  TxtTitle,
} from "../Styles/Slider";

export const Slider = ({ moives }) => {
  return (
    <SwiperCon
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
          />
          <TxtCon>
            <TxtTitle>{movie.title}</TxtTitle>
            <Txt>{movie.overview}</Txt>
            <SliderBtn to={`/moive/${movie.id}`}>READ MORE</SliderBtn>
          </TxtCon>
        </SwiperSlide>
      ))}
    </SwiperCon>
  );
};
