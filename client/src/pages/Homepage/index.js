import React from 'react';
import HomepageSvg from '../../components/HomepageSvg';

import './styles.scss';
import './query.scss';

const Homepage = () => {
  return (
    <main className='homepage-wrapper'>
      <section className='homepage-left'>
        
      </section>

      <section className='homepage-right'>
        <HomepageSvg />
      </section>
    </main>
  );
};

export default Homepage;