import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import LoginBtn from '../Btns/LoginBtn/index.tsx';

import './styles.scss';
import './query.scss';

const Navbar = () => {
  const mobileMenu = () => {
    document.getElementById('hamburger').classList.toggle('active');
    document.getElementById('navbar-right').classList.toggle('active');
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
        <span className='bar' id='bar1' />
        <span className='bar' id='bar1' />
        <span className='bar' id='bar1' />
      </div>
    </header>
  );
}

export default Navbar;