import React from 'react';
import contactImg from './../../../Assets/contact-about/contact.svg';

const Contact = () => {
  return (
    <div className='lg:px-16 bg-base-200'>
      <div className='flex justify-center items-center pt-10'>
        <h2 className='text-3xl font-bold uppercase'>Contact Us</h2>
      </div>
      <div className='flex justify-center items-center'>
        <img src={contactImg} alt="contact" className='w-96 h-96' />
      </div>
    </div>
  );
};

export default Contact;