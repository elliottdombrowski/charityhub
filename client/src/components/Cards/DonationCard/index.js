import React from "react";
import { Link } from 'react-router-dom';

import DonationBtn from "../../Btns/DonationBtn";

import './styles.scss';
import './query.scss';

let places = [
  {
    id: 1,
    name: 'place one',
    address: 'addy one',
  },
  {
    id: 2,
    name: 'place two',
    address: 'addy two',
  },
  {
    id: 3,
    name: 'place three',
    address: 'addy three',
  }
];

const DonationCard = () => {
  return (
    <div className="donation-card-wrapper">
      {
        places.map((singlePlace) => {
          return (
            <section className="donation-card" key={singlePlace.id}>
              <div className="card-info-wrapper">
                <h1 className="card-header">
                  {singlePlace.name}
                </h1>
                <h2 className="card-header">{singlePlace.address}</h2>
                <div className="card-img">
                  <img src={require('./placeholder.jpeg')}></img>
                </div>
              </div>
              <Link to='/'>
                <DonationBtn />
              </Link>
            </section>
          );
        })
      }
    </div>
  );
};

export default DonationCard;