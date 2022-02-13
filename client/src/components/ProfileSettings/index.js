import React, { useState } from 'react';

import './styles.scss';
import './query.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faCog,
  faCamera,
  faSun,
  faLocationArrow
} from '@fortawesome/free-solid-svg-icons';

const profileAngleDown = <FontAwesomeIcon className='location-profile-icon profile-icon' id='location-profile' icon={faAngleDown} />
const profileSettings = <FontAwesomeIcon className='settings-profile-icon profile-icon' icon={faCog} />
const profilePhoto = <FontAwesomeIcon className='photo-profile-icon profile-icon' icon={faCamera} />
const profileDarkMode = <FontAwesomeIcon className='darkmode-profile-icon profile-icon' icon={faSun} />
const profileLocation = <FontAwesomeIcon className='location-profile-icon profile-icon' icon={faLocationArrow} />

const ProfileSettings = () => {
  const [showSettingsOne, setShowSettingsOne] = useState(false);
  const [showSettingsTwo, setShowSettingsTwo] = useState(false);
  const [showLocationSettings, setShowLocationSettings] = useState(false);

  const userSettingsDropdown = () => {
    document.getElementById('profile-options').classList.toggle('active');
  };

  return (
    <>
      <h3 className='profile-settings-header'>
        {profileSettings}
        Settings
      </h3>
      <ul className='profile-settings'>
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
        <li 
          className='profile-option'
          onClick={userSettingsDropdown}
        >
          {profileSettings}
          user settings
        </li>
        <div 
          className='profile-options-dropdown-wrapper'
          id='profile-options'
        >
          <li className='profile-option profile-dropdown-option'>
            {profilePhoto}
            change profile photo
          </li>
        </div>
        <li className='profile-option'>
          {profileLocation}
          location settings
        </li>
      </ul>
    </>
  );
};

export default ProfileSettings;