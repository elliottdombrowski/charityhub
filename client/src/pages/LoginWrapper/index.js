import React, { useState } from 'react';

import LoginForm from '../../components/LoginForm';
import SignupForm from '../../components/SignupForm';

import './styles.css';
import './query.css';


const LoginWrapper = () => {
  const [switchForm, setSwitchForm] = useState(false);

  const formHeight = {
    height: switchForm ? '340px' : '250px'
  }

  return (
    <div 
      style={formHeight}
      className="login-form-wrapper"
    >
      {switchForm ? <SignupForm /> : <LoginForm />}
      <a
        className='form-switcher'
        href='#'
        rel='noopener noreferrer'
        onClick={(prev) => setSwitchForm((prev) => !prev)}
      >
        {switchForm ? 'already have an account? log in!' : "don't have an account? sign up!"}
      </a>
    </div>
  );
};

export default LoginWrapper;