import React from 'react';
import AnimatePage from '../../AnimatePage';
import TopCharitiesWrapper from '../TopCharitiesWrapper';
import CharityCard from '../../components/Cards/CharityCard/';
import CharityFilter from '../../components/Forms/CharityFilter/';

import './styles.scss';
import './query.scss';

const CharityWrapper = () => {
  return (
    <AnimatePage>
      <main className='charity-wrapper'>
        <TopCharitiesWrapper />
        <CharityFilter />
        <CharityCard />
      </main>
    </AnimatePage>
  );
};

export default CharityWrapper;