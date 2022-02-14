import React, { useState } from 'react';

import './styles.scss';
import './query.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faCog,
  faCamera,
  faSun,
  faLocationArrow,
  faLock
} from '@fortawesome/free-solid-svg-icons';

const profileAngleDown = <FontAwesomeIcon className='location-profile-icon profile-icon' id='location-profile' icon={faAngleDown} />
const profileSettings = <FontAwesomeIcon className='settings-profile-icon profile-icon' icon={faCog} />
const profilePhoto = <FontAwesomeIcon className='photo-profile-icon profile-icon' icon={faCamera} />
const profileDarkMode = <FontAwesomeIcon className='darkmode-profile-icon profile-icon' icon={faSun} />
const profileLocation = <FontAwesomeIcon className='location-profile-icon profile-icon' icon={faLocationArrow} />
const profilePassword = <FontAwesomeIcon className='password-profile-icon profile-icon' icon={faLock} />

const ProfileSettings = () => {
  const [showSettingsOne, setShowSettingsOne] = useState(false);
  const [showSettingsTwo, setShowSettingsTwo] = useState(false);
  const [showLocationSettings, setShowLocationSettings] = useState(false);

  const userSettingsDropdown = () => {
    document.getElementById('profile-user-options').classList.toggle('active');
  };

  const locationSettingsDropdown = () => {
    document.getElementById('profile-location-options').classList.toggle('active');
  };

  return (
    <>
      <h3 className='profile-settings-header'>
        {profileSettings}
        Settings
      </h3>
      <ul className='profile-settings'>
        <li 
          className='profile-option'
          onClick={userSettingsDropdown}
        >
          {profileSettings}
          user settings
        </li>

        <div 
          className='profile-options-dropdown-wrapper'
          id='profile-user-options'
        >
          <li className='profile-option profile-dropdown-option'>
            {profilePhoto}
            change profile photo
          </li>
          <li className='profile-option profile-dropdown-option'>
            {profilePassword}
            change password
          </li>
        </div>

        <li 
          className='profile-option'
          onClick={locationSettingsDropdown}
        >
          {profileLocation}
          location settings
        </li>

        <div 
          className='profile-options-dropdown-wrapper'
          id='profile-location-options'
        >
          <li className='profile-option profile-dropdown-option'>
            {profileLocation}
            change location
          </li>
          <li className='profile-option profile-dropdown-option profile-location-option'>
            <div>
              {profileLocation}
              disable location services
            </div>
            <button 
              className='disable-services-btn'
              onClick={() => console.log('clicking profile btn')}
            >
              disable
            </button>
          </li>
        </div>
        <li className='profile-option profile-darkmode-wrapper'>
          <div>
            {profileDarkMode}
            dark mode
          </div>
          <label className='darkmode-switch'>
            <input type='checkbox' />
            <span className='darkmode-slider' />
          </label>
        </li>
      </ul>
    </>
  );
};

export default ProfileSettings;