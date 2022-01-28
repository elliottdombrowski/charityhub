import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import CurrDate from '../CurrDate';
import ProfileIcon from '../ProfileIcon';

import './styles.css';
import './query.css';

const Toolbar = () => {
  const [apiData, setApiData] = useState({});

  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Naperville&units=imperial&appid=${apiKey}`;

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, []);
  // const weatherData = apiData?.data || [];
  // console.log(apiData.main.temp);
  console.log(apiData);

  //GET CURRENT TIME - CURRENT HARDCODED TO CHICAGO
  //FORMATTED TO ABV. MONTH / DATE / YYYY , HOUR/MINUTE/SECOND / TIMEZONE
  return (
    <div className='toolbar-wrapper'>
      <nav className='toolbar-left'>
        <ul className='nav-item-wrapper'>
          <CurrDate />
          <li className='nav-item'>
            {/* {apiData.main.temp} */}
          </li>
        </ul>
      </nav>

      <nav className='toolbar-right'>
        <ul className='nav-item-wrapper'>
          <ProfileIcon />
        </ul>
      </nav>
    </div >
  );
};

export default Toolbar;