import React from "react";
import styled from "styled-components";

const LoginGoogle = () => {
  return (
    <SignInWithGoogle>
      <img src="/images/google.svg" alt="Sign in with google account" />
      Continue with Google
    </SignInWithGoogle>
  );
};

const SignInWithGoogle = styled.button`
  width: 100%;
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
    background: rgba(66, 133, 244, 0.04);
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

export default LoginGoogle;
