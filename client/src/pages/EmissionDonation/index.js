import React, { useState } from 'react';
import DonationCard from '../../components/DonationCard';

import './styles.css';
import './query.css';

const EmissionDonation = () => {
  return (
    <section className='emission-donation-wrapper'>
      <span className='emission-donation-cards'>
        <DonationCard />
        <DonationCard />
        <DonationCard />
      </span>
    </section>
  );
};

export default EmissionDonation;