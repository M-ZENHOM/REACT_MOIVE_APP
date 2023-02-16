import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Postar, SwiperCon, Txt, TxtCon, TxtTitle } from "../Styles/Slider";

export const Slider = ({ moives }) => {
  const navigate = useNavigate();
  const ClickHandler = (id) => {
    window.scroll(0, 0);
    navigate(`/moive/${id}`);
  };
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
              backgroundImage: `url(${process.env.local.REACT_APP_BG_IMG}${movie.backdrop_path})`,
            }}
          ></Postar>
          <TxtCon>
            <TxtTitle>{movie.title}</TxtTitle>
            <Txt>{movie.overview}</Txt>
            <Button variant="contained" onClick={() => ClickHandler(movie.id)}>
              READ MORE
            </Button>
          </TxtCon>
        </SwiperSlide>
      ))}
    </SwiperCon>
  );
};
