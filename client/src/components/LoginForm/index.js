import React, { useState } from "react";
import { Input } from "@chakra-ui/react";

import './styles.css';
import './query.css';

const LoginForm = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [showPwd, setShowPwd] = useState(false);
  console.log(loginData);
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
    console.log(loginData.password);
  };

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
          type='text'
          onChange={handleInputChange}
          value={loginData.email}
          placeholder='email'
          className='login-input'
        />
        <div className="password-wrapper">
          <Input 
            variant='filled'
            type={showPwd ? "text" : "password"}
            onChange={handleInputChange}
            value={loginData.password}
            placeholder='password'
            className='login-input'
            id='change-pwd'
          />
          <div 
            className="show-password"
            onClick={() => setShowPwd(!showPwd)}
          >
            show
          </div>
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