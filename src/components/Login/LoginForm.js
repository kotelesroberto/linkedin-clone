import React from "react";
import "./Login.scss";

import { ButtonSecondary } from "./Buttons";

const LoginForm = () => {
  const showPassword = (e) => {
    const passwordField = document.getElementById("loginPassword");
    passwordField.type =
      passwordField.type === "password" ? "text" : "password";
  };

  return (
    <form className="loginForm">
      <fieldset>
        <label htmlFor="loginEmail">Email or phone</label>
        <input
          className=""
          autoComplete="username"
          id="loginEmail"
          name="loginEmail"
          required=""
          type="text"
        ></input>
      </fieldset>
      <fieldset>
        <label htmlFor="loginPassword">Password</label>
        <input
          className=""
          autoComplete="current-password"
          id="loginPassword"
          name="loginPassword"
          required=""
          type="password"
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
        <a href="/forgot-password" className="link-bold">
          Forgot password?
        </a>
      </fieldset>
      <fieldset>
        <ButtonSecondary>Sign in</ButtonSecondary>
      </fieldset>
    </form>
  );
};

export default LoginForm;
