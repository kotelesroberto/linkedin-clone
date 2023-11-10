import React from "react";
import "./Login.scss";

const LoginForm = () => {
  return (
    <form className="loginForm">
      <fieldset>
        <label htmlFor="loginEmail">Email or phone</label>
        <input
          classclassName=""
          autocomplete="username"
          id="loginEmail"
          name="loginEmail"
          required=""
          type="text"
        ></input>
      </fieldset>
      <fieldset>
        <label htmlFor="loginPassword">Password</label>
        <input
          classclassName=""
          autocomplete="current-password"
          id="loginPassword"
          name="loginPassword"
          required=""
          type="text"
        ></input>
        <button
          aria-live="assertive"
          data-id="sign-in-form__password-visibility-toggle"
          className="show-pass js-show-pass"
          aria-label="Show your LinkedIn password"
          type="button"
        >
          Show
        </button>
      </fieldset>
      <fieldset>
        <a href="#">Forgot password?</a>
      </fieldset>
      <fieldset>
      <button type="submit" value="Sign in">Sign in</button>
      </fieldset>
    </form>
  );
};

export default LoginForm;
