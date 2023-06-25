import { Link } from "react-router-dom";
import styled from "styled-components";

export const Card = styled(Link)`
  position: relative;
  transition: 0.5s;
  cursor: pointer;
  margin-bottom: 30px;
  filter: drop-shadow(0 2px 2px rgba(63, 63, 63, 0.3));
  &::before {
    content: "";
    position: absolute;
    top: 0;
    width: 0;
    height: inherit;
    background: rgba(11, 5, 65, 0.5);
    text-align: center;
    color: #fff;
    text-transform: uppercase;
    transition: 0.5s;
    line-height: 300px;
    @media (max-width: 640px) {
      line-height: 450px;
    }
  }
  &:hover::before {
    font-size: 30px;
    content: "▶";
    width: 100%;
    height: 100%;
    transition: 0.5s;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  place-content: center;
  place-items: center;
  border-bottom: 1px solid #ffffff3b;
`;

export const Postar = styled.img`
  width: 200px;
  object-fit: contain;
  @media (max-width: 640px) {
    width: 300px;
    margin: 0 auto;
  }
`;

export const Title = styled.h2`
  width: 150px;
  font-size: 16px;
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: #fff;
`;
export const Vote = styled.h2`
  font-size: 16px;
  position: absolute;
  top: 0;
  right: 0;
  text-align: center;
  color: ${(props) => props.voteColor};
  background-color: #000;
  padding: 5px;
`;

export const Heading = styled.h2`
  color: #fff;
  font-size: 16px;
`;
export const ViewMore = styled(Link)`
  color: #abb7c4;
  font-size: 16px;
`;
export const HeadingCon = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 20px;
`;
