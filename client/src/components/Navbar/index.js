import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import LoginBtn from '../Btns/LoginBtn/';

import './styles.scss';
import './query.scss';

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
    if (event.target !== document.getElementById('hamburger') && event.target !== document.getElementById('bar-one') && event.target !== document.getElementById('bar-two') && event.target !== document.getElementById('bar-three')) {
      document.getElementById('hamburger').classList.remove('active');
      document.getElementById('navbar-right').classList.remove('active');
    }
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
              charities
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/news'>
              news
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/blog'>
              blog
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