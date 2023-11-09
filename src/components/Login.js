import styled from "styled-components";

import React from "react";
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="Go to LinkedIn homepage" />
        </a>
        <div>
          <Join>Join now</Join>
          <SignIn>Sign in</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Robert's LinkedIn clone built in React</h1>
          <img src="./images/login-hero.svg" alt="Login to LinkedIn" />
        </Hero>
        <SignInForm>
          <LoginForm/>
            
          <SignInWithGoogle>
            <img src="/images/google.svg" alt="Sign in with google account" />
            Continue with Google
          </SignInWithGoogle>
        </SignInForm>
      </Section>
    </Container>
  );
};

const SignInForm = styled.div`
  width: 100%;
`;


const SignInWithGoogle = styled.button`
  height: min-content;
  min-height: 48px;
  border-radius: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 24px;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  border: 1px solid #d2e3fc;
  cursor: pointer;
  vertical-align: middle;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(66,133,244,.04);
    box-shadow: none;
    outline: none;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  > img {
    width: 18px;
    height: 18px;
    margin-right: 12px;
  }
`;

// create the compoments by using styled components and adding styles here
const Container = styled.div`
  display: block;
  width: 100%;
  padding: 0 16px;
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

  & > a {
    &:first-child {
      width: 135px;

      @media (max-width: 768px) {
        padding: 0px 5px;
      }
    }

    img {
      width: 100%;
    }
  }
`;

const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  margin-right: 12px;
  border-radius: 24px;
  transition-duration: 150ms;
  font-weight: 700;

  &:hover {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.9);
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 150ms;
  font-size: 16px;
  font-weight: 700;
  line-height: 1em;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);

  cursor: pointer;

  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
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

    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }

  img {
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
      max-width: 80%;
      height: auto;
      top: 230px;
      margin: 0 auto;
      right: 0;
      transform: none;
      position: initial;
    }
  }
`;

export default Login;
