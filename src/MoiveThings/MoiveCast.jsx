import React from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper";
import {
  CastTitle,
  Character,
  Img,
  NewSwiper,
  NewSwiperSlide,
  Title,
} from "../Styles/MoiveCast";

const MoiveCast = ({ moiveCast }) => {
  return (
    <>
      <CastTitle>Cast</CastTitle>
      <NewSwiper
        breakpoints={{
          640: {
            width: 640,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {moiveCast.cast?.map((moCast) => (
          <NewSwiperSlide key={moCast.cast_id}>
            <Img
              src={
                moCast.profile_path
                  ? `https://image.tmdb.org/t/p/w300${moCast.profile_path}`
                  : `
              https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg
              `
              }
              alt=""
            />
            <Title>{moCast.name}</Title>
            <Character>{moCast.character}</Character>
          </NewSwiperSlide>
        ))}
      </NewSwiper>
    </>
  );
};

export default MoiveCast;
