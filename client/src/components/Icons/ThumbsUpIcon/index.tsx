import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const thumbsUp = <FontAwesomeIcon icon={faThumbsUp} className='fa-2x' />

const ThumbsUpIcon = () => {
  return (
    <li className='nav-item thumbs-up'>
      {thumbsUp}
    </li>
  );
};

export default ThumbsUpIcon;