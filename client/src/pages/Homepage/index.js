import React from 'react';
import HomepageSvg from '../../components/HomepageSvg';

import './styles.css';
import './query.css';

const Homepage = () => {
  return (
    <main className='homepage-wrapper'>
      <div className='homepage-inner'>
        <HomepageSvg />
      </div>
    </main>
  );
};

export default Homepage;