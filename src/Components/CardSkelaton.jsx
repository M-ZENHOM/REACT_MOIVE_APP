import React from "react";
import styled from "styled-components";

const CardSkelaton = () => {
  return <Skelation />;
};
const Skelation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 250px;
  height: 300px;
  background-color: #000000ac;
  z-index: 1;
  border-radius: 6px;
`;

export default CardSkelaton;
