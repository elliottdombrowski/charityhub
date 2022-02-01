import React, { useState } from 'react';
import { Input, Select } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import '../LoginForm/styles.css';

const arrowDown = <FontAwesomeIcon icon={faArrowDown} className='arrow-icon arrow-down' id='arrow-down' />
const arrowRight = <FontAwesomeIcon icon={faArrowRight} className='arrow-icon arrow-right' id='arrow-right' />

const SignupForm = () => {
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
    city: '',
    state: ''
  });
  const [showPwd, setShowPwd] = useState(false);
  const [showLocationInfo, setShowLocationInfo] = useState(false);
  const [showLocationForm, setShowLocationForm] = useState(false);

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
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSignupData({ ...signupData, [name]: value });
  };

  // const signupSubmit = () => {
  //   console.log('signing up');
  // };

  return (
    <>
      <div className='signup-left'>
        <label className='login-label'>
          sign up
        </label>
        <Input
          variant='filled'
          type='text'
          name='name'
          onChange={handleInputChange}
          value={signupData.name}
          placeholder='name'
          className='login-input'
        />
        <Input
          variant='filled'
          type='text'
          name='email'
          onChange={handleInputChange}
          value={signupData.email}
          placeholder='email'
          className='login-input'
        />
        <div className="password-wrapper">
          <Input
            variant='filled'
            type={showPwd ? 'text' : 'password'}
            name='password'
            onChange={handleInputChange}
            value={signupData.password}
            placeholder='password'
            className='login-input'
          />
          <div
            className="show-password"
            onClick={() => setShowPwd(!showPwd)}
          >
            show
          </div>
        </div>
      </div>

      <div className='signup-right' id='location-form'>
        <span className='location-signup-wrapper'>
          <div className='location-wrapper-left'>
            <Input
              variant='filled'
              type='text'
              name='city'
              onChange={handleInputChange}
              value={signupData.city}
              placeholder='city'
              className='login-input login-input-city'
            />
          </div>

          <div className='location-wrapper-right'>
            <Select
              variant='filled'
              type='text'
              name='state'
              onChange={handleInputChange}
              value={signupData.state}
              placeholder='state'
              className='login-input login-input-state'
            >
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
            </Select>
          </div>
        </span>
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
        <div
          type='submit'
          className="submit-btn"
          onClick={handleDisplayLocationForm}
        >
          {arrowRight}
          Next
        </div>
      </div>
    </>
  );
};

export default SignupForm;