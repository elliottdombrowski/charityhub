import React, { useState, useEffect } from 'react';

//IMPORT AUTH UTILS
import Auth from '../../utils/auth';

//IMPORT COMPONENTS
import CurrDate from '../CurrDate';
import ProfileIcon from '../Icons/ProfileIcon';
import MessengerIcon from '../Icons/MessengerIcon';

//IMPORT FONTAWESOME COMPONENT AND ICON
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './styles.scss';
import './query.scss';

const searchIcon = <FontAwesomeIcon icon={faSearch} className='fa-lg toolbar-search-icon' />

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

        {/* TOOLBAR SEARCH  */}
        <div className='toolbar-search-bar-wrapper'>
          <input
            type='text'
            className='toolbar-search-bar'
            placeholder='Search for posts'
          />

          <button
            type='submit'
            className='toolbar-search-icon-btn'>
            {searchIcon}
          </button>
        </div>

        <ul className='nav-item-wrapper'>
          {Auth.loggedIn() ? (
            <MessengerIcon />
          ) : (
            <></>
          )}
          <ProfileIcon />
        </ul>
      </nav>
    </div >
  );
};

export default Toolbar;