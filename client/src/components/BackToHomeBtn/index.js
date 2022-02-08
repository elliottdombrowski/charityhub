import React from "react";
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import './styles.css';
import './query.css';

const arrowLeft = <FontAwesomeIcon icon={faArrowLeft} />

const BackToHomeBtn = () => {
  return (
    <Link 
      to='/'
      className="back-to-home-btn"
    >
      test
    </Link>
  );
};

export default BackToHomeBtn;
