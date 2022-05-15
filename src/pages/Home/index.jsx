import React from 'react';
import './style.scss';

import { ReactComponent as Fire } from '../../assets/svg/fire.svg';
import { ReactComponent as ArrowRight } from '../../assets/svg/arrow-right.svg';
import CIEM from '../../assets/Image/ciem.png';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ImgSlider from '../../components/ImgSlider';

const card = [
  {
    text: 'Hackaton, Robotics, Gaming, Tech Quiz',
    img: 'https://i.ibb.co/KjGbMCt/Rectangle-29-3.png',
    backgroundColor: '#0D2F61',
    link: '/technical',
    title: 'Technical',
  },
  {
    text: 'Teasure Hunt',
    img: 'https://media.istockphoto.com/vectors/find-treasure-hunt-money-map-vector-id485668170?k=20&m=485668170&s=612x612&w=0&h=QNiYR5oScdxwfNGpOa6PoTPP_ImQvEw5qDkrgRJpl1k=',
    backgroundColor: '#B9401A',
    link: '/register/fun-activity',
    title: 'Fun Activity',
  },
  {
    text: 'Football, Cricket, Badminton, VolleyBall',
    img: 'https://i.ibb.co/KyGKmk6/Rectangle-29.png',
    backgroundColor: '#076952',
    link: '/sports',
    title: 'Sports',
  },
  {
    text: 'Pitch, Debate, Group Discussion',
    img: 'https://media.istockphoto.com/photos/business-people-in-seminar-at-auditorium-picture-id959533584?k=20&m=959533584&s=612x612&w=0&h=-HyUuwy5eEoIw_w8vjNRV23l6FP1nAkT40UYWqz1WgA=',
    backgroundColor: '#455966',
    link: '/technical#GROUP DISCUSSION',
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
          <button
            onClick={() => {
              document
                .getElementsByClassName('home-wrapper')[0]
                .scrollBy(0, 500);
            }}>
            Register to events
          </button>
          <button
            className='know-more-btn'
            onClick={() => (window.location.href = '/about-us')}>
            Know More
          </button>
        </div>
        <img
          src={'https://i.ibb.co/nQQgV2B/Group-1937.png'}
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
      <section className='ciem-wrapper'>
        <ImgSlider />
        <div className='ciem-details'>
          <div className='ciem-header'>
            <span>Organised by </span>
            <img src={CIEM} alt='logo' />
          </div>
          <p>
            CIEM, a leading institute in Eastern India is combating Covid-19
            situation by following certain best practices. Online classes
            through several online video-conference platforms have been arranged
            from starting of the lockdown. CIEM also continues the academic
            calendar without any disruption despite the challenging times. The
            Students of CIEM are in regular connection with the institute
            regarding their health, socio-economic conditions besides the
            regular studies during the Pandemic.
          </p>
          <a href='https://ciem.ac.in/'>Know More</a>
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
        <div className='event-data'>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
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
