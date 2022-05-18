import React from 'react';
import Slider from 'react-slick';
import Footer from '../../components/Footer';
import Glitch from '../../components/Glitch';
import Navbar from '../../components/Navbar';
import './style.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const People = [
  {
    name: 'Subhajit Roy',
    img: 'https://i.ibb.co/LnDfx2R/wp1-Shrayan-Bhattacharya-2-4.png',
    des: 'Co-ordinator head',
    link: 'https://www.facebook.com/profile.php?id=100004925657113',
    quote: "He's only here for all the fun.",
  },
  {
    name: 'Amartya Dhar',
    img: 'https://i.ibb.co/rMJrb3L/wp1-Shrayan-Bhattacharya-2-1.png',
    des: 'cultural head',
    link: 'https://www.facebook.com/amartyadhar99/',
    quote: 'Keeps his panic mode on, always. And a man of culture',
  },
  {
    name: 'Biswajit Karmakar',
    img: 'https://i.ibb.co/Wt7Bs64/wp1-Shrayan-Bhattacharya-2-2.png',
    des: 'technical head',
    link: 'https://www.facebook.com/profile.php?id=100010180446263',
    quote: 'Very down to earth, with all the cash heaving his pockets. ',
  },
  {
    name: 'Sougata Das',
    img: 'https://i.ibb.co/HBbVJ9L/wp1-Shrayan-Bhattacharya-2-5.png',
    des: 'Celsius Convener',
    link: 'https://www.facebook.com/profile.php?id=100005598975883',
    quote: 'Smiling the pain away, oops.',
  },
];

const Foundation = [
  {
    name: 'Sharmistha Halder',
    img: 'https://i.ibb.co/6ttHGC5/wp1-Shrayan-Bhattacharya-2-3.png',
    des: 'graphics lead',
    link: 'https://www.facebook.com/sharmistha.halder.3517/',
    quote:
      "Stuffing herself in the pile of work alone. Or should I say she's the only one who's opressed here",
  },
  {
    name: 'Bidipto Bose',
    img: 'https://i.ibb.co/LS0ZND0/wp1-Shrayan-Bhattacharya-2-15.png',
    des: 'Technical LEAD (BACKEND)',
    link: 'https://www.linkedin.com/in/bidipto-bose-981b541b6/',
    quote: `Mastermind of the "amaaaazing" website`,
  },
  {
    name: 'Arpita debnath',
    img: 'https://i.ibb.co/JCqYTZL/Arpita-Di-Rahul-Das.jpg',
    des: 'PR LEAD',
    link: 'https://www.instagram.com/a_snorlax_/',
    quote: `Wanderlust. I mean Literally!`,
  },
  {
    name: 'Dibyendu Ghosh',
    img: 'https://i.ibb.co/yqP1ngZ/PSX-20211115-125525.jpg',
    des: 'GRAPHICS CO-LEAD',
    link: 'https://www.instagram.com/dibyendu_1000/?hl=en',
    quote: `Righteous, trying to "exactly" do what's beneficial.`,
  },
  {
    name: 'Ayush Labh',
    img: 'https://i.ibb.co/cJ7vzBv/Whats-App-Image-2022-05-16-at-3-25-21-PM-1.jpg',
    des: 'Robotics Team Lead',
    link: 'https://www.facebook.com/ayush.labh.33',
    quote: `Beep bop beep bop. Oh sorry one of Ayush's Bots were typing!`,
  },

  {
    img: 'https://i.ibb.co/fQ6Hvxx/Whats-App-Image-2022-05-17-at-2-20-02-PM.jpg',
    name: 'Bikash Paul',
    link: 'https://www.facebook.com/bikash.paul.9887117',
    des: 'Sports Head',
    quote: 'The person who can play 5 outdoor games at a time.',
  },
];

const Org = [
  {
    name: 'ABHINANDAN MAITY',
    img: 'https://i.ibb.co/8gbFzH4/wp1-Shrayan-Bhattacharya-2.png',

    link: 'https://w0.peakpx.com/wallpaper/813/168/HD-wallpaper-anti-2-social-club-anti-social-social-club-design-digital-art.jpg',
  },
  {
    name: 'Hasibul Islam',
    img: 'https://i.ibb.co/BrSmM3V/wp1-Shrayan-Bhattacharya-2-12.png',

    link: 'https://www.facebook.com/star.hasibul',
  },
  {
    name: 'Pratyush Sarkar',
    img: 'https://i.ibb.co/jwRBnN9/wp1-Shrayan-Bhattacharya-2-13.png',

    link: 'https://www.facebook.com/pratyush.sarkar.1650',
  },
  {
    name: 'Rezoana Sultana',
    img: 'https://i.ibb.co/TPhBzjN/wp1-Shrayan-Bhattacharya-2-14.png',

    link: 'https://www.facebook.com/rezoana.sultana.543',
  },
  {
    name: 'Soumosree Mondal',
    img: 'https://i.ibb.co/WH5zwbB/wp1-Shrayan-Bhattacharya-2-11.png',

    link: 'https://instagram.com/soumosree_mondal?igshid=YmMyMTA2M2Y=',
  },
  {
    name: 'Aman Yadav',
    img: 'https://i.ibb.co/1L4vQXt/wp1-Shrayan-Bhattacharya-2-10.png',

    link: 'https://www.instagram.com/amannnyadav/',
  },
  {
    name: 'Ritika Singh',
    img: 'https://i.ibb.co/c1KRjzF/wp1-Shrayan-Bhattacharya-2-9.png',

    link: 'https://www.facebook.com/profile.php?id=100018912045384',
  },
  {
    name: 'Biplab Mani Das',
    img: 'https://i.ibb.co/MSs3k3d/wp1-Shrayan-Bhattacharya-2-8.png',

    link: 'https://bit.ly/3szFlH6',
  },
  {
    name: 'Ushmita dey',
    img: 'https://i.ibb.co/zhTQ0wb/wp1-Shrayan-Bhattacharya-2-7.png',

    link: 'https://www.facebook.com/ushmita.dey.52',
  },
  {
    name: 'SANIA DAS',
    img: 'https://i.ibb.co/4KFKCfS/wp1-Shrayan-Bhattacharya-2-6.png',

    link: 'https://www.instagram.com/p/CdiUalzr_tJ/?igshid=MDJmNzVkMjY=',
  },
];

const Pr = [
  {
    name: 'Pranjali Bose',
    img: 'https://i.ibb.co/t4T1dxt/image.png',
    link: '/',
  },
  {
    name: 'Suchinta Chanda',
    img: 'https://i.ibb.co/2YGKwhy/wp1-Shrayan-Bhattacharya-1-1.png',
    link: '/',
  },
  {
    name: 'Chandrayee Ghosh',
    img: 'https://i.ibb.co/kxtDMhn/image.png',
    link: '/',
    quote: 'We were forced to write this whole page :(',
  },
  {
    name: 'Deep Kr Sadhukhan',
    img: 'https://i.ibb.co/vvRSs9M/image.png',
    link: '/',
    quote: 'We were forced to write this whole page :( (2)',
  },
  {
    name: 'Devdeep Datta',
    img: 'https://i.ibb.co/6NSXNvV/image.png',
    link: '/',
  },
  {
    name: 'Aritra Naharay',
    img: 'https://i.ibb.co/dmx6Vxp/wp1-Shrayan-Bhattacharya-1-3.png',
    link: '/',
  },
  {
    name: 'Abir Bhattacharya',
    img: 'https://i.ibb.co/SBT35BT/image.png',
    link: '/',
  },
  {
    name: 'Ananya Chatterjee',
    img: 'https://i.ibb.co/RBSzCMN/wp1-Shrayan-Bhattacharya-1-2.png',
    link: '/',
  },
  {
    name: 'Abhijit Das',
    img: 'https://i.ibb.co/tmZFGwH/wp1-Shrayan-Bhattacharya-1-4.png',
    link: '/',
  },
  {
    name: 'Shreya Hathi',
    img: 'https://i.ibb.co/ypfhq0W/image.png',
    link: '/',
  },
];

const Graphic = [
  {
    name: 'Ambar Kundu',
    img: 'https://i.ibb.co/m4Rrdh8/image.png',
    link: '/',
  },
  {
    name: 'Tridibesh Jha',
    img: 'https://i.ibb.co/zbtGjv5/Whats-App-Image-2022-05-15-at-9-23-25-PM.jpg',
    link: '/',
  },
  {
    name: 'Sudipto Das',
    img: 'https://i.ibb.co/ZcPwNDL/Whats-App-Image-2022-05-15-at-10-23-55-PM.jpg',
    link: '/',
  },
  {
    name: 'Debgandhar Ghosh',
    img: 'https://i.ibb.co/MZZxFL5/wp1-Shrayan-Bhattacharya-1-1.png',
    link: '/',
  },
  {
    name: 'Anik Das',
    img: 'https://i.ibb.co/tD4Pknf/wp1-Shrayan-Bhattacharya-1-2.png',
    link: '/',
  },
];

const Sports = [
  {
    img: 'https://i.ibb.co/grKhmTn/Whats-App-Image-2022-05-17-at-8-08-10-PM.jpg',
    name: 'Joydeep Paul',
    link: 'https://www.facebook.com/joydeep.paul.100',
  },
  {
    img: 'https://i.ibb.co/MGnTCQF/IMG-20220514-WA0023-Priyaranjan-Mahato.jpg',
    name: 'Priya Ranjan Mahato',
    link: 'https://www.facebook.com/priyaranjan.mahato.338',
  },
  {
    img: 'https://i.ibb.co/4mqg6BT/Ayushman-Rahul-Das.jpg',
    name: 'Ayushman Deb',
    link: 'https://www.facebook.com/ayushman.deb.980',
  },
  {
    img: 'https://i.ibb.co/d0vgxKd/wp1-Shrayan-Bhattacharya-1-2.png',
    name: 'Abhishek Moitra',
    link: 'https://www.facebook.com/abhishek.moitra.505',
  },
];

const AboutUs = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth > 1100 ? 4 : 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className='about-us-wrapper'>
      <Navbar />
      <h1 style={{ marginTop: 0 }}>FOUNDATION</h1>
      <div className='people-wrapper'>
        {People.map((ele) => (
          <Card key={ele.name} {...ele} />
        ))}
      </div>
      <h1>The ones cementing the foundation</h1>
      <div className='people-wrapper'>
        {Foundation.map((ele) => (
          <Card key={ele.name} {...ele} />
        ))}
      </div>
      <h1>Organising Comittee</h1>
      <h2>
        The ones who you will have to contact if you don't find a bottle of
        water ;)
      </h2>
      <Slider {...settings}>
        {Org.map((ele) => (
          <Card key={ele.name} {...ele} />
        ))}
      </Slider>
      <h1>PR Team</h1>
      <h2>
        The ones letting the world know South Kolkata is about to witness an
        amazing fest
      </h2>
      <Slider {...settings}>
        {Pr.map((ele) => (
          <Card key={ele.name} {...ele} />
        ))}
      </Slider>
      <h1>Graphics Team</h1>
      <h2>
        The ones making all the pretty pamphlets that you'll see hanging on your
        notice board
      </h2>
      <Slider {...settings}>
        {Graphic.map((ele) => (
          <Card key={ele.name} {...ele} />
        ))}
      </Slider>

      <h1>The Sports Coordinators</h1>
      <div className='people-wrapper'>
        {Sports.map((ele) => (
          <Card key={ele.name} {...ele} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;

const Card = ({ img, des, name, link, quote }) => {
  return (
    <div
      className='people-card'
      id={name}
      onClick={() => {
        window.open(link, '_blank');
      }}>
      <img src={img} alt='' loading='lazy' />
      <h3>
        <Glitch text={name} />
      </h3>
      <h4>{des}</h4>
      <p>{quote}</p>
    </div>
  );
};
