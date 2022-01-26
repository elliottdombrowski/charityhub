import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import './query.css';

const Navbar = () => {
  return (
    <div className='navbar-wrapper'>
      <nav className='nav-left'>
        <ul className='nav-item-wrapper'>
          <li className='nav-item'>
            <Link to='/'>
              news
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/'>
              blog
            </Link>
          </li>
        </ul>
      </nav>

      <nav className='nav-center'>
        <Link to='/'>
          center
        </Link>
      </nav>

      <nav className='nav-right'>
        <ul className='nav-item-wrapper'>
          <li className='nav-item'>
            <Link to='/'>
              charities
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/'>
              log in
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;