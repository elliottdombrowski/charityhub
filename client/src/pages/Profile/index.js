import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

//IMPORT COMPONENTS
import AnimatePage from '../../AnimatePage';
import LoginBtn from '../../components/Btns/LoginBtn/';
import ProfileSettings from '../../components/ProfileSettings/';

//IMPORT GQL QUERIES
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';

import './styles.scss';
import './query.scss';


const Profile = () => {
  const { name: userParam } = useParams();

  //CALL QUERY TO GET CURRENT SESSION USER
  const { loading, data } = useQuery(QUERY_ME, {
    variables: { username: userParam },
  });
  const user = data?.me || [];

  return (
    <AnimatePage>
      <main className='profile-wrapper'>
        <section className='profile-body-left'>

          {/* PROFILE PHOTO  */}
          <div className='profile-img-wrapper'>
            <img
              src={require('../../assets/blank-profile.png')}
              alt='user profile photo'
              className='profile-img'
            ></img>
          </div>

          {/* PROFILE NAME  */}
          <div className='profile-name'>
            <h1>{user.name}</h1>
          </div>

          {/* PROFILE NAME / LOCATION  */}
          <section className='profile-info'>
            <h2 className='profile-email profile-data'>{user.email}</h2>
            <h2 className='profile-location profile-data'>{user.city}, {user.state}</h2>
            <h2 className='profile-contacts profile-data'>Contacts: {user.contacts}</h2>
          </section>

          {/* RENDER PROFILE SETTINGS COMPONENT  */}
          <span className='profile-settings-wrapper'>
            <ProfileSettings />
            
            {/* 
            RENDER LOGIN BTN COMPONENT
            PROFILE SHOULD ONLY RENDER IF LOGGED IN,
            RENDERING LOGOUT BUTTON DYNAMICALLY INSTEAD OF LOGIN BTN. 
            */}
            <div className='logout-btn'>
              <LoginBtn />
            </div>
          </span>
        </section>
      </main>
    </AnimatePage>
  );
};

export default Profile;