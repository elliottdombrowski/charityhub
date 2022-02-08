import React from 'react';
import NotFoundSvg from '../../components/NotFoundSvg';
import BackToHomeBtn from '../../components/BackToHomeBtn';

import './styles.css';
import './query.css';

const NotFound = () => {
  return (
    <main className='notfound-wrapper'>
      <h1 className='notfound-header'>
        404!
      </h1>
      
      <div className='notfound-svg-wrapper'>
        <NotFoundSvg />
      </div>

      <h2 className='notfound-subheader'>
        Whoops! The page you're looking for can't be found.
      </h2>

      <div className='back-to-home-btn-wrapper'>
        <BackToHomeBtn />
      </div>
    </main>
  );
};

export default NotFound;