import React, { useState } from "react";

//IMPORT AUTH AND EMAIL VALIDATION UTILS
import Auth from '../../../utils/auth';
import { validateEmail } from '../../../utils/helpers';

//IMPORT CHAKRA LOADING SPINNER
import { Spinner } from "@chakra-ui/react";

//IMPORT FONTAWESOME ICON AND COMPONENT
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

//IMPORT GQL MUTATIONS
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from '../../../utils/mutations';

import './styles.scss';
import './query.scss';

const eye = <FontAwesomeIcon icon={faEye} />
const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />
const check = <FontAwesomeIcon icon={faCheck} />
const cross = <FontAwesomeIcon icon={faTimes} />

const LoginForm = () => {
  //DECLARE STATE FOR LOGIN EMAIL / PASSWORD DATA
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  //DECLARE STATE FOR SHOW / HIDE PASSWORD BUTTON, DEFAULT TO HIDDEN
  const [showPwd, setShowPwd] = useState(false);

  //DECLARE EMAIL VALIDATION STATE
  const [err, setErr] = useState(true);

  //DECALRE LOGIN MUTATION
  const [login, { error, data, loading }] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    //ON INPUT CHANGE, CHECK IF EMAIL IS VALID
    //IF EMAIL IS VALID, REPLACE X ICON WITH CHECKMARK
    !validateEmail(loginData.email) ? setErr(true) : setErr(false);

    //SET LOGIN DATA STATE
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const loginSubmit = async (event) => {
    event.preventDefault();

    // TRY LOG IN WITH CURRENT LOGIN STATE DATA, SIGN JWT TOKEN 
    try {
      const { data } = await login({
        variables: { ...loginData },
      });

      Auth.login(data.login.token);
    } catch (err) {
      console.log(err);
    }

    //RESET STATE TO DEFAULT VALUE
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

          {/* EMAIL INPUT  */}
          <input
            type='text'
            name='email'
            onChange={handleInputChange}
            value={loginData.email}
            placeholder='email'
            required
            className='login-input'
          />

          {/* EMAIL VALIDATION ICON  */}
          <span
            className='show-password valid-email'
          >
            {err ? cross : check}
          </span>
        </div>

        <div className="password-wrapper">

          {/* PASSWORD INPUT  */}
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

          {/* SHOW PASSWORD ICON / BTN */}
          <span
            className='show-password'
            onClick={() => setShowPwd((prev) => !prev)}
          >
            {showPwd ? eyeSlash : eye}
          </span>
        </div>

        {/* IF ERROR, DISPLAY APOLLO ERROR MESSAGE  */}
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