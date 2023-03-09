import React from 'react';
import { Link } from 'react-router-dom';
import ProductTable from './ProductTable';

const AdminProduct = () => {
    return (
        <>
            <div className="text-sm breadcrumbs">
                <ul>
                    <li><Link to="/">Home</Link></li> 
                    <li><Link to="/admin">Admin Product List</Link></li> 
                </ul>
                <div>
                    <div className="flex justify-end">
                        <Link to="/admin/customer/add" className="btn btn-primary btn-sm">Add Product</Link>
                    </div>
                    <h1 className="text-3xl font-bold text-center mt-5">Admin Product List</h1>
                    <ProductTable/>
                </div>
            </div>
        </>
    );
};

export default AdminProduct;