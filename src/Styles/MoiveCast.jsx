import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";

export const Img = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border: 1px solid #fff;
`;
export const NewSwiperSlide = styled(SwiperSlide)`
  text-align: center;
`;
export const NewSwiper = styled(Swiper)`
  margin-top: -50px;
`;
export const Title = styled.h6`
  color: #fff;
  margin-top: 20px;
  text-align: center;
`;
export const CastTitle = styled.h3`
  color: #abb7c4;
  text-align: center;
  font-size: 26px;
  line-height: 250px;
`;
export const Character = styled.p`
  color: #abb7c4;
  font-size: 14px;
`;
