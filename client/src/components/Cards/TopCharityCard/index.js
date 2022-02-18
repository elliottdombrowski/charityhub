import React from 'react';
import DonationBtn from '../../Btns/DonationBtn';

import { useQuery } from '@apollo/client';
import { QUERY_ALLCHARITIES } from '../../../utils/queries';

import './styles.scss';
import './query.scss';

const TopCharityCard = () => {

  const { loading, data } = useQuery(QUERY_ALLCHARITIES);
  const allCharities = data?.allCharities || [];

  return (
    <div className='top-charity-card-wrapper'>
      {
        allCharities.map((singleCharity) => {
          return (
            <div className='single-top-charity-card' key={singleCharity._id}>
              <div>
                <h1 className='top-charitiy-name'>{singleCharity.charityName}</h1>
                <h2 className='top-charity-desc'>{singleCharity.charityDescription}</h2>
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