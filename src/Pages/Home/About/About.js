import React from 'react';
import aboutImg from './../../../Assets/contact-about/about.svg';

const About = () => {
  return (
    <div className='lg:px-16 bg-base-200'>
      <div className='flex justify-center items-center pt-10'>
        <h2 className='text-3xl font-bold uppercase'>About Us</h2>
      </div>
      <div className='flex justify-center items-center'>
        <img src={aboutImg} alt="about" className='w-96 h-96' />
      </div>
    </div>
  );
};

export default About;