import React, { useState } from 'react';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';

import './styles.css';
import './query.css';

const Profile = () => {
  const { name: userParam } = useParams();

  const { loading, data } = useQuery(QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || [];

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

        <span className='profile-settings'>
          {/* PLACEHOLDERS FOR NOW  */}
          <p>dark mode</p>
          <p>change password</p>
          <p>change picture</p>
          <p>change location</p>
          <p>disable location</p>
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