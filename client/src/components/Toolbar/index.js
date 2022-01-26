import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import './styles.css';
import './query.css';

//IMPORT LUXON DATE PACKAGE
const { DateTime } = require('luxon');

const Toolbar = () => {
  //GET CURRENT TIME - CURRENT HARDCODED TO CHICAGO
  //FORMATTED TO ABV. MONTH / DATE / YYYY , HOUR/MINUTE/SECOND / TIMEZONE
  let getTime = DateTime.now().toFormat("DD',' ttt");

  return (
    <div className='toolbar-wrapper'>
      <nav className='toolbar-left'>
        <ul className='nav-item-wrapper'>
          <li className='nav-item'>
            {getTime}
          </li>
          <li className='nav-item'>
            <Link to='/'>
              blog
            </Link>
          </li>
        </ul>
      </nav>

      <nav className='toolbar-right'>

      </nav>
    </div >
  );
};

export default Toolbar;