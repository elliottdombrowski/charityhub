import React, { useState } from 'react';

import './styles.scss';
import './query.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const ProfileSettings = () => {
  const [showSettingsOne, setShowSettingsOne] = useState(false);
  const [showSettingsTwo, setShowSettingsTwo] = useState(false);

  const displaySettingsOne = () => {
    console.log('displaying settings');
    setShowSettingsOne(!showSettingsOne);
    showSettingsOne
      ? document.getElementById('settings-option-one').classList.add('active')
      : document.getElementById('settings-option-one').classList.remove('active')
  };

  const displaySettingsTwo = () => {
    console.log('displaying settings');
    setShowSettingsTwo(!showSettingsTwo);
    showSettingsTwo
      ? document.getElementById('settings-option-two').classList.add('active')
      : document.getElementById('settings-option-two').classList.remove('active')
  };

  const angleOne = <FontAwesomeIcon className='settings-icon' icon={faAngleDown} onClick={displaySettingsOne} />
  const angleTwo = <FontAwesomeIcon className='settings-icon' icon={faAngleDown} onClick={displaySettingsTwo} />

  return (
    <>
      <h3 className='profile-settings-header'>
        Settings
      </h3>
      <ul className='profile-settings'>
        <li className='profile-option'>
          dark mode
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
            >
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