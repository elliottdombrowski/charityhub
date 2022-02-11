import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';

import './styles.scss';

const backToTop = <FontAwesomeIcon icon={faArrowCircleUp} className='fa-3x back-to-top-icon' />

const BackToTopBtn = () => {
  const [showBackToTopBtn, setShowBackToTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.pageYOffset > 300 ? setShowBackToTopBtn(true) : setShowBackToTopBtn(false);
    })
  }, []);

  return (
    <button className='back-to-top' id='to-top'>
      <a href='#navbar'>
        {backToTop}
      </a>
    </button>
  );
};

export default BackToTopBtn;