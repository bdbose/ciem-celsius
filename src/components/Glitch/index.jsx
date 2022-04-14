import React from 'react';
import './style.scss';

const Glitch = ({ text }) => {
  return (
    <div className='react-glitch-wrapper'>
      <div className='rect-glitch-text' data-text={text}>
        {text}
      </div>
    </div>
  );
};
