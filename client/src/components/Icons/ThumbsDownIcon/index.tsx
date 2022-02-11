import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';

const thumbsDown = <FontAwesomeIcon icon={faThumbsDown} className='fa-2x' />

const ThumbsDownIcon = () => {
  return (
    <li className='nav-item thumbs-down'>
      {thumbsDown}
    </li>
  );
};

export default ThumbsDownIcon;