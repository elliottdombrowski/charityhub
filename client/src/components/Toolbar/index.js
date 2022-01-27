import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import './styles.css';
import './query.css';

//IMPORT LUXON DATE PACKAGE
const { DateTime } = require('luxon');


const Toolbar = () => {
  const [apiData, setApiData] = useState({});
  const [getState, setGetState] = useState('chicago');
  const [state, setState] = useState('chicago');

  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=${apiKey}`;

  useEffect(() => {
    fetch(apiUrl).then((res) => res.json()).then((data) => setApiData(data));
  }, []);

  console.log(apiData);

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