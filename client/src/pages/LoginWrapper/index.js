import React, { useState } from 'react';

import LoginForm from '../../components/LoginForm';

import './styles.css';
import './query.css';

const LoginWrapper = () => {
  const [switchForm, setSwitchForm] = useState(false);

  return (
    <div className="login-form-wrapper">
      {switchForm ? '' : <LoginForm />}
      <a
        className='form-switcher'
        href='#'
        rel='noopener noreferrer'
      >
        {switchForm ? 'already have an account? log in!' : "don't have an account? sign up!"}
      </a>
    </div>
  );
};

export default LoginWrapper;