import React from 'react';

import './styles.scss';
import './query.scss';

let dummyTopCharities = [
  {
    id: 1,
    topCharityName: 'charity one',
    topCharityDesc: 'lorem ipsum yada yada dummy text',
  },
  {
    id: 2,
    topCharityName: 'charity two',
    topCharityDesc: 'lorem ipsum yada yada dummy text',
  },
  {
    id: 3,
    topCharityName: 'charity three',
    topCharityDesc: 'lorem ipsum yada yada dummy text',
  },
  {
    id: 4,
    topCharityName: 'charity four',
    topCharityDesc: 'lorem ipsum yada yada dummy text',
  },
  {
    id: 5,
    topCharityName: 'charity five',
    topCharityDesc: 'lorem ipsum yada yada dummy text',
  },
  {
    id: 6,
    topCharityName: 'charity six',
    topCharityDesc: 'lorem ipsum yada yada dummy text',
  },
];

const TopCharityCard = () => {
  return (
    <section className='top-charity-card-wrapper'>
      <div className='single-top-charity-card'>
        <div>
          <h1>one</h1>
          <h1>two</h1>
          <div className="top-charity-card-img">
            <img src={require('./placeholder.jpeg')}></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCharityCard;