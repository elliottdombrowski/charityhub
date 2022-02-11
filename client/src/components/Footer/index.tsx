import React from 'react';
import FooterContactModal from '../FooterContactModal/index.tsx';

import './styles.scss';
import './query.scss';

const Footer = () => {
  return (
    <footer className='footer-wrapper'>
      <FooterContactModal />
    </footer>
  );
};

export default Footer;