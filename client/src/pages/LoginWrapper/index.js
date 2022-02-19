import React, { useState } from 'react';

//IMPORT COMPONENTS
import AnimatePage from '../../AnimatePage';
import LoginForm from '../../components/Forms/LoginForm/';
import SignupForm from '../../components/Forms/SignupForm/';
import LoginSvg from '../../components/Svgs/LoginSvg';

import './styles.scss';
import './query.scss';


const LoginWrapper = () => {
  //SWITCH FORM STATE LOGIC
  const [switchForm, setSwitchForm] = useState(false);

  //DYNAMIC SCSS TO ALLOW HEIGHT DIFFERENCE BETWEEN LOGIN/SIGNUP FORMS
  const formHeight = {
    height: switchForm ? '340px' : '250px'
  }

  return (
    <AnimatePage>
      <main className='login-page-wrapper'>
        <section
          style={formHeight}
          className="login-form-wrapper"
        >
          {/* DYNAMICALLY RENDERS SIGNUP FORM OR LOGIN FORM  */}
          {switchForm ? <SignupForm /> : <LoginForm />}
          <a
            className='form-switcher'
            href='#'
            rel='noopener noreferrer'
            // BOOLEAN TOGGLER TO DISPLAY RESPECTIVE FORM 
            onClick={(prev) => setSwitchForm((prev) => !prev)}
          >
            {switchForm ? 'already have an account? log in!' : "don't have an account? sign up!"}
          </a>
        </section>

        <section className='login-page-right'>
          <LoginSvg />
        </section>
      </main>
    </AnimatePage>
  );
};

export default LoginWrapper;