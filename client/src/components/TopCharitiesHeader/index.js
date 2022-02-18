import React from 'react';

import './styles.scss';
import './query.scss';

const TopCharitiesHeader = () => {
  return (
    <span className='top-charities-header-wrapper'>
      <h1 className='top-charities-header'>
        View our top charity picks!
      </h1>

      <h2 className='top-charities-subheader'>
        These charities have done the most good with their income, and we encourage you to donate to them!
      </h2>
    </span>
  );
};
 
export default TopCharitiesHeader;