import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../../components/Footer';
import Glitch from '../../components/Glitch';
import Navbar from '../../components/Navbar';
import './style.scss';

const dataTechnical = [
  {
    backgroundImg: 'https://i.ibb.co/hmZKc4q/Group-1962.png',
    title: 'TORNEO',
    url: 'torneo',
  },
  {
    backgroundImg: 'https://i.ibb.co/z4sCRFr/Group-1963.png',
    title: 'HOWAZAT',
    url: 'howazat',
  },
  {
    backgroundImg: 'https://i.ibb.co/2Wxny8M/Group-1964.png',
    title: 'SHUTTLE UP',
    url: 'shuttle-up',
  },
  {
    backgroundImg: 'https://i.ibb.co/7gkWgDW/Group-1965.png',
    title: 'SMASH',
    url: 'smash',
  },
  {
    backgroundImg: 'https://i.ibb.co/42MWZsg/Group-1966.png',
    title: 'CARROM',
    url: 'carrom',
  },
  {
    backgroundImg: 'https://i.ibb.co/ZSqDrjY/Group-1967.png',
    title: 'CHESS',
    url: 'chess',
  },
];

const Sports = () => {
  return (
    <div className='sports-wrapper'>
      <Navbar />
      <div className='sports-container'>
        <h1>Sports</h1>
        <div className='grid-card-container'>
          {dataTechnical.map((ele) => (
            <Card {...ele} />
          ))}
        </div>
        <img
          src='https://i.ibb.co/YB9yGg4/png-20220514-235355-0000-2.png'
          alt='sports-banner'
          className='sports-banner'
        />
      </div>
      <Footer />
    </div>
  );
};

export default Sports;

const Card = ({ title, url, backgroundImg }) => {
  return (
    <NavLink
      to={'/sports-event/' + url}
      style={{
        backgroundImage: 'url(' + backgroundImg + ')',
      }}
      className='card-wrapper'>
      <Glitch text={title} />
    </NavLink>
  );
};
