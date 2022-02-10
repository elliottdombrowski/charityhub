import React from "react";
import { Link } from 'react-router-dom';

import DonationBtn from '../DonationBtn';

import './styles.css';
import './query.css';

let dummyCharities = [
  {
    id: 1,
    charity_name: 'charity one',
    charity_desc: 'lorem ipsum yada yada dummy text',
  },
  {
    id: 2,
    charity_name: 'charity two',
    charity_desc: 'lorem ipsum yada yada dummy text',
  },
  {
    id: 3,
    charity_name: 'charity three',
    charity_desc: 'lorem ipsum yada yada dummy text',
  },
  {
    id: 4,
    charity_name: 'charity four',
    charity_desc: 'lorem ipsum yada yada dummy text',
  },
  {
    id: 5,
    charity_name: 'charity five',
    charity_desc: 'lorem ipsum yada yada dummy text',
  },
  {
    id: 6,
    charity_name: 'charity six',
    charity_desc: 'lorem ipsum yada yada dummy text',
  },
];

const CharityCard = () => {
  return (
    <section className="charity-card-wrapper">
      {
        dummyCharities.map((singleCharity) => {
          return (
            <section className="single-charity-card" key={singleCharity.id}>
              <div className="charity-card-header-wrapper">
                <h1 className="charity-name">
                  {singleCharity.charity_name}
                </h1>

                <p className="charity-desc">
                  {singleCharity.charity_desc}
                </p>

                <div className="charity-card-img">
                  <img src={require('./placeholder.jpeg')}></img>
                </div>
              </div>

              <Link to='/'>
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