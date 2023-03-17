import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const CopyrightsCon = styled.div`
  background-color: #16162e;
  padding: 20px;
  font-size: 14px;
  color: #abb7c4;
`;
const Zenhom = styled.a`
  color: #0d5cee;
  margin-left: 5px;
`;

const Copyrights = () => {
  const { name } = useSelector((state) => state.user);
  return (
    <>
      {name && (
        <CopyrightsCon>
          © 2023 React Moive. All Rights Reserved. Designed by
          <Zenhom href="https://mahmoud-zenhom.cf/">Mahmoud Zenhom.</Zenhom>
        </CopyrightsCon>
      )}
    </>
  );
};

export default Copyrights;
