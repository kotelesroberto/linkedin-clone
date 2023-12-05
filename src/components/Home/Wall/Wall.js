import styled from "styled-components";
import React from "react";

import ShareBox from "./ShareBox";
import Feed from "./Feed";

const Wall = (props) => {
  return (
    <Container>
      <ShareBox />
      <Feed />
    </Container>
  );
};

const Container = styled.div`
  margin: 0 24px;
  margin-bottom: 24px;
  width: 100%;

  @media (max-width: 1024px) {
    margin-right: 0;
    width: calc(100% - 225px - 24px);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;

export default Wall;
