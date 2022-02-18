import React from 'react';
import TopCharityCard from '../Cards/TopCharityCard';

import './styles.scss';
import './query.scss';

const TopCharitiesSlider = () => {
  return (
    <div className='top-charities-slider-wrapper'>
      <TopCharityCard />
    </div>
  );
};
 
export default TopCharitiesSlider;