import React from 'react';
import AnimatePage from '../../AnimatePage';

import Homepage from '../../components/Homepage';
import TopCharitiesWrapper from '../TopCharitiesWrapper';
import EmissionHeader from '../../components/EmissionHeader';
import EmissionDonation from '../EmissionDonation';
import WavesSvg from '../../components/Svgs/WavesSvg';
import FooterSvg from '../../components/Svgs/FooterSvg';

const HomepageWrapper = () => {
  // HOMEPAGE STRUCTURE TOP-DOWN 
  // TOP CHARITIES ->
  // HOMEPAGE HERO CONTENT ->
  // EMISSION DONATIONS ->
  // FOOTER

  return (
    <AnimatePage>
      <TopCharitiesWrapper />
      <WavesSvg />
      <Homepage />
      <EmissionHeader />
      <EmissionDonation />
      <FooterSvg />
    </AnimatePage>
  );
};

export default HomepageWrapper;