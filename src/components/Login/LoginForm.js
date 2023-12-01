import React, { useState } from "react";
import "./Login.scss";
import styled from "styled-components";

import * as variables from "../Common/Variables";
import { ButtonSecondary } from "../Common/Buttons";

const LoginForm = (props) => {
  const [loginEmail, setLoginEmail] = useState("test@gmail.com");
  const [loginPass, setLoginPass] = useState("Test2023");
  const [error, setError] = useState("");

  const signInEmailAndPassAPI = (email, pass, callback) =>
    props.parentProps.signInEmailAndPassAPI(email, pass, callback);

  const showPassword = (e) => {
    const passwordField = document.getElementById("loginPassword");
    passwordField.type =
      passwordField.type === "password" ? "text" : "password";
  };

  const doSubmitLogin = (e) => {
    e.preventDefault();
    console.log(loginEmail + " " + loginPass);

    signInEmailAndPassAPI(loginEmail, loginPass, (text) => {
      setError(text);
    });
  };

  return (
    <form className="loginForm">
      <Fieldset>
        <label htmlFor="loginEmail" aria-label="Email or phone">
          Email or phone
        </label>
        <input
          className=""
          autoComplete="username"
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
          autoComplete="current-password"
          id="loginPassword"
          name="loginPassword"
          required=""
          type="password"
          value={loginPass}
          onChange={(e) => setLoginPass(e.target.value)}
        ></input>
        <button
          aria-live="assertive"
          data-id="sign-in-form__password-visibility-toggle"
          className="show-pass js-show-pass"
          aria-label="Show your LinkedIn password"
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
