import React, { useState } from 'react';

//IMPORT AUTH / VALIDATE EMAIL / GEOLOCATION UTILS
import Auth from '../../../utils/auth';
import { validateEmail } from '../../../utils/helpers';
import { getLocation } from '../../../utils/location';

//IMPORT CHAKRA LOADING SPINNER COMPONENT
import { Spinner } from '@chakra-ui/react';

//IMPORT FONTAWESOME ICONS / COMPONENT
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faEye, faEyeSlash, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

//IMPORT GQL MUTATIONS
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../../utils/mutations';

import '../LoginForm/styles.scss';

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
  const [addUser, { error, data, loading }] = useMutation(ADD_USER);

  //HANDLING FONTAWESOME ICONS HERE TO ALLOW STATE CHANGE
  const eye = <FontAwesomeIcon icon={faEye} />
  const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />
  const check = <FontAwesomeIcon icon={faCheck} />
  const cross = <FontAwesomeIcon icon={faTimes} />

  const handleShowLocationInfo = () => {
    //ON HANDLESHOWLOCATIONINFO INVOCATION, SET SHOW LOCATION INFO STATE TO OPPOSITE BOOLEAN
    setShowLocationInfo(!showLocationInfo);

    showLocationInfo
      ? document.getElementById('location-info').classList.add('active')
      : document.getElementById('location-info').classList.remove('active')

    showLocationInfo
      ? document.getElementById('arrow-down').classList.add('animate')
      : document.getElementById('arrow-down').classList.remove('animate')
  };

  const handleDisplayLocationForm = () => {
    //ON HANDLEDISPLAYLOCATIONFORM INVOCATION, SET SHOW LOCATION FORM STATE TO OPPOSITE BOOLEAN
    setShowLocationForm(!showLocationForm);

    //IF SHOWLOCATIONFORM STATE VALUE = TRUE, ADD 'ACTIVE / ANIMATE' CLASS TO LOCATION FORM AND ARROW INDICATOR
    //ELSE, REMOVE 'ACTIVE / ANIMATE' CLASS
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

    //ON INPUT CHANGE, CHECK IF EMAIL IS VALID
    //IF INVALID, SET ERROR STATE TO DISPLAY X ICON
    //ELSE RENDER CHECKMARK ICON
    !validateEmail(signupData.email) ? setErr(true) : setErr(false);

    //TODO - FIX EXTRA CHARACTER AT THE END
    //IF PASSWORD STATE IS NOT EQUAL TO CONFIRM PASSWORD STATE, SET PWDERR STATE TO RENDER X ICON.
    //ELSE RENDER CHECKMARK ICON
    if (signupData.password !== signupData.confirmpassword) {
      setPwdErr(true);
    } else {
      setPwdErr(false);
    }

    //SET SIGNUP DATA STATE FROM INPUT VALUE
    const { name, value } = event.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const signupSubmit = async (event) => {
    event.preventDefault();

    //CALL ADDUSER MUTATION W/ SIGNUP DATA STATE VALUE
    //SIGN JWT LOGIN TOKEN
    const { data } = await addUser({
      variables: { ...signupData },
    });

    Auth.login(data.addUser.token);
  };

  return (
    <>
      {/* SIGNUP MAIN INFO WRAPPER  */}
      <div className='signup-left' id='signup-form'>
        <label className='login-label'>
          sign up
        </label>

        {/* NAME INPUT  */}
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
          {/* EMAIL INPUT  */}
          <input
            type='text'
            name='email'
            onChange={handleInputChange}
            value={signupData.email}
            placeholder='email'
            required
            className='login-input signup-input'
          />

          {/* RENDER EMAIL VALIDATION ICON  */}
          <span
            className='show-password valid-email'
          >
            {err ? cross : check}
          </span>
        </div>

        <div className='password-double-wrapper'>
          <div className="password-wrapper">

            {/* PASSWORD INPUT  */}
            <input
              type={showPwd ? 'text' : 'password'}
              name='password'
              onChange={handleInputChange}
              value={signupData.password}
              placeholder='password'
              required
              className='login-input signup-password'
            />

            {/* SHOW PASSWORD BTN / ICON  */}
            <span
              className='show-password'
              onClick={() => setShowPwd((prev) => !prev)}
            >
              {showPwd ? eyeSlash : eye}
            </span>
          </div>

          <div className="password-wrapper">

            {/* CONFIRM PASSWORD INPUT  */}
            <input
              type={showPwd ? 'text' : 'password'}
              name='confirmpassword'
              onChange={handleInputChange}
              value={signupData.confirmpassword}
              placeholder='confirm password'
              required
              className='login-input signup-password-confirm'
            />
            
            {/* CONFIRM PASSWORD VALIDATION ICON */}
            <span
              className='show-password valid-email'
            >
              {pwdErr ? cross : check}
            </span>
          </div>
        </div>

        {/* IF ERROR, RENDER APOLLO ERROR  */}
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

      {/* SIGNUP LOCATION INFO WRAPPER  */}
      <div className='signup-right' id='location-form'>
        <div className='signup-right-inner-wrapper'>
          <label className='login-label'>
            Use Location Services?
            <span className='required-label'>*</span>
          </label>
          <span className='location-signup-wrapper'>

            {/* RENDER MANUAL LOCATION ENTRY INPUTS  */}
            {useLocationServices ? (
              <>
                <div className='location-input-wrapper'>
                  <div className='location-wrapper-left'>

                    {/* LOCATION CITY INPUT  */}
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
                    {/* LOCATION STATE SELECTOR INPUT */}
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

                {/* LOCATION INFO MODAL  */}
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

              // BUTTON CHOICES FOR AUTO LOCATION INFO
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
                  onClick={getLocation}
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