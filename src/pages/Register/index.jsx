import React from 'react';
import './style.scss';

import EventList from './event.json';
import Navbar from '../../components/Navbar';
import { useParams } from 'react-router-dom';
import Glitch from '../../components/Glitch';
import Footer from '../../components/Footer';

const RegisterEvent = () => {
  const { id } = useParams();
  return (
    <div className='event-wrapper'>
      <Navbar />
      <div className='event-container'>
        {EventList.map((ele) => {
          if (ele.slug === id)
            return (
              <div className='event-card-cover'>
                <div
                  className='event-img'
                  style={{
                    backgroundImage: `url(${ele.img})`,
                  }}>
                  <Glitch text={ele.title} />
                </div>
                <div className='event-details'>
                  <h3>Description:</h3>
                  <p>{ele.description}</p>
                  <div className='event-date'>
                    <div>
                      <h3>Date:</h3>
                      <span>{ele.date}</span>
                    </div>
                    <div>
                      <h3>Fee:</h3>
                      <span>{ele.fee}</span>
                    </div>
                  </div>
                  <a href={ele.form}>Register</a>
                </div>
              </div>
            );
          return null;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default RegisterEvent;
