import React from 'react';
import './style.scss';

import { ReactComponent as Fire } from '../../assets/svg/fire.svg';
import { ReactComponent as ArrowRight } from '../../assets/svg/arrow-right.svg';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const card = [
  {
    text: 'Hackaton, Robotics, Gaming, Tech Quiz',
    img: 'https://scontent.fccu3-1.fna.fbcdn.net/v/t1.6435-9/57595599_2315482178724689_999563602744573952_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=s_-SflJOS3IAX_xcnHg&_nc_ht=scontent.fccu3-1.fna&oh=00_AT_gjHEpA4IDBLicm34Nm6d6zjltQ8cIl_jwNrxKcdKw6Q&oe=627FFACC',
    backgroundColor: '#0D2F61',
    link: '/technical',
    title: 'Technical',
  },
  {
    text: 'Singing, Dancing, Fashion Show',
    img: 'https://scontent.fccu3-1.fna.fbcdn.net/v/t1.6435-9/56910214_2311259385813635_4562127443065831424_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=EznkL_Lib0oAX8zOIBv&_nc_oc=AQlFii74Ju_0sxF_ftthBT05gV88WPgghHo2hktDT6t_ALavs1pltBf7AMQIMnR6Mvo&_nc_ht=scontent.fccu3-1.fna&oh=00_AT_Xkso1_v_t40ElwWoR9pp5aawQF37u1lOBoRmxs8I2Vw&oe=627EC1E6',
    backgroundColor: '#B9401A',
    link: '/cultural',
    title: 'Cultural',
  },
  {
    text: 'Football, Cricket, Badminton, VolleyBall',
    img: 'https://scontent.fccu3-1.fna.fbcdn.net/v/t1.6435-9/56947103_2305143476425226_4007328839356121088_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=b2ejc5fS9lYAX_ste-y&_nc_ht=scontent.fccu3-1.fna&oh=00_AT9K5gZ7vKn7siAJJsMsnMdzAa7c1v6qhOkeonVhVOmlKQ&oe=627FB206',
    backgroundColor: '#076952',
    link: '/sports',
    title: 'Sports',
  },
  {
    text: 'Pitch, Debate, Group Discussion',
    img: 'https://media.istockphoto.com/photos/business-people-in-seminar-at-auditorium-picture-id959533584?k=20&m=959533584&s=612x612&w=0&h=-HyUuwy5eEoIw_w8vjNRV23l6FP1nAkT40UYWqz1WgA=',
    backgroundColor: '#455966',
    link: '/technical/#business',
    title: 'Business',
  },
];

const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth > 1100 ? 3 : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
  };
  return (
    <div className='home-wrapper'>
      <Navbar />
      <section className='banner-wrapper'>
        <h1>
          JOIN THE <br /> CELSIUS FEST
          <Fire />
        </h1>
        <p>
          Here is your chance to be a part of CIEM's most awaited annual
          festival where you can participate , enjoy and win prizes . We are
          looking forward to see you apart of this grand event.
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
      <section className='event-wrapper'>
        <h1>CELSIUS EVENTS</h1>
        <div className='event-slider-cover'>
          <Slider {...settings}>
            {card.map((ele) => {
              return <EventCard {...ele} />;
            })}
          </Slider>
        </div>
      </section>
      <Footer />
    </div>
  );
};

const EventCard = ({ img, backgroundColor, text, title, link }) => {
  return (
    <div
      className='event-slider-wrapper'
      style={{
        background: backgroundColor,
      }}>
      <div className='event-details'>
        <h2>{title}</h2>
        <p>{text}</p>
        <div
          className='see-more'
          onClick={() => {
            window.location.href = link;
          }}>
          <a href={link}>See More</a>
          <ArrowRight />
        </div>
      </div>
      <img src={img} alt='' />
    </div>
  );
};

export default Home;
