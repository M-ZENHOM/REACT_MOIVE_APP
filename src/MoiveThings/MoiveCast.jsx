import React from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper";
import styled from "styled-components";
import HomeHeading from "../Components/HomeHeading";

const Img = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border: 1px solid #fff;
`;
const NewSwiperSlide = styled(SwiperSlide)`
  text-align: center;
`;
const NewSwiper = styled(Swiper)`
  margin-top: 50px;
`;
const Title = styled.h6`
  color: #fff;
  margin-top: 20px;
  text-align: center;
`;
const Character = styled.p`
  color: #abb7c4;
  font-size: 14px;
`;

const MoiveCast = ({ moiveCast }) => {
  return (
    <>
      <HomeHeading txt="Cast" btn="" />
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
