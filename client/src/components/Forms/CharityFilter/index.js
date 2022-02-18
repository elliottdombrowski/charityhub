import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './styles.scss';
import './query.scss';

const searchIcon = <FontAwesomeIcon icon={faSearch} className='fa-2x charity-search-icon' />

const CharityFilter = () => {
  return (
    <form className='charity-search-bar-form'>
      <h1 className='charity-search-label'>
        Search for your favorite charities.
      </h1>

      <div className='charity-search-bar-wrapper'>
        <input
          type='text'
          className='charity-search-bar'
          placeholder='Search for posts'
        />

        <button
          type='submit'
          className='charity-search-icon-btn'>
          {searchIcon}
        </button>
      </div>
    </form>
  );
};

export default CharityFilter;