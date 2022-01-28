import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
const profile = <FontAwesomeIcon icon={faUserCircle} className='fa-2x' />

const ProfileIcon = () => {
  return (
    <li className='nav-item'>
      {profile}
    </li>
  );
}

export default ProfileIcon;