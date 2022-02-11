import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const messenger = <FontAwesomeIcon icon={faPaperPlane} className='fa-lg' />

const MessengerIcon = () => {
  return (
    <li className='nav-item'>
      <Link to='/messages'>
        {messenger}
      </Link>
    </li>
  );
};

export default MessengerIcon;