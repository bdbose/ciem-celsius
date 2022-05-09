import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../../components/Footer';
import Glitch from '../../components/Glitch';
import Navbar from '../../components/Navbar';
import './style.scss';

const dataTechnical = [
  {
    backgroundImg: 'https://i.ibb.co/YTj77CW/Frame-20.png',
    title: 'PC GAMING',
    url: 'pc-gaming',
  },
  {
    backgroundImg: 'https://i.ibb.co/vJLB3vY/Group-1935.png',
    title: 'HACKATHON',
    url: 'hackathon',
  },
  {
    backgroundImg: 'https://i.ibb.co/vJLB3vY/Group-1935.png',
    title: 'GRIP IT',
    url: 'grip-it',
  },
  {
    backgroundImg: '',
    title: 'NITRO CHARGE',
    url: 'nitro-charge',
  },
  {
    backgroundImg: '',
    title: 'CIRCUIT BUILDING',
    url: 'circuit-building',
  },
  {
    backgroundImg: '',
    title: 'ROBO SOCCER',
    url: 'robo-soccer',
  },
  {
    backgroundImg: '',
    title: 'CODEDRIFT 2.0',
    url: 'codedrift',
  },
  {
    backgroundImg: '',
    title: 'BRIDGE BUILDING',
    url: 'bride-building',
  },
  {
    backgroundImg: '',
    title: 'LINE OF CONTROL',
    url: 'line-of-control',
  },
  {
    backgroundImg: '',
    title: 'MODEL DISPLAY',
    url: 'model-display',
  },
  {
    backgroundImg: '',
    title: 'FUN ACTIVITY',
    url: 'fun-activity',
  },
  {
    backgroundImg: '',
    title: 'TECH QUIZ',
    url: 'tech-quiz',
  },
  {
    backgroundImg: '',
    title: 'MOBILE GAMING',
    url: 'mobile-gaming',
  },
  {
    backgroundImg: '',
    title: 'SEMINAR',
    url: 'seminar',
  },
];

const dataBusiness = [
  {
    backgroundImg: '',
    title: 'PITCH YOUR PRODUCT',
    url: 'pitch-your-product',
  },
  {
    backgroundImg: '',
    title: 'DEBATE',
    url: 'debate',
  },
  {
    backgroundImg: '',
    title: 'GROUP DISCUSSION',
    url: 'group-discussion',
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
