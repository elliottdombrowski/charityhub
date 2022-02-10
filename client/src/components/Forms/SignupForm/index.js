import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faEye, faEyeSlash, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../../utils/mutations';
import { validateEmail } from '../../../utils/helpers';
import Auth from '../../../utils/auth';

import '../LoginForm/styles.css';

const arrowDown = <FontAwesomeIcon icon={faArrowDown} className='arrow-icon arrow-down' id='arrow-down' />
const arrowRight = <FontAwesomeIcon icon={faArrowDown} className='arrow-icon arrow-right' id='arrow-right' />

const SignupForm = () => {
  //SIGNUP DATA STATE
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: '',
    city: '',
    state: ''
  });

  //MISC STATE FOR MODALS AND SHOW PWD
  const [showPwd, setShowPwd] = useState(false);
  const [showLocationInfo, setShowLocationInfo] = useState(false);
  const [showLocationForm, setShowLocationForm] = useState(false);
  const [useLocationServices, setUseLocationServices] = useState(false);
  const [err, setErr] = useState(true);
  const [pwdErr, setPwdErr] = useState(true);

  //LOGIN MUTATION
  const [addUser, { error, data }] = useMutation(ADD_USER);

  //HANDLING FONTAWESOME ICONS HERE TO ALLOW STATE CHANGE
  const eye = <FontAwesomeIcon icon={faEye} />
  const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />
  const check = <FontAwesomeIcon icon={faCheck} />
  const cross = <FontAwesomeIcon icon={faTimes} />

  const handleShowLocationInfo = () => {
    setShowLocationInfo(!showLocationInfo);

    showLocationInfo
      ? document.getElementById('location-info').classList.add('active')
      : document.getElementById('location-info').classList.remove('active')

    showLocationInfo
      ? document.getElementById('arrow-down').classList.add('animate')
      : document.getElementById('arrow-down').classList.remove('animate')
  };

  const handleDisplayLocationForm = () => {
    setShowLocationForm(!showLocationForm);

    showLocationForm
      ? document.getElementById('location-form').classList.add('active')
      : document.getElementById('location-form').classList.remove('active')

    showLocationForm
      ? document.getElementById('signup-form').classList.add('active')
      : document.getElementById('signup-form').classList.remove('active')

    showLocationForm
      ? document.getElementById('arrow-right').classList.add('animate')
      : document.getElementById('arrow-right').classList.remove('animate')
  };

  const handleInputChange = (event) => {
    if (!validateEmail(signupData.email)) {
      setErr(true);
    } else if (validateEmail(signupData.email)) {
      setErr(false);
    }

    if (signupData.password !== signupData.confirmpassword) {
      setPwdErr(true);
    } else {
      setPwdErr(false);
    }

    const { name, value } = event.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const signupSubmit = async (event) => {
    event.preventDefault();

    const { data } = await addUser({
      variables: { ...signupData },
    });

    Auth.login(data.addUser.token);
  };

  return (
    <>
      <div className='signup-left' id='signup-form'>
        <label className='login-label'>
          sign up
        </label>
        <input
          type='text'
          name='name'
          onChange={handleInputChange}
          value={signupData.name}
          placeholder='name'
          required
          className='login-input'
        />
        <div className="password-wrapper">
          <input
            type='text'
            name='email'
            onChange={handleInputChange}
            value={signupData.email}
            placeholder='email'
            required
            className='login-input signup-input'
          />
          <span
            className='show-password valid-email'
          >
            {err ? cross : check}
          </span>
        </div>

        <div className='password-double-wrapper'>
          <div className="password-wrapper">
            <input
              type={showPwd ? 'text' : 'password'}
              name='password'
              onChange={handleInputChange}
              value={signupData.password}
              placeholder='password'
              required
              className='login-input signup-password'
            />
            <span
              className='show-password'
              onClick={() => setShowPwd((prev) => !prev)}
            >
              {showPwd ? eyeSlash : eye}
            </span>
          </div>

          <div className="password-wrapper">
            <input
              type={showPwd ? 'text' : 'password'}
              name='confirmpassword'
              onChange={handleInputChange}
              value={signupData.confirmpassword}
              placeholder='confirm password'
              required
              className='login-input signup-password-confirm'
            />
            <span
              className='show-password valid-email'
            >
              {pwdErr ? cross : check}
            </span>
          </div>
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
      </div>

      <div className='signup-right' id='location-form'>
        <div className='signup-right-inner-wrapper'>
          <label className='login-label'>
            Use Location Services?
            <span className='required-label'>*</span>
          </label>
          <span className='location-signup-wrapper'>
            {useLocationServices ? (
              <>
                <div className='location-input-wrapper'>
                  <div className='location-wrapper-left'>
                    <input
                      name='city'
                      onChange={handleInputChange}
                      value={signupData.city}
                      placeholder='city'
                      required
                      className='login-input login-input-city'
                    />
                  </div>
                  <div className='location-wrapper-right'>
                    <select
                      type='text'
                      name='state'
                      onChange={handleInputChange}
                      value={signupData.state}
                      required
                      className='login-input login-input-state'
                    >
                      <option value="" selected disabled hidden>State</option>
                      <option value="AL">Alabama</option>
                      <option value="AK">Alaska</option>
                      <option value="AZ">Arizona</option>
                      <option value="AR">Arkansas</option>
                      <option value="CA">California</option>
                      <option value="CO">Colorado</option>
                      <option value="CT">Connecticut</option>
                      <option value="DE">Delaware</option>
                      <option value="DC">District of Columbia</option>
                      <option value="FL">Florida</option>
                      <option value="GA">Georgia</option>
                      <option value="HI">Hawaii</option>
                      <option value="ID">Idaho</option>
                      <option value="IL">Illinois</option>
                      <option value="IN">Indiana</option>
                      <option value="IA">Iowa</option>
                      <option value="KS">Kansas</option>
                      <option value="KY">Kentucky</option>
                      <option value="LA">Louisiana</option>
                      <option value="ME">Maine</option>
                      <option value="MD">Maryland</option>
                      <option value="MA">Massachusetts</option>
                      <option value="MI">Michigan</option>
                      <option value="MN">Minnesota</option>
                      <option value="MS">Mississippi</option>
                      <option value="MO">Missouri</option>
                      <option value="MT">Montana</option>
                      <option value="NE">Nebraska</option>
                      <option value="NV">Nevada</option>
                      <option value="NH">New Hampshire</option>
                      <option value="NJ">New Jersey</option>
                      <option value="NM">New Mexico</option>
                      <option value="NY">New York</option>
                      <option value="NC">North Carolina</option>
                      <option value="ND">North Dakota</option>
                      <option value="OH">Ohio</option>
                      <option value="OK">Oklahoma</option>
                      <option value="OR">Oregon</option>
                      <option value="PA">Pennsylvania</option>
                      <option value="RI">Rhode Island</option>
                      <option value="SC">South Carolina</option>
                      <option value="SD">South Dakota</option>
                      <option value="TN">Tennessee</option>
                      <option value="TX">Texas</option>
                      <option value="UT">Utah</option>
                      <option value="VT">Vermont</option>
                      <option value="VA">Virginia</option>
                      <option value="WA">Washington</option>
                      <option value="WV">West Virginia</option>
                      <option value="WI">Wisconsin</option>
                      <option value="WY">Wyoming</option>
                    </select>
                  </div>
                </div>
                <div className='signup-location-wrapper'>
                  <span
                    className='signup-location-header'
                    onClick={handleShowLocationInfo}
                  >
                    How do we use this information?
                    {arrowDown}
                  </span>
                  <div
                    className='signup-location-info'
                    id='location-info'
                  >
                    <p
                      className='signup-location-text'
                      id='location-text'
                    >
                      We collect this information solely to provide information relevant to you.
                      This information will never be distributed, sold, or misused.
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <div className='location-wrapper-right location-services-wrapper'>
                <button
                  type='text'
                  className='location-services-optional location-services-button'
                >
                  Learn More
                </button>

                <button
                  type='text'
                  className='location-services-secondary location-services-button'
                  onClick={(prev) => setUseLocationServices((prev) => !prev)}
                >
                  Don't Allow
                </button>

                <button
                  type='text'
                  className='location-services-primary location-services-button'
                >
                  Allow
                </button>
              </div>
            )}
          </span>
        </div>

        <div className='signup-form-btn'>
          <button
            type='submit'
            className='submit-btn'
            disabled={!(signupData.name && signupData.email && signupData.password && signupData.confirmpassword && signupData.city && signupData.state)}
            onClick={signupSubmit}
          >
            Sign Up
          </button>
        </div>
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
          type='text'
          className="submit-btn"
          disabled={!(signupData.name && signupData.email && signupData.password && signupData.confirmpassword)}
          onClick={handleDisplayLocationForm}
        >
          {arrowRight}
          Next
        </button>
      </div>
    </>
  );
};

export default SignupForm;