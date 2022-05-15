import React, { useState } from 'react';
import './style.scss';
import { ReactComponent as Icon } from '../../assets/svg/icon.svg';
import { ReactComponent as Menu } from '../../assets/svg/menu.svg';
import Sidebar from '../Sidebar';

const Items = [
  { name: 'Home', route: '/' },
  { name: 'Sports', route: '/sports' },
  { name: 'Technical', route: '/technical' },
  { name: 'Cultural', route: '/cultural' },
  { name: 'About Us', route: '/about-us' },
  { name: 'Contact Us', route: '/contact-us' },
];
const Navbar = () => {
  const [active, setactive] = useState(false);
  return (
    <>
      <div className='navbar-wrapper'>
        <a href='/'>
          <Icon id='icon' />
        </a>
        <div className='navbar-elements'>
          {Items.map((ele) => {
            return (
              <a href={ele.route} key={ele.name}>
                <span
                  className={
                    window.location.pathname === ele.route && 'elements-active'
                  }>
                  {ele.name}
                </span>
              </a>
            );
          })}
        </div>
        <Menu id='menu-icon' onClick={() => setactive(!active)} />
      </div>
      <Sidebar open={active} setOpen={setactive} />
    </>
  );
};

export default Navbar;
