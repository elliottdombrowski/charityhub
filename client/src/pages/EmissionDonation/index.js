import React, { useState } from 'react';
import DonationCard from '../../components/Cards/DonationCard/';

import './styles.scss';
import './query.scss';

const EmissionDonation = () => {
  return (
    <section className='emission-donation-wrapper'>
      <span className='emission-donation-cards'>
        <DonationCard />
      </span>
      <a href='emissions' rel='noopener noreferrer' />
    </section>
  );
};

export default EmissionDonation;