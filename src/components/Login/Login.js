import React from "react";
import styled from "styled-components";

import LoginForm from "./LoginForm";
import LoginGoogle from "./LoginGoogle";
import LoginJoin from "./LoginJoin";
import FooterMenu from "../Footer/FooterMenu";
import FooterInlineMenu from "../Footer/FooterInlineMenu";

import { ButtonJoin, ButtonSignIn } from "./Buttons";

const Login = () => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="Go to LinkedIn homepage" />
        </a>
        <NavLoginButtons>
          <ButtonJoin>Join now</ButtonJoin>
          <ButtonSignIn>Sign in</ButtonSignIn>
        </NavLoginButtons>
      </Nav>
      <Section>
        <Hero>
          <h1>Robert's LinkedIn clone built in React</h1>
        </Hero>
        <SignInForm>
          <LoginForm />
          <LoginGoogle />
          <LoginJoin />
        </SignInForm>

        <img src="./images/login-hero.svg" alt="Login to LinkedIn" />
      </Section>
      <FooterMenu />
      <FooterInlineMenu />
    </Container>
  );
};

// create the compoments by using styled components and adding styles here
const Container = styled.div`
  display: block;
  width: 100%;
  padding: 0 16px;
`;

const NavLoginButtons = styled.div`
  display: flex;
  align-items: center;
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
  align-content: start;
  align-items: center;
  flex-wrap: wrap;
  min-height: 700px;
  padding: 40px 0 140px 0;
  margin: auto;

  // mobile
  @media (max-width: 768px) {
    min-height: 0px;
  }

  & > img {
    max-width: calc(45% + 150px);
    width: 700px;
    height: auto;
    display: block;
    position: absolute;
    top: 50%;
    right: -150px;
    transform: translateY(-50%);

    @media (max-width: 768px) {
      width: initial;
      max-width: 60%;
      height: auto;
      top: 230px;
      margin: 12px auto;
      right: 0;
      transform: none;
      position: initial;
    }
  }
`;

const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    color: #b24020;
    font-weight: 200;
    line-height: 70px;
    margin-bottom: 24px;

    @media (max-width: 768px) {
      font-size: 32px;
      font-weight: 400;
      line-height: 1.2em;
      width: 100%;
    }
  }
`;

const SignInForm = styled.div`
  width: 100%;
  max-width: 408px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export default Login;
