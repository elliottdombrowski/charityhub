import React from 'react';
import AnimatePage from '../../AnimatePage';
import HomepageSvg from '../../components/Svgs/HomepageSvg';

import './styles.scss';
import './query.scss';

const Homepage = () => {
  return (
    <AnimatePage>
      <main className='homepage-wrapper'>
        <section className='homepage-left'>
          
        </section>

        <section className='homepage-right'>
          <HomepageSvg />
        </section>
      </main>
    </AnimatePage>
  );
};

export default Homepage;