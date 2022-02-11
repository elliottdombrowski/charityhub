import React from 'react';
import BackToHomeBtn from '../../components/Btns/BackToHomeBtn/index.tsx';
import NotFoundSvg from '../../components/Svgs/NotFoundSvg';

import './styles.scss';
import './query.scss';

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