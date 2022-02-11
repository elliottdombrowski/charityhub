import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';

import './styles.scss';

const backToTop = <FontAwesomeIcon icon={faArrowCircleUp} className='fa-3x back-to-top-icon' />

const BackToTopBtn = () => {
  return (
    <button className='back-to-top' id='to-top'>
      {backToTop}
    </button>
  );
};

export default BackToTopBtn;