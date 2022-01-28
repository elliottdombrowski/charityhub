import React, { useState } from "react";
import { Input } from "@chakra-ui/react";

import './styles.css';
import './query.css';

const LoginForm = () => {
  const [showPwd, setShowPwd] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const loginSubmit = () => {
    console.log('logging in');
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
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
          value=''
          type={loginData.email}
          className='login-input'
          onChange={handleInputChange}
        />
        <div className="password-wrapper">
          <Input 
            variant='filled'
            value={loginData.password}
            type={showPwd ? 'text' : 'password'}
            className='login-input'
            onChange={handleInputChange}
            id='change-pwd'
          />
          <button 
            className="show-password"
            onClick={(event) => setShowPwd((prev) => !prev)}
          >
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