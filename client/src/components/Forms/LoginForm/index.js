import React, { useState } from "react";
import { Spinner } from "@chakra-ui/react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

import { useMutation } from "@apollo/client";
import { LOGIN_USER } from '../../../utils/mutations';
import { validateEmail } from '../../../utils/helpers';
import Auth from '../../../utils/auth';

import './styles.scss';
import './query.scss';

const LoginForm = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [showPwd, setShowPwd] = useState(false);
  const [err, setErr] = useState(true);

  const eye = <FontAwesomeIcon icon={faEye} />
  const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />
  const check = <FontAwesomeIcon icon={faCheck} />
  const cross = <FontAwesomeIcon icon={faTimes} />

  const [login, { error, data, loading }] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    if (!validateEmail(loginData.email)) {
      setErr(true);
    } else if (validateEmail(loginData.email)) {
      setErr(false);
    }

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
      console.log(err);
    }

    setLoginData({
      email: '',
      password: ''
    });
    setErr('');
  };

  return (
    <>
      <form
        className="login-form"
        onSubmit={loginSubmit}
      >
        <label className="login-label">
          log in
        </label>
        <div className="password-wrapper">
          <input
            type='text'
            name='email'
            onChange={handleInputChange}
            value={loginData.email}
            placeholder='email'
            required
            className='login-input'
          />
          <span
            className='show-password valid-email'
          >
            {err ? cross : check}
          </span>
        </div>

        <div className="password-wrapper">
          <input
            type={showPwd ? "text" : "password"}
            name='password'
            onChange={handleInputChange}
            value={loginData.password}
            placeholder='password'
            required
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
            disabled={!(loginData.email && loginData.password)}
          >
            Log In
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;