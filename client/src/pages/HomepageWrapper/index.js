import React from 'react';
import AnimatePage from '../../AnimatePage';

import Homepage from '../../components/Homepage';
import TopCharitiesWrapper from '../TopCharitiesWrapper';
import EmissionHeader from '../../components/EmissionHeader';
import EmissionDonation from '../EmissionDonation';
import FooterSvg from '../../components/Svgs/FooterSvg';

const HomepageWrapper = () => {
  return (
    <AnimatePage>
      <TopCharitiesWrapper />
      <Homepage />
      <EmissionHeader />
      <EmissionDonation />
      <FooterSvg />
    </AnimatePage>
  );
};

export default HomepageWrapper;