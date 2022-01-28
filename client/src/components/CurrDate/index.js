import React, { useState } from 'react';

import './styles.css';

const { DateTime } = require('luxon');
let getTime = DateTime.now().toFormat("D',' ttt");


const CurrDate = () => {
  const [forceUpdate, setForceUpdate] = useState(false);

  return (
    <li className='nav-item toolbar-date'>
      {getTime}
    </li>
  );
};

export default CurrDate;