import React from "react";
import styled from "styled-components";
import * as variables from "../_library/Variables";

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
    color: ${variables.colors.link};
    font-weight: 700;

    &:hover {
      color: ${variables.colors.linkHover};
    }
  }
`;

export default AlreadyRegistered;
