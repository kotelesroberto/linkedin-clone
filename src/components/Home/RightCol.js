import styled from "styled-components";
import React from "react";

const RightCol = () => {
  return <Container>Right Col</Container>;
};

const Container = styled.div`
  min-width: 300px;
  width: 20%;
  margin-bottom: 24px;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 768px) {
  }
`;

export default RightCol;
