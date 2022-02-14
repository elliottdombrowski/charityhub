import React from 'react';
import AnimatePage from '../../AnimatePage';

import Homepage from '../../components/Homepage';
import EmissionHeader from '../../components/EmissionHeader';
import EmissionDonation from '../EmissionDonation';
import FooterSvg from '../../components/Svgs/FooterSvg';

const HomepageWrapper = () => {
  return (
    <AnimatePage>
      <Homepage />
      <EmissionHeader />
      <EmissionDonation />
      <FooterSvg />
    </AnimatePage>
  );
};

export default HomepageWrapper;