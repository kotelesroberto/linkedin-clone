import React, { useState } from "react";
import "./Login.scss";
import styled from "styled-components";

import { ButtonSecondary } from "../Common/Buttons";
import * as variables from "../Common/Variables";

const RegisterForm = (props) => {
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPass, setSignupPass] = useState("");
  const [error, setError] = useState("");

  const registerByEmailAndPass = (email, pass, callback) =>
    props.parentProps.registerByEmailAndPass(email, pass, callback);

  const showPassword = (e) => {
    const passwordField = document.getElementById("loginPassword");
    passwordField.type =
      passwordField.type === "password" ? "text" : "password";
  };

  const doSubmitRegistration = (e) => {
    e.preventDefault();
    setError("");

    registerByEmailAndPass(signupEmail, signupPass, (text) => {
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
          value={signupEmail}
          onChange={(e) => setSignupEmail(e.target.value)}
        ></input>
      </Fieldset>
      <Fieldset>
        <label htmlFor="loginPassword" aria-label="Password">
          Password (6+ characters)
        </label>
        <input
          className=""
          autoComplete="current-password"
          id="loginPassword"
          name="loginPassword"
          required=""
          type="password"
          value={signupPass}
          onChange={(e) => setSignupPass(e.target.value)}
        ></input>
        <button
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
        <p>
          By clicking Agree &amp; Join, you agree to the LinkedX
          <a
            href="https://www.linkedin.com/legal/user-agreement?trk=registration-frontend_join-form-user-agreement"
            target="_blank"
          >
            User Agreement
          </a>{" "}
          ,{" "}
          <a
            href="https://www.linkedin.com/legal/privacy-policy?trk=registration-frontend_join-form-privacy-policy"
            target="_blank"
          >
            Privacy Policy
          </a>{" "}
          , and
          <a href="https://www.linkedin.com/legal/cookie-policy?trk=registration-frontend_join-form-cookie-policy">
            Cookie Policy
          </a>
          .
        </p>
      </Fieldset>
      <Fieldset>
        <ButtonSecondary
          aria-label="Agree & Join"
          onClick={(e) => {
            doSubmitRegistration(e);
          }}
        >
          Agree & Join
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
  a {
    display: inline-block;
    color: #0a66c2;
  }
`;
export default RegisterForm;
