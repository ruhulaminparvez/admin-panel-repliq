import React from 'react';
import notFound from '../.././Assets/not-found/not-found.svg';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='lg:px-16 bg-base-200 py-16'>
      <div className='flex flex-col justify-center items-center'>
        <img src={notFound} alt="404-Error" className='w-1/2' />
        <h1 className="text-2xl text-center font-bold">404 Not Found</h1>
        <Link to='/' className='btn btn-primary mt-5'>Go Back to the Home</Link>
      </div>
    </div>
  );
};

export default NotFound;