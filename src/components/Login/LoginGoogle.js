import React from "react";
import { ButtonWithImage } from "../Common/Buttons";

// import { signInGoogleAPI } from "../../redux/actions";

const LoginGoogle = (props) => {
  return (
    <ButtonWithImage onClick={() => props.parentProps.signIn()}>
      <img src="/images/google.svg" alt="Sign in with google account" />
      Continue with Google
    </ButtonWithImage>
  );
};

export default LoginGoogle;
