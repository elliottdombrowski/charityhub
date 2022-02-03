import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { useMutation } from "@apollo/client";
import { LOGIN_USER } from '../../utils/mutations';
import { validateEmail } from '../../utils/helpers';
import Auth from '../../utils/auth';

import './styles.css';
import './query.css';

const LoginForm = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [showPwd, setShowPwd] = useState(false);
  const [err, setErr] = useState('');

  const eye = <FontAwesomeIcon icon={faEye} onClick={() => setShowPwd(!showPwd)} />
  const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} onClick={() => setShowPwd(!showPwd)} />

  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const loginSubmit = async (event) => {
    event.preventDefault();
    // if (!validateEmail(loginData.email)) {
    //   setErr('Please enter a valid Email.');
    //   return false;
    // }

    try {
      const { data } = await login({
        variables: { ...loginData },
      });
    } catch (err) {
      console.log(error);
    }
  };

  return (
    <form
      className="login-form"
      onSubmit={loginSubmit}
    >
      <label className="login-label">
        log in
      </label>
      <Input
        variant='filled'
        type='text'
        name='email'
        onChange={handleInputChange}
        value={loginData.email}
        placeholder='email'
        className='login-input'
      />
      <div className="password-wrapper">
        <Input
          variant='filled'
          type={showPwd ? "text" : "password"}
          name='password'
          onChange={handleInputChange}
          value={loginData.password}
          placeholder='password'
          className='login-input'
          id='change-pwd'
        />
        <span className='show-password'>
          {showPwd ? eyeSlash : eye}
        </span>
      </div>

      <div className='login-options'>
        <span className="save-login">
          <label className="login-label">
            remember me?
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
          Log In
        </button>
      </div>
    </form>
  );
};

export default LoginForm;