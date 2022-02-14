import React from "react";

import './styles.scss';
import './query.scss';

const EmissionHeader = () => {
  return (
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
  );
};

export default EmissionHeader;