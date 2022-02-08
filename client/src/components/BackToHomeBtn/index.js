import React from "react";
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

import './styles.css';
import './query.css';

const arrowLeft = <FontAwesomeIcon className='back-to-home-icon' icon={faArrowCircleLeft} />

const BackToHomeBtn = () => {
  return (
    <Link 
      to='/'
      className="back-to-home-btn"
    >
      <div className="back-to-home-inner">
        {arrowLeft}
        Back to Homepage
      </div>
    </Link>
  );
};

export default BackToHomeBtn;
