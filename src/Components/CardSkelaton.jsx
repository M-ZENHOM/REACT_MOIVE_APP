import React from "react";
import styled, { keyframes } from "styled-components";
import { CardContainer } from "../Styles/CardStyle";

const CardSkelaton = () => {
  return (
    <CardContainer>
      {[1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(
        (s, i) => (
          <Skelation key={i}>
            <Image />
            <Content>
              <Container>
                <Text />
                <SubText />
              </Container>
              <Btn />
            </Content>
          </Skelation>
        )
      )}
    </CardContainer>
  );
};

const shineLoadingImage = keyframes`
   0% {
    background-position: -32px;
  }
  40%, 100% {
    background-position: 208px;
  }
`;
const shineLoadingContainer = keyframes`
  0% {
    background-position: -100px;
  }
  40%, 100% {
    background-position: 140px;
  }
`;
const Skelation = styled.div`
  width: 260px;
  height: 260px;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 15px;
`;
const Content = styled.div`
  background: #f7f7f7;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  flex-basis: 100%;
`;
const Btn = styled.div`
  width: 60px;
  height: 25px;
  background: #ececec;
  background-image: linear-gradient(
    90deg,
    #ececec 0px,
    #ddd 40px,
    #ececec 80px
  );
  background-size: 250px;
  border-radius: 3px;
  animation: ${shineLoadingContainer} 2s infinite ease-out;
`;
const Text = styled.div`
  height: 10px;
  width: 65%;
  margin-bottom: 10px;
  background: #ececec;
  background-image: linear-gradient(
    90deg,
    #ececec 0px,
    #ddd 40px,
    #ececec 80px
  );
  background-size: 250px;
  border-radius: 10px;
  animation: ${shineLoadingContainer} 2s infinite ease-out;
`;
const SubText = styled.div`
  height: 10px;
  width: 50%;
  background: #ececec;
  background-image: linear-gradient(
    90deg,
    #ececec 0px,
    #ddd 40px,
    #ececec 80px
  );
  background-size: 250px;
  border-radius: 10px;
  animation: ${shineLoadingContainer} 2s infinite ease-out;
`;
const Image = styled.div`
  height: 190px;
  background-image: linear-gradient(
    90deg,
    #ececec 0px,
    #f4f4f4 40px,
    #ececec 80px
  );
  background-size: 250px;
  animation: ${shineLoadingImage} 2s infinite ease-out;
`;

export default CardSkelaton;
