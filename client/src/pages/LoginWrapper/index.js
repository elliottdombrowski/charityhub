import React, { useState } from 'react';

import LoginForm from '../../components/LoginForm';
import SignupForm from '../../components/SignupForm';
import LoginSvg from '../../components/LoginSvg';

import './styles.scss';
import './query.scss';


const LoginWrapper = () => {
  const [switchForm, setSwitchForm] = useState(false);

  const formHeight = {
    height: switchForm ? '340px' : '250px'
  }

  return (
    <main className='login-page-wrapper'>
      <section
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
      </section>

      <section className='login-page-right'>
        <LoginSvg />
      </section>
    </main>
  );
};

export default LoginWrapper;