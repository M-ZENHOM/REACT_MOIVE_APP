import React from "react";
import { Btn, Container, GoogleImg } from "../Styles/IndexStyle";
import useFirebaseAuth from "../utils/useFirebaseAuth";
import GoogleLogo from "../assets/imgs/google-logo.png";

const Index = () => {
  const { GoogleAuthHandler } = useFirebaseAuth();
  return (
    <Container>
      <Btn onClick={GoogleAuthHandler}>
        <GoogleImg src={GoogleLogo} alt="googe-logo" />
        Sign in with google
      </Btn>
    </Container>
  );
};

export default Index;
