import React from "react";
import "./Login.scss";
import styled from "styled-components";

import { ButtonSecondary } from "../Common/Buttons";

const RegisterForm = () => {
  const showPassword = (e) => {
    const passwordField = document.getElementById("loginPassword");
    passwordField.type =
      passwordField.type === "password" ? "text" : "password";
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
      <Fieldset>
        <p>
          By clicking Agree &amp; Join, you agree to the LinkedIn
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
        <ButtonSecondary aria-label="Agree & Join">
          Agree & Join
        </ButtonSecondary>
      </Fieldset>
    </form>
  );
};

const Fieldset = styled.fieldset`
  p {
    font-size: 12px;
  }
  a {
    display: inline-block;
    color: #0a66c2;
  }
`;
export default RegisterForm;
