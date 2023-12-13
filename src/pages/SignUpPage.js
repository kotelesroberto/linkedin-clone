import React from "react";
import DocumentTitle from "react-document-title";
import { connect } from "react-redux";
import styled from "styled-components";
import * as variables from "../components/_library/Variables";

import RegisterForm from "../components/Login/RegisterForm";
import LoginGoogle from "../components/Login/LoginGoogle";
import AlreadyRegistered from "../components/Login/AlreadyRegistered";
import FooterInlineMenu from "../components/Footer/FooterInlineMenu";

import {
  actionRegisterByEmailAndPassAPI,
  actionSignInGoogleAPI,
} from "../redux/actions/actions";

import { Navigate, useNavigate } from "react-router-dom";

import { Card } from "../components/_library/Cards";

const SignUpPage = (props) => {
  const navigate = useNavigate();

  const gotoLoginPage = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <DocumentTitle title="Log in | RuleX clone by Robert Koteles">
      <>
        {props.user && props.user.email && <Navigate to="/home" replace />}
        <Container>
          <Nav>
            <a href="/">
              <img src="/images/login-logo.svg" alt="Go to RuleX homepage" />
            </a>
          </Nav>
          <Section>
            <Hero>
              <h1>Make the most of your professional life</h1>
            </Hero>
            <SignInForm>
              <RegisterForm parentProps={props} />
              <LoginGoogle parentProps={props} />
              <AlreadyRegistered
                parentProps={props}
                gotoLoginPage={gotoLoginPage}
              />
            </SignInForm>
          </Section>
          <FooterInlineMenu />
        </Container>
      </>
    </DocumentTitle>
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

const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    width: 100%;
    font-size: 32px;
    color: ${variables.colors.header1};
    font-weight: 400;
    line-height: 70px;
    margin-bottom: 24px;
    color: ${variables.colors.colorFont};
    text-align: center;

    @media (max-width: 768px) {
      font-size: 32px;
      font-weight: 400;
      line-height: 1.2em;
      width: 100%;
    }
  }
`;

const SignInForm = styled(Card)`
  width: 100%;
  max-width: 408px;
  margin: 0 auto;
  padding: 24px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

/*=====  React-redux related functions  ======*/

// any time the store is updated, mapStateToProps will be called. Expected to return an object
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

// () = ({ ... }) is equal to () => { return ({ ... })}
const mapDispatchToProps = (dispatch) => {
  return {
    registerByEmailAndPass: (email, pass, callback) => {
      dispatch(actionRegisterByEmailAndPassAPI(email, pass, callback));
    },
    signInGoogle: () => {
      dispatch(actionSignInGoogleAPI());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
