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
    <div className='register-event-wrapper'>
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
                  <h3>
                    Description: &nbsp;
                    {!ele.data && (
                      <span
                        style={{
                          cursor: 'pointer',
                          textDecoration: 'underline',
                        }}
                        onClick={() => {
                          window.open(ele.description, '_blank');
                        }}>
                        Click Here
                      </span>
                    )}
                  </h3>
                  {ele.data && <p>{ele.data}</p>}
                  <h3>
                    Date: &nbsp;<span>{ele.date}</span>
                  </h3>

                  <h3>
                    Pool Prize:&nbsp; &nbsp;
                    <span className='spl-txt'>₹ {ele.prize}</span>
                  </h3>

                  <h3>Fee:</h3>
                  <span>{ele.fee}</span>
                  <h3>
                    Contact: &nbsp;
                    <span>{ele.contact}</span>
                  </h3>
                  <a target='_blank' href={ele.form} rel='noreferrer'>
                    Register
                  </a>
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
