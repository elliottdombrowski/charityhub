import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

import LoginBtn from '../Btns/LoginBtn/';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandHoldingHeart,
  faNewspaper,
  faBlog,
  faUserCircle,
  faPaperPlane,
  faStar,
  faCog,
  faSmog,
  faAngleDown,
  faLocationArrow
} from '@fortawesome/free-solid-svg-icons';

import './styles.scss';
import './query.scss';

const charityIcon = <FontAwesomeIcon icon={faHandHoldingHeart} className='mobile-nav-icons charity-icon' />
const newsIcon = <FontAwesomeIcon icon={faNewspaper} className='mobile-nav-icons news-icon' />
const blogIcon = <FontAwesomeIcon icon={faBlog} className='mobile-nav-icons blog-icon' />
const profileIcon = <FontAwesomeIcon icon={faUserCircle} className='mobile-nav-icons profile-icon' />
const messageIcon = <FontAwesomeIcon icon={faPaperPlane} className='mobile-nav-icons message-icon' />
const starIcon = <FontAwesomeIcon icon={faStar} className='mobile-nav-icons star-icon' />
const settingsIcon = <FontAwesomeIcon icon={faCog} className='mobile-nav-icons settings-icon' />
const emissionsIcon = <FontAwesomeIcon icon={faSmog} className='mobile-nav-icons emissions-icon' />
const angleDown = <FontAwesomeIcon icon={faAngleDown} className='dropdown-icon' id='navicon' />
const locationIcon = <FontAwesomeIcon icon={faLocationArrow} className='mobile-nav-icons location-icon' />

const Navbar = () => {
  const mobileMenu = () => {
    document.getElementById('hamburger').classList.toggle('active');
    document.getElementById('navbar-right').classList.toggle('active');
  };

  window.onscroll = () => {
    document.getElementById('hamburger').classList.remove('active');
    document.getElementById('navbar-right').classList.remove('active');
  };

  window.onclick = (event) => {
    if (event.target !== document.getElementById('hamburger') && event.target !== document.getElementById('bar-one') && event.target !== document.getElementById('bar-two') && event.target !== document.getElementById('bar-three') && event.target !== document.getElementById('mobile-dropdown') && event.target !== document.getElementById('navicon')) {
      document.getElementById('hamburger').classList.remove('active');
      document.getElementById('navbar-right').classList.remove('active');
    }
  };

  const mobileDropdown = () => {
    document.getElementById('mobile-dropdown').classList.toggle('active');
    document.getElementById('nav-settings-wrapper').classList.toggle('active');
  };

  return (
    <header className='navbar-wrapper' id='navbar'>
      <nav className='nav-left'>
        <Link to='/'>
          center
        </Link>
      </nav>

      <nav className='nav-right' id='navbar-right'>
        <ul className='nav-item-wrapper'>
          <li className='nav-item'>
            <Link to='/charities'>
              {charityIcon}
              charities
            </Link>
          </li>
          <li className='nav-item mobile-nav-item'>
            <Link to='/charities'>
              {starIcon}
              charity of the year
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/news'>
              {newsIcon}
              news
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/blog'>
              {blogIcon}
              blog
            </Link>
          </li>
          <li className='nav-item mobile-nav-item'>
            <Link to='/blog'>
              {emissionsIcon}
              carbon offsets
            </Link>
          </li>
          <li className='nav-item mobile-nav-item'>
            <Link to={Auth.loggedIn() ? '/profile' : '/login'}>
              {profileIcon}
              profile
              <div 
                className='mobile-nav-dropdown-wrapper'
                id='mobile-dropdown'
                onClick={mobileDropdown}
              >
                {angleDown}
              </div>
            </Link>
          </li>
          <div className='nav-profile-settings-wrapper' id='nav-settings-wrapper'>
            <li className='nav-item mobile-nav-item'>
              <Link to={Auth.loggedIn() ? '/profile' : '/login'}>
                {settingsIcon}
                settings
              </Link>
            </li>
            <li className='nav-item mobile-nav-item'>
              <Link to={Auth.loggedIn() ? '/profile' : '/login'}>
                {locationIcon}
                location services
              </Link>
            </li>
          </div>
          <li className='nav-item mobile-nav-item'>
            <Link to='/messages'>
              {messageIcon}
              messages
            </Link>
          </li>
          <LoginBtn />
        </ul>
      </nav>

      <div 
        className='hamburger'
        id='hamburger'
        onClick={() => mobileMenu()}
      >
        <span className='bar' id='bar-one' />
        <span className='bar' id='bar-two' />
        <span className='bar' id='bar-three' />
      </div>
    </header>
  );
}

export default Navbar;