import React from "react";
import DocumentTitle from "react-document-title";
import { ButtonSecondary } from "../components/_library/Buttons";
import styled from "styled-components";

import FooterInlineMenu from "../components/Footer/FooterInlineMenu";

const DemoPage = () => {
  return (
    <DocumentTitle title="Error | RuleX clone by Robert Koteles">
      <>
        <Container>
          <Nav>
            <a href="/">
              <img src="/images/login-logo.svg" alt="Go to RuleX homepage" />
            </a>
          </Nav>
          <Section>
            <ContentContainer>
              <img src="./images/howto.svg" alt="Something went wrong" />
              <h2>Hi, it's Robert Koteles, Senior Web Developer.</h2>
              <p>
                If you want to see more features, feel free to <span>hire</span>{" "}
                me.
                Well, this is my recent demo webapp, a personal project of mine, that
                has been built just for fun.
              </p>
              <ButtonSecondary
                onClick={() => {
                  window.location =
                    "https://www.linkedin.com/in/robertkoteles/";
                }}
              >
                Go to my real LinkedIn profile
              </ButtonSecondary>
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
  width: 80%;
  max-width: 600px;
  text-align: center;

  flex-grow: 0;
  margin:  0 auto;

  h2 {
    margin-bottom: 0px;
  }
  
  p {
    margin-bottom: 36px;

    span {
      font-weight: bold;
      text-transform: uppercase;
    }
  }

  img {
    width: 90%;
    max-width: 400px;
    height: auto;
    margin-bottom: 12px;
  }

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

export default DemoPage;
