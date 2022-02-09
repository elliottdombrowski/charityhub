import React from 'react';

import './styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';

const thumbsDown = <FontAwesomeIcon icon={faThumbsDown} className='fa-2x' />

const ThumbsUpIcon = () => {
  return (
    <li className='nav-item thumbs-up'>
      {thumbsDown}
    </li>
  );
};

export default ThumbsDownIcon;