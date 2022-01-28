import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
const profile = <FontAwesomeIcon icon={faUserCircle} className='fa-lg' />

const ProfileIcon = () => {
  return (
    <li className='nav-item'>
      <Link to='/profile'>
        {profile}
      </Link>
    </li>
  );
}

export default ProfileIcon;