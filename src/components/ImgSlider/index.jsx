import React, { useEffect, useRef } from 'react';
import './style.scss';

const arrImage = [
  'https://images.pexels.com/photos/3861976/pexels-photo-3861976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/4815143/pexels-photo-4815143.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg',
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
