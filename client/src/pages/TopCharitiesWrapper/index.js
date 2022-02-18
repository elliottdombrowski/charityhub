import React from 'react';
import TopCharitiesHeader from '../../components/TopCharitiesHeader';
import TopCharitiesSlider from '../../components/TopCharitiesSlider';

import './styles.scss';
import './query.scss';

const TopCharitiesWrapper = () => {
  return (
    <section className='top-charity-wrapper'>
      <TopCharitiesHeader />
      <TopCharitiesSlider />
    </section>
  );
};

export default TopCharitiesWrapper;