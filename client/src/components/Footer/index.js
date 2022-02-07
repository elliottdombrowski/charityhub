import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './styles.css';
import './query.css';

const developers = <FontAwesomeIcon className='fa-2x footer-github' icon={faGithub} />
const github = <FontAwesomeIcon className='contact-github footer-icon' icon={faGithub} />
const email = <FontAwesomeIcon className='footer-email footer-icon' icon={faEnvelope} />
const twitter = <FontAwesomeIcon className='footer-twitter footer-icon' icon={faTwitter} />
const linkedin = <FontAwesomeIcon className='footer-linkedin footer-icon' icon={faLinkedin} />

const Footer = () => {
  return (
    <footer className='footer-wrapper'>
      <span className='footer-developers'>
        <div className='footer-developer-info'>
          <h1 className='developer-info-header'>developed by elliott dombrowski, 2022.</h1>
          <ul className='developer-contact-list'>
            <li className='developer-contact-item developer-contact-email'>
              <a 
                href='mailto: elliottdombrowski@gmail.com'
                rel='noopener noreferrer'
                target='_blank'
              >
                {email}
                elliottdombrowski@gmail.com
              </a>
            </li>
            <li className='developer-contact-item developer-contact-github'>
              <a 
                href='https://github.com/elliottdombrowski'
                rel='noopener noreferrer'
                target='_blank'
              >
                {github}
                github.com/elliottdombrowski
              </a>
            </li>
            <li className='developer-contact-item developer-contact-github'>
              <a 
                href='https://www.linkedin.com/in/elliott-dombrowski-8b2ba8211/'
                rel='noopener noreferrer'
                target='_blank'
              >
                {linkedin}
                linkedin.com/elliottdombrowski
              </a>
            </li>
            <li className='developer-contact-item developer-contact-github'>
              <a 
                href='https://twitter.com/dupagewasteland'
                rel='noopener noreferrer'
                target='_blank'
              >
                {twitter}
                twitter.com/dupagewasteland
              </a>
            </li>
          </ul>
        </div>
        {developers}
      </span>
    </footer>
  );
};

export default Footer;