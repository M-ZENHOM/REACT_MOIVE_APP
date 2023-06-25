import { Link } from "react-router-dom";
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
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #00000068;
  }
`;
export const TxtCon = styled.div`
  position: absolute;
  bottom: 80px;
  left: 280px;
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
export const SliderBtn = styled(Link)`
  color: white;
  background-color: blue;
  padding: 12px 20px;
  border-radius: 20px;
  transition: 0.5s;
  &:hover {
    color: white;
    background-color: black;
  }
`;
