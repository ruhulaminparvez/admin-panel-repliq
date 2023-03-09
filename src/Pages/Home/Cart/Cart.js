import React from 'react';
import cartData from './CartData';

const Cart = () => {
    return (
        <div className='lg:px-16 bg-base-300'>
            <div className='flex justify-center items-center pt-10'>
                <h2 className='text-3xl font-bold uppercase'>Cart</h2>
            </div>
            <div className="overflow-x-auto w-full py-10">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                    <tr className='text-center'>
                        <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                        </th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row */}
                    {
                        cartData.length > 0 ? cartData.map((item, index) => {
                            return (
                                <tr className='text-center' key={index}>
                                    <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                    </th>
                                    <td>
                                    <div className="flex jus items-center space-x-3">
                                        <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt={item.productName} />
                                        </div>
                                        </div>
                                        <div>
                                        <div className="font-bold">{item.productName}</div>
                                        <div className="text-sm opacity-50">{item.location}</div>
                                        </div>
                                    </div>
                                    </td>
                                    <td>
                                    <div className="font-bold">${item.price}.00</div>
                                    </td>
                                    <td>
                                        <button className="btn btn-primary btn-xs mr-2">-</button>
                                        <span className="text-sm bg-slate-200 px-3 py-1 rounded-md">{item.quantity}</span>
                                        <button className="btn btn-primary btn-xs ml-2">+</button>
                                    </td>
                                    <th>
                                    <button className="btn btn-error btn-xs mr-2">remove</button>
                                    <button className="btn btn-primary btn-xs">details</button>
                                    </th>
                                </tr>
                            )
                        }) : <tr className='text-center'>
                                <td colSpan='5'>No Data Found</td>
                            </tr>
                        }
                    </tbody>    
                </table>
            </div>
        </div>
    );
};

export default Cart;