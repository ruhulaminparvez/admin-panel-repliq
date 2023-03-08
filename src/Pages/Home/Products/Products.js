import React from 'react';
import ProductItem from './ProductItem';
import ProductData from './ProductData';

const Products = () => {
  return (
    <div  className='lg:px-16 bg-base-200'>
      <div className='flex justify-center items-center pt-10'>
        <h2 className='text-3xl font-bold uppercase'>Products</h2>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-16'>
        {ProductData.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;