import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../../components/Footer';
import Glitch from '../../components/Glitch';
import Navbar from '../../components/Navbar';
import './style.scss';

const dataTechnical = [
  {
    backgroundImg: 'https://i.ibb.co/sWVFRb2/Frame-1.png',
    title: 'PC GAMING',
    url: 'pc-gaming',
  },
  {
    backgroundImg: 'https://i.ibb.co/T2Sxbfk/Group-1935-1.png',
    title: 'HACKATHON',
    url: 'hackathon',
  },
  {
    backgroundImg: 'https://i.ibb.co/QH8ZGtq/Group-1925.png',
    title: 'GRIP IT',
    url: 'grip-it',
  },
  {
    backgroundImg: 'https://i.ibb.co/tzcFP4Q/Group-1935-2.png',
    title: 'NITRO CHARGE',
    url: 'nitro-charge',
  },
  {
    backgroundImg: 'https://i.ibb.co/dLD7qjm/Group-1922.png',
    title: 'CIRCUIT LIBERTE',
    url: 'circuit-building',
  },
  {
    backgroundImg: 'https://i.ibb.co/8XwQsss/Group-1921.png',
    title: 'ROBO CUP',
    url: 'robo-soccer',
  },
  {
    backgroundImg: 'https://i.ibb.co/3RSHMb7/Group-1918-3.png',
    title: 'CODEDRIFT 2.0',
    url: 'codedrift',
  },
  {
    backgroundImg: 'https://i.ibb.co/QffW2jY/Group-1944.png',
    title: 'BRIDGE BUILDING',
    url: 'bridge-building',
  },
  {
    backgroundImg: 'https://i.ibb.co/1JxPb8Z/Group-1945.png',
    title: 'LINE OF CONTROL',
    url: 'line-of-control',
  },
  {
    backgroundImg: 'https://i.ibb.co/JjKf0Wq/Group-1946.png',
    title: 'MODEL DISPLAY',
    url: 'model-display',
  },
  {
    backgroundImg: 'https://i.ibb.co/M7DKKj0/Group-1947.png',
    title: 'TREASURE HUNT',
    url: 'fun-activity',
  },
  {
    backgroundImg: 'https://i.ibb.co/QJzB6R0/Group-1948.png',
    title: 'TECH QUIZ',
    url: 'tech-quiz',
  },
  {
    backgroundImg: 'https://i.ibb.co/y6GBTCR/Group-1949-3.png',
    title: 'MOBILE GAMING',
    url: 'mobile-gaming',
  },
];

const dataBusiness = [
  {
    backgroundImg: 'https://i.ibb.co/NLdBcTw/Group-1951-1.png',
    title: 'PITCH YOUR PRODUCT',
    url: 'pitch-your-product',
  },
  {
    backgroundImg: 'https://i.ibb.co/xgJRY2c/Group-1953.png',
    title: 'GROUP DISCUSSION',
    url: 'group-discussion',
  },
  {
    backgroundImg: 'https://i.ibb.co/hZjrsF1/Group-1954.png',
    title: 'Public Speaking',
    url: 'public-speaking',
  },
];

const Technical = () => {
  return (
    <div className='technical-wrapper'>
      <Navbar />
      <div className='technical-container'>
        <h1>Technical</h1>
        <div className='grid-card-container'>
          {dataTechnical.map((ele) => (
            <Card {...ele} />
          ))}
        </div>
        <h1>BUSINESS</h1>
        <div className='grid-card-container'>
          {dataBusiness.map((ele) => (
            <Card {...ele} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Technical;

const Card = ({ title, url, backgroundImg }) => {
  return (
    <NavLink
      to={'/register/' + url}
      style={{
        backgroundImage: 'url(' + backgroundImg + ')',
      }}
      className='card-wrapper'>
      <Glitch text={title} />
    </NavLink>
  );
};
