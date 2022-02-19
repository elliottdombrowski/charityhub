import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

import './styles.scss';
import './query.scss';

const backIcon = <FontAwesomeIcon className='back-icon' icon={faArrowCircleLeft} />

const BackBtn = () => {
  return (
    <Link
      className='back-btn-link'
      to='/blog'
    >
      <span>
        {backIcon}
        Go Back
      </span>
    </Link>
  );
};
 
export default BackBtn;