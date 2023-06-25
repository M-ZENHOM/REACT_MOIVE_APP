import { useNavigate, useRouteError } from "react-router-dom";
import styled from "styled-components";

export const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <ErrorContainer>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Button onClick={() => navigate("/", { replace: true })}>
        GO TO HOME
      </Button>
    </ErrorContainer>
  );
};

const Button = styled.button`
  outline: none;
  border: none;
  background-color: #000;
  color: #fff;
  padding: 10px 30px;
  cursor: pointer;
`;
const ErrorContainer = styled.div`
  text-align: center;
  margin: 100px 0;
`;
