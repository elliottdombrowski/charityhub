import React, { useState } from "react";
import { Input } from "@chakra-ui/react";

import './styles.css';
import './query.css';

const LoginForm = () => {
  const [showPwd, setShowPwd] = useState(false);
  let inputType = input.type;
  showPwd ? inputType = 'text' : 'password';

  const loginSubmit = () => {
    console.log('logging in');
  };

  return (
    <div className="login-form-wrapper">
      <form 
        onSubmit={loginSubmit}
        className="login-form"
      >
        <label className="login-label">
          log in
        </label>
        <Input 
          variant='filled'
          value='email'
          type='text'
          className='login-input'
        />
        <div className="password-wrapper">
          <Input 
            variant='filled'
            value='password'
            type={showPwd}
            className='login-input'
          />
          <button className="show-password">
            show
          </button>
        </div>
        <span className="save-login">
          <label className="login-label">
            keep me logged in
          </label>
          <input
            className="save-login-checkbox"
            type='checkbox'
          />
        </span>
      </form>
    </div>
  );
};

export default LoginForm;