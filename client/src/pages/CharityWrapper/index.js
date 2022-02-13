import React from 'react';
import AnimatePage from '../../AnimatePage';
import CharityCard from '../../components/Cards/CharityCard/';
import CharityFilter from '../../components/Forms/CharityFilter/';

import './styles.scss';
import './query.scss';

const CharityWrapper = () => {
  return (
    <AnimatePage>
      <main className='charity-wrapper'>
        <h1>charity homepage</h1>
        <CharityCard />
        <CharityFilter />
      </main>
    </AnimatePage>
  );
};

export default CharityWrapper;