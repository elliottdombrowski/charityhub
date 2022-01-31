import React, { useState } from 'react';

import LoginForm from '../../components/LoginForm';

import './styles.css';
import './query.css';

const LoginWrapper = () => {
  const [switchForm, setSwitchForm] = useState(false);

  return (
    <div className="login-form-wrapper">
      <LoginForm />
    </div>
  );
};

export default LoginWrapper;