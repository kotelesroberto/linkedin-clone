import React from 'react';
import './LoginForm.scss';

const LoginForm = () => {
  return (
    <form>
      <label htmlFor="loginEmail">Email or phone</label>
            <input classclassName="" autocomplete="username" id="loginEmail" name="loginEmail" required="" type="text"></input>
            <label htmlFor="loginPassword">Password</label>
            <input classclassName="" autocomplete="current-password" id="loginPassword" name="loginPassword" required="" type="text"></input>
    </form>
  );
}

export default LoginForm;
