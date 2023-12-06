/**
 *
 * Component: Login by Google Authentication
 * 2023, Robert Koteles
 */

import React from "react";
import { ButtonWithImage } from "../Common/Buttons";

const LoginGoogle = (props) => {
  const signInGoogle = () => props.parentProps.signInGoogle();

  return (
    <ButtonWithImage onClick={signInGoogle} style={{ width: "100%" }}>
      <img src="/images/google.svg" alt="Sign in with google account" />
      Continue with Google
    </ButtonWithImage>
  );
};

export default LoginGoogle;
