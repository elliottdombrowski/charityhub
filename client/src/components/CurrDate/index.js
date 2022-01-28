import React, { useState } from 'react';
const { DateTime } = require('luxon');

let getTime = DateTime.now().toFormat("D',' ttt");


const CurrDate = () => {
  const [forceUpdate, setForceUpdate] = useState(false);

  return (
    <li className='nav-item'>
      {getTime}
    </li>
  );
};

export default CurrDate;