import React, { useEffect, useRef } from 'react';
import './style.scss';

const Sidebar = ({ open, setOpen }) => {
  const sideRef = useRef();
  useEffect(() => {
    if (sideRef.current) {
      if (open) {
        setTimeout(() => {
          sideRef.current.style.width = '60vw';
        }, 100);
      }
    }
  }, [open]);
  return (
    <div
      className={`sidebar-wrapper ${open && 'active-sidebar'}`}
      onClick={() => {
        sideRef.current.style.width = 0;
        setTimeout(() => setOpen(false), 300);
      }}>
      <div ref={sideRef} className={`sidebar`}>
        <a href='/'>Home</a>
        <a href='/sports'>Sports</a>
        <a href='/technical'>Techinal</a>
        <a href='/about-us'>About Us</a>
        <a href='/contact-us'>Contact US</a>
      </div>
    </div>
  );
};

export default Sidebar;
