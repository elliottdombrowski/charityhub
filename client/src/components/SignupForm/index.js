import React, { useState } from 'react';
import { Input, Select } from '@chakra-ui/react';

import '../LoginForm/styles.css';

const SignupForm = () => {
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
    city: '',
    state: ''
  });
  const [showPwd, setShowPwd] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const signupSubmit = () => {
    console.log('signing up');
  };

  return (
    <form
      onSubmit={signupSubmit}
      className='login-form'
    >
      <label className='login-label'>
        sign up
      </label>
      <Input
        variant='filled'
        type='text'
        name='name'
        onChange={handleInputChange}
        value={signupData.name}
        placeholder='name'
        className='login-input'
      />
      <Input
        variant='filled'
        type='text'
        name='email'
        onChange={handleInputChange}
        value={signupData.email}
        placeholder='email'
        className='login-input'
      />
      <div className="password-wrapper">
        <Input
          variant='filled'
          type={showPwd ? 'text' : 'password'}
          name='password'
          onChange={handleInputChange}
          value={signupData.password}
          placeholder='password'
          className='login-input'
        />
        <div
          className="show-password"
          onClick={() => setShowPwd(!showPwd)}
        >
          show
        </div>
      </div>

      <span className='location-signup-wrapper'>
        <div className='location-wrapper-left'>
          <Input
            variant='filled'
            type='text'
            name='city'
            onChange={handleInputChange}
            value={signupData.city}
            placeholder='city'
            className='login-input login-input-city'
          />
        </div>

        <div className='location-wrapper-right'>
          <Select
            variant='filled'
            type='text'
            name='state'
            onChange={handleInputChange}
            value={signupData.state}
            placeholder='state'
            className='login-input login-input-state'
          />
        </div>
      </span>

      <div className='login-options'>
        <span className="save-login">
          <label className="login-label">
            keep me logged in
          </label>
          <input
            className="save-login-checkbox"
            type='checkbox'
          />
        </span>
        <button
          type='submit'
          className="submit-btn"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default SignupForm;