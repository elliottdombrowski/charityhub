import React from 'react';
import NotFoundSvg from '../../components/NotFoundSvg';

import './styles.css';
import './query.css';

const NotFound = () => {
  return (
    <main className='notfound-wrapper'>
      <p>404</p>
      <div className='notfound-svg-wrapper'>
        <NotFoundSvg />
      </div>
    </main>
  );
};

export default NotFound;