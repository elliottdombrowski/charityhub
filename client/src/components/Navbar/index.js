import React, { useState } from 'react';

import './styles.css';
import './query.css';

const Navbar = () => {
  return (
    <div className='navbar-wrapper'>
      <nav className='nav-left'>
        left
      </nav>

      <nav className='nav-center'>
        center
      </nav>

      <nav className='nav-right'>
        right 
      </nav>
    </div>
  );
}

export default Navbar;