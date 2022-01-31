import React, { useState } from 'react';
import { Input, Select } from '@chakra-ui/react';

import '../LoginForm/styles.css';

const SignupForm = () => {
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
    city: '',
    state: ''
  });
  const [showPwd, setShowPwd] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const signupSubmit = () => {
    console.log('signing up');
  };

  return (
    <form
      onSubmit={signupSubmit}
      className='login-form'
    >
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
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default SignupForm;