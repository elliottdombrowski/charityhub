import React, { useState } from "react";
import { Input } from "@chakra-ui/react";

import './styles.css';
import './query.css';

const LoginForm = () => {
  const loginSubmit = () => {
    console.log('logging in');
  };

  return (
    <div className="login-form-wrapper">
      <form 
        onSubmit={loginSubmit}
        className="login-form"
      >
        <Input 
          variant='filled'
          value='email'
          type='text'
          className='login-input'
        />
        <Input 
          variant='filled'
          value='password'
          type='text'
          className='login-input'
        />
      </form>
    </div>
  );
};

export default LoginForm;