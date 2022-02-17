import React from 'react';

import DonationBtn from '../../Btns/DonationBtn';

import './styles.scss';
import './query.scss';

let topCharities = [
  {
    top_id: 1,
    topCharityName: 'top charity one',
    topCharityDesc: 'lorem ipsum yada yada dummy text',
  },
  {
    top_id: 2,
    topCharityName: 'top charity two',
    topCharityDesc: 'lorem ipsum yada yada dummy text',
  },
  {
    top_id: 3,
    topCharityName: 'top charity three',
    topCharityDesc: 'lorem ipsum yada yada dummy text',
  },
  {
    top_id: 4,
    topCharityName: 'top charity four',
    topCharityDesc: 'lorem ipsum yada yada dummy text',
  },
  {
    top_id: 5,
    topCharityName: 'top charity five',
    topCharityDesc: 'lorem ipsum yada yada dummy text',
  },
  {
    top_id: 6,
    topCharityName: 'top charity six',
    topCharityDesc: 'lorem ipsum yada yada dummy text',
  },
];

const TopCharityCard = () => {
  console.log(topCharities)
  return (
    <div className='top-charity-card-wrapper'>
      {
        topCharities.map((top) => {
          return (
            <div className='single-top-charity-card' key={top.top_id}>
              <div>
                <h1>{top.topCharityName}</h1>
                <h1>{top.topCharityDesc}</h1>
                <div className="top-charity-card-img">
                  <img src={require('./placeholder.jpeg')}></img>
                </div>
                <DonationBtn />
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

export default TopCharityCard;