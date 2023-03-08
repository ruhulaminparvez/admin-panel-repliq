import React from 'react';
import Slider from '../Slider/Slider';
import Products from './../Products/Products';

const Home = () => {
  return (
    <div className='bg-base-200'>
      <Slider/>
      <Products/>
    </div>
  );
};

export default Home;