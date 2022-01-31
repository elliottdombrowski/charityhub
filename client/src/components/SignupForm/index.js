import React, { useState } from 'react';
import { Input } from '@chakra-ui/react';

import './styles.css';

const SignupForm = () => {
  const [signupData, setSignupData] = useState();
  const [showPwd, setShowPwd] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const signupSubmit = () => {
    console.log('signing up');
  };

  return (
    <form
      onSubmit={signupSubmit}
      className='login-form'
    >

    </form>
  );
};

export default SignupForm;