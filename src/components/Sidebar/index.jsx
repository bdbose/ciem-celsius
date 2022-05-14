import React from 'react';
import './style.scss';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <a href='/'>Home</a>
      <a href='/sports'>Sports</a>
      <a href='/technical'>Techinal</a>
      <a href='/about-us'>About Us</a>
      <a href='/contact-us'>Contact US</a>
    </div>
  );
};

export default Sidebar;
