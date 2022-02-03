import React, { useState } from 'react';
import LoginBtn from '../../components/LoginBtn';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import './styles.css';
import './query.css';


const Profile = () => {
  const [showSettingsOne, setShowSettingsOne] = useState(false);
  const [showSettingsTwo, setShowSettingsTwo] = useState(false);

  const { name: userParam } = useParams();

  const { loading, data } = useQuery(QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || [];

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
          
          <div className='logout-btn'>
            <LoginBtn />
          </div>
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