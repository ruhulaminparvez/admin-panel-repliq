import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import options from './SliderHelper';
import sliderImg from '../../../Assets/slider-img/banners.png';

const Slider = () => {
  return (
    <>
      <Splide options={options}>
        [1,2,3,4,5].map((item) => (
          <SplideSlide>
              <img src={sliderImg} alt='slider-img' className='w-full' />
          </SplideSlide>
        ))
      </Splide>
    </>
  );
};

export default Slider;