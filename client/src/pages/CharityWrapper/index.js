import React from 'react';
import CharityCard from '../../components/CharityCard';
import CharityFilter from '../../components/CharityFilter';

import './styles.css';
import './query.css';

const CharityWrapper = () => {
  return (
    <main className='charity-wrapper'>
      <h1>charity homepage</h1>
      <CharityFilter />
      <CharityCard />
    </main>
  );
};

export default CharityWrapper;