import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const saveContent = <FontAwesomeIcon icon={faBookmark} className='fa-2x' />

const BookmarkIcon = () => {
  return (
    <li className='nav-item bookmark-icon'>
      {saveContent}
    </li>
  );
};

export default BookmarkIcon;