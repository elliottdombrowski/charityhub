import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import LoginBtn from '../Btns/LoginBtn/index.tsx';

import './styles.scss';
import './query.scss';

const Navbar = () => {
  return (
    <header className='navbar-wrapper' id='navbar'>
      <nav className='nav-left'>
        <Link to='/'>
          center
        </Link>
      </nav>

      <nav className='nav-right'>
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
    </header>
  );
}

export default Navbar;