import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

import { onError } from '@apollo/client/link/error';
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from '../../utils/mutations';
import { validateEmail } from '../../utils/helpers';
import Auth from '../../utils/auth';

import './styles.css';
import './query.css';

const LoginForm = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [showPwd, setShowPwd] = useState(false);
  const [err, setErr] = useState(false);

  const eye = <FontAwesomeIcon icon={faEye} />
  const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />
  const check = <FontAwesomeIcon icon={faCheck} />
  const cross = <FontAwesomeIcon icon={faTimes} />

  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    if (!validateEmail(loginData.email)) {
      setErr(false);
    } else setErr(true);

    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const loginSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...loginData },
      });

      Auth.login(data.login.token);
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
      <div className="password-wrapper">
        <Input
          variant='filled'
          type='text'
          name='email'
          onChange={handleInputChange}
          value={loginData.email}
          placeholder='email'
          className='login-input'
        />
        <span 
          className='show-password'
        >
          {err ? check : cross}
        </span>
      </div>

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
        <span 
          className='show-password'
          onClick={() => setShowPwd((prev) => !prev)} 
        >
          {showPwd ? eyeSlash : eye}
        </span>
      </div>
      {error ? (
        <pre className='apollo-errors'>
          {error.graphQLErrors.map(({ message }, i) => (
            <span key={i}>{message}</span>
          ))}
        </pre>
      ) : (
        <>
        </>
      )}

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