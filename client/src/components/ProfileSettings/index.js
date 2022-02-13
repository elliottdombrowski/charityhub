import React, { useState } from 'react';

import './styles.scss';
import './query.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const ProfileSettings = () => {
  const [showSettingsOne, setShowSettingsOne] = useState(false);
  const [showSettingsTwo, setShowSettingsTwo] = useState(false);
  const [showLocationSettings, setShowLocationSettings] = useState(false);

  const displaySettingsOne = () => {
    setShowSettingsOne(!showSettingsOne);
    showSettingsOne
      ? document.getElementById('settings-option-one').classList.add('active')
      : document.getElementById('settings-option-one').classList.remove('active')
  };

  const displaySettingsTwo = () => {
    setShowSettingsTwo(!showSettingsTwo);
    showSettingsTwo
      ? document.getElementById('settings-option-two').classList.add('active')
      : document.getElementById('settings-option-two').classList.remove('active')
  };

  const displayLocationSettings = () => {
    document.getElementById('location-profile').classList.toggle('active');
  };

  const angleOne = <FontAwesomeIcon className='settings-icon' icon={faAngleDown} onClick={displaySettingsOne} />
  const angleTwo = <FontAwesomeIcon className='settings-icon' icon={faAngleDown} onClick={displaySettingsTwo} />
  const angleDown = <FontAwesomeIcon className='location-profile-icon' id='location-profile' icon={faAngleDown} />

  return (
    <>
      <h3 className='profile-settings-header'>
        Settings
      </h3>
      <ul className='profile-settings'>
        <li className='profile-option'>
          <p>dark mode</p>
          <label className='darkmode-switch'>
            <input type='checkbox' />
            <span className='darkmode-slider' />
          </label>
        </li>
        <li className='profile-option'>
          {angleOne}
          user settings
          <div className='settings-option' id='settings-option-one'>
            <button
              type='text'
              className='settings-btn'
            >
              Change Profile Picture
            </button>

            <button
              type='text'
              className='settings-btn'
            >
              Reset Password
            </button>
          </div>
        </li>
        <li className='profile-option'>
          {angleTwo}
          location settings
          <div className='settings-option' id='settings-option-two'>
            <button
              type='text'
              className='settings-btn'
              onClick={displayLocationSettings}
            >
              {angleDown}
              Change Location
            </button>

            <button
              type='text'
              className='settings-btn'
            >
              Disable Location Services
            </button>
          </div>
        </li>
      </ul>
    </>
  );
};

export default ProfileSettings;