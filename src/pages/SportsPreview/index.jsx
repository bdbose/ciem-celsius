import React from 'react';
import './style.scss';
import data from './event.json';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const SportsPreview = () => {
  const { id } = useParams();
  return (
    <div className='sports-preview-wrapper'>
      <Navbar />
      {data.map((ele) => {
        if (id === ele.slug) {
          return <img src={ele.img} alt='' />;
        }
        return null;
      })}
      <Footer />
    </div>
  );
};

export default SportsPreview;
