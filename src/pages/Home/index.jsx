import React from 'react';
import './style.scss';

import { ReactComponent as Fire } from '../../assets/svg/fire.svg';

const Home = () => {
  return (
    <div className='home-wrapper'>
      <section className='banner-wrapper'>
        <h1>
          JOIN THE <br /> CELSIUS FEST
          <Fire />
        </h1>
        <p>
          Lorem ipsum is a placeholder text commonly used to demonstrate the
          visual form of a document or a typeface without relying on meaningful
          content.
        </p>
        <div className='button-wrapper'>
          <button>Register to events</button>
          <button className='know-more-btn'>Know More</button>
        </div>
        <img
          src={'https://i.ibb.co/Px5Wmrh/Group-1-2-1-1.png'}
          alt='banner'
          id='banner-image'
        />
      </section>
    </div>
  );
};

export default Home;
