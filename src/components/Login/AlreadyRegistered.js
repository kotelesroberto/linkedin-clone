import React from "react";
import styled from "styled-components";

const AlreadyRegistered = (props) => {
  const gotoLoginPage = props.gotoLoginPage;

  return (
    <Container>
      <p>
        Already on RuleX?{" "}
        <a href="#" onClick={gotoLoginPage}>
          Sign in
        </a>
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
