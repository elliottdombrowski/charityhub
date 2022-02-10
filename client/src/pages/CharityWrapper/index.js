import React from 'react';
import CharityCard from '../../components/Cards/CharityCard';
import CharityFilter from '../../components/Forms/CharityFilter';

import './styles.scss';
import './query.scss';

const CharityWrapper = () => {
  return (
    <main className='charity-wrapper'>
      <h1>charity homepage</h1>
      <CharityCard />
      <CharityFilter />
    </main>
  );
};

export default CharityWrapper;