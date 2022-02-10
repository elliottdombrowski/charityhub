import React, { useState } from 'react';
import DonationCard from '../../components/DonationCard';

import './styles.scss';
import './query.scss';

const EmissionDonation = () => {
  return (
    <section className='emission-donation-wrapper'>
      <div className='emission-donation-text'>
        <h1 className='emission-donation-header'>
          Pay your Carbon Emission offsets!
        </h1>
        <h2 className='emission-donation-subheader'>
          Donating to Carbon Emission Offset organizations is a great way to combat your carbon footprint.
        </h2>
        <h3 className='emission-donation-desc'>
          Either pay once, or automatically pay your offsets annually.
        </h3>
      </div>
      <span className='emission-donation-cards'>
        <DonationCard />
      </span>
    </section>
  );
};

export default EmissionDonation;