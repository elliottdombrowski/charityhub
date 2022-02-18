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

const profileAngleDown = <FontAwesomeIcon className='location-profile-icon profile-icon fa-xl' id='location-profile' icon={faAngleDown} />
const profileSettings = <FontAwesomeIcon className='settings-profile-icon profile-icon' icon={faCog} />
const profilePhoto = <FontAwesomeIcon className='photo-profile-icon profile-icon' icon={faCamera} />
const profileDarkMode = <FontAwesomeIcon className='darkmode-profile-icon profile-icon' icon={faSun} />
const profileLocation = <FontAwesomeIcon className='location-profile-icon profile-icon' icon={faLocationArrow} />
const profilePassword = <FontAwesomeIcon className='password-profile-icon profile-icon' icon={faLock} />

const ProfileSettings = () => {

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
          <div>
            {profileSettings}
            user settings
          </div>
          {profileAngleDown}
        </li>

        <div 
          className='profile-options-dropdown-wrapper'
          id='profile-user-options'
        >
          <li className='profile-option profile-dropdown-option'>
            <div>
              {profilePhoto}
              change profile photo
            </div>
          </li>
          <li className='profile-option profile-dropdown-option'>
            <div>
              {profilePassword}
              change password
            </div>
          </li>
        </div>

        <li 
          className='profile-option'
          onClick={locationSettingsDropdown}
        >
          <div>
            {profileLocation}
            location settings
          </div>
          {profileAngleDown}
        </li>

        <div 
          className='profile-options-dropdown-wrapper'
          id='profile-location-options'
        >
          <li className='profile-option profile-dropdown-option'>
            <div>
              {profileLocation}
              change location
            </div>
          </li>
          <li className='profile-option profile-dropdown-option profile-location-option'>
            <div>
              {profileLocation}
              disable location services
            </div>
            <button 
              className='disable-services-btn'
              onClick={() => 
                console.log('clicking profile btn')}
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