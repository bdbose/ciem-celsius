import React from 'react';
import Navbar from '../../components/Navbar';
import './style.scss';

const data = [
  'For Cultural enquiries - Amartya Dhar (7278807767)',
  'For Technical Enquiries - Biswajit Karmakar (8637336559)',
  'For Sports Enquiries - Subhajit Roy (8017815549)',
  'For Sponsorship, Marketing and Business Enquiries - Pratyush Sarkar (8617408687)',
];

const ContactUs = () => {
  return (
    <div className='contact-us-wrapper'>
      <Navbar />
      {data.map((ele) => (
        <h3>{ele}</h3>
      ))}
      <h5>
        For Further Details and Enquiry mail :
        <a href='mailto:celsius2022core@gmail.com'>
          {' '}
          celsius2022core@gmail.com
        </a>
      </h5>
    </div>
  );
};

export default ContactUs;
