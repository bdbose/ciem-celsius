import React, { useEffect, useRef } from 'react';
import './style.scss';

const arrImage = [
  'https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-6/278710117_1114342585787644_373223249236162471_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=aOVBwaM86q4AX8vbd-d&_nc_ht=scontent.fccu3-1.fna&oh=00_AT8ny4jjuwY956KSycFTFhO_0OvFFckJ7BdRQrmGd1TNrg&oe=626155CA',
  'https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-6/278671727_1114342605787642_7774701842101605071_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=plz8ye2xiUYAX8yAbt-&tn=_sgjPNNZA0k27E-U&_nc_ht=scontent.fccu3-1.fna&oh=00_AT-HAzc2fzrxPCFlx91bT6BD0V9gxrjpiil_OhN0Ubh9KQ&oe=62617438',
  'https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-6/275610098_1091311344757435_3424459834399349038_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=90ZwenOlUTsAX8LiAxq&_nc_ht=scontent.fccu3-1.fna&oh=00_AT-6Z_SEpw85q5EjhLC-nnqamWzOYW4fXEI0J7ovB4wpSA&oe=62608F52',
  'https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-6/270492475_1046892169199353_4735370121498668230_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=0sBMaOxP4BgAX8karqA&_nc_ht=scontent.fccu3-1.fna&oh=00_AT8Fny6uv7ahpMZTtmTXiZJGe8khHfikbyHiWRPkKEMAew&oe=626232C2',
  'https://images.pexels.com/photos/2079432/pexels-photo-2079432.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/3059052/pexels-photo-3059052.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
];

const ImgSlider = () => {
  const parentRef = useRef();
  const parentRef1 = useRef();
  const parentRef2 = useRef();
  let c = 0;
  const blockMaker = () => {
    const innerHeight = window.innerHeight;
    const block = document.createElement('div');
    block.className = 'block';
    block.style.top = '-400px';
    block.style.backgroundImage = `url(${arrImage[c]})`;
    c += 1;
    if (c >= 5) {
      c = 0;
    }
    parentRef.current.appendChild(block);
    setTimeout(() => {
      block.style.top = innerHeight + 'px';
    }, 200);
    setTimeout(() => {
      parentRef.current.removeChild(block);
    }, 4200);

    const block1 = document.createElement('div');
    block1.className = 'block';
    block1.style.top = innerHeight + 'px';
    block1.style.backgroundImage = `url(${arrImage[c]})`;

    parentRef1.current.appendChild(block1);
    setTimeout(() => {
      block1.style.top = '-400px';
    }, 200);
    setTimeout(() => {
      parentRef1.current.removeChild(block1);
    }, 4200);

    const block2 = document.createElement('div');
    block2.className = 'block';
    block2.style.top = '-400px';
    block2.style.backgroundImage = `url(${arrImage[c]})`;

    parentRef2.current.appendChild(block2);
    setTimeout(() => {
      block2.style.top = innerHeight + 'px';
    }, 200);
    setTimeout(() => {
      parentRef2.current.removeChild(block2);
    }, 4200);
  };
  useEffect(() => {
    setInterval(blockMaker, 1600);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className='img-slider-container'>
      <div className='image-slider-wrapper' ref={parentRef}></div>
      <div
        className='image-slider-wrapper'
        ref={parentRef1}
        style={{ left: '196px' }}></div>
      <div
        className='image-slider-wrapper'
        ref={parentRef2}
        style={{ left: 'calc(196px + 196px)' }}></div>
    </div>
  );
};

export default ImgSlider;
