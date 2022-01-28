import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import './query.css';

const LoginBtn = () => {
  return (
    <li className='login-btn-wrapper nav-item'>
      <Link 
        to='/login'
        className='login-btn'
      >
        sign up
      </Link>
    </li>
  );
};

export default LoginBtn;