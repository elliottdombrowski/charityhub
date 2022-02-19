import React from "react";
import { Link } from 'react-router-dom';

// IMPORT COMPONENTS 
import DonationBtn from "../../Btns/DonationBtn/";

import './styles.scss';
import './query.scss';

//DUMMY DATA FOR RENDER TESTING
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
  //MAP DUMMY DATA TO EMISSION DONATION CARDS
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

              {/* LINK TO FUTURE STRIPE DONATION PAGE, CURRENTLY HOMEPAGE  */}
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