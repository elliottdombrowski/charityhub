import React from 'react';

//IMPORT FRAMER ANIMATION COMPONENT
import AnimatePage from '../../AnimatePage';

//IMPORT COMPONENTS
import Homepage from '../../components/Homepage';
import TopCharitiesWrapper from '../TopCharitiesWrapper';
import EmissionHeader from '../../components/EmissionHeader';
import EmissionDonation from '../EmissionDonation';
import FooterSvg from '../../components/Svgs/FooterSvg';

const HomepageWrapper = () => {
  // HOMEPAGE STRUCTURE TOP-DOWN 
  // TOP CHARITIES ->
  // HOMEPAGE HERO CONTENT ->
  // EMISSION DONATIONS ->
  // FOOTER

  return (
    <AnimatePage>
      <div className='homepage-route-wrapper'>
        <TopCharitiesWrapper />
        <Homepage />
        <EmissionHeader />
        <EmissionDonation />
        <FooterSvg />
      </div>
    </AnimatePage>
  );
};

export default HomepageWrapper;