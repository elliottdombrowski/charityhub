import React from 'react';

import './styles.css';
import './query.css';

const WavesSvg = () => {
  // CREDIT TO GOODKATZ @ CODEPEN.IO
  return (
    <div className='waves-container'>
      <svg className="waves"
        viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g className="parallax">
          <use xlinkHref="#gentle-wave" x="48" y="0" fill="#029db5" />
          <use xlinkHref="#gentle-wave" x="48" y="3" fill="#03fcfc" />
          <use xlinkHref="#gentle-wave" x="48" y="5" fill="#0aebff" />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="#00d9ff" />
        </g>
      </svg>
      <div className='waves-bottom-container'></div>
    </div>
  );
};

export default WavesSvg;