import React from "react";
import styled from "styled-components";

const AlreadyRegistered = () => {
  return (
    <Container>
      <p>
        Already on LinkedIn? <a href="#">Sign in</a>
      </p>
    </Container>
  );
};

const Container = styled.div`
  p {
    text-align: center;
  }
  a {
    display: inline-block;
    color: #0a66c2;
    font-weight: 700;
  }
`;

export default AlreadyRegistered;
