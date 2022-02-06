import React from "react";
import { Link } from 'react-router-dom';

import './styles.css';
import './query.css';

const DonationCard = () => {
  return (
    <div className="donation-card">
      <h1 className="card-header">
        DUMMY NAME
      </h1>

      <Link to='/' className='donate-btn'>
        test
      </Link>
    </div>
  );
};

export default DonationCard;