import React from "react";

const ProductItem = ({item}) => {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            className="card-image h-96 w-full object-cover"
            src={item.image}
            alt={item.title}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.title}
            <div className="badge badge-primary">${item.price}</div>
          </h2>
          <p>{item.description}</p>
          <p className="btn btn-primary mt-3">Add to Cart</p>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
