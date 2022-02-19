import React from "react";
import { Link } from 'react-router-dom';

//IMPORT COMPONENTS
import DonationBtn from '../../Btns/DonationBtn/';

//IMPORT GQL QUERIES
import { useQuery } from '@apollo/client';
import { QUERY_ALLCHARITIES } from '../../../utils/queries';

import './styles.scss';
import './query.scss';

const CharityCard = () => {

  //CALL GQL FIND ALL CHARITIES QUERY
  const { loading, data } = useQuery(QUERY_ALLCHARITIES);
  const allCharities = data?.allCharities || [];

  return (
    // MAP CHARITY DATA TO CARDS 
    <section className="charity-card-wrapper">
      {
        allCharities.map((singleCharity) => {
          return (
            <section className="single-charity-card" key={singleCharity._id}>
              <div className="charity-card-header-wrapper">
                <h1 className="charity-name">
                  {singleCharity.charityName}
                </h1>

                <p className="charity-desc">
                  {singleCharity.charityDescription}
                </p>

                <div className="charity-card-img">
                  <img src={require('./placeholder.jpeg')}></img>
                </div>
              </div>

              {/* LINK TO FUTURE STRIPE DONATION PAGE - CURRENTLY HOMEPAGE  */}
              <Link to='/' className="charity-donate-btn">
                <DonationBtn />
              </Link>
            </section>
          )
        })
      }
    </section>
  );
};

export default CharityCard;