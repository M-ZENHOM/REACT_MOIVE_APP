import React from "react";
import styled from "styled-components";

const Copyrights = () => {
  return (
    <CopyrightsCon>
      <Wrapper>
        © 2023 React Moive. All Rights Reserved. Designed by
        <Zenhom href="https://mahmoud-zenhom.cf/">Mahmoud Zenhom.</Zenhom>
      </Wrapper>
    </CopyrightsCon>
  );
};
const CopyrightsCon = styled.div`
  background-color: #16162e;
  padding: 20px;
  font-size: 14px;
  color: #abb7c4;
`;
const Wrapper = styled.div`
  width: 100%;
  max-width: 1360px;
  margin: 0 auto;
`;
const Zenhom = styled.a`
  color: #0d5cee;
  margin-left: 5px;
`;

export default Copyrights;
