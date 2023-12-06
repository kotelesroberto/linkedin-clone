import React from "react";

import { ButtonPrimary } from "../Common/Buttons";

const LoginJoin = (props) => {
  return <ButtonPrimary  style={{ width: "100%" }} onClick={(e) => props.gotoSignUpPage(e)}>New to LinkedIn? Join now</ButtonPrimary>;
};

export default LoginJoin;
