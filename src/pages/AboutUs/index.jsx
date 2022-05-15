import React from 'react';
import Footer from '../../components/Footer';
import Glitch from '../../components/Glitch';
import Navbar from '../../components/Navbar';
import './style.scss';

const People = [
  {
    name: 'Subhajit Roy',
    img: 'https://i.ibb.co/LnDfx2R/wp1-Shrayan-Bhattacharya-2-4.png',
    des: 'Co-ordinator head',
    link: 'https://www.facebook.com/profile.php?id=100004925657113',
  },
  {
    name: 'Amartya Dhar',
    img: 'https://i.ibb.co/rMJrb3L/wp1-Shrayan-Bhattacharya-2-1.png',
    des: 'cultural head',
    link: 'https://www.facebook.com/amartyadhar99/',
  },
  {
    name: 'Biswajit Karmakar',
    img: 'https://i.ibb.co/Wt7Bs64/wp1-Shrayan-Bhattacharya-2-2.png',
    des: 'technical head',
    link: 'https://www.facebook.com/profile.php?id=100010180446263',
  },
  {
    name: 'Sougata Das',
    img: 'https://i.ibb.co/HBbVJ9L/wp1-Shrayan-Bhattacharya-2-5.png',
    des: 'sports head',
    link: 'https://www.facebook.com/profile.php?id=100005598975883',
  },
  {
    name: 'Bidipto Bose',
    img: 'https://i.ibb.co/LS0ZND0/wp1-Shrayan-Bhattacharya-2-15.png',
    des: 'Technical LEAD (BACKEND)',
    link: 'https://www.linkedin.com/in/bidipto-bose-981b541b6/',
  },
  {
    name: 'Sharmistha Halder',
    img: 'https://i.ibb.co/6ttHGC5/wp1-Shrayan-Bhattacharya-2-3.png',
    des: 'graphics lead',
    link: 'https://www.facebook.com/sharmistha.halder.3517/',
  },
  {
    name: 'ABHINANDAN MAITY',
    img: 'https://i.ibb.co/8gbFzH4/wp1-Shrayan-Bhattacharya-2.png',
    des: 'Core',
    link: '/',
  },
  {
    name: 'Hasibul Islam',
    img: 'https://i.ibb.co/BrSmM3V/wp1-Shrayan-Bhattacharya-2-12.png',
    des: 'core',
    link: 'https://www.facebook.com/star.hasibul',
  },
  {
    name: 'Pratyush Sarkar',
    img: 'https://i.ibb.co/jwRBnN9/wp1-Shrayan-Bhattacharya-2-13.png',
    des: 'core',
    link: 'https://www.facebook.com/pratyush.sarkar.1650',
  },
  {
    name: 'Rezoana Sultana',
    img: 'https://i.ibb.co/TPhBzjN/wp1-Shrayan-Bhattacharya-2-14.png',
    des: 'core',
    link: 'https://www.facebook.com/rezoana.sultana.543',
  },
  {
    name: 'Soumosree Mondal',
    img: 'https://i.ibb.co/WH5zwbB/wp1-Shrayan-Bhattacharya-2-11.png',
    des: 'core',
    link: 'https://instagram.com/soumosree_mondal?igshid=YmMyMTA2M2Y=',
  },
  {
    name: 'Aman Yadav',
    img: 'https://i.ibb.co/1L4vQXt/wp1-Shrayan-Bhattacharya-2-10.png',
    des: 'core',
    link: 'https://www.instagram.com/amannnyadav/',
  },
  {
    name: 'Ritika Singh',
    img: 'https://i.ibb.co/c1KRjzF/wp1-Shrayan-Bhattacharya-2-9.png',
    des: 'core',
    link: 'https://www.facebook.com/profile.php?id=100018912045384',
  },
  {
    name: 'Biplab Mani Das',
    img: 'https://i.ibb.co/MSs3k3d/wp1-Shrayan-Bhattacharya-2-8.png',
    des: 'core',
    link: 'https://bit.ly/3szFlH6',
  },
  {
    name: 'Ushmita dey',
    img: 'https://i.ibb.co/zhTQ0wb/wp1-Shrayan-Bhattacharya-2-7.png',
    des: 'core',
    link: 'https://www.facebook.com/ushmita.dey.52',
  },
  {
    name: 'SANIA DAS',
    img: 'https://i.ibb.co/4KFKCfS/wp1-Shrayan-Bhattacharya-2-6.png',
    des: 'core',
    link: 'https://www.instagram.com/p/CdiUalzr_tJ/?igshid=MDJmNzVkMjY=',
  },
];

const AboutUs = () => {
  return (
    <div className='about-us-wrapper'>
      <Navbar />
      <h1>About Us</h1>
      <div className='people-wrapper'>
        {People.map((ele) => (
          <Card key={ele.name} {...ele} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;

const Card = ({ img, des, name, link }) => {
  return (
    <div
      className='people-card'
      onClick={() => {
        window.open(link, '_blank');
      }}>
      <img src={img} alt='' />
      <h3>
        <Glitch text={name} />
      </h3>
      <h4>{des}</h4>
    </div>
  );
};
