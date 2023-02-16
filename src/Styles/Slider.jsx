import styled from "styled-components";
import { Swiper } from "swiper/react";

export const SwiperCon = styled(Swiper)`
  width: 100%;
  height: 600px;
  position: relative;
`;
export const Postar = styled.div`
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
export const TxtCon = styled.div`
  position: absolute;
  bottom: 50px;
  left: 80px;
  z-index: 2;
  @media (max-width: 640px) {
    left: 50px;
  }
`;
export const Txt = styled.p`
  width: 700px;
  color: #fff;
  @media (max-width: 640px) {
    width: auto;
    font-size: 14px;
    padding-right: 20px;
  }
`;
export const TxtTitle = styled.h1`
  color: #fff;
  font-weight: bold;
  font-size: 40px;
  @media (max-width: 640px) {
    font-size: 24px;
  }
`;
