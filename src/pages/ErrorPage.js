import React from "react";
import DocumentTitle from "react-document-title";
import { ButtonSecondary } from "../components/Common/Buttons";
import styled from "styled-components";

import FooterInlineMenu from "../components/Footer/FooterInlineMenu";

const ErrorPage = () => {
  return (
    <DocumentTitle title="Error | LinkedX clone by Robert Koteles">
      <>
        <Container>
          <Nav>
            <a href="/">
              <img src="/images/login-logo.svg" alt="Go to LinkedX homepage" />
            </a>
          </Nav>
          <Section>
            <ContentContainer>
              <img
                src="./images/server-administrators-icon.svg"
                alt="Something went wrong"
              />
              <h2>Something went wrong</h2>
              <p>We're having issues loading the page.</p>
              <ButtonSecondary>Go to your feed</ButtonSecondary>
            </ContentContainer>
          </Section>
          <FooterInlineMenu />
        </Container>
      </>
    </DocumentTitle>
  );
};

const Container = styled.div`
  display: block;
  width: 100%;
  padding: 0 16px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-grow: 1;

  ${ButtonSecondary} {
    width: auto;
  }
`;

const Nav = styled.nav`
  position: relative;
  max-width: 1128px;
  margin: auto;
  padding: 12px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;

  @media (max-width: 468px) {
    flex-wrap: wrap;
  }

  & > a {
    &:first-child {
      width: 135px;

      @media (max-width: 768px) {
        padding: 0px 5px;
      }
    }

    img {
      width: 100%;
      height: auto;

      @media (max-width: 768px) {
        width: 84px;
      }
    }
  }
`;

const Section = styled.section`
  width: 100%;
  max-width: 1128px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  min-height: 700px;
  padding: 40px 0 140px 0;
  margin: auto;

  // mobile
  @media (max-width: 768px) {
    min-height: 0px;
  }
`;

export default ErrorPage;
