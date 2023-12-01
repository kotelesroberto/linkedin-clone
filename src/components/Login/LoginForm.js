import React, { useState } from "react";
import "./Login.scss";

import { ButtonSecondary } from "../Common/Buttons";

const LoginForm = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");

  const showPassword = (e) => {
    const passwordField = document.getElementById("loginPassword");
    passwordField.type =
      passwordField.type === "password" ? "text" : "password";
  };

  const doSubmitLogin = (e) => {
    e.preventDefault();
    console.log(loginEmail + " " + loginPass);
  };

  return (
    <form className="loginForm">
      <fieldset>
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
      </fieldset>
      <fieldset>
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
      </fieldset>
      <fieldset>
        <a
          href="/forgot-password"
          className="link-bold"
          aria-label="Forgot password?"
        >
          Forgot password?
        </a>
      </fieldset>
      <fieldset>
        <ButtonSecondary aria-label="Sign in" onClick={(e) => doSubmitLogin(e)}>
          Sign in
        </ButtonSecondary>
      </fieldset>
    </form>
  );
};

export default LoginForm;
