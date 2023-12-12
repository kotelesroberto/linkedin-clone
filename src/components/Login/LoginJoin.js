import React from "react";

import { ButtonPrimary } from "../_library/Buttons";

const LoginJoin = (props) => {
  return <ButtonPrimary  style={{ width: "100%" }} onClick={(e) => props.gotoSignUpPage(e)}>New to RuleX? Join now</ButtonPrimary>;
};

export default LoginJoin;
