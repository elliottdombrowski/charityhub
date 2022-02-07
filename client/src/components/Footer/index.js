import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './styles.css';
import './query.css';

const developers = <FontAwesomeIcon className='fa-2x footer-github' icon={faGithub} />

const Footer = () => {
  return (
    <footer className='footer-wrapper'>
      <span className='footer-developers'>
        <div className='footer-developer-info'>
          <h1 className='developer-info-header'>developed by elliott dombrowski.</h1>
        </div>
        {developers}
      </span>
    </footer>
  );
};

export default Footer;