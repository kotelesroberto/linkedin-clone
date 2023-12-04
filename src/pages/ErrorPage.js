import React from "react";
import DocumentTitle from "react-document-title";
import { ButtonSecondary } from "../components/Common/Buttons";
import styled from "styled-components";

const ErrorPage = () => {
  return (
    <DocumentTitle title="Log in | LinkedIn clone by Robert Koteles">
      <Container>
        <img
          src="./images/server-administrators-icon.svg"
          alt="Something went wrong"
        />
        <h2>Something went wrong</h2>
        <p>We're having issues loading the page.</p>
        <ButtonSecondary>Go to your feed</ButtonSecondary>}
      </Container>
    </DocumentTitle>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-grow: 1;
`;

export default ErrorPage;
