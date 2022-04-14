import React from 'react';
import './style.scss';
import { ReactComponent as Icon } from '../../assets/svg/icon.svg';
import { ReactComponent as Menu } from '../../assets/svg/menu.svg';

const Items = [
  { name: 'Home', route: '/' },
  { name: 'Sports', route: '/sports' },
  { name: 'Technical', route: '/technical' },
  { name: 'Cultural', route: '/cultural' },
  { name: 'About Us', route: '/about-us' },
  { name: 'Contact Us', route: '/contact-us' },
];

const Navbar = () => {
  return (
    <div className='navbar-wrapper'>
      <Icon id='icon' />
      <div className='navbar-elements'>
        {Items.map((ele) => {
          return (
            <a href={ele.route} key={ele.name}>
              <span
                className={
                  window.location.href.includes(ele.route) && 'elements-active'
                }>
                {ele.name}
              </span>
            </a>
          );
        })}
      </div>
      <Menu id='menu-icon' />
    </div>
  );
};

export default Navbar;
