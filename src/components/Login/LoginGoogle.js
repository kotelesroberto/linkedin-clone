import React from "react";
import { ButtonWithImage } from "../Common/Buttons";

// import { signInAPI } from "../../redux/actions";

const LoginGoogle = (props) => {
  
  const signIn = () => props.parentProps.signIn();

  return (
    <ButtonWithImage onClick={signIn}>
      <img src="/images/google.svg" alt="Sign in with google account" />
      Continue with Google
    </ButtonWithImage>
  );
};

export default LoginGoogle;
