import React from 'react';
import './style.scss';

import { ReactComponent as Icon } from '../../assets/svg/icon.svg';
import { ReactComponent as Fb } from '../../assets/svg/fb.svg';
import { ReactComponent as Insta } from '../../assets/svg/insta.svg';
import { ReactComponent as LinkedIn } from '../../assets/svg/linkedin.svg';

const Footer = () => {
  return (
    <>
      <footer>
        <div
          className='footer-container'
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon id='icon' />
        </div>
        <div className='footer-container'>
          <h2>Contact</h2>
          <span>Arpita Debnath - 90388 58037</span>
          <span>Suchinta Chanda - 62903 18248</span>
          <span>Chandrayee Ghosh - 91630 44600</span>
        </div>
        <div className='footer-container'>
          <h2>Follow</h2>
          <div>
            <a href='https://www.facebook.com/ciem.CelsiuS'>
              <Fb />
            </a>
            <a href='/'>
              <Insta />
            </a>
            <a href='https://www.linkedin.com/company/ciemcalcutta/'>
              <LinkedIn />
            </a>
          </div>
        </div>
      </footer>

      <div className='bosecode'>
        Powered by: <a href='https://bosecode.vercel.app/'>BoseCode</a>
      </div>
    </>
  );
};

export default Footer;
