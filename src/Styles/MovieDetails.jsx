import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 350px;
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

export const TextContainer = styled.div`
  margin-left: 50px;
  @media (max-width: 640px) {
    margin: 0;
    margin-top: 50px;
  }
`;

export const MoivePostar = styled.img`
  width: 300px;
  @media (max-width: 767px) {
    width: 300px;
    height: 300px;
    border-radius: 20px;
  }
`;

export const Overview = styled.p`
  width: 700px;
  color: #fff;
  @media (max-width: 1200px) {
    width: 400px;
    font-size: 14px;
  }
  @media (max-width: 900px) {
    width: 300px;
    font-size: 14px;
  }
`;
export const Txt = styled.p`
  color: #b9b4b4;
  font-size: 16px;
  font-weight: bold;
  @media (max-width: 640px) {
    font-size: 14px;
  }
`;
export const TxtCon = styled.span`
  display: flex;
  color: #fff;
  @media (max-width: 640px) {
    font-size: 12px;
  }
`;
export const Header = styled.div`
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
export const Title = styled.h2`
  color: #fff;
  margin-bottom: 10px;
`;
export const Genres = styled.span`
  color: #fff;
`;
