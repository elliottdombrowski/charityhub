import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

import './styles.css';
import './query.css';

const LoginBtn = () => {
  return (
    <li className='login-btn-wrapper'>
      {Auth.loggedIn() ? (
        <Link
          to='/'
          className='login-btn'
          onClick={Auth.logout}
        >
          log out
        </Link>
      ) : (
        <Link 
          to='/login'
          className='login-btn'
        >
          sign up
        </Link>
      )}
    </li>
  );
};

export default LoginBtn;