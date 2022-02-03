import React, { useState } from 'react';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import './styles.css';
import './query.css';


const Profile = () => {
  const [showSettings, setShowSettings] = useState(false);
  
  const { name: userParam } = useParams();
  
  const { loading, data } = useQuery(QUERY_ME, {
    variables: { username: userParam },
  });
  
  const user = data?.me || [];

  const displaySettings = () => {
    console.log('displaying settings');
    setShowSettings(!showSettings);
    showSettings
      ? document.getElementById('settings-display').classList.add('active')
      : document.getElementById('settings-display').classList.remove('active')
  };

  const angle = <FontAwesomeIcon className='settings-icon' id='settings-display' icon={faAngleDown} onClick={displaySettings}/>

  return (
    <main className='profile-wrapper'>
      <section className='profile-body-left'>
        <div className='profile-img-wrapper'>
          <img
            src={require('../../assets/blank-profile.png')}
            alt='user profile photo'
            className='profile-img'
          ></img>
        </div>

        <div className='profile-name'>
          <h1>{user.name}</h1>
        </div>

        <section className='profile-info'>
          <h2 className='profile-email profile-data'>{user.email}</h2>
          <h2 className='profile-location profile-data'>{user.city}, {user.state}</h2>
        </section>

        <span className='profile-settings-wrapper'>
          <h3 className='profile-settings-header'>
            Settings
          </h3>
          <ul className='profile-settings'>
            <li className='profile-option'>
              dark mode
            </li>
            <li className='profile-option'>
              {angle}
              user settings
            </li>
            <li className='profile-option'>
              {angle}
              location settings
            </li>
            <li className='profile-option'></li>
            <li className='profile-option'></li>
          </ul>
        </span>
      </section>

      <section className='profile-body-right'>

      </section>
      {/* <input 
        type='file'
        name='profile-image'
        accept='image/*'
      /> */}
    </main>
  );
};

export default Profile;