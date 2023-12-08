import React, { useState } from "react";
import "./Login.scss";
import styled from "styled-components";

import * as variables from "../Common/Variables";
import { ButtonSecondary } from "../Common/Buttons";

const LoginForm = (props) => {
  const [loginEmail, setLoginEmail] = useState("test@gmail.com");
  const [loginPass, setLoginPass] = useState("rfz6PNNnzX7BczfV7pE4jp3m");
  const [error, setError] = useState("");

  const actionSignInEmailAndPassAPI = (email, pass, callback) =>
    props.parentProps.actionSignInEmailAndPassAPI(email, pass, callback);

  const showPassword = (e) => {
    const passwordField = document.getElementById("loginPassword");
    passwordField.type =
      passwordField.type === "password" ? "text" : "password";
  };

  const doSubmitLogin = (e) => {
    e.preventDefault();

    actionSignInEmailAndPassAPI(loginEmail, loginPass, (text) => {
      setError(text);
    });
  };

  return (
    <form
      action="/"
      method="get"
      autoComplete="on"
      target="_self"
      className="loginForm"
    >
      <Fieldset>
        <label htmlFor="loginEmail" aria-label="Email or phone">
          Email or phone
        </label>
        <input
          className=""
          autoComplete="section-login login username"
          id="loginEmail"
          name="loginEmail"
          required=""
          type="text"
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
        ></input>
      </Fieldset>
      <Fieldset>
        <label htmlFor="loginPassword" aria-label="Password">
          Password
        </label>
        <input
          className=""
          autoComplete="section-login login current-password"
          id="loginPassword"
          name="loginPassword"
          required=""
          type="password"
          value={loginPass}
          onChange={(e) => setLoginPass(e.target.value)}
        ></input>
        <button
          id="login-submit"
          aria-live="assertive"
          data-id="sign-in-form__password-visibility-toggle"
          className="show-pass js-show-pass"
          aria-label="Show your LinkedX password"
          type="button"
          onClick={(e) => showPassword(e)}
        >
          Show
        </button>
      </Fieldset>

      {error && (
        <Fieldset>
          <p className="error">{error}</p>
        </Fieldset>
      )}

      <Fieldset>
        <a
          href="/forgot-password"
          className="link-bold"
          aria-label="Forgot password?"
        >
          Forgot password?
        </a>
      </Fieldset>

      <Fieldset>
        <ButtonSecondary aria-label="Sign in" onClick={(e) => doSubmitLogin(e)}>
          Sign in
        </ButtonSecondary>
      </Fieldset>
    </form>
  );
};

const Fieldset = styled.fieldset`
  p {
    font-size: 12px;

    &.error {
      color: ${variables.colors.red};
    }
  }
`;

export default LoginForm;
